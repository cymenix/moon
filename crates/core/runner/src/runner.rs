use crate::errors::RunnerError;
use crate::run_state::{load_output_logs, save_output_logs, RunTargetState};
use moon_action::{ActionNode, ActionStatus, Attempt};
use moon_action_context::{ActionContext, TargetState};
use moon_cache_item::CacheItem;
use moon_config::{TaskOptionAffectedFiles, TaskOutputStyle};
use moon_console::{Checkpoint, Console};
use moon_emitter::{Emitter, Event, EventFlow};
use moon_hash::ContentHasher;
use moon_logger::{debug, warn};
use moon_platform::PlatformManager;
use moon_platform_runtime::Runtime;
use moon_process::{args, output_to_error, output_to_string, Command, Output, Shell};
use moon_project::Project;
use moon_target::{TargetError, TargetScope};
use moon_task::Task;
use moon_task_hasher::TaskHasher;
use moon_tool::get_proto_env_vars;
use moon_utils::{is_ci, is_test_env, path, time};
use moon_workspace::Workspace;
use rustc_hash::FxHashMap;
use starbase_styles::color;
use starbase_utils::glob;
use std::collections::BTreeMap;
use std::sync::Arc;
use tokio::{
    task,
    time::{sleep, Duration},
};

const LOG_TARGET: &str = "moon:runner";

pub enum HydrateFrom {
    LocalCache,
    PreviousOutput,
    RemoteCache,
}

pub struct Runner<'a> {
    pub cache: CacheItem<RunTargetState>,

    pub node: Arc<ActionNode>,

    emitter: &'a Emitter,

    project: &'a Project,

    console: Arc<Console>,

    task: &'a Task,

    workspace: &'a Workspace,
}

impl<'a> Runner<'a> {
    pub fn new(
        emitter: &'a Emitter,
        workspace: &'a Workspace,
        project: &'a Project,
        task: &'a Task,
        console: Arc<Console>,
    ) -> miette::Result<Runner<'a>> {
        let mut cache = workspace
            .cache_engine
            .state
            .load_target_state::<RunTargetState>(&task.target)?;

        if cache.data.target.is_empty() {
            cache.data.target = task.target.to_string();
        }

