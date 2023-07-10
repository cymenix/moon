"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3231],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39798:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(27378),r=n(38944);const o="tabItem_wHwb";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},33337:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(25773),r=n(27378),o=n(38944),i=n(83457),l=n(35595),s=n(76457);const c="tabList_J5MA",u="tabItem_l0OV";function p(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==l&&(d(t),s(a))},f=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:f,onClick:m},i,{className:(0,o.Z)("tabs__item",u,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function d(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function m(e){const t=(0,l.Y)(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement(p,(0,a.Z)({},e,t)),r.createElement(d,(0,a.Z)({},e,t)))}function f(e){const t=(0,s.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},35595:(e,t,n)=>{n.d(t,{Y:()=>d});var a=n(27378),r=n(35331),o=n(30654),i=n(70784),l=n(71819);function s(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const i=(0,r.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(i.location.search);t.set(l,e),i.replace({...i.location,search:t.toString()})}),[l,i])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=c(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[d,m]=p({queryString:n,groupId:r}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,l.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=d??f;return u({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),m(e),g(e)}),[m,g,o]),tabValues:o}}},79022:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(27378),r=n(9619);function o(e){let{header:t,updated:n,version:o}=e;return a.createElement(r.Z,{text:`v${o}`,variant:n?"success":"info",className:t?"absolute right-0 top-1.5":"ml-2"})}},9619:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(27378),r=n(38944),o=n(31792);const i={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function l(e){let{className:t,icon:n,text:l,variant:s}=e;return a.createElement("span",{className:(0,r.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",s?i[s]:"bg-gray-100 text-gray-800",t)},n&&a.createElement(o.Z,{icon:n,className:"mr-1"}),l)}},48764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(25773),r=(n(27378),n(35318)),o=n(33337),i=n(39798),l=n(79022);const s={title:"Code owners",toc_max_heading_level:6,tags:["code","owners","codeowners"]},c=void 0,u={unversionedId:"guides/codeowners",id:"guides/codeowners",title:"Code owners",description:"Code owners enables companies to define individuals, teams, or groups that are responsible for code",source:"@site/docs/guides/codeowners.mdx",sourceDirName:"guides",slug:"/guides/codeowners",permalink:"/docs/guides/codeowners",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/codeowners.mdx",tags:[{label:"code",permalink:"/docs/tags/code"},{label:"owners",permalink:"/docs/tags/owners"},{label:"codeowners",permalink:"/docs/tags/codeowners"}],version:"current",frontMatter:{title:"Code owners",toc_max_heading_level:6,tags:["code","owners","codeowners"]},sidebar:"guides",previous:{title:"Code generation",permalink:"/docs/guides/codegen"},next:{title:"Debugging a task",permalink:"/docs/guides/debug-task"}},p={},d=[{value:"Defining owners",id:"defining-owners",level:2},{value:"Project-level",id:"project-level",level:3},{value:"Workspace-level",id:"workspace-level",level:3},{value:"Generating <code>CODEOWNERS</code>",id:"generating-codeowners",level:2},{value:"FAQ",id:"faq",level:2},{value:"What providers or formats are supported?",id:"what-providers-or-formats-are-supported",level:3},{value:"Where does the <code>CODEOWNERS</code> file get created?",id:"where-does-the-codeowners-file-get-created",level:3},{value:"Why are owners defined in <code>moon.yml</code> and not an alternative like <code>OWNERS</code>?",id:"why-are-owners-defined-in-moonyml-and-not-an-alternative-like-owners",level:3}],m={toc:d};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{version:"1.8.0",header:!0,mdxType:"VersionLabel"}),(0,r.kt)("p",null,"Code owners enables companies to define individuals, teams, or groups that are responsible for code\nin a repository. This is useful in ensuring that pull/merge requests are reviewed and approved by a\nspecific set of contributors, before the branch is merged into the base branch."),(0,r.kt)("p",null,"With that being said, moon ",(0,r.kt)("em",{parentName:"p"},"does not")," implement a custom code owners solution, and instead builds\nupon the popular ",(0,r.kt)("inlineCode",{parentName:"p"},"CODEOWNERS")," integration in VCS providers, like GitHub, GitLab, and Bitbucket."),(0,r.kt)("h2",{id:"defining-owners"},"Defining owners"),(0,r.kt)("p",null,"With moon, you ",(0,r.kt)("em",{parentName:"p"},"do not")," modify a ",(0,r.kt)("inlineCode",{parentName:"p"},"CODEOWNERS")," file directly. Instead you define owners ",(0,r.kt)("em",{parentName:"p"},"per project"),"\nwith ",(0,r.kt)("a",{parentName:"p",href:"../config/project"},(0,r.kt)("inlineCode",{parentName:"a"},"moon.yml")),", or globally with ",(0,r.kt)("a",{parentName:"p",href:"../config/workspace"},(0,r.kt)("inlineCode",{parentName:"a"},".moon/workspace.yml")),".\nThese owners are then aggregated and automatically\n",(0,r.kt)("a",{parentName:"p",href:"#generating-codeowners"},"synced to a ",(0,r.kt)("inlineCode",{parentName:"a"},"CODEOWNERS")," file"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"An owner is a user, team, or group unique to your VCS provider. Please refer to your provider's\ndocumentation for the correct format in which to define owners.")),(0,r.kt)("h3",{id:"project-level"},"Project-level"),(0,r.kt)("p",null,"For projects, we support an ",(0,r.kt)("a",{parentName:"p",href:"../config/project#owners"},(0,r.kt)("inlineCode",{parentName:"a"},"owners"))," setting in\n",(0,r.kt)("a",{parentName:"p",href:"../config/project"},(0,r.kt)("inlineCode",{parentName:"a"},"moon.yml"))," that accepts file patterns/paths and their owners (contributors\nrequired to review), as well as operational settings for minimum required approvals, custom groups,\nand more."),(0,r.kt)("p",null,"Paths configured here are relative from the project root, and will be prefixed with the project\nsource (path from workspace root to project root) when the file is synced."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="packages/components/moon.yml"',title:'"packages/components/moon.yml"'},"owners:\n    requiredApprovals: 2\n    paths:\n        'src/': ['@frontend', '@design-system']\n        '*.config.js': ['@frontend-infra']\n        '*.json': ['@frontend-infra']\n")),(0,r.kt)("p",null,"The configuration above would generate the following:"),(0,r.kt)(o.Z,{groupId:"codeowners",defaultValue:"github",values:[{label:"GitHub",value:"github"},{label:"GitLab",value:"gitlab"},{label:"Bitbucket",value:"bitbucket"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"github",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title=".github/CODEOWNERS"',title:'".github/CODEOWNERS"'},"# components\n/packages/components/src/ @frontend @design-system\n/packages/components/*.config.js @frontend-infra\n/packages/components/*.json @frontend-infra\n"))),(0,r.kt)(i.Z,{value:"gitlab",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title=".gitlab/CODEOWNERS"',title:'".gitlab/CODEOWNERS"'},"# components\n[components][2]\n/packages/components/src/ @frontend @design-system\n/packages/components/*.config.js @frontend-infra\n/packages/components/*.json @frontend-infra\n"))),(0,r.kt)(i.Z,{value:"bitbucket",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="CODEOWNERS"',title:'"CODEOWNERS"'},"# components\n/packages/components/src/ @frontend @design-system\n/packages/components/*.config.js @frontend-infra\n/packages/components/*.json @frontend-infra\n")))),(0,r.kt)("h3",{id:"workspace-level"},"Workspace-level"),(0,r.kt)("p",null,"Project scoped owners are great but sometimes you need to define owners for files that span across\nall projects, or files at any depth within the repository. With the\n",(0,r.kt)("a",{parentName:"p",href:"../config/workspace#globalpaths"},(0,r.kt)("inlineCode",{parentName:"a"},"codeowners.globalPaths"))," setting in\n",(0,r.kt)("a",{parentName:"p",href:"../config/workspace"},(0,r.kt)("inlineCode",{parentName:"a"},".moon/workspace.yml")),", you can do just that."),(0,r.kt)("p",null,"Paths configured here are used as-is, allowing for full control of what ownership is applied."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml"',title:'".moon/workspace.yml"'},"codeowners:\n    globalPaths:\n        # All files\n        '*': ['@admins']\n        # Config folder at any depth\n        'config/': ['@app-platform']\n        # GitHub folder at the root\n        '/.github/': ['@infra']\n")),(0,r.kt)("p",null,"The configuration above would generate the following at the top of the file (is the same for all\nproviders):"),(0,r.kt)(o.Z,{groupId:"codeowners",defaultValue:"github",values:[{label:"GitHub",value:"github"},{label:"GitLab",value:"gitlab"},{label:"Bitbucket",value:"bitbucket"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"github",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title=".github/CODEOWNERS"',title:'".github/CODEOWNERS"'},"# (workspace)\n* @admins\nconfig/ @app-platform\n/.github/ @infra\n"))),(0,r.kt)(i.Z,{value:"gitlab",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title=".gitlab/CODEOWNERS"',title:'".gitlab/CODEOWNERS"'},"# (workspace)\n* @admins\nconfig/ @app-platform\n/.github/ @infra\n"))),(0,r.kt)(i.Z,{value:"bitbucket",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="CODEOWNERS"',title:'"CODEOWNERS"'},"# (workspace)\n* @admins\nconfig/ @app-platform\n/.github/ @infra\n")))),(0,r.kt)("h2",{id:"generating-codeowners"},"Generating ",(0,r.kt)("inlineCode",{parentName:"h2"},"CODEOWNERS")),(0,r.kt)("p",null,"Code owners is an opt-in feature, and as such, the ",(0,r.kt)("inlineCode",{parentName:"p"},"CODEOWNERS")," file can be generated in a few ways.\nThe first is manually, with the ",(0,r.kt)("a",{parentName:"p",href:"../commands/sync/codeowners"},(0,r.kt)("inlineCode",{parentName:"a"},"moon sync codeowners"))," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon sync codeowners\n")),(0,r.kt)("p",null,"While this works, it is a manual process, and can easily be forgotten, resulting in an out-of-date\nfile."),(0,r.kt)("p",null,"An alternative solution is the ",(0,r.kt)("a",{parentName:"p",href:"../config/workspace#synconrun"},(0,r.kt)("inlineCode",{parentName:"a"},"codeowners.syncOnRun"))," setting in\n",(0,r.kt)("a",{parentName:"p",href:"../config/workspace#codeowners"},(0,r.kt)("inlineCode",{parentName:"a"},".moon/workspace.yml")),", that when enabled, moon will automatically\ngenerate a ",(0,r.kt)("inlineCode",{parentName:"p"},"CODEOWNERS")," file when a ",(0,r.kt)("a",{parentName:"p",href:"../concepts/target"},"target")," is ran."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml"',title:'".moon/workspace.yml"'},"codeowners:\n    syncOnRun: true\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The format and location of the ",(0,r.kt)("inlineCode",{parentName:"p"},"CODEOWNERS")," file is based on the\n",(0,r.kt)("a",{parentName:"p",href:"../config/workspace#provider"},(0,r.kt)("inlineCode",{parentName:"a"},"vcs.provider"))," setting.")),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"what-providers-or-formats-are-supported"},"What providers or formats are supported?"),(0,r.kt)("p",null,"The following providers are supported, based on the ",(0,r.kt)("a",{parentName:"p",href:"../config/workspace#provider"},(0,r.kt)("inlineCode",{parentName:"a"},"vcs.provider")),"\nsetting."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://marketplace.atlassian.com/apps/1218598/code-owners-for-bitbucket?tab=overview&hosting=cloud"},"Bitbucket"),"\n(via a 3rd-party app)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners"},"GitHub")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/user/project/codeowners/reference.html"},"GitLab")),(0,r.kt)("li",{parentName:"ul"},"Other (very basic syntax)")),(0,r.kt)("h3",{id:"where-does-the-codeowners-file-get-created"},"Where does the ",(0,r.kt)("inlineCode",{parentName:"h3"},"CODEOWNERS")," file get created?"),(0,r.kt)("p",null,"The location of the file is dependent on the configured provider."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GitHub -> ",(0,r.kt)("inlineCode",{parentName:"li"},".github/CODEOWNERS")),(0,r.kt)("li",{parentName:"ul"},"GitLab -> ",(0,r.kt)("inlineCode",{parentName:"li"},".gitlab/CODEOWNERS")),(0,r.kt)("li",{parentName:"ul"},"Everything else -> ",(0,r.kt)("inlineCode",{parentName:"li"},"CODEOWNERS"))),(0,r.kt)("h3",{id:"why-are-owners-defined-in-moonyml-and-not-an-alternative-like-owners"},"Why are owners defined in ",(0,r.kt)("inlineCode",{parentName:"h3"},"moon.yml")," and not an alternative like ",(0,r.kt)("inlineCode",{parentName:"h3"},"OWNERS"),"?"),(0,r.kt)("p",null,"A very popular pattern for defining owners is through an ",(0,r.kt)("inlineCode",{parentName:"p"},"OWNERS")," file, which can appear in any\nfolder, at any depth, within the repository. All of these files are then aggregated into a single\n",(0,r.kt)("inlineCode",{parentName:"p"},"CODEOWNERS")," file."),(0,r.kt)("p",null,"While this is useful for viewing ownership of a folder at a glance, it incurs a massive performance\nhit as we'd have to constantly glob the ",(0,r.kt)("em",{parentName:"p"},"entire")," repository to find all ",(0,r.kt)("inlineCode",{parentName:"p"},"OWNERS")," files. We found it\nbest to define owners in ",(0,r.kt)("inlineCode",{parentName:"p"},"moon.yml")," instead for the following reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No performance hit, as we're already loading and parsing these config files."),(0,r.kt)("li",{parentName:"ul"},"Co-locates owners with the rest of moon's configuration."),(0,r.kt)("li",{parentName:"ul"},"Ownership is now a part of the project graph, enabling future features.")))}f.isMDXComponent=!0}}]);