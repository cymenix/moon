"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47890],{22206:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var n=o(24246),s=o(71670);const l={slug:"proto-v0.18",title:"proto v0.18 - List installed tools and configure HTTP client",authors:["milesj"],tags:["proto","http","registry","index"],image:"./img/proto/v0.18.png"},r=void 0,a={permalink:"/blog/proto-v0.18",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2023-09-18_proto-v0.18.mdx",source:"@site/blog/2023-09-18_proto-v0.18.mdx",title:"proto v0.18 - List installed tools and configure HTTP client",description:"Today we've got a small release that includes some helpful features.",date:"2023-09-18T00:00:00.000Z",formattedDate:"September 18, 2023",tags:[{label:"proto",permalink:"/blog/tags/proto"},{label:"http",permalink:"/blog/tags/http"},{label:"registry",permalink:"/blog/tags/registry"},{label:"index",permalink:"/blog/tags/index"}],readingTime:1.83,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"proto-v0.18",title:"proto v0.18 - List installed tools and configure HTTP client",authors:["milesj"],tags:["proto","http","registry","index"],image:"./img/proto/v0.18.png"},unlisted:!1,prevItem:{title:"moon v1.14 - Improvements to running targets and toolchain versions",permalink:"/blog/moon-v1.14"},nextItem:{title:"proto v0.17 - Experimental Python support and canary releases",permalink:"/blog/proto-v0.17"}},i={image:o(63078).Z,authorsImageUrls:[void 0]},d=[{value:"New <code>proto tools</code> command",id:"new-proto-tools-command",level:2},{value:"New <code>[http]</code> user settings",id:"new-http-user-settings",level:2},{value:"Index for third-party tools",id:"index-for-third-party-tools",level:2},{value:"Other changes",id:"other-changes",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Today we've got a small release that includes some helpful features."}),"\n",(0,n.jsxs)(t.h2,{id:"new-proto-tools-command",children:["New ",(0,n.jsx)(t.code,{children:"proto tools"})," command"]}),"\n",(0,n.jsxs)(t.p,{children:["Are you curious what tools you have installed? And more specifically, which versions? What about\nconfigured aliases? Until now, you had to manually check the ",(0,n.jsx)(t.code,{children:"~/.proto/tools"})," directory for this\ninformation, but now, you can simply run ",(0,n.jsx)(t.a,{href:"/docs/proto/commands/tool/list",children:(0,n.jsx)(t.code,{children:"proto tools"})})," to get a\nlist of all installed tools."]}),"\n",(0,n.jsx)(t.p,{children:"This command will list all tools that have been installed, along with their installed versions,\nrelevant timestamps, available aliases, and store location."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"$ proto tools\ngo - Go\n  Store: ~/.proto/tools/go\n  Versions:\n    1.20.0 - installed 08/24/23, last used 09/18/23\n    1.20.2 - installed 01/01/70, last used 09/18/23, default version\n\nnode - Node.js\n  Store: ~/.proto/tools/node\n  Aliases:\n    ~20 = stable\n  Versions:\n    18.0.0 - installed 09/03/23, last used 09/18/23, default version\n    18.14.0 - installed 09/04/23, last used 09/04/23\n    18.17.1 - installed 09/04/23, last used 09/04/23\n    19.0.0 - installed 09/03/23\n    20.0.0 - installed 09/03/23\n    20.6.0 - installed 09/04/23, last used 09/18/23\n"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["This information can also be represented as JSON by passing the ",(0,n.jsx)(t.code,{children:"--json"})," flag."]}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"new-http-user-settings",children:["New ",(0,n.jsx)(t.code,{children:"[http]"})," user settings"]}),"\n",(0,n.jsxs)(t.p,{children:["Furthermore, we've added a new\n",(0,n.jsxs)(t.a,{href:"/docs/proto/config#settingshttp",children:[(0,n.jsx)(t.code,{children:"[http]"})," setting to ",(0,n.jsx)(t.code,{children:"~/.proto/config.toml"})]})," that allows you to\nconfigure aspects of the HTTP client, which is primarily used for downloading tools."]}),"\n",(0,n.jsx)(t.p,{children:"This may useful if you're behind a proxy, a VPN, or corporate network, and certain requests and\ncertificates are blocked."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-toml",metastring:'title="~/.proto/config.toml"',children:'[http]\nproxies = ["http://intra.net/proxy"]\nroot-cert = "/path/to/root/cert.pem"\n'})}),"\n",(0,n.jsx)(t.h2,{id:"index-for-third-party-tools",children:"Index for third-party tools"}),"\n",(0,n.jsxs)(t.p,{children:["Now that our TOML and WASM plugins have stabilized, we felt the time was right to start working on a\nthird-party index, a registry of all available tools. We've updated the official\n",(0,n.jsx)(t.a,{href:"/docs/proto/tools",children:"Supported tools"})," documentation to now include third-party tools."]}),"\n",(0,n.jsxs)(t.p,{children:["At this time, the list of tools is powered by a JS/JSON object,\n",(0,n.jsx)(t.a,{href:"https://github.com/moonrepo/moon/blob/master/website/src/data/proto-tools.tsx",children:"which can be found here"}),".\nIn the future, we may move this to a database, add filtering, sorting, and everything else necessary\nfor showcasing tools maintained by the community!"]}),"\n",(0,n.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,n.jsxs)(t.p,{children:["View the ",(0,n.jsx)(t.a,{href:"https://github.com/moonrepo/proto/releases/tag/v0.18.0",children:"official release"})," for a full list\nof changes."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"For TOML plugins, we updated the schema internally to be represented as JSON instead of TOML,\nwhich may cause breakages depending on a version mismatch between proto and the plugin."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},63078:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/v0.18-5b6a0663f8077d6443d06ab243e966f6.png"},71670:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>r});var n=o(27378);const s={},l=n.createContext(s);function r(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);