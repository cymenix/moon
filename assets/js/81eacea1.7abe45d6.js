"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[439],{5318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9546:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=n(5773),o=n(808),a=(n(7378),n(5318)),i=["components"],s={title:".moon/project.yml"},l=void 0,c={unversionedId:"config/global-project",id:"config/global-project",title:".moon/project.yml",description:"The .moon/project.yml file configures file groups and tasks that are inherited by every project",source:"@site/docs/config/global-project.mdx",sourceDirName:"config",slug:"/config/global-project",permalink:"/docs/config/global-project",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/config/global-project.mdx",tags:[],version:"current",frontMatter:{title:".moon/project.yml"},sidebar:"docs",previous:{title:".moon/workspace.yml",permalink:"/docs/config/workspace"},next:{title:"project.yml",permalink:"/docs/config/project"}},p={},m=[{value:"<code>extends</code>",id:"extends",level:2},{value:"<code>fileGroups</code>",id:"filegroups",level:2},{value:"<code>tasks</code>",id:"tasks",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".moon/project.yml")," file configures file groups and tasks that are inherited by ",(0,a.kt)("em",{parentName:"p"},"every")," project\nin the workspace. Projects can override or merge with these settings within their respective\n",(0,a.kt)("a",{parentName:"p",href:"./project"},(0,a.kt)("inlineCode",{parentName:"a"},"project.yml")),"."),(0,a.kt)("h2",{id:"extends"},(0,a.kt)("inlineCode",{parentName:"h2"},"extends")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"string"))),(0,a.kt)("p",null,"Defines an external ",(0,a.kt)("inlineCode",{parentName:"p"},".moon/project.yml")," to extend and inherit settings from. Perfect for reusability\nand sharing configuration across repositories and projects. When defined, this setting must be an\nHTTPS URL ",(0,a.kt)("em",{parentName:"p"},"or")," relative file system path that points to a valid YAML document!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {1}',title:'".moon/workspace.yml"',"{1}":!0},"extends: 'https://raw.githubusercontent.com/organization/repository/master/.moon/project.yml'\n")),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"For map-based settings, ",(0,a.kt)("inlineCode",{parentName:"p"},"fileGroups")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tasks"),", entries from both the extended configuration and\nlocal configuration are merged into a new map, with the values of the local taking precedence. Map\nvalues ",(0,a.kt)("em",{parentName:"p"},"are not")," deep merged!"))),(0,a.kt)("h2",{id:"filegroups"},(0,a.kt)("inlineCode",{parentName:"h2"},"fileGroups")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"Record<string, string[]>"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For more information on file group configuration, refer to the\n",(0,a.kt)("a",{parentName:"p",href:"./project#filegroups"},(0,a.kt)("inlineCode",{parentName:"a"},"fileGroups"))," section in the ",(0,a.kt)("a",{parentName:"p",href:"./project"},(0,a.kt)("inlineCode",{parentName:"a"},"project.yml"))," doc.")),(0,a.kt)("p",null,"Defines ",(0,a.kt)("a",{parentName:"p",href:"../concepts/file-group"},"file groups")," that will be inherited by all projects, and also\nenables enforcement of organizational patterns and file locations. For example, encourage all\nprojects to place source files in a ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," folder, and all test files in ",(0,a.kt)("inlineCode",{parentName:"p"},"tests"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/project.yml"',title:'".moon/project.yml"'},"fileGroups:\n  configs:\n    - '*.config.{js,cjs,mjs}'\n    - '*.json'\n  sources:\n    - 'src/**/*'\n    - 'types/**/*'\n  tests:\n    - 'tests/**/*'\n    - '**/__tests__/**/*'\n  assets:\n    - 'assets/**/*'\n    - 'images/**/*'\n    - 'static/**/*'\n    - '**/*.{scss,css}'\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"File paths and globs used within a file group are relative from the inherited project's root, and\nnot the workspace.")),(0,a.kt)("h2",{id:"tasks"},(0,a.kt)("inlineCode",{parentName:"h2"},"tasks")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"Record<string, TaskConfig>"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For more information on task configuration, refer to the ",(0,a.kt)("a",{parentName:"p",href:"./project#tasks"},(0,a.kt)("inlineCode",{parentName:"a"},"tasks"))," section in the\n",(0,a.kt)("a",{parentName:"p",href:"./project"},(0,a.kt)("inlineCode",{parentName:"a"},"project.yml"))," doc.")),(0,a.kt)("p",null,"As mentioned in the link above, ",(0,a.kt)("a",{parentName:"p",href:"../concepts/task"},"tasks")," are actions that are ran within the\ncontext of a project, and commonly wrap an npm binary or system command. For most workspaces, every\nproject ",(0,a.kt)("em",{parentName:"p"},"should")," have linting, type-checking, testing, code formatting, so on and so forth. To\nreduce the amount of boilerplate that ",(0,a.kt)("em",{parentName:"p"},"every")," project would require, this setting offers the ability\nto define tasks that are inherited by all projects within the workspace, but can also be overridden\nper project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/project.yml"',title:'".moon/project.yml"'},"tasks:\n  format:\n    command: 'prettier'\n    args: '--check .'\n\n  lint:\n    command: 'eslint'\n    args: '--no-error-on-unmatched-pattern .'\n\n  test:\n    command: 'jest'\n    args: '--passWithNoTests'\n\n  typecheck:\n    command: 'tsc'\n    args: '--build'\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Relative file paths and globs used within a task are relative from the inherited project's root,\nand not the workspace.")))}d.isMDXComponent=!0}}]);