use crate::command_builder::CommandBuilder;
use crate::command_executor::CommandExecutor;
use crate::output_archiver::OutputArchiver;
use crate::output_hydrater::{HydrateFrom, OutputHydrater};
use crate::run_state::RunTaskState;
use crate::task_runner_error::TaskRunnerError;
use moon_action::{ActionNode, ActionStatus, Attempt, AttemptType};
use moon_action_context::{ActionContext, TargetState};
use moon_cache::CacheItem;
use moon_console::{Console, TaskReportState};
use moon_platform::PlatformManager;
use moon_project::Project;
use moon_task::Task;
use moon_task_hasher::TaskHasher;
use moon_time::now_millis;
use moon_workspace::Workspace;
use starbase_utils::fs;
use std::collections::BTreeMap;
use tracing::{debug, trace};

pub struct TaskRunResult {
    pub attempts: Vec<Attempt>,
    pub hash: Option<String>,
}

pub struct TaskRunner<'task> {
    node: &'task ActionNode,
    project: &'task Project,
    task: &'task Task,
    workspace: &'task Workspace,

    archiver: OutputArchiver<'task>,
    cache: CacheItem<RunTaskState>,
    hydrater: OutputHydrater<'task>,
}

impl<'task> TaskRunner<'task> {
    pub fn new(
        workspace: &'task Workspace,
        project: &'task Project,
        task: &'task Task,
        node: &'task ActionNode,
    ) -> miette::Result<Self> {
        let mut cache = workspace
            .cache_engine
            .state
            .load_target_state::<RunTaskState>(&task.target)?;

        if cache.data.target.is_empty() {
            cache.data.target = task.target.to_string();
        }

        Ok(Self {
            cache,
            archiver: OutputArchiver {
                project_config: &project.config,
                task,
                workspace,
            },
            hydrater: OutputHydrater { task, workspace },
            node,
            project,
            task,
            workspace,
        })
    }

    pub async fn run(
        &mut self,
        context: &ActionContext,
        console: &Console,
    ) -> miette::Result<TaskRunResult> {
        let target = &self.task.target;
        let mut result = TaskRunResult {
            attempts: vec![],
            hash: None,
        };

        // If a dependency has failed or been skipped, we should skip this task
        if !self.is_dependencies_complete(context)? {
            result.attempts = self.skip(context, console)?;

            return Ok(result);
        }

        // Generate a unique hash so we can check the cache
        let hash = self.generate_hash(context).await?;

        // Exit early if this build has already been cached/hashed
        if let Some(attempts) = self.hydrate(&hash, context, console).await? {
            result.attempts = attempts;
            result.hash = Some(hash);

            return Ok(result);
        } else {
            debug!(
                task = self.task.target.as_str(),
                hash = &hash,
                "Caching is disabled for task, will attempt to run a command"
            );

            // We must give this task a fake hash for it to be considered complete
            // for other tasks! This case triggers for noop or cache disabled tasks.
            context.set_target_state(target, TargetState::Passthrough);
        }

        // Otherwise build and execute the command as a child process
        let attempts = self.execute(&hash, context, console).await?;

        // If we created outputs, archive them into the cache
        self.archive(&hash, &attempts).await?;

        result.attempts = attempts;
        result.hash = Some(hash);

        Ok(result)
    }

    pub async fn run_and_persist(
        &mut self,
        context: &ActionContext,
        console: &Console,
    ) -> miette::Result<TaskRunResult> {
        let result = self.run(context, console).await;

        // action.hash = Some(self.cache.data.hash.clone());

        if let Ok(res) = &result {
            if let Some(last_attempt) = res.attempts.last() {
                let state_dir = self
                    .workspace
                    .cache_engine
                    .state
                    .get_target_dir(&self.task.target);

                self.cache.data.exit_code = last_attempt.exit_code.unwrap_or(-1);

                if let Some(log) = &last_attempt.stderr {
                    let _ = fs::write_file(state_dir.join("stderr.log"), log.as_bytes());
                }

                if let Some(log) = &last_attempt.stdout {
                    let _ = fs::write_file(state_dir.join("stdout.log"), log.as_bytes());
                }
            }
        }

        self.cache.data.last_run_time = now_millis();
        self.cache.save()?;

        result
    }

