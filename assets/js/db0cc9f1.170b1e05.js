"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4065],{5318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(a),d=r,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9022:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7378),r=a(9619);function o(e){let{header:t,updated:a,version:o}=e;return n.createElement(r.Z,{text:`v${o}`,variant:a?"success":"info",className:t?"absolute right-0 top-1.5":"ml-2"})}},9619:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7378),r=a(8944),o=a(1792);const i={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function l(e){let{className:t,icon:a,text:l,variant:c}=e;return n.createElement("span",{className:(0,r.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",c?i[c]:"bg-gray-100 text-gray-800",t)},a&&n.createElement(o.Z,{icon:a,className:"mr-1"}),l)}},1855:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>f,frontMatter:()=>u,metadata:()=>p,toc:()=>h});var n=a(5773),r=a(7378),o=a(5318),i=a(8944);function l(e){let{label:t,name:a,value:n,onChange:o,type:i="text"}=e;return r.createElement(r.Fragment,null,r.createElement("label",{htmlFor:a,className:"font-bold mb-0.5 block"},t),r.createElement("input",{type:i,name:a,id:a,required:!0,className:"appearance-none outline-none min-w-0 w-full bg-white border border-solid border-gray-400 dark:border-transparent rounded-md px-1 py-1 text-base text-gray-800 placeholder-gray-600 h-full font-sans w-5/6",onChange:o,value:n}))}function c(){const[e,t]=(0,r.useState)(""),[a,n]=(0,r.useState)(""),[o,c]=(0,r.useState)(""),[s,u]=(0,r.useState)(""),[m,p]=(0,r.useState)(""),[d,h]=(0,r.useState)(!1),g=!(e&&a&&o&&s&&m),f=(0,r.useCallback)((e=>{t(e.target.value)}),[]),b=(0,r.useCallback)((e=>{n(e.target.value)}),[]),v=(0,r.useCallback)((e=>{c(e.target.value)}),[]),y=(0,r.useCallback)((e=>{u(e.target.value)}),[]),k=(0,r.useCallback)((e=>{p(e.target.value)}),[]),w=(0,r.useCallback)((t=>{t.preventDefault(),fetch("https://formspree.io/f/xeqdnjqr",{body:JSON.stringify({email:a,name:e,org:o,region:m,repo:s}),headers:{Accept:"application/json"},method:"post"}).catch(console.error).finally((()=>{h(!0)}))}),[a,e,o,m,s]);return d?r.createElement("div",{className:"mt-2 mb-4 font-bold"},"Thank you for signing up for the remote caching beta!"):r.createElement("form",{method:"post",className:"grid grid-cols-2 gap-3 mt-2 mb-4",onSubmit:w},r.createElement("div",{className:"col-span-1"},r.createElement("div",null,r.createElement(l,{label:"Name",name:"name",onChange:f,value:e})),r.createElement("div",{className:"mt-2"},r.createElement(l,{label:"Email",name:"email",onChange:b,value:a,type:"email"})),r.createElement("div",{className:"mt-2"},r.createElement("label",{htmlFor:"region",className:"font-bold mb-0.5 block"},"Region"),r.createElement("select",{id:"region",name:"region",required:!0,className:"outline-none min-w-0 w-full bg-white border border-solid border-gray-400 dark:border-transparent rounded-md px-1 py-1 text-base text-gray-800 placeholder-gray-600 h-full font-sans w-5/6",onChange:k,value:m},r.createElement("option",{value:"",disabled:!0}),r.createElement("option",{value:"north-america"},"North America"),r.createElement("option",{value:"south-america"},"South America"),r.createElement("option",{value:"europe"},"Europe"),r.createElement("option",{value:"africa"},"Africa"),r.createElement("option",{value:"asia"},"Asia"),r.createElement("option",{value:"southeast-asia"},"Southeast Asia")))),r.createElement("div",{className:"col-span-1"},r.createElement("div",null,r.createElement(l,{label:"Organization",name:"org",onChange:v,value:o})),r.createElement("div",{className:"mt-2"},r.createElement(l,{label:"Repository URL",name:"repo",onChange:y,value:s,type:"url"})),r.createElement("div",{className:"mt-2 pt-3"},r.createElement("button",{type:"submit",className:(0,i.Z)("w-1/4 border border-transparent rounded-md px-2 py-1 flex items-center justify-center text-base font-bold text-white bg-blurple-400 dark:bg-purple-600 mt-0.5",g?"opacity-60":"hover:text-white hover:bg-blurple-500 dark:hover:bg-purple-500 cursor-pointer"),disabled:g},"Sign up"))))}var s=a(9022);const u={title:"Remote caching (experimental)",toc_max_heading_level:6},m=void 0,p={unversionedId:"guides/remote-cache",id:"guides/remote-cache",title:"Remote caching (experimental)",description:"Is your CI pipeline running slower than usual? Are you tired of running the same build over and over",source:"@site/docs/guides/remote-cache.mdx",sourceDirName:"guides",slug:"/guides/remote-cache",permalink:"/docs/guides/remote-cache",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/remote-cache.mdx",tags:[],version:"current",frontMatter:{title:"Remote caching (experimental)",toc_max_heading_level:6},sidebar:"guides",previous:{title:"Task profiling",permalink:"/docs/guides/profile"},next:{title:"Root-level project",permalink:"/docs/guides/root-project"}},d={},h=[{value:"Beta sign up",id:"beta-sign-up",level:2},{value:"Enabling remote caching",id:"enabling-remote-caching",level:2},{value:"FAQ",id:"faq",level:2},{value:"What is an artifact?",id:"what-is-an-artifact",level:4},{value:"Do I have to use remote caching?",id:"do-i-have-to-use-remote-caching",level:4},{value:"Does remote caching store source code?",id:"does-remote-caching-store-source-code",level:4},{value:"Does moon collect any personally identifiable information?",id:"does-moon-collect-any-personally-identifiable-information",level:4},{value:"What is an artifacts lifetime / retention policy?",id:"what-is-an-artifacts-lifetime--retention-policy",level:4}],g={toc:h};function f(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{header:!0,version:"0.19",mdxType:"VersionLabel"}),(0,o.kt)("p",null,"Is your CI pipeline running slower than usual? Are you tired of running the same build over and over\nalthough nothing has changed? Do you wish to reuse the same local cache across other machines and\nenvironments? These are just a few scenarios that remote caching aims to solve."),(0,o.kt)("p",null,"Remote caching is a system that shares artifacts to improve performance, reduce unnecessary\ncomputation time, and alleviate resources. It achieves this by uploading hashed artifacts to a cloud\nstorage provider, like AWS S3 or Google Cloud, and downloading them on demand when a build matches a\nderived hash."),(0,o.kt)("h2",{id:"beta-sign-up"},"Beta sign up"),(0,o.kt)("p",null,"Remote caching ",(0,o.kt)("em",{parentName:"p"},"is not yet")," available for general use and is currently in beta while we iron out the\nsystems. However, you may sign up for the beta and we'll notify you once you've been accepted!"),(0,o.kt)(c,{mdxType:"RemoteCacheBeta"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We are only accepting beta sign ups for open source or public facing projects at this time!")),(0,o.kt)("h2",{id:"enabling-remote-caching"},"Enabling remote caching"),(0,o.kt)("p",null,"Once your beta signup has been accepted, you'll be granted 2 API keys. The first is the secret key\nfor your entire organization, and the second is an access key specific to the repository you signed\nup for."),(0,o.kt)("p",null,"In that repositories CI environment, set the following environment variables."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MOONBASE_SECRET_KEY=<secret key>\nMOONBASE_API_KEY=<api key>\n")),(0,o.kt)("p",null,"moon will automatically authenticate the remote caching service when all credentials in the\nenvironment exist."),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h4",{id:"what-is-an-artifact"},"What is an artifact?"),(0,o.kt)("p",null,"In the context of moon and remote caching, an artifact is a tar archive (",(0,o.kt)("inlineCode",{parentName:"p"},".tar.gz"),") that contains\nall ",(0,o.kt)("a",{parentName:"p",href:"../config/project#outputs"},"outputs of a task"),", as well as the stdout and stderr of the task\nthat generated the outputs. Artifacts are uniquely identified by the\n",(0,o.kt)("a",{parentName:"p",href:"../concepts/cache#hashing"},"moon generated hash"),"."),(0,o.kt)("h4",{id:"do-i-have-to-use-remote-caching"},"Do I have to use remote caching?"),(0,o.kt)("p",null,"No, remote caching is ",(0,o.kt)("em",{parentName:"p"},"optional"),". It's intended purpose is to store long lived build artifacts to\nspeed up CI pipelines, and optionally local development. For the most part,\n",(0,o.kt)("a",{parentName:"p",href:"../commands/ci"},(0,o.kt)("inlineCode",{parentName:"a"},"moon ci"))," does a great job of only running what's affected in pull requests, and\nis a great starting point."),(0,o.kt)("h4",{id:"does-remote-caching-store-source-code"},"Does remote caching store source code?"),(0,o.kt)("p",null,"No, remote caching ",(0,o.kt)("em",{parentName:"p"},"does not")," store source code. It stores the\n",(0,o.kt)("a",{parentName:"p",href:"../config/project#outputs"},"outputs of a task"),", which is typically built and compiled code. To\nverify this, you can inspect the tar archives in ",(0,o.kt)("inlineCode",{parentName:"p"},".moon/cache/outputs"),"."),(0,o.kt)("h4",{id:"does-moon-collect-any-personally-identifiable-information"},"Does moon collect any personally identifiable information?"),(0,o.kt)("p",null,"No, moon does not collect any PII as part of the remote caching process."),(0,o.kt)("p",null,"However, to use remote caching, you must create a moonrepo account in which we require an email\naddress, and information about your organization and repository."),(0,o.kt)("h4",{id:"what-is-an-artifacts-lifetime--retention-policy"},"What is an artifacts lifetime / retention policy?"),(0,o.kt)("p",null,"Public artifacts are stored for 1 month. Private artifacts are stored for 3 months."))}f.isMDXComponent=!0}}]);