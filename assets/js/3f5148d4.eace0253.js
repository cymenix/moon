"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29754],{61489:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(24246),a=t(71670),i=t(79022);const r={title:"Tasks"},o=void 0,c={id:"concepts/task",title:"Tasks",description:"Tasks are commands that are ran in the context of a project. Underneath the hood, a",source:"@site/docs/concepts/task.mdx",sourceDirName:"concepts",slug:"/concepts/task",permalink:"/docs/concepts/task",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/concepts/task.mdx",tags:[],version:"current",frontMatter:{title:"Tasks"},sidebar:"docs",previous:{title:"Targets",permalink:"/docs/concepts/target"},next:{title:"Task inheritance",permalink:"/docs/concepts/task-inheritance"}},l={},d=[{value:"Names",id:"names",level:2},{value:"Types",id:"types",level:2},{value:"Modes",id:"modes",level:2},{value:"Local only",id:"local-only",level:3},{value:"Interactive<VersionLabel></VersionLabel>",id:"interactive",level:3},{value:"Persistent<VersionLabel></VersionLabel>",id:"persistent",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Inheritance",id:"inheritance",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Tasks are commands that are ran in the context of a ",(0,s.jsx)(n.a,{href:"./project",children:"project"}),". Underneath the hood, a\ntask is simply a binary or system command that is ran as a child process."]}),"\n",(0,s.jsx)(n.h2,{id:"names",children:"Names"}),"\n",(0,s.jsxs)(n.p,{children:["A task name (or identifier) is a unique resource for locating a task ",(0,s.jsx)(n.em,{children:"within"})," a project. The name is\nexplicitly configured as a key within the ",(0,s.jsx)(n.a,{href:"../config/project#tasks",children:(0,s.jsx)(n.code,{children:"tasks"})})," setting, and can be\nwritten in camel/kebab/snake case. Names support ",(0,s.jsx)(n.code,{children:"a-z"}),", ",(0,s.jsx)(n.code,{children:"A-Z"}),", ",(0,s.jsx)(n.code,{children:"0-9"}),", ",(0,s.jsx)(n.code,{children:"_"}),", ",(0,s.jsx)(n.code,{children:"-"}),", ",(0,s.jsx)(n.code,{children:"/"}),", ",(0,s.jsx)(n.code,{children:"."}),", and must\nstart with a character."]}),"\n",(0,s.jsxs)(n.p,{children:["A task name can be paired with a scope to create a ",(0,s.jsx)(n.a,{href:"./target",children:"target"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"types",children:"Types"}),"\n",(0,s.jsx)(n.p,{children:"Tasks are grouped into 1 of the following types based on their configured parameters."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Build"})," - Task generates one or many artifacts, and is derived from the\n",(0,s.jsx)(n.a,{href:"../config/project#outputs",children:(0,s.jsx)(n.code,{children:"outputs"})})," setting."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Run"})," - Task runs a one-off, long-running, or never-ending process, and is derived from the\n",(0,s.jsx)(n.a,{href:"../config/project#local",children:(0,s.jsx)(n.code,{children:"local"})})," setting."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Test"})," - Task asserts code is correct and behaves as expected. This includes linting,\ntypechecking, unit tests, and any other form of testing. Is the default."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"modes",children:"Modes"}),"\n",(0,s.jsx)(n.p,{children:"Alongside types, tasks can also grouped into a special mode that provides unique handling within the\naction graph and pipelines."}),"\n",(0,s.jsx)(n.h3,{id:"local-only",children:"Local only"}),"\n",(0,s.jsxs)(n.p,{children:["Tasks either run locally, in CI (continuous integration pipelines), or both. For tasks that should\n",(0,s.jsx)(n.em,{children:"only"})," be ran locally, for example, development servers and watchers, we provide a mechanism for\nmarking a task as local only. When enabled, caching is turned off, the task will not run in CI,\nterminal output is not captured, and the task is marked as ",(0,s.jsx)(n.a,{href:"#persistent",children:"persistent"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["To mark a task as local only, enable the ",(0,s.jsx)(n.a,{href:"../config/project#local",children:(0,s.jsx)(n.code,{children:"local"})})," setting."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="moon.yml"',children:"tasks:\n  dev:\n    command: 'start-dev-server'\n    local: true\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"interactive",children:["Interactive",(0,s.jsx)(i.Z,{version:"1.12.0"})]}),"\n",(0,s.jsx)(n.p,{children:"Tasks that need to interact with the user via terminal prompts are known as interactive tasks.\nBecause interactive tasks require stdin, and it's not possible to have multiple parallel running\ntasks interact with stdin, we isolate interactive tasks from other tasks in the action graph. This\nensures that only 1 interactive task is ran at a time."}),"\n",(0,s.jsxs)(n.p,{children:["To mark a task as interactive, enable the ",(0,s.jsx)(n.a,{href:"../config/project#interactive",children:(0,s.jsx)(n.code,{children:"options.interactive"})}),"\nsetting."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="moon.yml"',children:"tasks:\n  init:\n    command: 'init-app'\n    options:\n      interactive: true\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"persistent",children:["Persistent",(0,s.jsx)(i.Z,{version:"1.6.0"})]}),"\n",(0,s.jsx)(n.p,{children:"Tasks that never complete, like servers and watchers, are known as persistent tasks. Persistent\ntasks are typically problematic when it comes to dependency graphs, because if they run in the\nmiddle of the graph, subsequent tasks will never run because the persistent task never completes!"}),"\n",(0,s.jsxs)(n.p,{children:["However in moon, this is a non-issue, as we collect all persistent tasks within the action graph and\nrun them ",(0,s.jsx)(n.em,{children:"last as a batch"}),". This is perfect for a few reasons:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"All persistent tasks are ran in parallel, so they don't block each other."}),"\n",(0,s.jsx)(n.li,{children:"Running both the backend API and frontend webapp in parallel is a breeze."}),"\n",(0,s.jsx)(n.li,{children:"Dependencies of persistent tasks are guaranteed to have ran and completed."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To mark a task as persistent, enable the ",(0,s.jsx)(n.a,{href:"../config/project#local",children:(0,s.jsx)(n.code,{children:"local"})})," or\n",(0,s.jsx)(n.a,{href:"../config/project#persistent",children:(0,s.jsx)(n.code,{children:"options.persistent"})})," settings."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="moon.yml"',children:"tasks:\n  dev:\n    command: 'start-dev-server'\n    local: true\n    # OR\n    options:\n      persistent: true\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Tasks can be configured per project through ",(0,s.jsx)(n.a,{href:"../config/project",children:(0,s.jsx)(n.code,{children:"moon.yml"})}),", or for many projects\nthrough ",(0,s.jsx)(n.a,{href:"../config/tasks",children:(0,s.jsx)(n.code,{children:".moon/tasks.yml"})}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"inheritance",children:"Inheritance"}),"\n",(0,s.jsxs)(n.p,{children:["View the official documentation on ",(0,s.jsx)(n.a,{href:"./task-inheritance",children:"task inheritance"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},79022:(e,n,t)=>{t.d(n,{Z:()=>i});var s=t(9619),a=t(24246);function i(e){let{header:n,inline:t,updated:i,version:r}=e;return(0,a.jsx)(s.Z,{text:`v${r}`,variant:i?"success":"info",className:n?"absolute right-0 top-1.5":t?"inline-block":"ml-2"})}},9619:(e,n,t)=>{t.d(n,{Z:()=>o});var s=t(40624),a=t(31792),i=t(24246);const r={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function o(e){let{className:n,icon:t,text:o,variant:c}=e;return(0,i.jsxs)("span",{className:(0,s.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",c?r[c]:"bg-gray-100 text-gray-800",n),children:[t&&(0,i.jsx)(a.Z,{icon:t,className:"mr-1"}),o]})}},71670:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var s=t(27378);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);