        Ok(Runner {
            cache,
            node: Arc::new(ActionNode::None),
            emitter,
            project,
            console,
            task,
            workspace,
        })
    }

    /// Cache outputs to the `.moon/cache/outputs` folder and to the cloud,
    /// so that subsequent builds are faster, and any local outputs
    /// can be hydrated easily.
    pub async fn archive_outputs(&self) -> miette::Result<()> {
        Ok(())
    }

    pub async fn hydrate(&self, from: HydrateFrom) -> miette::Result<ActionStatus> {
        // Only hydrate when the hash is different from the previous build,
        // as we can assume the outputs from the previous build still exist?
        if matches!(from, HydrateFrom::LocalCache) || matches!(from, HydrateFrom::RemoteCache) {
            self.hydrate_outputs().await?;
        }

        let mut comments = vec![match from {
            HydrateFrom::LocalCache => "cached",
            HydrateFrom::RemoteCache => "cached from remote",
            HydrateFrom::PreviousOutput => "cached from previous run",
        }
        .to_owned()];

        if self.should_print_short_hash() {
            comments.push(self.get_short_hash().to_owned());
        }

        self.print_checkpoint(Checkpoint::RunPassed, comments)?;
        self.print_cache_item()?;

        Ok(if matches!(from, HydrateFrom::RemoteCache) {
            ActionStatus::CachedFromRemote
        } else {
            ActionStatus::Cached
        })
    }

    /// If we are cached (hash match), hydrate the project with the
    /// cached task outputs found in the hashed archive.
    pub async fn hydrate_outputs(&self) -> miette::Result<()> {
        let hash = &self.cache.data.hash;

        if hash.is_empty() {
            return Ok(());
        }

        // Hydrate outputs from the cache
        if let EventFlow::Return(archive_path) = self
            .emitter
            .emit(Event::TargetOutputHydrating {
                hash,
                project: self.project,
                target: &self.task.target,
                task: self.task,
            })
            .await?
        {
            self.emitter
                .emit(Event::TargetOutputHydrated {
                    archive_path: archive_path.into(),
                    hash,
                    project: self.project,
                    target: &self.task.target,
                    task: self.task,
                })
                .await?;
        }

        // Update the run state with the new hash
        self.cache.save()?;

        Ok(())
    }

    /// Create a hasher that is shared amongst all platforms.
    /// Primarily includes task information.
    pub async fn hash_common_target(
        &self,
        context: &ActionContext,
        hasher: &mut ContentHasher,
    ) -> miette::Result<()> {
        Ok(())
    }

    pub async fn create_command(
        &self,
        context: &ActionContext,
        runtime: &Runtime,
    ) -> miette::Result<Command> {
        let workspace = &self.workspace;
        let project = &self.project;
        let task = &self.task;
        let working_dir = if task.options.run_from_workspace_root {
            &workspace.root
        } else {
            &project.root
        };

        let command = PlatformManager::read()
            .get(task.platform)?
            .create_run_target_command(context, project, task, runtime, working_dir)
            .await?;

        Ok(command)
    }

    pub async fn create_env_vars(&self, _command: &mut Command) -> miette::Result<()> {
        Ok(())
    }

    pub fn get_short_hash(&self) -> &str {
        if self.cache.data.hash.is_empty() {
            "" // Empty when cache is disabled
        } else {
            &self.cache.data.hash[0..8]
        }
    }

    pub fn has_outputs(&self, _bypass_globs: bool) -> miette::Result<bool> {
        Ok(true)
    }

    pub fn is_archivable(&self) -> miette::Result<bool> {
        Ok(true)
    }

    /// Hash the target based on all current parameters and return early
    /// if this target hash has already been cached. Based on the state
    /// of the target and project, determine the hydration strategy as well.
    pub async fn is_cached(
        &mut self,
        context: &ActionContext,
        runtime: &Runtime,
    ) -> miette::Result<Option<HydrateFrom>> {
        let hash = String::new();

        self.cache.data.hash = hash.clone();

        // Check if that hash exists in the cache
        if let EventFlow::Return(value) = self
            .emitter
            .emit(Event::TargetOutputCacheCheck {
                hash: &hash,
                target: &self.task.target,
            })
            .await?
        {
            match value.as_ref() {
                "local-cache" => {
                    debug!(
                        target: LOG_TARGET,
                        "Cache hit for hash {}, hydrating from local cache",
                        color::hash(&hash),
                    );

                    return Ok(Some(HydrateFrom::LocalCache));
                }
                "remote-cache" => {
                    debug!(
                        target: LOG_TARGET,
                        "Cache hit for hash {}, hydrating from remote cache",
                        color::hash(&hash),
                    );

                    return Ok(Some(HydrateFrom::RemoteCache));
                }
                _ => {}
            }
        }

        debug!(
            target: LOG_TARGET,
            "Cache miss for hash {}, continuing run",
            color::hash(&hash),
        );

        Ok(None)
    }

    /// Run the command as a child process and capture its output. If the process fails
    /// and `retry_count` is greater than 0, attempt the process again in case it passes.
    pub async fn run_command(
        &mut self,
        context: &ActionContext,
        command: &mut Command,
    ) -> miette::Result<Vec<Attempt>> {
        let attempt_total = self.task.options.retry_count + 1;
        let mut attempt_index = 1;
        let mut attempts = vec![];
        let primary_longest_width = context.primary_targets.iter().map(|t| t.id.len()).max();
        let is_primary = context.primary_targets.contains(&self.task.target);
        let is_real_ci = is_ci() && !is_test_env();
        let is_persistent = self.node.is_persistent() || self.task.is_persistent();
        let output;
        let error;

        // When a task is configured as local (no caching), or the interactive flag is passed,
        // we don't "capture" stdout/stderr (which breaks stdin) and let it stream natively.
        let is_interactive = (!self.task.options.cache && context.primary_targets.len() == 1)
            || self.node.is_interactive()
            || self.task.is_interactive();

        // When the primary target, always stream the output for a better developer experience.
        // However, transitive targets can opt into streaming as well.
        let should_stream_output = if let Some(output_style) = &self.task.options.output_style {
            matches!(output_style, TaskOutputStyle::Stream)
        } else {
            is_primary || is_real_ci
        };

        // Transitive targets may run concurrently, so differentiate them with a prefix.
        let stream_prefix = if is_real_ci || !is_primary || context.primary_targets.len() > 1 {
            Some(&self.task.target.id)
        } else {
            None
        };

        // For long-running process, log a message every 30 seconds to indicate it's still running
        let console_clone = self.console.clone();
        let interval_target = self.task.target.clone();
        let interval_handle = task::spawn(async move {
            if is_persistent || is_interactive {
                return;
            }

            let mut secs = 0;

            loop {
                sleep(Duration::from_secs(30)).await;
                secs += 30;

                let _ = console_clone.out.print_checkpoint_with_comments(
                    Checkpoint::RunStarted,
                    &interval_target,
                    [format!("running for {}s", secs)],
                );
            }
        });

        command.with_console(self.console.clone());

        loop {
            let mut attempt = Attempt::new(attempt_index);

            self.print_target_label(Checkpoint::RunStarted, &attempt, attempt_total)?;
            self.print_target_command(context, command)?;

            let possible_output = if should_stream_output {
                if let Some(prefix) = stream_prefix {
                    command.set_prefix(prefix, primary_longest_width);
                }

                if is_interactive {
                    command.create_async().exec_stream_output().await
                } else {
                    command
                        .create_async()
                        .exec_stream_and_capture_output()
                        .await
                }
            } else {
                command.create_async().exec_capture_output().await
            };

            match possible_output {
                // zero and non-zero exit codes
                Ok(out) => {
                    attempt.finish(if out.status.success() {
                        ActionStatus::Passed
                    } else {
                        ActionStatus::Failed
                    });

                    if should_stream_output {
                        self.handle_streamed_output(&mut attempt, attempt_total, &out)?;
                    } else {
                        self.handle_captured_output(&mut attempt, attempt_total, &out)?;
                    }

                    attempts.push(attempt);

                    if out.status.success() {
                        error = None;
                        output = out;

                        break;
                    } else if attempt_index >= attempt_total {
                        error = Some(RunnerError::RunFailed {
                            target: self.task.target.id.clone(),
                            query: format!(
                                "moon query hash {}",
                                if is_test_env() {
                                    "hash1234"
                                } else {
                                    self.get_short_hash()
                                }
                            ),
                            error: output_to_error(self.task.command.clone(), &out, false),
                        });
                        output = out;

                        break;
                    } else {
                        attempt_index += 1;

                        warn!(
                            target: LOG_TARGET,
                            "Target {} failed, running again with attempt {} (exit code {})",
                            color::label(&self.task.target),
                            attempt_index,
                            out.status.code().unwrap_or(-1)
                        );
                    }
                }
                // process itself failed
                Err(error) => {
                    attempt.finish(ActionStatus::Failed);
                    attempts.push(attempt);

                    interval_handle.abort();

                    return Err(error);
                }
            }
        }

        interval_handle.abort();

        // Write the cache with the result and output
        self.cache.data.exit_code = output.status.code().unwrap_or(0);

        save_output_logs(
            self.cache.get_dir(),
            output_to_string(&output.stdout),
            output_to_string(&output.stderr),
        )?;

        if let Some(error) = error {
            return Err(error.into());
        }

        Ok(attempts)
    }

    pub async fn create_and_run_command(
        &mut self,
        context: &ActionContext,
        runtime: &Runtime,
    ) -> miette::Result<Vec<Attempt>> {
        let result = if self.task.is_no_op() {
            debug!(
                target: LOG_TARGET,
                "Target {} is a no operation, skipping",
                color::label(&self.task.target),
            );

            self.print_target_label(Checkpoint::RunPassed, &Attempt::new(0), 0)?;

            Ok(vec![])
        } else {
            let mut command = self.create_command(context, runtime).await?;

            self.run_command(context, &mut command).await
        };

        self.cache.data.last_run_time = time::now_millis();
        self.cache.save()?;

        result
    }

    pub fn print_cache_item(&self) -> miette::Result<()> {
        let item = &self.cache;
        let (stdout, stderr) = load_output_logs(item.get_dir())?;

        self.print_output_with_style(&stdout, &stderr, item.data.exit_code != 0)?;

        Ok(())
    }

    pub fn print_checkpoint<C: AsRef<[String]>>(
        &self,
        checkpoint: Checkpoint,
        comments: C,
    ) -> miette::Result<()> {
        self.console
            .out
            .print_checkpoint_with_comments(checkpoint, &self.task.target, comments)?;

        Ok(())
    }

    pub fn print_output_with_style(
        &self,
        stdout: &str,
        stderr: &str,
        failed: bool,
    ) -> miette::Result<()> {
        let print_stdout = || -> miette::Result<()> { self.console.out.write_line(stdout) };
        let print_stderr = || -> miette::Result<()> { self.console.err.write_line(stderr) };

        match self.task.options.output_style {
            // Only show output on failure
            Some(TaskOutputStyle::BufferOnlyFailure) => {
                if failed {
                    print_stdout()?;
                    print_stderr()?;
                }
            }
            // Only show the hash
            Some(TaskOutputStyle::Hash) => {
                let hash = &self.cache.data.hash;

                if !hash.is_empty() {
                    // Print to stderr so it can be captured
                    self.console.err.write_line(hash)?;
                }
            }
            // Show nothing
            Some(TaskOutputStyle::None) => {}
            // Show output on both success and failure
            _ => {
                print_stdout()?;
                print_stderr()?;
            }
        };

        Ok(())
    }

    pub fn print_target_command(
        &self,
        context: &ActionContext,
        command: &Command,
    ) -> miette::Result<()> {
        if !self.workspace.config.runner.log_running_command {
            return Ok(());
        }

        let task = &self.task;
        let mut args = vec![&task.command];
        args.extend(&task.args);

        if context.should_inherit_args(&task.target) {
            args.extend(&context.passthrough_args);
        }

        let command_line = args::join_args(args);

        let message = color::muted_light(command.inspect().format_command(
            &command_line,
            &self.workspace.root,
            Some(if task.options.run_from_workspace_root {
                &self.workspace.root
            } else {
                &self.project.root
            }),
        ));

        self.console.out.write_line(message)?;

        Ok(())
    }

    pub fn print_target_label(
        &self,
        checkpoint: Checkpoint,
        attempt: &Attempt,
        attempt_total: u8,
    ) -> miette::Result<()> {
        let mut comments = vec![];

        if self.task.is_no_op() {
            comments.push("no op".to_owned());
        } else if attempt.index > 1 {
            comments.push(format!("{}/{}", attempt.index, attempt_total));
        }

        if let Some(duration) = attempt.duration {
            comments.push(time::elapsed(duration));
        }

        if self.should_print_short_hash() && attempt.finished_at.is_some() {
            comments.push(self.get_short_hash().to_owned());
        }

        self.print_checkpoint(checkpoint, comments)?;

        Ok(())
    }

    // Print label *after* output has been captured, so parallel tasks
    // aren't intertwined and the labels align with the output.
    fn handle_captured_output(
        &self,
        attempt: &mut Attempt,
        attempt_total: u8,
        output: &Output,
    ) -> miette::Result<()> {
        self.print_target_label(
            if output.status.success() {
                Checkpoint::RunPassed
            } else {
                Checkpoint::RunFailed
            },
            attempt,
            attempt_total,
        )?;

        let stdout = output_to_string(&output.stdout);
        let stderr = output_to_string(&output.stderr);

        self.print_output_with_style(&stdout, &stderr, !output.status.success())?;

        attempt.exit_code = output.status.code();
        attempt.stdout = Some(stdout);
        attempt.stderr = Some(stderr);

        Ok(())
    }

    // Only print the label when the process has failed,
    // as the actual output has already been streamed to the console.
    fn handle_streamed_output(
        &self,
        attempt: &mut Attempt,
        attempt_total: u8,
        output: &Output,
    ) -> miette::Result<()> {
        self.print_target_label(
            if output.status.success() {
                Checkpoint::RunPassed
            } else {
                Checkpoint::RunFailed
            },
            attempt,
            attempt_total,
        )?;

        attempt.exit_code = output.status.code();
        attempt.stdout = Some(output_to_string(&output.stdout));
        attempt.stderr = Some(output_to_string(&output.stderr));

        Ok(())
    }

    fn should_print_short_hash(&self) -> bool {
        // Do not include the hash while testing, as the hash
        // constantly changes and breaks our local snapshots
        !is_test_env() && self.task.options.cache && !self.cache.data.hash.is_empty()
    }
}
