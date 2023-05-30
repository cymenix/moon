"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6897],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},88109:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(27378);function a(e){let{src:t,width:r="90%",alt:a="",title:o,align:i="center",padding:s="1rem"}=e;return n.createElement("div",{style:{marginBottom:s,marginTop:s,textAlign:i}},n.createElement("img",{src:t.default,width:r,alt:a,title:o,className:"inline-block"}))}},93365:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(25773),a=(r(27378),r(35318)),o=r(88109);const i={slug:"moon-v1.7",title:"moon v1.7 - Next-generation configuration and errors",authors:["milesj"],tags:["config","errors"],image:"./img/moon/v1.7.png"},s=void 0,l={permalink:"/blog/moon-v1.7",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2023-05-30_moon-v1.7.mdx",source:"@site/blog/2023-05-30_moon-v1.7.mdx",title:"moon v1.7 - Next-generation configuration and errors",description:"With this release, we've rewritten configuration from the ground up, improved error messages, and",date:"2023-05-30T00:00:00.000Z",formattedDate:"May 30, 2023",tags:[{label:"config",permalink:"/blog/tags/config"},{label:"errors",permalink:"/blog/tags/errors"}],readingTime:2.43,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"moon-v1.7",title:"moon v1.7 - Next-generation configuration and errors",authors:["milesj"],tags:["config","errors"],image:"./img/moon/v1.7.png"},nextItem:{title:"proto v0.9 - New GitHub action, plugin unpacking, and more",permalink:"/blog/proto-v0.9"}},c={image:r(46037).Z,authorsImageUrls:[void 0]},u=[{value:"Configuration rewrite",id:"configuration-rewrite",level:2},{value:"Strict parsing",id:"strict-parsing",level:3},{value:"Recursive validation",id:"recursive-validation",level:3},{value:"What&#39;s next?",id:"whats-next",level:3},{value:"Better errors",id:"better-errors",level:2},{value:"Other changes",id:"other-changes",level:2}],d={toc:u};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With this release, we've rewritten configuration from the ground up, improved error messages, and\nstarted work on diagnostics!"),(0,a.kt)("h2",{id:"configuration-rewrite"},"Configuration rewrite"),(0,a.kt)("p",null,"If you've ever written Rust before, you may be familiar with the state of configuration crates in\nthe ecosystem. There's only 2 viable choices to choose from, and we've been using 1 of them.\nHowever, it's been a constant source of friction for our use cases, and didn't support features that\nwe've needed (built-in validation, file extending, and more)."),(0,a.kt)("p",null,"After researching our options, and attempting to contribute upstream, we decided to build our own\nconfiguration solution, unique to moonrepo's projects. As such, we're excited to announce\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/schematic"},"schematic"),", the most powerful configuration crate in the\nRust ecosystem, with built-in features like:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Strict parsing with serde (serilization, deserialization)."),(0,a.kt)("li",{parentName:"ul"},"Code frames in errors (when applicable)."),(0,a.kt)("li",{parentName:"ul"},"Source file/URL extending."),(0,a.kt)("li",{parentName:"ul"},"Partial file parsing and merging."),(0,a.kt)("li",{parentName:"ul"},"Field-level merge strategies."),(0,a.kt)("li",{parentName:"ul"},"Recursive validation."),(0,a.kt)("li",{parentName:"ul"},"Dynamic default and env var values."),(0,a.kt)("li",{parentName:"ul"},"And much more!")),(0,a.kt)("p",null,"We've spent the last few weeks building this crate from the ground up, and migrating the moon\ncodebase to it. It's been quite a feat, but we're very excited for what it has to offer already, and\nwhat's to come!"),(0,a.kt)("h3",{id:"strict-parsing"},"Strict parsing"),(0,a.kt)("p",null,"When we fail to parse a configuration file, we now include a descriptive message of the failure, and\nthe file that failed to parse. Typically this will be for unknown fields and invalid value types."),(0,a.kt)(o.Z,{src:r(35319),width:"90%",mdxType:"Image"}),(0,a.kt)(o.Z,{src:r(21905),width:"90%",mdxType:"Image"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We hope this bubbles up typos and incorrectly nested settings!")),(0,a.kt)("h3",{id:"recursive-validation"},"Recursive validation"),(0,a.kt)("p",null,"Previously when validation would fail, we'd return on the first error and ignore subsequent errors.\nThis is a non-ideal experience as you'd have to constantly run ",(0,a.kt)("inlineCode",{parentName:"p"},"moon")," commands until all validation\nissues have been resolved."),(0,a.kt)("p",null,"Now we aggregate all validation errors, even from deeply nested fields, and present them together."),(0,a.kt)(o.Z,{src:r(704),width:"90%",mdxType:"Image"}),(0,a.kt)("h3",{id:"whats-next"},"What's next?"),(0,a.kt)("p",null,"Since ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/schematic"},"schematic")," is very young, and it hasn't been tested\nheavily in the ecosystem, we expect bugs and weird edge cases to popup. If you encounter any issues,\nplease report them immediately so that we can fix them as soon as possible!"),(0,a.kt)("p",null,"With that being said, we'll continue to improve parsing, error messages, and unique functionality,\nlike code frames within errors. Here's an example for a basic JSON file."),(0,a.kt)(o.Z,{src:r(44221),width:"90%",mdxType:"Image"}),(0,a.kt)("h2",{id:"better-errors"},"Better errors"),(0,a.kt)("p",null,"You may have noticed the errors in the screenshots above look quite different than what we've\nrendered until now, and you are correct. Going forward, all errors will be rendered by the wonderful\nRust crate, ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/miette"},"miette"),"."),(0,a.kt)("p",null,"We've introduced this crate to handle ",(0,a.kt)("em",{parentName:"p"},"all")," errors and diagnostics within moon, not just\nconfiguration. So expect a much better developer experience moving forward!"),(0,a.kt)(o.Z,{src:r(29426),width:"90%",mdxType:"Image"}),(0,a.kt)("h2",{id:"other-changes"},"Other changes"),(0,a.kt)("p",null,"View the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/releases/tag/v1.7.0"},"official release")," for a full list of\nchanges."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added support for npm lockfile v3 format.")))}p.isMDXComponent=!0},44221:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"assets/images/code-frame-d3a7c89957fbda329862d5703004a54a.png"},29426:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"assets/images/errors-f298dbbf1f59c29318216a22e8464fac.png"},21905:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"assets/images/parse-type-2388b085fbfbf10a8f6dd0f74a2fb863.png"},35319:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"assets/images/parse-unknown-2435995564068e43b3a8d5b52f1ddfaa.png"},704:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"assets/images/validate-c6d158c2f0d9ff9919b13b52e58321ea.png"},46037:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/v1.7-1356b391b5588236312e2f059de16e2a.png"}}]);