    async fn is_cached(&self, hash: &str) -> miette::Result<Option<HydrateFrom>> {
        let cache_engine = &self.workspace.cache_engine;

        debug!(
            task = self.task.target.as_str(),
            hash, "Checking if task has been cached using hash"
        );

        // If hash is the same as the previous build, we can simply abort!
        // However, ensure the outputs also exist, otherwise we should hydrate
        if self.cache.data.exit_code == 0
            && self.cache.data.hash == hash
            && self.archiver.has_outputs_been_created(true)?
        {
            debug!(
                task = self.task.target.as_str(),
                hash, "Hash matches previous run, reusing existing outputs"
            );

            return Ok(Some(HydrateFrom::PreviousOutput));
        }

        if !cache_engine.get_mode().is_readable() {
            debug!(
                task = self.task.target.as_str(),
                hash, "Cache is not readable, continuing run"
            );

            return Ok(None);
        }

        // Check to see if a build with the provided hash has been cached locally.
        // We only check for the archive, as the manifest is purely for local debugging!
        let archive_file = cache_engine.hash.get_archive_path(hash);

        if archive_file.exists() {
            debug!(
                task = self.task.target.as_str(),
                hash,
                archive_file = ?archive_file,
                "Cache hit in local cache, will reuse existing archive"
            );

            return Ok(Some(HydrateFrom::LocalCache));
        }

        // Check if archive exists in moonbase (remote storage) by querying the artifacts
        // endpoint. This only checks that the database record exists!
        if let Some(moonbase) = &self.workspace.session {
            if let Some((artifact, _)) = moonbase.read_artifact(hash).await? {
                debug!(
                    task = self.task.target.as_str(),
                    hash,
                    artifact_id = artifact.id,
                    "Cache hit in remote cache, will attempt to download the archive"
                );

                return Ok(Some(HydrateFrom::RemoteCache));
            }
        }

        debug!(
            task = self.task.target.as_str(),
            hash, "Cache miss, continuing run"
        );

        Ok(None)
    }

    fn is_cache_enabled(&self) -> bool {
        // If the VCS root does not exist (like in a Docker container),
        // we should avoid failing and simply disable caching
        self.task.options.cache
            && self.workspace.vcs.is_enabled()
            && self.workspace.cache_engine.get_mode().is_readable()
    }

    fn is_dependencies_complete(&self, context: &ActionContext) -> miette::Result<bool> {
        if self.task.deps.is_empty() {
            return Ok(true);
        }

        for dep in &self.task.deps {
            if let Some(dep_state) = context.target_states.get(&dep.target) {
                if dep_state.get().is_complete() {
                    continue;
                }

                debug!(
                    task = self.task.target.as_str(),
                    dependency = dep.target.as_str(),
                    "Task dependency has failed or has been skipped, skipping this task",
                );

                return Ok(false);
            } else {
                return Err(TaskRunnerError::MissingDependencyHash {
                    dep_target: dep.target.id.to_owned(),
                    target: self.task.target.id.to_owned(),
                }
                .into());
            }
        }

        Ok(true)
    }

    async fn generate_hash(&mut self, context: &ActionContext) -> miette::Result<String> {
        debug!(
            task = self.task.target.as_str(),
            "Generating a unique hash for this task"
        );

        let mut hasher = self
            .workspace
            .cache_engine
            .hash
            .create_hasher(self.node.label());

        // Hash common fields
        trace!(
            task = self.task.target.as_str(),
            "Including common task related fields in the hash"
        );

        let mut task_hasher = TaskHasher::new(
            self.project,
            self.task,
            &self.workspace.vcs,
            &self.workspace.root,
            &self.workspace.config.hasher,
        );

        if context.should_inherit_args(&self.task.target) {
            task_hasher.hash_args(&context.passthrough_args);
        }

        task_hasher.hash_deps({
            let mut deps = BTreeMap::default();

            for dep in &self.task.deps {
                if let Some(entry) = context.target_states.get(&dep.target) {
                    match entry.get() {
                        TargetState::Completed(hash) => {
                            deps.insert(&dep.target, hash.clone());
                        }
                        TargetState::Passthrough => {
                            deps.insert(&dep.target, "passthrough".into());
                        }
                        _ => {}
                    };
                }
            }

            deps
        });

        task_hasher.hash_inputs().await?;

        hasher.hash_content(task_hasher.hash())?;

        // Hash platform fields
        trace!(
            task = self.task.target.as_str(),
            platform = ?self.task.platform,
            "Including platform specific fields in the hash"
        );

        PlatformManager::read()
            .get(self.task.platform)?
            .hash_run_target(
                self.project,
                self.node.get_runtime(),
                &mut hasher,
                &self.workspace.config.hasher,
            )
            .await?;

        let hash = self.workspace.cache_engine.hash.save_manifest(hasher)?;

        self.cache.data.hash = hash.clone();

        debug!(
            task = self.task.target.as_str(),
            hash = &hash,
            "Generated a unique hash"
        );

        Ok(hash)
    }

