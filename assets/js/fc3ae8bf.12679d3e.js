"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15411],{37516:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=s(24246),i=s(71670),o=s(32189);const r={title:".moon/tasks.yml, .moon/tasks/**/*.yml",sidebar_label:".moon/tasks..."},a=void 0,c={id:"config/tasks",title:".moon/tasks.yml, .moon/tasks/**/*.yml",description:"The .moon/tasks.yml file configures file groups and tasks that are inherited by every project in",source:"@site/docs/config/tasks.mdx",sourceDirName:"config",slug:"/config/tasks",permalink:"/docs/config/tasks",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/config/tasks.mdx",tags:[],version:"current",frontMatter:{title:".moon/tasks.yml, .moon/tasks/**/*.yml",sidebar_label:".moon/tasks..."},sidebar:"docs",previous:{title:".moon/toolchain.yml",permalink:"/docs/config/toolchain"},next:{title:"moon.yml",permalink:"/docs/config/project"}},l={},d=[{value:"<code>extends</code>",id:"extends",level:2},{value:"<code>fileGroups</code>",id:"filegroups",level:2},{value:"<code>implicitDeps</code>",id:"implicitdeps",level:2},{value:"<code>implicitInputs</code>",id:"implicitinputs",level:2},{value:"<code>tasks</code>",id:"tasks",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".moon/tasks.yml"})," file configures file groups and tasks that are inherited by ",(0,t.jsx)(n.em,{children:"every"})," project in\nthe workspace, while ",(0,t.jsx)(n.code,{children:".moon/tasks/**/*.yml"})," configures for projects based on their language or type.\n",(0,t.jsx)(n.a,{href:"../concepts/task-inheritance",children:"Learn more about task inheritance!"})]}),"\n",(0,t.jsxs)(n.p,{children:["Projects can override or merge with these settings within their respective ",(0,t.jsx)(n.a,{href:"./project",children:(0,t.jsx)(n.code,{children:"moon.yml"})}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/tasks.yml"',children:"$schema: 'https://moonrepo.dev/schemas/tasks.json'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"extends",children:(0,t.jsx)(n.code,{children:"extends"})}),"\n",(0,t.jsx)(o.Z,{to:"/api/types/interface/InheritedTasksConfig#extends"}),"\n",(0,t.jsxs)(n.p,{children:["Defines an external ",(0,t.jsx)(n.code,{children:".moon/tasks.yml"})," to extend and inherit settings from. Perfect for reusability\nand sharing configuration across repositories and projects. When defined, this setting must be an\nHTTPS URL ",(0,t.jsx)(n.em,{children:"or"})," relative file system path that points to a valid YAML document!"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/tasks.yml" {1}',children:"extends: 'https://raw.githubusercontent.com/organization/repository/master/.moon/tasks.yml'\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["For map-based settings, ",(0,t.jsx)(n.code,{children:"fileGroups"})," and ",(0,t.jsx)(n.code,{children:"tasks"}),", entries from both the extended configuration and\nlocal configuration are merged into a new map, with the values of the local taking precedence. Map\nvalues ",(0,t.jsx)(n.em,{children:"are not"})," deep merged!"]})}),"\n",(0,t.jsx)(n.h2,{id:"filegroups",children:(0,t.jsx)(n.code,{children:"fileGroups"})}),"\n",(0,t.jsx)(o.Z,{to:"/api/types/interface/InheritedTasksConfig#fileGroups"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["For more information on file group configuration, refer to the\n",(0,t.jsx)(n.a,{href:"./project#filegroups",children:(0,t.jsx)(n.code,{children:"fileGroups"})})," section in the ",(0,t.jsx)(n.a,{href:"./project",children:(0,t.jsx)(n.code,{children:"moon.yml"})})," doc."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defines ",(0,t.jsx)(n.a,{href:"../concepts/file-group",children:"file groups"})," that will be inherited by projects, and also enables\nenforcement of organizational patterns and file locations. For example, encourage projects to place\nsource files in a ",(0,t.jsx)(n.code,{children:"src"})," folder, and all test files in ",(0,t.jsx)(n.code,{children:"tests"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/tasks.yml"',children:"fileGroups:\n  configs:\n    - '*.config.{js,cjs,mjs}'\n    - '*.json'\n  sources:\n    - 'src/**/*'\n    - 'types/**/*'\n  tests:\n    - 'tests/**/*'\n    - '**/__tests__/**/*'\n  assets:\n    - 'assets/**/*'\n    - 'images/**/*'\n    - 'static/**/*'\n    - '**/*.{scss,css}'\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"File paths and globs used within a file group are relative from the inherited project's root, and\nnot the workspace."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"implicitdeps",children:(0,t.jsx)(n.code,{children:"implicitDeps"})}),"\n",(0,t.jsx)(o.Z,{to:"/api/types/interface/InheritedTasksConfig#implicitDeps"}),"\n",(0,t.jsxs)(n.p,{children:["Defines task ",(0,t.jsx)(n.a,{href:"./project#deps",children:(0,t.jsx)(n.code,{children:"deps"})})," that are implicitly inserted into ",(0,t.jsx)(n.em,{children:"all"})," inherited tasks within\na project. This is extremely useful for pre-building projects that are used extensively throughout\nthe repo, or always building project dependencies. Defaults to an empty list."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/tasks.yml" {1-2}',children:"implicitDeps:\n  - '^:build'\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Implicit dependencies are ",(0,t.jsx)(n.em,{children:"always"})," inherited, regardless of the ",(0,t.jsx)(n.a,{href:"#mergedeps",children:(0,t.jsx)(n.code,{children:"mergeDeps"})})," option."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"implicitinputs",children:(0,t.jsx)(n.code,{children:"implicitInputs"})}),"\n",(0,t.jsx)(o.Z,{to:"/api/types/interface/InheritedTasksConfig#implicitInputs"}),"\n",(0,t.jsxs)(n.p,{children:["Defines task ",(0,t.jsx)(n.a,{href:"./project#inputs",children:(0,t.jsx)(n.code,{children:"inputs"})})," that are implicitly inserted into ",(0,t.jsx)(n.em,{children:"all"}),' inherited tasks\nwithin a project. This is extremely useful for the "changes to these files should always trigger a\ntask" scenario.']}),"\n",(0,t.jsxs)(n.p,{children:["Like ",(0,t.jsx)(n.code,{children:"inputs"}),", file paths/globs defined here are relative from the inheriting project.\n",(0,t.jsx)(n.a,{href:"../concepts/file-pattern#project-relative",children:"Project and workspace relative file patterns"})," are\nsupported and encouraged."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/tasks/node.yml" {1-2}',children:"implicitInputs:\n  - 'package.json'\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Implicit inputs are ",(0,t.jsx)(n.em,{children:"always"})," inherited, regardless of the ",(0,t.jsx)(n.a,{href:"#mergeinputs",children:(0,t.jsx)(n.code,{children:"mergeInputs"})})," option."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"tasks",children:(0,t.jsx)(n.code,{children:"tasks"})}),"\n",(0,t.jsx)(o.Z,{to:"/api/types/interface/InheritedTasksConfig#tasks"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["For more information on task configuration, refer to the ",(0,t.jsx)(n.a,{href:"./project#tasks",children:(0,t.jsx)(n.code,{children:"tasks"})})," section in the\n",(0,t.jsx)(n.a,{href:"./project",children:(0,t.jsx)(n.code,{children:"moon.yml"})})," doc."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["As mentioned in the link above, ",(0,t.jsx)(n.a,{href:"../concepts/task",children:"tasks"})," are actions that are ran within the\ncontext of a project, and commonly wrap a system command. For most workspaces, every project\n",(0,t.jsx)(n.em,{children:"should"})," have linting, typechecking, testing, code formatting, so on and so forth. To reduce the\namount of boilerplate that ",(0,t.jsx)(n.em,{children:"every"})," project would require, this setting offers the ability to define\ntasks that are inherited by many projects within the workspace, but can also be overridden per\nproject."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/tasks.yml"',children:"tasks:\n  format:\n    command: 'prettier --check .'\n\n  lint:\n    command: 'eslint --no-error-on-unmatched-pattern .'\n\n  test:\n    command: 'jest --passWithNoTests'\n\n  typecheck:\n    command: 'tsc --build'\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Relative file paths and globs used within a task are relative from the inherited project's root,\nand not the workspace."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},32189:(e,n,s)=>{s.d(n,{Z:()=>r});var t=s(83469),i=s(31792),o=s(24246);function r(e){let{to:n}=e;return(0,o.jsx)("a",{href:n,target:"_blank",className:"float-right inline-block",style:{marginTop:"-3em"},children:(0,o.jsx)(i.Z,{icon:t.dT$})})}},71670:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>r});var t=s(27378);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);