"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[237],{3342:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var a=n(7378),r=n(1884),s=n(353),i=n(9781),l=n(8896),o=n(9187),c=n(658),m=n(9619);function d(e){var t=e.className;switch(e.status){case"experimental":return a.createElement(m.Z,{className:t,text:"Experimental",variant:"failure"});case"in-development":return a.createElement(m.Z,{className:t,text:"In development",variant:"success"});case"coming-soon":return a.createElement(m.Z,{className:t,text:"Coming soon",variant:"warning"});default:return null}}function p(e){var t=e.header,n=e.features;return a.createElement("div",{className:"bg-white"},a.createElement("div",{className:"relative py-4 sm:py-6 lg:py-8"},a.createElement("div",{className:"mx-auto max-w-md px-2 sm:max-w-3xl sm:px-3 lg:max-w-7xl lg:px-4"},a.createElement(o.Z,{align:"center",className:"text-gray-900",level:3},t),a.createElement("dl",{className:"mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6"},n.map((function(e){return a.createElement("div",{key:e.title,className:"relative"},a.createElement("dt",null,a.createElement(l.Z,{icon:e.icon,className:"absolute h-3 w-3 text-purple-500"}),a.createElement(o.Z,{className:"ml-4 text-gray-900",level:5},e.title)),a.createElement(c.ZP,{as:"dd",className:"mt-1 ml-4",variant:"muted"},e.status&&a.createElement("p",{className:"mb-1"},a.createElement(d,{status:e.status})),e.description))}))))))}var u=n(8944),g={1:"from-slate-600 to-purple-700",2:"from-purple-700 to-purple-200",3:"from-purple-200 to-white",4:"bg-white"},x={1:"from-purple-600 to-blurple-600",2:"from-pink-400 to-red-400",3:"from-teal-400 to-slate-100",4:"from-yellow-300 to-green-600"},f={1:"text-blurple-300",2:"text-pink-500",3:"text-teal-600",4:"text-green-600"};function h(e){var t=e.header,n=e.description,r=e.features,s=e.reversed,i=e.tier;return a.createElement("div",{className:(0,u.Z)("bg-gradient-to-b",g[i])},a.createElement("div",{className:"relative py-4 sm:py-5 lg:py-6"},a.createElement("div",{className:"mx-auto max-w-md px-2 sm:max-w-3xl sm:px-3 lg:max-w-7xl lg:px-4"},a.createElement("div",{className:(0,u.Z)("md:flex items-center justify-between",s&&"flex-row-reverse")},a.createElement("aside",{className:(0,u.Z)("md:w-1/3 mx-2 md:mx-0 p-2 sm:p-3 md:p-4 drop-shadow z-0 rounded-t-lg text-center",s?"md:rounded-tl-none md:rounded-tr-lg md:rounded-bl-none md:rounded-br-lg bg-gradient-to-bl md:pl-0 md:text-left":"md:rounded-tl-lg md:rounded-tr-none md:rounded-bl-lg md:rounded-br-none bg-gradient-to-br md:pr-0 md:text-right",x[i])},a.createElement("h2",{className:(0,u.Z)("m-0 px-1 py-0.5 inline-block text-base font-semibold uppercase tracking-wider text-white bg-black/20 rounded",s?"md:rounded-tl-none md:rounded-bl-none md:pl-4":"md:rounded-tr-none md:rounded-br-none md:pr-4")},t),a.createElement(o.Z,{className:(0,u.Z)("mt-2 text-white",s?"md:ml-4":"md:mr-4"),level:2},n)),a.createElement("section",{className:"md:w-2/3 bg-white rounded-lg p-2 md:p-3 lg:p-4 drop-shadow z-10"},a.createElement("ul",{className:"m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 lg:gap-4"},r.map((function(e){return a.createElement("li",{key:e.title,className:"flex"},a.createElement(l.Z,{icon:e.icon,className:(0,u.Z)("pt-1 w-9 text-5xl shrink-0 grow-0 justify-center flex",f[i])}),a.createElement("div",{className:"ml-1"},a.createElement(o.Z,{level:4,className:"text-gray-900"},e.title),e.status&&a.createElement("p",{className:"m-0"},a.createElement(d,{status:e.status})),a.createElement(c.ZP,{className:"mt-1",variant:"muted"},e.description)))}))))))))}function b(){var e=(0,s.Z)().siteConfig;return a.createElement("div",{className:"bg-gradient-to-b from-slate-900 to-slate-600 star-pattern"},a.createElement("div",{className:"max-w-7xl mx-auto py-10 px-4 sm:py-12 sm:px-6 md:py-14 lg:py-16 lg:px-8 xl:py-20 text-center lg:text-left"},a.createElement("h1",{className:"text-6xl tracking-tight font-extrabold text-purple-600"},a.createElement("img",{src:"/img/logo-hero.svg",alt:e.title,title:e.title,width:300})),a.createElement("p",{className:"mt-1 mb-0 text-base text-white sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0"},e.tagline,a.createElement("span",{className:"opacity-50"},",",a.createElement("br",null)," powered by Rust.")),a.createElement("div",{className:"mt-3 flex justify-center lg:justify-start"},a.createElement("div",null,a.createElement(r.Z,{href:"/docs/install",className:"w-full flex items-center justify-center px-2 py-1 sm:px-3 sm:py-2 text-base font-bold rounded-md text-white hover:text-white bg-purple-600 hover:scale-110 md:text-lg transition-transform"},"Get started",a.createElement(l.Z,{icon:i.XEr,className:"ml-1 md:ml-2 inline-block"}))),a.createElement("div",{className:"ml-1 sm:ml-2 lg:ml-3"},a.createElement(r.Z,{href:"https://www.npmjs.com/package/@moonrepo/cli",className:"w-full flex items-center justify-center px-2 py-1 sm:px-3 sm:py-2 text-base font-bold rounded-md text-white hover:text-white bg-white/5 hover:scale-110 md:text-lg group transition-transform"},a.createElement("span",{className:"opacity-50"},"v"),n(7107).i8)))))}var w=n(5055),E=[{title:"Smart hashing",icon:i.QGx,description:"Collects inputs from multiple sources to ensure builds are deterministic and reproducible.",status:"experimental"},{title:"Remote caching",icon:i.wEO,description:"Persists builds, hashes, and caches between teammates and CI/CD environments.",status:"coming-soon"},{title:"Integrated toolchain",icon:i.AlB,description:"Automatically downloads and installs explicit versions of Node.js and other tools for consistency."},{title:"Multi-platform",icon:i.Ff$,description:"Runs on common development platforms: Linux, MacOS, and Windows."}],v=[{title:"Project graph",icon:i.Bkj,description:"Generates a project graph for dependency and dependent relationships."},{title:"Project boundaries",icon:i.E_d,description:"Enforces boundaries to eliminate cycles and reduce indirection."},{title:"Dependency workspaces",icon:i.JUO,description:"Works alongside package manager workspaces so that projects have distinct dependency trees."},{title:"Ownership metadata",icon:i.iJk,description:"Declare an owner, maintainers, support channels, and more, for LDAP or another integration."}],y=[{title:"Dependency graph",icon:i.Hw7,description:"Generates a dependency graph to increase performance and reduce workloads."},{title:"Action runner",icon:i.ar8,description:"Executes actions in parallel and in order using a thread pool and our dependency graph."},{title:"Action distribution",icon:i.fjp,description:"Distributes actions across multiple machines to increase throughput.",status:"coming-soon"},{title:"Incremental builds",icon:i.dzC,description:"With our smart hashing, only rebuild projects that have been touched since the last build.",status:"experimental"}],N=[{title:"Flakiness detection",icon:i.I85,description:"Reduce flaky builds with automatic retries and passthrough settings.",status:"experimental"},{title:"Webhook events",icon:i.h94,description:"Receive a webhook for every event in the pipeline. Useful for metrics gathering.",status:"coming-soon"},{title:"Terminal notifications",icon:i.Azy,description:"Receives notifications in your chosen terminal when builds are successful... or are not.",status:"coming-soon"}],k=[{title:"Configuration & convention",icon:i.auv,description:"Use moon the way you want, but with some guard rails."},{title:"Scalability aware",icon:i.o$R,description:"Engineered to scale and grow for codebases of any size."},{title:"Integrated packages",icon:i.m_D,description:a.createElement(a.Fragment,null,"Enhance your pipeline with our"," ",a.createElement(r.Z,{href:"https://www.npmjs.com/org/moonrepo"},"@moonrepo")," npm packages."),status:"in-development"},{title:"Node.js inspection",icon:i.BC0,description:"Inspect and debug failing Node.js processes.",status:"coming-soon"},{title:"Build profiles",icon:i.b2$,description:"Generate build profiles that can be reviewed in Chrome.",status:"coming-soon"},{title:"Editor extensions",icon:i.E_d,description:"Utilize moon extensions in your favorite editor.",status:"coming-soon"}];function Z(){var e=(0,s.Z)().siteConfig;return a.createElement(w.Z,{title:"Hello from "+e.title,description:"Description will go into a meta tag in <head />"},a.createElement(b,null),a.createElement("main",null,a.createElement(h,{header:"Management",description:"Develop more, manage less",features:E,tier:1}),a.createElement(h,{header:"Organization",description:"Architect a repository to scale",features:v,tier:2,reversed:!0}),a.createElement(h,{header:"Orchestration",description:"Offload heavy tasks",features:y,tier:3}),a.createElement(h,{header:"Notification",description:"Monitor pipeline health",features:N,tier:4,reversed:!0}),a.createElement(p,{header:"And many more features",features:k})))}},9619:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7378),r=n(8944),s=n(8896),i={failure:"bg-red-100 text-red-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function l(e){var t=e.className,n=e.icon,l=e.text,o=e.variant;return a.createElement("span",{className:(0,r.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",o?i[o]:"bg-gray-100 text-gray-800",t)},n&&a.createElement(s.Z,{icon:n,className:"mr-1"}),l)}},7107:function(e){e.exports={i8:"0.0.5"}}}]);