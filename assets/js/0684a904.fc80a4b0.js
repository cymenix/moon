"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[670],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(25773),a=(n(27378),n(35318));const r={slug:"proto-v0.9",title:"proto v0.9 - New GitHub action, plugin unpacking, and more",authors:["milesj"],tags:["proto","action","github"],image:"./img/proto/v0.9.png"},i=void 0,l={permalink:"/blog/proto-v0.9",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2023-05-23_proto-v0.9.mdx",source:"@site/blog/2023-05-23_proto-v0.9.mdx",title:"proto v0.9 - New GitHub action, plugin unpacking, and more",description:"This is a small release that provides many internal improvements.",date:"2023-05-23T00:00:00.000Z",formattedDate:"May 23, 2023",tags:[{label:"proto",permalink:"/blog/tags/proto"},{label:"action",permalink:"/blog/tags/action"},{label:"github",permalink:"/blog/tags/github"}],readingTime:1.68,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"proto-v0.9",title:"proto v0.9 - New GitHub action, plugin unpacking, and more",authors:["milesj"],tags:["proto","action","github"],image:"./img/proto/v0.9.png"},nextItem:{title:"moon v1.6 - Persistent tasks and task extending RFC",permalink:"/blog/moon-v1.6"}},p={image:n(22917).Z,authorsImageUrls:[void 0]},s=[{value:"New <code>moonrepo/setup-proto</code> GitHub action",id:"new-moonreposetup-proto-github-action",level:2},{value:"Added <code>install.unpack</code> to TOML plugin",id:"added-installunpack-to-toml-plugin",level:2},{value:"Initial support for <code>node-gyp</code>",id:"initial-support-for-node-gyp",level:2},{value:"Other changes",id:"other-changes",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is a small release that provides many internal improvements."),(0,a.kt)("h2",{id:"new-moonreposetup-proto-github-action"},"New ",(0,a.kt)("inlineCode",{parentName:"h2"},"moonrepo/setup-proto")," GitHub action"),(0,a.kt)("p",null,"If you're using proto in GitHub Actions and would love to automate the workflow as much as possible,\nwell look no further, as we're introducing the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/setup-proto"},"moonrepo/setup-proto")," action. Thanks to\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tomdavidson"},"Tom Davidson")," for the initial spike of work!"),(0,a.kt)("p",null,"This action will automatically install the ",(0,a.kt)("inlineCode",{parentName:"p"},"proto")," binary globally, and cache the toolchain at\n",(0,a.kt)("inlineCode",{parentName:"p"},"~/.proto")," (be sure to run ",(0,a.kt)("inlineCode",{parentName:"p"},"proto use")," to download and install tools)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\njobs:\n  ci:\n    name: 'CI'\n    runs-on: 'ubuntu-latest'\n    steps:\n      - uses: 'actions/checkout@v3'\n      - uses: 'moonrepo/setup-proto@v0'\n      - run: 'proto use'\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you're using moon, be sure to use\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/setup-moon-action"},"moonrepo/setup-moon")," instead.")),(0,a.kt)("h2",{id:"added-installunpack-to-toml-plugin"},"Added ",(0,a.kt)("inlineCode",{parentName:"h2"},"install.unpack")," to TOML plugin"),(0,a.kt)("p",null,"Our ",(0,a.kt)("a",{parentName:"p",href:"./proto-v0.7#toml-plugins"},"TOML plugins")," have been quite popular, and the community has been\nusing them to much success. However, the plugin assumed that all downloaded files are archives (tar,\nzip) and will attempt to unpack them based on file extension. This is not always the case, as some\ndownloads are just raw executables."),(0,a.kt)("p",null,"Because of this, unpacking would sometimes fail, or we'd be unable to extract the correct file\nextension. To work around this limitation, we're introducing a new setting, ",(0,a.kt)("inlineCode",{parentName:"p"},"install.unpack"),", that\ncontrols whether the downloaded file should be unpacked or not. By default this setting is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("p",null,"Here's an example using ",(0,a.kt)("a",{parentName:"p",href:"/moon"},"moon"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'# ...\n\n[platform.linux]\ndownload-file = "moon-{arch}-unknown-linux-{libc}"\n\n[platform.macos]\ndownload-file = "moon-{arch}-apple-darwin"\n\n[platform.windows]\ndownload-file = "moon-{arch}-pc-windows-msvc.exe"\n\n[install]\ndownload-url = "https://github.com/moonrepo/moon/releases/download/v{version}/{download_file}"\nunpack = false\n')),(0,a.kt)("h2",{id:"initial-support-for-node-gyp"},"Initial support for ",(0,a.kt)("inlineCode",{parentName:"h2"},"node-gyp")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-gyp"},(0,a.kt)("inlineCode",{parentName:"a"},"node-gyp")," binary")," is required for building Node.js native\naddons, and was previously not supported in proto. We will now create a ",(0,a.kt)("inlineCode",{parentName:"p"},"node-gyp")," binary in\n",(0,a.kt)("inlineCode",{parentName:"p"},"~/.proto/bin")," when the ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," tool is installed. Why npm? Because ",(0,a.kt)("inlineCode",{parentName:"p"},"node-gyp")," comes packaged with npm\ninstead of Node.js... for some reason."),(0,a.kt)("p",null,"With that being said, this is currently experimental, as we haven't tested it thoroughly, and are\nunaware of all the possible edge cases. So keep that in mind!"),(0,a.kt)("h2",{id:"other-changes"},"Other changes"),(0,a.kt)("p",null,"View the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/proto/releases/tag/v0.9.0"},"official release")," for a full list\nof changes."))}c.isMDXComponent=!0},22917:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/v0.9-c189afd32d83182c9ce2677593363d17.png"}}]);