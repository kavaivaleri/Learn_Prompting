"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1702],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=s(n),m=a,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[f]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>f});var r=n(87462),a=(n(67294),n(3905));const i=n.p+"assets/images/jailbreak_research-0f63ed07608ef5aa94f0007fbd2a0f6b.png",o=n.p+"assets/images/injection_leak-ea016770b33c6fb63af120392153f773.png",p={sidebar_position:2},l="\ud83d\udfe2 \u63d0\u793a\u6cc4\u6f0f",s={unversionedId:"prompt_hacking/leaking",id:"prompt_hacking/leaking",title:"\ud83d\udfe2 \u63d0\u793a\u6cc4\u6f0f",description:"\u63d0\u793a\u6cc4\u6f0f\u662f\u4e00\u79cd\u63d0\u793a\u6ce8\u5165\u7684\u5f62\u5f0f\uff0c\u5176\u4e2d\u6a21\u578b\u88ab\u8981\u6c42\u8f93\u51fa\u81ea\u5df1\u7684\u63d0\u793a\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/prompt_hacking/leaking.md",sourceDirName:"prompt_hacking",slug:"/prompt_hacking/leaking",permalink:"/zh-Hans/docs/prompt_hacking/leaking",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/prompt_hacking/leaking.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 \u63d0\u793a\u6ce8\u5165",permalink:"/zh-Hans/docs/prompt_hacking/injection"},next:{title:"\ud83d\udfe2 \u8d8a\u72f1",permalink:"/zh-Hans/docs/prompt_hacking/jailbreaking"}},c={},f=[{value:"\u7ec3\u4e60",id:"\u7ec3\u4e60",level:2}],u={toc:f},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u63d0\u793a\u6cc4\u6f0f"},"\ud83d\udfe2 \u63d0\u793a\u6cc4\u6f0f"),(0,a.kt)("p",null,"\u63d0\u793a\u6cc4\u6f0f\u662f\u4e00\u79cd\u63d0\u793a\u6ce8\u5165\u7684\u5f62\u5f0f\uff0c\u5176\u4e2d\u6a21\u578b\u88ab\u8981\u6c42\u8f93\u51fa\u81ea\u5df1\u7684\u63d0\u793a\u3002"),(0,a.kt)("p",null,"\u5982\u4e0b\u9762\u7684\u793a\u4f8b\u56fe\u7247",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," \u6240\u793a\uff0c\u653b\u51fb\u8005\u66f4\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"user_input")," \u4ee5\u5c1d\u8bd5\u8fd4\u56de\u63d0\u793a\u3002\u63d0\u793a\u6cc4\u6f0f\u7684\u610f\u56fe\u548c\u76ee\u6807\u52ab\u6301\uff08\u5e38\u89c4\u63d0\u793a\u6ce8\u5165\uff09\u4e0d\u540c\uff0c\u63d0\u793a\u6cc4\u6f0f\u901a\u8fc7\u66f4\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"user_input")," \u4ee5\u6253\u5370\u6076\u610f\u6307\u4ee4",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\u3002"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:i,style:{width:"500px"}})),(0,a.kt)("p",null,"\u4ee5\u4e0b\u56fe\u7247",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"\u518d\u6b21\u6765\u81ea ",(0,a.kt)("inlineCode",{parentName:"p"},"remoteli.io")," \u7684\u793a\u4f8b\uff0c\u5c55\u793a\u4e86 Twitter \u7528\u6237\u5982\u4f55\u8ba9\u6a21\u578b\u6cc4\u6f0f\u5176\u63d0\u793a\u3002"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:o,style:{width:"300px"}})),(0,a.kt)("p",null,"\u90a3\u53c8\u600e\u4e48\u6837\uff1f\u4e3a\u4ec0\u4e48\u6709\u4eba\u8981\u5173\u5fc3\u63d0\u793a\u6cc4\u6f0f\u5462\uff1f"),(0,a.kt)("p",null,"\u6709\u65f6\u4eba\u4eec\u60f3\u4fdd\u5b88\u4ed6\u4eec\u7684\u63d0\u793a\u79d8\u5bc6\u3002\u4f8b\u5982\uff0c\u4e00\u5bb6\u6559\u80b2\u516c\u53f8\u53ef\u80fd\u6b63\u5728\u4f7f\u7528\u63d0\u793a",(0,a.kt)("inlineCode",{parentName:"p"},"\u7528 5 \u5c81\u5c0f\u5b69\u80fd\u542c\u61c2\u7684\u65b9\u5f0f\u89e3\u91ca\u8fd9\u4e2a"),"\uff0c\u6765\u89e3\u91ca\u590d\u6742\u7684\u4e3b\u9898\u3002\u5982\u679c\u63d0\u793a\u6cc4\u6f0f\u4e86\uff0c\u90a3\u4e48\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u4f7f\u7528\u5b83\uff0c\u800c\u4e0d\u5fc5\u901a\u8fc7\u8be5\u516c\u53f8\u3002"),(0,a.kt)("p",null,"\u968f\u7740\u57fa\u4e8e GPT-3 \u7684\u521d\u521b\u516c\u53f8\u7684\u4e0d\u65ad\u6d8c\u73b0\uff0c\u4ed6\u4eec\u7684\u63d0\u793a\u66f4\u52a0\u590d\u6742\uff0c\u9700\u8981\u8017\u8d39\u6570\u5c0f\u65f6\u7684\u5f00\u53d1\u65f6\u95f4\uff0c\u63d0\u793a\u6cc4\u6f0f\u6210\u4e3a\u4e86\u4e00\u4e2a\u771f\u6b63\u7684\u95ee\u9898\u3002"),(0,a.kt)("h2",{id:"\u7ec3\u4e60"},"\u7ec3\u4e60"),(0,a.kt)("p",null,"\u5c1d\u8bd5\u901a\u8fc7\u5411\u63d0\u793a\u6dfb\u52a0\u6587\u672c\u6765\u6cc4\u6f0f\u4ee5\u4e0b\u63d0\u793a",(0,a.kt)("sup",{parentName:"p",id:"fnref-3"},(0,a.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),"\uff1a"),(0,a.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"English: I want to go to the park today.\\nFrench: Je veux aller au parc aujourd'hui.\\nEnglish: I like to wear a hat when it rains.\\nFrench: J'aime porter un chapeau quand it pleut.\\nEnglish: What are you doing at school?\\nFrench: Qu'est-ce que to fais a l'ecole?\\nEnglish:","initial-response":"","max-tokens":"256","box-rows":"9","model-temp":"0.7","top-p":"1"}),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Perez, F., & Ribeiro, I. (2022). Ignore Previous Prompt: Attack Techniques For Language Models. arXiv. https://doi.org/10.48550/ARXIV.2211.09527\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Willison, S. (2022). Prompt injection attacks against GPT-3. https://simonwillison.net/2022/Sep/12/prompt-injection/\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-3"},"Chase, H. (2022). adversarial-prompts. https://github.com/hwchase17/adversarial-prompts\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);