    async fn execute(
        &mut self,
        hash: &str,
        context: &ActionContext,
        console: &Console,
    ) -> miette::Result<Vec<Attempt>> {
        if self.task.is_no_op() {
            return Ok(vec![Attempt::new(AttemptType::NoOperation)]);
        }

        // Build the command from the current task
        let command = CommandBuilder::new(self.workspace, self.project, self.task, self.node)
            .build(context)
            .await?;

        // Execute the command and gather all attempts made
        let executor =
            CommandExecutor::new(self.workspace, self.project, self.task, self.node, command);

        let result = if let Some(mutex_name) = &self.task.options.mutex {
            let mutex = context.get_or_create_mutex(mutex_name);
            let _guard = mutex.lock().await;

            // This execution is required within this block so that the
            // guard above isn't immediately dropped!
            executor.execute(hash, context, console).await
        } else {
            executor.execute(hash, context, console).await
        };

        // Update the actione state based on the result
        context.set_target_state(
            &self.task.target,
            if result.is_ok() {
                TargetState::Completed(hash.to_owned())
            } else {
                TargetState::Failed
            },
        );

        result
    }

    fn skip(&self, context: &ActionContext, console: &Console) -> miette::Result<Vec<Attempt>> {
        let mut attempt = Attempt::new(AttemptType::TaskExecution);
        attempt.finish(ActionStatus::Skipped);

        let attempts = vec![attempt];
        let state = TaskReportState::default();

        console
            .reporter
            .on_task_completed(&self.task.target, &attempts, &state, None)?;

        context.set_target_state(&self.task.target, TargetState::Skipped);

        Ok(attempts)
    }

    async fn hydrate(
        &self,
        hash: &str,
        context: &ActionContext,
        console: &Console,
    ) -> miette::Result<Option<Vec<Attempt>>> {
        if !self.is_cache_enabled() {
            return Ok(None);
        }

        let Some(from) = self.is_cached(hash).await? else {
            return Ok(None);
        };

        // Create an attempt to track how long hydration takes
        let mut attempt = Attempt::new(AttemptType::CacheHydration);

        self.hydrater.hydrate(hash, from).await?;
        self.load_logs(&mut attempt)?;

        attempt.finish(match from {
            HydrateFrom::RemoteCache => ActionStatus::CachedFromRemote,
            _ => ActionStatus::Cached,
        });

        // Update the state and print the output
        let attempts = vec![attempt];

        let state = TaskReportState {
            hash: Some(hash.to_owned()),
            ..Default::default()
        };

        console
            .reporter
            .on_task_completed(&self.task.target, &attempts, &state, None)?;

        context.set_target_state(&self.task.target, TargetState::Completed(hash.to_owned()));

        Ok(Some(attempts))
    }

    async fn archive(&mut self, hash: &str, attempts: &[Attempt]) -> miette::Result<()> {
        if self.is_cache_enabled() {
            self.archiver.archive(hash).await?;
        }

        if let Some(last_attempt) = attempts.last() {
            self.cache.data.exit_code = last_attempt.exit_code.unwrap_or(-1);
            self.save_logs(last_attempt)?;
        }

        Ok(())
    }

    fn load_logs(&self, attempt: &mut Attempt) -> miette::Result<()> {
        let state_dir = self
            .workspace
            .cache_engine
            .state
            .get_target_dir(&self.task.target);
        let err_path = state_dir.join("stderr.log");
        let out_path = state_dir.join("stdout.log");

        if err_path.exists() {
            attempt.set_stderr(fs::read_file(err_path)?);
        }

        if out_path.exists() {
            attempt.set_stdout(fs::read_file(out_path)?);
        }

        Ok(())
    }

    fn save_logs(&self, attempt: &Attempt) -> miette::Result<()> {
        let state_dir = self
            .workspace
            .cache_engine
            .state
            .get_target_dir(&self.task.target);

        if let Some(log) = &attempt.stderr {
            fs::write_file(state_dir.join("stderr.log"), log.as_bytes())?;
        }

        if let Some(log) = &attempt.stdout {
            fs::write_file(state_dir.join("stdout.log"), log.as_bytes())?;
        }

        Ok(())
    }
}