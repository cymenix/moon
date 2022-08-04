"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9950],{5318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8523:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m}});var a=n(5773),o=n(808),r=n(7378),l=n(5318);function i(e){var t=e.alt,n=e.src;return r.createElement("div",{className:"m-3 text-center"},r.createElement("img",{alt:t,src:n.default,className:"block w-auto max-w-full"}))}var s=["components"],p={title:"Profiling tasks"},c=void 0,d={unversionedId:"guides/profile",id:"guides/profile",title:"Profiling tasks",description:"Troubleshooting slow or unperformant tasks? Profile and diagnose them with ease!",source:"@site/docs/guides/profile.mdx",sourceDirName:"guides",slug:"/guides/profile",permalink:"/docs/guides/profile",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/profile.mdx",tags:[],version:"current",frontMatter:{title:"Profiling tasks"},sidebar:"docs",previous:{title:"Open source usage",permalink:"/docs/guides/open-source"},next:{title:"Root-level project",permalink:"/docs/guides/root-project"}},u={},m=[{value:"CPU snapshots",id:"cpu-snapshots",level:2},{value:"Record a profile",id:"record-a-profile",level:3},{value:"Analyze in Chrome",id:"analyze-in-chrome",level:3},{value:"Heap snapshots",id:"heap-snapshots",level:2},{value:"Record a profile",id:"record-a-profile-1",level:3},{value:"Analyze in Chrome",id:"analyze-in-chrome-1",level:3},{value:"Views",id:"views",level:2},{value:"Bottom up",id:"bottom-up",level:3},{value:"Top down",id:"top-down",level:3},{value:"Flame chart",id:"flame-chart",level:3}],f={toc:m};function h(e){var t=e.components,r=(0,o.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Troubleshooting slow or unperformant tasks? Profile and diagnose them with ease!"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Profiling is only supported by Node.js based tasks, and is not supported by tasks that are created\nthrough ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," inferrence.")),(0,l.kt)("h2",{id:"cpu-snapshots"},"CPU snapshots"),(0,l.kt)("p",null,"CPU profiling helps you get a better understanding of which parts of your code require the most CPU\ntime, and how your code is executed and optimized by Node.js. The profiler will measure code\nexecution and activities performed by the engine itself, such as compilation, calls of system\nlibraries, optimization, and garbage collection."),(0,l.kt)("h3",{id:"record-a-profile"},"Record a profile"),(0,l.kt)("p",null,"To record a CPU profile, pass ",(0,l.kt)("inlineCode",{parentName:"p"},"--profile cpu")," to the ",(0,l.kt)("a",{parentName:"p",href:"../commands/run"},(0,l.kt)("inlineCode",{parentName:"a"},"moon run"))," command. When\nsuccessful, the profile will be written to ",(0,l.kt)("inlineCode",{parentName:"p"},".moon/cache/runs/<project>/<task>/snapshot.cpuprofile"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon run --profile cpu app:lint\n")),(0,l.kt)("h3",{id:"analyze-in-chrome"},"Analyze in Chrome"),(0,l.kt)("p",null,"CPU profiles can be reviewed and analyzed with\n",(0,l.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/devtools/"},"Chrome developer tools")," using the following steps."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open Chrome and navigate to ",(0,l.kt)("inlineCode",{parentName:"li"},"chrome://inspect"),"."),(0,l.kt)("li",{parentName:"ol"},'Under "Devices", navigate to "Open dedicated DevTools for Node".'),(0,l.kt)("li",{parentName:"ol"},'The following window will popup. Ensure the "Profiler" tab is selected.')),(0,l.kt)(i,{src:n(3124),alt:"DevTools Profiler - CPU",mdxType:"Image"}),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},'Click "Load" and select the ',(0,l.kt)("inlineCode",{parentName:"li"},"snapshot.cpuprofile")," that was\n",(0,l.kt)("a",{parentName:"li",href:"#record-a-profile"},"previously recorded"),". If successful, the snapshot will appear in the left\ncolumn.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"On macOS, press ",(0,l.kt)("inlineCode",{parentName:"p"},"command")," + ",(0,l.kt)("inlineCode",{parentName:"p"},"shift")," + ",(0,l.kt)("inlineCode",{parentName:"p"},".")," to display hidden files and folders, to locate the\n",(0,l.kt)("inlineCode",{parentName:"p"},".moon")," folder.")),(0,l.kt)(i,{src:n(1924),alt:"DevTools Profiler - CPU snapshot loaded",mdxType:"Image"}),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Select the snapshot in the left column. From here, the snapshot can be analyzed and represented\nwith ",(0,l.kt)("a",{parentName:"li",href:"#bottom-up"},"Bottom up"),", ",(0,l.kt)("a",{parentName:"li",href:"#top-down"},"Top down"),", or ",(0,l.kt)("a",{parentName:"li",href:"#flame-chart"},"Flame chart")," views.")),(0,l.kt)(i,{src:n(3127),alt:"DevTools Profiler - CPU snapshot being analyzed through charts",mdxType:"Image"}),(0,l.kt)("h2",{id:"heap-snapshots"},"Heap snapshots"),(0,l.kt)("p",null,"Heap profiling lets you detect memory leaks, dynamic memory problems, and locate the fragments of\ncode that caused them."),(0,l.kt)("h3",{id:"record-a-profile-1"},"Record a profile"),(0,l.kt)("p",null,"To record a heap profile, pass ",(0,l.kt)("inlineCode",{parentName:"p"},"--profile heap")," to the ",(0,l.kt)("a",{parentName:"p",href:"../commands/run"},(0,l.kt)("inlineCode",{parentName:"a"},"moon run"))," command. When\nsuccessful, the profile will be written to ",(0,l.kt)("inlineCode",{parentName:"p"},".moon/cache/runs/<project>/<task>/snapshot.heapprofile"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon run --profile heap app:lint\n")),(0,l.kt)("h3",{id:"analyze-in-chrome-1"},"Analyze in Chrome"),(0,l.kt)("p",null,"Heap profiles can be reviewed and analyzed with\n",(0,l.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/devtools/"},"Chrome developer tools")," using the following steps."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open Chrome and navigate to ",(0,l.kt)("inlineCode",{parentName:"li"},"chrome://inspect"),"."),(0,l.kt)("li",{parentName:"ol"},'Under "Devices", navigate to "Open dedicated DevTools for Node".'),(0,l.kt)("li",{parentName:"ol"},'The following window will popup. Ensure the "Memory" tab is selected.')),(0,l.kt)(i,{src:n(2634),alt:"DevTools Profiler - Heap",mdxType:"Image"}),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},'Click "Load" and select the ',(0,l.kt)("inlineCode",{parentName:"li"},"snapshot.heapprofile")," that was\n",(0,l.kt)("a",{parentName:"li",href:"#record-a-profile-1"},"previously recorded"),". If successful, the snapshot will appear in the left\ncolumn.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"On macOS, press ",(0,l.kt)("inlineCode",{parentName:"p"},"command")," + ",(0,l.kt)("inlineCode",{parentName:"p"},"shift")," + ",(0,l.kt)("inlineCode",{parentName:"p"},".")," to display hidden files and folders, to locate the\n",(0,l.kt)("inlineCode",{parentName:"p"},".moon")," folder.")),(0,l.kt)(i,{src:n(6030),alt:"DevTools Profiler - Heap snapshot loaded",mdxType:"Image"}),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Select the snapshot in the left column. From here, the snapshot can be analyzed and represented\nwith ",(0,l.kt)("a",{parentName:"li",href:"#bottom-up"},"Bottom up"),", ",(0,l.kt)("a",{parentName:"li",href:"#top-down"},"Top down"),", or ",(0,l.kt)("a",{parentName:"li",href:"#flame-chart"},"Flame chart")," views.")),(0,l.kt)(i,{src:n(9427),alt:"DevTools Profiler - Heap snapshot being analyzed through charts",mdxType:"Image"}),(0,l.kt)("h2",{id:"views"},"Views"),(0,l.kt)("p",null,"Chrome DevTools provide 3 views for analyzing activities within a snapshot. Each view gives you a\ndifferent perspective on these activities."),(0,l.kt)("h3",{id:"bottom-up"},"Bottom up"),(0,l.kt)("p",null,"The Bottom up view is helpful if you encounter a heavy function and want to find out where it was\ncalled from."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'The "Self Time" column represents the aggregated time spent directly in that activity, across all\nof its occurrences.'),(0,l.kt)("li",{parentName:"ul"},'The "Total Time" column represents aggregated time spent in that activity or any of its children.'),(0,l.kt)("li",{parentName:"ul"},'The "Function" column is the function that was executed, including source location, and any\nchildren.')),(0,l.kt)(i,{src:n(8455),alt:"Bottom up profiler view",mdxType:"Image"}),(0,l.kt)("h3",{id:"top-down"},"Top down"),(0,l.kt)("p",null,"The Top down view works in a similar fashion to ",(0,l.kt)("a",{parentName:"p",href:"#bottom-up"},"Bottom up"),", but displays functions\nstarting from the top-level entry points. These are also known as root activities."),(0,l.kt)(i,{src:n(1046),alt:"Top down profiler view",mdxType:"Image"}),(0,l.kt)("h3",{id:"flame-chart"},"Flame chart"),(0,l.kt)("p",null,"DevTools represents main thread activity with a flame chart. The x-axis represents the recording\nover time. The y-axis represents the call stack. The events on top cause the events below it."),(0,l.kt)(i,{src:n(3632),alt:"Flame chart profiler view",mdxType:"Image"}))}h.isMDXComponent=!0},8455:function(e,t,n){n.r(t),t.default=n.p+"assets/images/bottom-up-2e2e925bb1bd78f49bf29e4f6f848f7c.png"},1924:function(e,t,n){n.r(t),t.default=n.p+"assets/images/cpu-loaded-ff6afad307a77cc32e53364c0cd3a597.png"},3127:function(e,t,n){n.r(t),t.default=n.p+"assets/images/cpu-selected-febbd2aef4ffaea46979cbeb583bd648.png"},3124:function(e,t,n){n.r(t),t.default=n.p+"assets/images/cpu-deb9e0f9310721da8e3394071dbaa637.png"},3632:function(e,t,n){n.r(t),t.default=n.p+"assets/images/flame-chart-aa69d1306f8472d449c7d9755e7995e8.png"},6030:function(e,t,n){n.r(t),t.default=n.p+"assets/images/heap-loaded-4bbbd3b5dd677a0d5bbdce7585ea3286.png"},9427:function(e,t,n){n.r(t),t.default=n.p+"assets/images/heap-selected-41365c3cb6e1244aa6dd2382e58b5804.png"},2634:function(e,t,n){n.r(t),t.default=n.p+"assets/images/heap-3451a7088c4f41a89ad4e068d250f6b4.png"},1046:function(e,t,n){n.r(t),t.default=n.p+"assets/images/top-down-409f6e1447d9875d7013017d0c7f643c.png"}}]);