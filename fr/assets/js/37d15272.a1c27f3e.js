"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1763],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var s=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=s.createContext({}),i=function(e){var n=s.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=i(e.components);return s.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},m=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=i(t),m=r,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return t?s.createElement(g,o(o({ref:n},c),{},{components:t})):s.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var i=2;i<a;i++)o[i]=t[i];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}m.displayName="MDXCreateElement"},25862:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var s=t(87462),r=(t(67294),t(3905));const a={sidebar_position:30},o="\ud83d\udfe2 Blogs",l={unversionedId:"basic_applications/blog_generation",id:"basic_applications/blog_generation",title:"\ud83d\udfe2 Blogs",description:"Et si vous pouviez \xe9crire un article de blog en 5 secondes?",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/basic_applications/blog_generation.md",sourceDirName:"basic_applications",slug:"/basic_applications/blog_generation",permalink:"/fr/docs/basic_applications/blog_generation",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basic_applications/blog_generation.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2\xa0\xc9crire un e-mail",permalink:"/fr/docs/basic_applications/writing_emails"},next:{title:"\ud83d\udfe2 Ami de r\xe9visions",permalink:"/fr/docs/basic_applications/study_tool"}},u={},i=[{value:"Conclusion",id:"conclusion",level:2}],c={toc:i},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,s.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-blogs"},"\ud83d\udfe2 Blogs"),(0,r.kt)("p",null,"Et si vous pouviez \xe9crire un article de blog en 5 secondes?"),(0,r.kt)("p",null,"Franchement, vous ne le pouvez pas. Mais l'IA peut ",(0,r.kt)("strong",{parentName:"p"},"r\xe9duire consid\xe9rablement")," le temps n\xe9cessaire pour \xe9crire un article de blog."),(0,r.kt)("p",null,"Cette page couvre les bases de l'utilisation de l'IA pour vous aider \xe0 \xe9crire un blog. Le processus doit \xeatre it\xe9ratif : vous devez \xe9crire des prompts, voir ce que le mod\xe8le produit, prendre des \xe9l\xe9ments de la production et r\xe9p\xe9ter cela."),(0,r.kt)("p",null,"\xc0 titre d'exemple, imaginez que vous travaillez dans une p\xe9pini\xe8re et que vous r\xe9digez un article sur \"Pourquoi les cactus de No\xebl sont un excellent achat\". J'aime toujours commencer par une structure, alors commen\xe7ons par le prompt suivant :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\xc9crivez une structure pour un court article de blog sur les raisons pour lesquelles les cactus de No\xebl sont un excellent achat.\n\nIl existe de nombreux produits qui tentent de le faire, mais vous pouvez souvent obtenir des r\xe9sultats coh\xe9rents en le faisant vous-m\xeame.\n\n// highlight-start\nI. Introduction\nA. Aper\xe7u des cactus de No\xebl\nB. Avantages de poss\xe9der un cactus de No\xebl\n\nII. Les cactus de No\xebl sont abordables\nA. Co\xfbt des cactus de No\xebl\nB. Comparaison avec d'autres plantes d'int\xe9rieur\n\nIII. Les cactus de No\xebl ont une longue dur\xe9e de vie\nA. Esp\xe9rance de vie moyenne des cactus de No\xebl\nB. Faibles exigences en mati\xe8re d'entretien\n\nIV. Les cactus de No\xebl font de superbes cadeaux\nA. Couleur et forme uniques des fleurs\nB. Facile \xe0 entretenir et de longue dur\xe9e\n\nV. Conclusion\nA. R\xe9sum\xe9 des avantages de poss\xe9der un cactus de No\xebl\nB. O\xf9 trouver un cactus de No\xebl\nC. Suggestions pour les soins et l'entretien\n\n//highlight-end\n")),(0,r.kt)("p",null,"Wow, c'est assez exhaustif. Peut-\xeatre voulons-nous un article un peu plus court, donc demandons \xe0 l'IA d'\xe9crire une version plus courte en utilisant ce prompt :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"C'est une excellente structure, mais un peu longue. R\xe9sumez les points principaux :\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Nous supposons que vous utilisez ChatGPT (si ce n'est pas le cas, placez simplement la structure avant ce nouveau prompt)")),(0,r.kt)("p",null,"Voici la sortie du mod\xe8le :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"// highlight-start\nI. Introduction\nA. Aper\xe7u des cactus de No\xebl\n\nII. Avantages\nA. Abordable\nB. Longue dur\xe9e de vie\nC. Grands cadeaux\n\nIII. Conclusion\nA. R\xe9sum\xe9 des avantages\nB. O\xf9 trouver\nC. Suggestions pour les soins et l'entretien\n//highlight-end\n")),(0,r.kt)("p",null,"Parfait ! Maintenant, demandons-lui d'utiliser cette structure pour \xe9crire un article de blog complet :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\xc9crivez un court article de blog en utilisant cette structure sur les raisons pour lesquelles les cactus de No\xebl sont un excellent achat.\n\n// highlight-start\nLes cactus de No\xebl sont un excellent achat pour la saison des f\xeates ! Ils sont une option abordable et durable qui fait de grands cadeaux. Les cactus de No\xebl sont faciles \xe0 trouver dans la plupart des jardineries et magasins de plantes, et ils varient en prix de quelques dollars \xe0 plus cher, selon la taille et la forme de la plante.\n\nCes plantes sont \xe9galement connues pour leur longue dur\xe9e de vie. Si elles sont bien entretenues, elles peuvent durer de nombreuses ann\xe9es, offrant \xe0 vos amis et votre famille un rappel \xe9ternel de l'esprit des f\xeates. Les cactus de No\xebl sont assez faciles \xe0 entretenir et n\xe9cessitent un entretien minimal, ce qui en fait une excellente option pour quelqu'un qui n'a pas beaucoup d'exp\xe9rience avec les plantes. Ils doivent \xeatre plac\xe9s dans un endroit lumineux et ensoleill\xe9, arros\xe9s r\xe9guli\xe8rement et recevoir de l'engrais pour plantes tous les mois environ.\n\nDans l'ensemble, les cactus de No\xebl sont un excellent achat pour les f\xeates. Ils sont abordables, ont une longue dur\xe9e de vie et font de grands cadeaux. Avec un entretien et une attention minimaux, ces plantes peuvent offrir un beau rappel de la saison des f\xeates pendant des ann\xe9es \xe0 venir.\n//highlight-end\n")),(0,r.kt)("p",null,"Tr\xe8s bien, cela semble assez bon. Nous voulons probablement ajouter des informations sur notre entreprise et nos tarifs pour les cactus de No\xebl, alors utilisons le prompt suivant :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Parfait ! Ajoutez un paragraphe \xe0 la fin sur notre entreprise et nos tarifs pour les cactus de No\xebl.\nEntreprise: Prickly Point Nursery\nPrix pour un cactus de No\xebl : 10 $ \xe0 25 $\n")),(0,r.kt)("p",null,"Voici la sortie du mod\xe8le :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"// highlight-start\nLes cactus de No\xebl sont un excellent achat pour la saison des f\xeates ! Ils sont une option abordable et durable qui fait de grands cadeaux. Les cactus de No\xebl sont faciles \xe0 trouver dans la plupart des jardineries et magasins de plantes, et ils varient en prix de quelques dollars \xe0 plus cher, selon la taille et la forme de la plante.\n\nCes plantes sont \xe9galement connues pour leur longue dur\xe9e de vie. Si elles sont bien entretenues, elles peuvent durer de nombreuses ann\xe9es, offrant \xe0 vos amis et votre famille un rappel \xe9ternel de l'esprit des f\xeates. Les cactus de No\xebl sont assez faciles \xe0 entretenir et n\xe9cessitent un entretien minimal, ce qui en fait une excellente option pour quelqu'un qui n'a pas beaucoup d'exp\xe9rience avec les plantes. Ils doivent \xeatre plac\xe9s dans un endroit lumineux et ensoleill\xe9, arros\xe9s r\xe9guli\xe8rement et recevoir de l'engrais pour plantes tous les mois environ.\n\nDans l'ensemble, les cactus de No\xebl sont un excellent achat pour les f\xeates. Ils sont abordables, ont une longue dur\xe9e de vie et font de grands cadeaux. Avec un entretien et une attention minimaux, ces plantes peuvent offrir un beau rappel de la saison des f\xeates pendant des ann\xe9es \xe0 venir.\n\nChez Prickly Point Nursery, nous nous sp\xe9cialisons dans la fourniture de plantes et de fleurs de haute qualit\xe9 pour les besoins de chacun. Nous sommes fiers de proposer une large gamme de cactus de No\xebl \xe0 des prix avantageux. Les prix varient de 10 $ pour les plantes plus petites \xe0 25 $ pour les plus grandes, vous \xeates donc s\xfbr de trouver celle qui convient \xe0 tous les budgets. Notre personnel est toujours disponible pour fournir des conseils utiles et des astuces sur la fa\xe7on de prendre soin de vos plantes, afin que vous puissiez garder vos cactus de No\xebl frais et beaux pendant de nombreuses ann\xe9es. Merci de consid\xe9rer Prickly Point Nursery pour vos besoins en plantes de vacances !\n//highlight-end\n")),(0,r.kt)("p",null,"C'est un assez bon article de blog !"),(0,r.kt)("p",null,"Quand j'\xe9cris du contenu, j'utilise g\xe9n\xe9ralement ChatGPT ou GPT-3, mais il existe un certain nombre d'autres outils qui peuvent vous aider \xe0 \xe9crire des blogs, comme ",(0,r.kt)("a",{parentName:"p",href:"https://www.jasper.ai/"},"Jasper.ai")," et ",(0,r.kt)("a",{parentName:"p",href:"https://www.copy.ai/"},"Copy.ai"),". Ils reposent g\xe9n\xe9ralement sur GPT-3 en coulisses, mais ils ont un certain nombre d'autres fonctionnalit\xe9s qui peuvent vous aider \xe0 \xe9crire du contenu."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"L'IA peut vous aider \xe0 \xe9crire des articles de blog de haute qualit\xe9 en une fraction du temps qu'il vous faudrait pour les \xe9crire vous-m\xeame. Ce processus n'est pas enti\xe8rement automatis\xe9, il vous oblige donc \xe0 \xeatre activement impliqu\xe9 dans le processus.")))}d.isMDXComponent=!0}}]);