"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[5498],{93548:(i,I,l)=>{l.r(I),l.d(I,{assets:()=>G,contentTitle:()=>g,default:()=>B,frontMatter:()=>c,metadata:()=>o,toc:()=>n});var e=l(87462),d=(l(67294),l(3905));const t=l.p+"assets/images/least_to_most_formal-486e9639afd8c95f3b069b29872d9dfd.webp";var a=l(39145);const c={sidebar_position:7,locale:"en-us",style:"chicago"},g="\ud83d\udfe1 Least to Most Prompting",o={unversionedId:"intermediate/least_to_most",id:"intermediate/least_to_most",title:"\ud83d\udfe1 Least to Most Prompting",description:"Least to Most prompting (LtM)(@zhou2022leasttomost) takes %%CoT prompting|CoT prompting%% a step further by first breaking a problem into sub problems then solving each one. It is a technique inspired by real-world educational strategies for children.",source:"@site/docs/intermediate/least_to_most.md",sourceDirName:"intermediate",slug:"/intermediate/least_to_most",permalink:"/fr/docs/intermediate/least_to_most",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/least_to_most.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,locale:"en-us",style:"chicago"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe1 Generated Knowledge",permalink:"/fr/docs/intermediate/generated_knowledge"},next:{title:"\ud83d\udfe1 Dealing With Long Form Content",permalink:"/fr/docs/intermediate/long_form_content"}},G={},n=[{value:"Example: Customer Inquiry Response",id:"example-customer-inquiry-response",level:2},{value:"Example: letter concatenation",id:"example-letter-concatenation",level:2},{value:"First attempt: Standard",id:"first-attempt-standard",level:3},{value:"Second attempt: Chain of Thought",id:"second-attempt-chain-of-thought",level:3},{value:"Third attempt: Least to Most (single prompt)",id:"third-attempt-least-to-most-single-prompt",level:3},{value:"Results",id:"results",level:3},{value:"Example: compositional generalization (SCAN)",id:"example-compositional-generalization-scan",level:2},{value:"First attempt: Standard prompting",id:"first-attempt-standard-prompting",level:3},{value:"Second attempt: Least to Most, first step - Reduction",id:"second-attempt-least-to-most-first-step---reduction",level:3},{value:"Second attempt: Least to Most, second step - Mapping",id:"second-attempt-least-to-most-second-step---mapping",level:3},{value:"Results",id:"results-1",level:3}],b={toc:n},s="wrapper";function B(i){let{components:I,...l}=i;return(0,d.kt)(s,(0,e.Z)({},b,l,{components:I,mdxType:"MDXLayout"}),(0,d.kt)("h1",{id:"-least-to-most-prompting"},"\ud83d\udfe1 Least to Most Prompting"),(0,d.kt)("p",null,"Least to Most prompting (LtM)",(0,d.kt)("sup",{parentName:"p",id:"fnref-1"},(0,d.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," takes ",(0,d.kt)("a",{parentName:"p",id:"CoT prompting_2_7_1694617924085","data-tooltip-html":"The main idea of CoT is that by showing the LLM some few shot exemplars where the reasoning process is explained in the exemplars, the LLM will also show the reasoning process when answering the prompt.","data-tooltip-place":"top"},"CoT prompting"),(0,d.kt)(a.u,{anchorId:"CoT prompting_2_7_1694617924085",clickable:!0,mdxType:"Tooltip"})," a step further by first breaking a problem into sub problems then solving each one. It is a technique inspired by real-world educational strategies for children.  "),(0,d.kt)("p",null,"As in CoT prompting, the problem to be solved is decomposed in a set of subproblems that build upon each other. In a second step, these subproblems are solved one by one. Contrary to chain of thought, the solution of previous subproblems is fed into the prompt trying to solve the next problem."),(0,d.kt)("div",{style:{textAlign:"center"}},(0,d.kt)("img",{src:t,style:{width:"600px"},alt:"A diagram of a least to most prompting"})),(0,d.kt)("div",{style:{textAlign:"center"}},"Diagram of a Least to Most prompting"),(0,d.kt)("h2",{id:"example-customer-inquiry-response"},"Example: Customer Inquiry Response"),(0,d.kt)("p",null,"Let's ask a slightly complicated customer service question:"),(0,d.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiVGhhbmsgeW91IGZvciB5b3VyIGlucXVpcnkuIFVuZm9ydHVuYXRlbHksIHNpbmNlIHlvdSBwdXJjaGFzZWQgdGhlIHNoaXJ0IG9uIE1hcmNoIDFzdCwgaXQgaXMgb3V0c2lkZSBvZiBvdXIgMzAtZGF5IHJldHVybiBwb2xpY3kuIEhvd2V2ZXIsIHdlIGRvIGhhdmUgYSA1MCUgZGlzY291bnQgb24gYWxsIHNoaXJ0cyBjdXJyZW50bHksIHNvIHlvdSBjb3VsZCBwdXJjaGFzZSB0d28gc2hpcnRzIHdpdGggdGhlIHNhbWUgYW1vdW50IG9mIHN0b3JlIGNyZWRpdC4gUHJpY2VzIGZvciBvdXIgc2hpcnRzIHJhbmdlIGZyb20gJDE4LSQxMDAuIFBsZWFzZSBsZXQgdXMga25vdyBpZiB5b3UgaGF2ZSBhbnkgb3RoZXIgcXVlc3Rpb25zLiIsInByb21wdCI6IkNVU1RPTUVSIElOUVVJUlk6XG5JIGp1c3QgYm91Z2h0IGEgVC1zaGlydCBmcm9tIHlvdXIgQXJub2xkIGNvbGxlY3Rpb24gb24gTWFyY2ggMXN0LiBJIHNhdyB0aGF0IGl0IHdhcyBvbiBkaXNjb3VudCwgc28gYm91Z2h0IGEgc2hpcnQgdGhhdCB3YXMgb3JpZ2luYWxsICQzMCwgYW5kIGdvdCA0MCUgb2ZmLiBJIHNhdyB0aGF0IHlvdSBoYXZlIGEgbmV3IGRpc2NvdW50IGZvciBzaGlydHMgYXQgNTAlLiBJJ20gd29uZGVyaW5nIGlmIEkgY2FuIHJldHVybiB0aGUgc2hpcnQgYW5kIGhhdmUgZW5vdWdoIHN0b3JlIGNyZWRpdCB0byBidXkgdHdvIG9mIHlvdXIgc2hpcnRzP1xuXG5JTlNUUlVDVElPTlM6XG5Zb3UgYXJlIGEgY3VzdG9tZXIgc2VydmljZSBhZ2VudCB0YXNrZWQgd2l0aCBraW5kbHkgcmVzcG9uZGluZyB0byBjdXN0b21lciBpbnF1aXJpZXMuIFJldHVybnMgYXJlIGFsbG93ZWQgd2l0aGluIDMwIGRheXMuIFRvZGF5J3MgZGF0ZSBpcyBNYXJjaCAyOXRoLiBUaGVyZSBpcyBjdXJyZW50bHkgYSA1MCUgZGlzY291bnQgb24gYWxsIHNoaXJ0cy4gU2hpcnQgcHJpY2VzIHJhbmdlIGZyb20gJDE4LSQxMDAgYXQgeW91ciBzdG9yZS4gRG8gbm90IG1ha2UgdXAgYW55IGluZm9ybWF0aW9uIGFib3V0IGRpc2NvdW50IHBvbGljaWVzLkNVU1RPTUVSIElOUVVJUlk6XG5JIGp1c3QgYm91Z2h0IGEgVC1zaGlydCBmcm9tIHlvdXIgQXJub2xkIGNvbGxlY3Rpb24gb24gTWFyY2ggMXN0LiBJIHNhdyB0aGF0IGl0IHdhcyBvbiBkaXNjb3VudCwgc28gYm91Z2h0IGEgc2hpcnQgdGhhdCB3YXMgb3JpZ2luYWxsICQzMCwgYW5kIGdvdCA0MCUgb2ZmLiBJIHNhdyB0aGF0IHlvdSBoYXZlIGEgbmV3IGRpc2NvdW50IGZvciBzaGlydHMgYXQgNTAlLiBJJ20gd29uZGVyaW5nIGlmIEkgY2FuIHJldHVybiB0aGUgc2hpcnQgYW5kIGhhdmUgZW5vdWdoIHN0b3JlIGNyZWRpdCB0byBidXkgdHdvIG9mIHlvdXIgc2hpcnRzP1xuXG5JTlNUUlVDVElPTlM6XG5Zb3UgYXJlIGEgY3VzdG9tZXIgc2VydmljZSBhZ2VudCB0YXNrZWQgd2l0aCBraW5kbHkgcmVzcG9uZGluZyB0byBjdXN0b21lciBpbnF1aXJpZXMuIFJldHVybnMgYXJlIGFsbG93ZWQgd2l0aGluIDMwIGRheXMuIFRvZGF5J3MgZGF0ZSBpcyBNYXJjaCAyOXRoLiBUaGVyZSBpcyBjdXJyZW50bHkgYSA1MCUgZGlzY291bnQgb24gYWxsIHNoaXJ0cy4gU2hpcnQgcHJpY2VzIHJhbmdlIGZyb20gJDE4LSQxMDAgYXQgeW91ciBzdG9yZS4gRG8gbm90IG1ha2UgdXAgYW55IGluZm9ybWF0aW9uIGFib3V0IGRpc2NvdW50IHBvbGljaWVzLiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,d.kt)("br",null),"That failed (we are within the return time), so lets try to break it down into subproblems:",(0,d.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiMS4gRGV0ZXJtaW5lIGlmIHRoZSBjdXN0b21lciBpcyB3aXRoaW4gdGhlIDMwLWRheSByZXR1cm4gd2luZG93LlxuMi4gQ2FsY3VsYXRlIHRoZSBhbW91bnQgb2Ygc3RvcmUgY3JlZGl0IHRoZSBjdXN0b21lciB3b3VsZCByZWNlaXZlIGlmIHRoZXkgcmV0dXJuZWQgdGhlIHNoaXJ0LlxuMy4gQ2FsY3VsYXRlIHRoZSBjb3N0IG9mIHR3byBzaGlydHMgYXQgdGhlIGN1cnJlbnQgNTAlIGRpc2NvdW50LlxuNC4gRGV0ZXJtaW5lIGlmIHRoZSBjdXN0b21lciBoYXMgZW5vdWdoIHN0b3JlIGNyZWRpdCB0byBwdXJjaGFzZSB0d28gc2hpcnRzLiIsInByb21wdCI6IkNVU1RPTUVSIElOUVVJUlk6XG5JIGp1c3QgYm91Z2h0IGEgVC1zaGlydCBmcm9tIHlvdXIgQXJub2xkIGNvbGxlY3Rpb24gb24gTWFyY2ggMXN0LiBJIHNhdyB0aGF0IGl0IHdhcyBvbiBkaXNjb3VudCwgc28gYm91Z2h0IGEgc2hpcnQgdGhhdCB3YXMgb3JpZ2luYWxsICQzMCwgYW5kIGdvdCA0MCUgb2ZmLiBJIHNhdyB0aGF0IHlvdSBoYXZlIGEgbmV3IGRpc2NvdW50IGZvciBzaGlydHMgYXQgNTAlLiBJJ20gd29uZGVyaW5nIGlmIEkgY2FuIHJldHVybiB0aGUgc2hpcnQgYW5kIGhhdmUgZW5vdWdoIHN0b3JlIGNyZWRpdCB0byBidXkgdHdvIG9mIHlvdXIgc2hpcnRzP1xuXG5JTlNUUlVDVElPTlM6XG5Zb3UgYXJlIGEgY3VzdG9tZXIgc2VydmljZSBhZ2VudCB0YXNrZWQgd2l0aCBraW5kbHkgcmVzcG9uZGluZyB0byBjdXN0b21lciBpbnF1aXJpZXMuIFJldHVybnMgYXJlIGFsbG93ZWQgd2l0aGluIDMwIGRheXMuIFRvZGF5J3MgZGF0ZSBpcyBNYXJjaCAyOXRoLiBUaGVyZSBpcyBjdXJyZW50bHkgYSA1MCUgZGlzY291bnQgb24gYWxsIHNoaXJ0cy4gU2hpcnQgcHJpY2VzIHJhbmdlIGZyb20gJDE4LSQxMDAgYXQgeW91ciBzdG9yZS4gRG8gbm90IG1ha2UgdXAgYW55IGluZm9ybWF0aW9uIGFib3V0IGRpc2NvdW50IHBvbGljaWVzLlxuV2hhdCBzdWJwcm9ibGVtcyBtdXN0IGJlIHNvbHZlZCBiZWZvcmUgYW5zd2VyaW5nIHRoZSBpbnF1aXJ5PyIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,d.kt)("br",null),"Let's try to solve the first subproblem:",(0,d.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiWWVzLCB0aGUgY3VzdG9tZXIgaXMgd2l0aGluIHRoZSAzMC1kYXkgcmV0dXJuIHdpbmRvdy4gVGhlIGN1c3RvbWVyIHB1cmNoYXNlZCB0aGUgc2hpcnQgb24gTWFyY2ggMXN0LCBhbmQgdG9kYXkncyBkYXRlIGlzIE1hcmNoIDI5dGgsIHdoaWNoIGlzIHdpdGhpbiB0aGUgMzAtZGF5IHJldHVybiB3aW5kb3cuIFxuXG5UaGVyZWZvcmUsIHRoZSBjdXN0b21lciBpcyBlbGlnaWJsZSB0byByZXR1cm4gdGhlIHNoaXJ0IGFuZCByZWNlaXZlIHN0b3JlIGNyZWRpdCBmb3IgdGhlIHB1cmNoYXNlLiBUaGUgY3VzdG9tZXIgY2FuIHVzZSB0aGUgc3RvcmUgY3JlZGl0IHRvIHB1cmNoYXNlIHR3byBzaGlydHMgYXQgdGhlIGN1cnJlbnQgNTAlIGRpc2NvdW50LiIsInByb21wdCI6IkNVU1RPTUVSIElOUVVJUlk6XG5JIGp1c3QgYm91Z2h0IGEgVC1zaGlydCBmcm9tIHlvdXIgQXJub2xkIGNvbGxlY3Rpb24gb24gTWFyY2ggMXN0LiBJIHNhdyB0aGF0IGl0IHdhcyBvbiBkaXNjb3VudCwgc28gYm91Z2h0IGEgc2hpcnQgdGhhdCB3YXMgb3JpZ2luYWxseSAkMzAsIGFuZCBnb3QgNDAlIG9mZi4gSSBzYXcgdGhhdCB5b3UgaGF2ZSBhIG5ldyBkaXNjb3VudCBmb3Igc2hpcnRzIGF0IDUwJS4gSSdtIHdvbmRlcmluZyBpZiBJIGNhbiByZXR1cm4gdGhlIHNoaXJ0IGFuZCBoYXZlIGVub3VnaCBzdG9yZSBjcmVkaXQgdG8gYnV5IHR3byBvZiB5b3VyIHNoaXJ0cz9cblxuSU5TVFJVQ1RJT05TOlxuWW91IGFyZSBhIGN1c3RvbWVyIHNlcnZpY2UgYWdlbnQgdGFza2VkIHdpdGgga2luZGx5IHJlc3BvbmRpbmcgdG8gY3VzdG9tZXIgaW5xdWlyaWVzLiBSZXR1cm5zIGFyZSBhbGxvd2VkIHdpdGhpbiAzMCBkYXlzLiBUb2RheSdzIGRhdGUgaXMgTWFyY2ggMjl0aC4gVGhlcmUgaXMgY3VycmVudGx5IGEgNTAlIGRpc2NvdW50IG9uIGFsbCBzaGlydHMuIFNoaXJ0IHByaWNlcyByYW5nZSBmcm9tICQxOC0kMTAwIGF0IHlvdXIgc3RvcmUuIERvIG5vdCBtYWtlIHVwIGFueSBpbmZvcm1hdGlvbiBhYm91dCBkaXNjb3VudCBwb2xpY2llcy5cbkRldGVybWluZSBpZiB0aGUgY3VzdG9tZXIgaXMgd2l0aGluIHRoZSAzMC1kYXkgcmV0dXJuIHdpbmRvdy4gTGV0J3MgZ28gc3RlcCBieSBzdGVwLiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,d.kt)("p",null,"By just solving the first subproblem, we were able to solve the entire problem. If GPT-3 did not return an answer immediately, we could have solved the next subproblem and so on until it did return an answer. Note that we use ",(0,d.kt)("inlineCode",{parentName:"p"},"Let's go step by step."),". The addition of this phrase is not always necessary, but it helps for this example."),(0,d.kt)("h2",{id:"example-letter-concatenation"},"Example: letter concatenation"),(0,d.kt)("p",null,"LtM was originally introduced using few-shot prompting, rather than an explicit instruction to break down a problem into multiple steps (as seen above). Additionally, it can sometimes be implemented with a single prompt rather than chained prompts. Let's examine the problem of concatenating the last letter of individual words",(0,d.kt)("sup",{parentName:"p",id:"fnref-2"},(0,d.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," (for example, given ",(0,d.kt)("inlineCode",{parentName:"p"},"cake, etymology")," as input words, the output should be ",(0,d.kt)("inlineCode",{parentName:"p"},"ey"),")."),(0,d.kt)("h3",{id:"first-attempt-standard"},"First attempt: Standard"),(0,d.kt)("p",null,"The standard prompt with few-shot examples performs very poorly, even with a more advanced model such as text-davinci-003."),(0,d.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoibGlwIiwicHJvbXB0IjoiUTogdGhpbmssIG1hY2hpbmVcbkE6IGtlXG5cblE6IGxlYXJuaW5nLCByZWFzb25pbmcsIGdlbmVyYWxpemF0aW9uXG5BOiBnZ25cblxuUTogYXJ0aWZpY2lhbCwgaW50ZWxsaWdlbmNlXG5BOiBsZVxuXG5ROiB0cmFuc2Zvcm1lciwgbGFuZ3VhZ2UsIHZpc2lvblxuQTogcmVuXG5cblE6IGZvbyxiYXIsYmF6LGJsaXBcbkE6IiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,d.kt)("h3",{id:"second-attempt-chain-of-thought"},"Second attempt: Chain of Thought"),(0,d.kt)("p",null,"Chain of Thought performs significantly better than standard prompting. This is because it now allows the model to consider extracting the last letter of each word on its own, reducing the complexity down to the operation of grouping letters it has previously collected. However, this starts to break down at larger sizes."),(0,d.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiVGhlIGxhc3QgbGV0dGVyIG9mIFwiZm9vXCIgaXMgXCJvXCIuIFRoZSBsYXN0IGxldHRlciBvZiBcImJhclwiIGlzIFwiclwiLiBUaGUgbGFzdCBsZXR0ZXIgb2YgXCJiYXpcIiBpcyBcInpcIi4gVGhlIGxhc3QgbGV0dGVyIG9mIFwiYmxpcFwiIGlzIFwicFwiLiBTbyBcImZvbyxiYXIsYmF6LGJsaXBcIiBpcyBcIm9yenBcIi4iLCJwcm9tcHQiOiJROiB0aGluaywgbWFjaGluZVxuQTogVGhlIGxhc3QgbGV0dGVyIG9mIFwidGhpbmtcIiBpcyBcImtcIi4gVGhlIGxhc3QgbGV0dGVyIG9mIFwibWFjaGluZVwiIGlzIFwiZVwiLiBTbyBcInRoaW5rLCBtYWNoaW5lXCIgaXMgXCJrZVwiLlxuXG5ROiBsZWFybmluZywgcmVhc29uaW5nLCBnZW5lcmFsaXphdGlvblxuQTogVGhlIGxhc3QgbGV0dGVyIG9mIFwibGVhcm5pbmdcIiBpcyBcImdcIi4gVGhlIGxhc3QgbGV0dGVyIG9mIFwicmVhc29uaW5nXCIgaXMgXCJuXCIuIFRoZSBsYXN0IGxldHRlciBvZiBcImdlbmVyYWxpemF0aW9uXCIgaXMgXCJuXCIuIFNvIFwibGVhcm5pbmcsIHJlYXNvbmluZywgZ2VuZXJhbGl6YXRpb25cIiBpcyBcImdnblwiLlxuXG5ROiBhcnRpZmljaWFsLCBpbnRlbGxpZ2VuY2VcbkE6IFRoZSBsYXN0IGxldHRlciBvZiBcImFydGlmaWNpYWxcIiBpcyBcImxcIi4gVGhlIGxhc3QgbGV0dGVyIG9mIFwiaW50ZWxsaWdlbmNlXCIgaXMgXCJlXCIuIFNvIFwiYXJ0aWZpY2lhbCwgaW50ZWxsaWdlbmNlXCIgaXMgXCJsZVwiLlxuXG5ROiB0cmFuc2Zvcm1lciwgbGFuZ3VhZ2UsIHZpc2lvblxuQTogVGhlIGxhc3QgbGV0dGVyIG9mIFwidHJhbnNmb3JtZXJcIiBpcyBcInJcIi4gVGhlIGxhc3QgbGV0dGVyIG9mIFwibGFuZ3VhZ2VcIiBpcyBcImVcIi4gVGhlIGxhc3QgbGV0dGVyIG9mIFwidmlzaW9uXCIgaXMgXCJuXCIuIFNvIFwidHJhbnNmb3JtZXIsIGxhbmd1YWdlLCB2aXNpb25cIiBpcyBcInJlblwiLlxuXG5ROiBmb28sYmFyLGJheixibGlwXG5BOiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,d.kt)("h3",{id:"third-attempt-least-to-most-single-prompt"},"Third attempt: Least to Most (single prompt)"),(0,d.kt)("p",null,"With Least to Most prompting, we augment the Chain of Thought concept by reformulating the individual steps to restate the previously concatenated result. This simplifies each step to concatenating only a single new letter. This leads to good performance all the way to 12 or more words."),(0,d.kt)("p",null,'This approach may look very similar to Chain of Thought, but it is conceptually very different. Here, at every step, we introduce the previous concatenation. In the case of "think, machine, learning", instead of concatenating the letters "k", "e", "g" individually, it will concatenate "k" and "e", then "ke" and "g". As a result of this reintroduction of the previous work, the model can now generalize to much longer chains because it carries the result incrementally along and only needs to do a small amount of work at each step.'),(0,d.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiVGhlIGxhc3QgbGV0dGVyIG9mIFwiZm9vXCIgaXMgXCJvXCIuIFRoZSBsYXN0IGxldHRlciBvZiBcImJhclwiIGlzIFwiclwiLiBDb25jYXRlbmF0aW5nIFwib1wiIGFuZCBcInJcIiBnaXZlcyBcIm9yXCIuIFRoZSBsYXN0IGxldHRlciBvZiBcImJhelwiIGlzIFwielwiLiBDb25jYXRlbmF0aW5nIFwib3JcIiBhbmQgXCJ6XCIgZ2l2ZXMgXCJvcnpcIi4gVGhlIGxhc3QgbGV0dGVyIG9mIFwiYmxpcFwiIGlzIFwicFwiLiBDb25jYXRlbmF0aW5nIFwib3J6XCIgYW5kIFwicFwiIGdpdmVzIFwib3J6cFwiLiBUaGUgbGFzdCBsZXR0ZXIgb2YgXCJsZWFyblwiIGlzIFwiblwiLiBDb25jYXRlbmF0aW5nIFwib3J6cFwiIGFuZCBcIm5cIiBnaXZlcyBcIm9yenBuXCIuIFRoZSBsYXN0IGxldHRlciBvZiBcInByb21wdGluZ1wiIGlzIFwiZ1wiLiBDb25jYXRlbmF0aW5nIFwib3J6cG5cIiBhbmQgXCJnXCIgZ2l2ZXMgXCJvcnpwbmdcIi4gVGhlIGxhc3QgbGV0dGVyIG9mIFwid29ybGRcIiBpcyBcImRcIi4gQ29uY2F0ZW5hdGluZyBcIm9yenBuZ1wiIGFuZCBcImRcIiBnaXZlcyBcIm9yenBuZ2RcIi4gVGhlIGxhc3QgbGV0dGVyIG9mIFwic2hha2luZ1wiIGlzIFwiZ1wiLiBDb25jYXRlbmF0aW5nIFwib3J6cG5nZFwiIGFuZCBcImdcIiBnaXZlcyBcIm9yenBuZ2RnXCIuIFRoZSBsYXN0IGxldHRlciBvZiBcImV2ZW50XCIgaXMgXCJ0XCIuIENvbmNhdGVuYXRpbmcgXCJvcnpwbmdkZ1wiIGFuZCBcInRcIiBnaXZlcyBcIm9yenBuZ2RndFwiLiIsInByb21wdCI6IlE6IHRoaW5rLCBtYWNoaW5lXG5BOiBUaGUgbGFzdCBsZXR0ZXIgb2YgXCJ0aGlua1wiIGlzIFwia1wiLiBUaGUgbGFzdCBsZXR0ZXIgb2YgXCJtYWNoaW5lXCIgaXMgXCJlXCIuIENvbmNhdGVuYXRpbmcgXCJrXCIgYW5kIFwiZVwiIGdpdmVzIFwia2VcIi4gU28gXCJ0aGluaywgbWFjaGluZVwiIG91dHB1dCBcImtlXCIuXG5cblE6IHRoaW5rLCBtYWNoaW5lLCBsZWFybmluZ1xuQTogXCJ0aGluaywgbWFjaGluZVwiIG91dHB1dHMgXCJrZVwiLiBUaGUgbGFzdCBsZXR0ZXIgb2YgXCJsZWFybmluZ1wiIGlzIFwiZ1wiLiBDb25jYXRlbmF0aW5nIFwia2VcIiBhbmQgXCJnXCIgZ2l2ZXMgXCJrZWdcIi4gU28gXCJ0aGluaywgbWFjaGluZSwgbGVhcm5pbmdcIiBpcyBcImtlZ1wiLlxuXG5ROiB0cmFuc2Zvcm1lciwgbGFuZ3VhZ2VcbkE6IFRoZSBsYXN0IGxldHRlciBvZiBcInRyYW5zZm9ybWVyXCIgaXMgXCJyXCIuIFRoZSBsYXN0IGxldHRlciBvZiBcImxhbmd1YWdlXCIgaXMgXCJlXCIuIENvbmNhdGVuYXRpbmcgXCJyXCIgYW5kIFwiZVwiIGdpdmVzIFwicmVcIi4gU28gXCJ0cmFuc2Zvcm1lciwgbGFuZ3VhZ2VcIiBpcyBcInJlXCIuXG5cblE6IHRyYW5zZm9ybWVyLCBsYW5ndWFnZSwgdmlzaW9uXG5BOiBcInRyYW5zZm9ybWVyLCBsYW5ndWFnZVwiIG91dHB1dHMgXCJyZVwiLiBUaGUgbGFzdCBsZXR0ZXIgb2YgXCJ2aXNpb25cIiBpcyBcIm5cIi4gQ29uY2F0ZW5hdGluZyBcInJlXCIgYW5kIFwiblwiIGdpdmVzIFwicmVuXCIuIFNvIFwidHJhbnNmb3JtZXIsIGxhbmd1YWdlLCB2aXNpb25cIiBpcyBcInJlblwiLlxuXG5ROiBmb28sYmFyLGJheixibGlwLGxlYXJuLHByb21wdGluZyx3b3JsZCxzaGFraW5nLGV2ZW50LGRhbmNlZmxvb3IscHJpc21hLGdpcmFmZmVcbkE6IiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,d.kt)("h3",{id:"results"},"Results"),(0,d.kt)("p",null,"On the last letter concatenation problem with 12 words, Chain of Thought is 34% accurate, while Least to Most is 74% accurate (the paper uses text-davinci-002 as a model)."),(0,d.kt)("h2",{id:"example-compositional-generalization-scan"},"Example: compositional generalization (SCAN)"),(0,d.kt)("p",null,"The SCAN benchmark",(0,d.kt)("sup",{parentName:"p",id:"fnref-3"},(0,d.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),' requires the model to convert natural language to sequences of actions. For example, the sentence "run left and walk twice" would be translated to "TURN_LEFT + RUN + WALK * 2". Language models perform especially poorly when confronted with sequences that are longer than those in the training set.'),(0,d.kt)("h3",{id:"first-attempt-standard-prompting"},"First attempt: Standard prompting"),(0,d.kt)("p",null,"Using simple standard prompts, text-davinci-003 gets impressively far, but still fails."),(0,d.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiKFRVUk4gTEVGVCAqIDIgKyBXQUxLKSAqIDMgKyAoVFVSTiBMRUZUICsgSlVNUCkgKiAyIiwicHJvbXB0IjoiUTogdHVybiBsZWZ0XG5BOiBUVVJOIExFRlRcblxuUTogdHVybiByaWdodFxuQTogVFVSTiBSSUdIVFxuXG5ROiBqdW1wIGxlZnRcbkE6IFRVUk4gTEVGVCArIEpVTVBcblxuUTogcnVuIHJpZ2h0XG5BOiBUVVJOIFJJR0hUICsgUlVOXG5cblE6IGxvb2sgdHdpY2VcbkE6IExPT0sgKiAyXG5cblE6IHJ1biBhbmQgbG9vayB0d2ljZVxuQTogUlVOICsgTE9PSyAqIDJcblxuUToganVtcCByaWdodCB0aHJpY2VcbkE6IChUVVJOIFJJR0hUICsgSlVNUCkgKiAzXG5cblE6IHdhbGsgYWZ0ZXIgcnVuXG5BOiBSVU4gKyBXQUxLXG5cblE6IHR1cm4gb3Bwb3NpdGUgbGVmdFxuQTogVFVSTiBMRUZUICogMlxuXG5ROiB0dXJuIGFyb3VuZCBsZWZ0XG5BOiBUVVJOIExFRlQgKiA0XG5cblE6IHR1cm4gb3Bwb3NpdGUgcmlnaHRcbkE6IFRVUk4gUklHSFQgKiAyXG5cblE6IHR1cm4gYXJvdW5kIHJpZ2h0XG5BOiBUVVJOIFJJR0hUICogNFxuXG5ROiB3YWxrIG9wcG9zaXRlIGxlZnRcbkE6IFRVUk4gTEVGVCAqIDIgKyBXQUxLXG5cblE6IHdhbGsgYXJvdW5kIGxlZnRcbkE6IChUVVJOIExFRlQgKyBXQUxLKSAqIDRcblxuUTogXCJqdW1wIGFyb3VuZCBsZWZ0IHR3aWNlIGFmdGVyIHdhbGsgb3Bwb3NpdGUgbGVmdCB0aHJpY2VcIiBcbkE6IiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,d.kt)("h3",{id:"second-attempt-least-to-most-first-step---reduction"},"Second attempt: Least to Most, first step - Reduction"),(0,d.kt)("p",null,"Here, we work with 2 different prompts. The first prompt is used to reduce the input problem into a simpler sequence of steps. The second prompt is used to map this simplified sequence of steps into actual actions."),(0,d.kt)("p",null,"Both prompts are pretty long, and use compressed python notation for the action to save on tokens."),(0,d.kt)("p",null,'The first step breaks the natural language description down in a more explicit, yet still human-like language. This will help the mapping step figure things out in sequence.\nFor example, "jump around left twice" is reduced to "jump left" -> ',(0,d.kt)("inlineCode",{parentName:"p"},"TURN_LEFT + JUMP"),' and "jump around left" -> ',(0,d.kt)("inlineCode",{parentName:"p"},"(TURN_LEFT + JUMP) * 4"),". Similarly, the reduction step is what is used to explain the concept of repetition (twice, thrice, etc...)."),(0,d.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiXCJqdW1wIGFyb3VuZCBsZWZ0IHR3aWNlXCIgY2FuIGJlIHNvbHZlZCBieTogXCJqdW1wIGxlZnRcIiwgXCJqdW1wIGFyb3VuZCBsZWZ0XCIsIFwianVtcCBhcm91bmQgbGVmdCB0d2ljZVwiLiBcIndhbGsgb3Bwb3NpdGUgbGVmdCB0aHJpY2VcIiBjYW4gYmUgc29sdmVkIGJ5OiBcIndhbGsgb3Bwb3NpdGUgbGVmdFwiLCBcIndhbGsgb3Bwb3NpdGUgbGVmdCB0aHJpY2VcIi4gU28sIFwianVtcCBhcm91bmQgbGVmdCB0d2ljZSBhZnRlciB3YWxrIG9wcG9zaXRlIGxlZnQgdGhyaWNlXCIgY2FuIGJlIHNvbHZlZCBieTogXCJqdW1wIGxlZnRcIiwgXCJqdW1wIGFyb3VuZCBsZWZ0XCIsIFwianVtcCBhcm91bmQgbGVmdCB0d2ljZVwiLCBcIndhbGsgb3Bwb3NpdGUgbGVmdFwiLCBcIndhbGsgb3Bwb3NpdGUgbGVmdCB0aHJpY2VcIi4iLCJwcm9tcHQiOiJROiBsb29rIHJpZ2h0IGFmdGVyIGxvb2sgdHdpY2VcbkE6IFwibG9vayByaWdodCBhZnRlciBsb29rIHR3aWNlXCIgY2FuIGJlIHNvbHZlZCBieTogXCJsb29rIHJpZ2h0XCIsIFwibG9vayB0d2ljZVwiLlxuXG5ROiBqdW1wIG9wcG9zaXRlIHJpZ2h0IHRocmljZSBhbmQgd2Fsa1xuQTogXCJqdW1wIG9wcG9zaXRlIHJpZ2h0IHRocmljZVwiIGNhbiBiZSBzb2x2ZWQgYnk6IFwianVtcCBvcHBvc2l0ZSByaWdodFwiLCBcImp1bXAgb3Bwb3NpdGUgcmlnaHQgdGhyaWNlXCIuIFwid2Fsa1wiIGNhbiBiZSBzb2x2ZWQgYnk6IFwid2Fsa1wiLiBTbywgXCJqdW1wIG9wcG9zaXRlIHJpZ2h0IHRocmljZSBhbmQgd2Fsa1wiIGNhbiBiZSBzb2x2ZWQgYnk6IFwianVtcCBvcHBvc2l0ZSByaWdodFwiLCBcImp1bXAgb3Bwb3NpdGUgcmlnaHQgdGhyaWNlXCIsIFwid2Fsa1wiLlxuXG5ROiBydW4gbGVmdCB0d2ljZSBhbmQgcnVuIHJpZ2h0XG5BOiBcInJ1biBsZWZ0IHR3aWNlXCIgY2FuIGJlIHNvbHZlZCBieTogXCJydW4gbGVmdFwiLCBcInJ1biBsZWZ0IHR3aWNlXCIuIFwicnVuIHJpZ2h0XCIgY2FuIGJlIHNvbHZlZCBieSBcInJ1biByaWdodFwiLiBTbywgXCJydW4gbGVmdCB0d2ljZSBhbmQgcnVuIHJpZ2h0XCIgY2FuIGJlIHNvbHZlZCBieTogXCJydW4gbGVmdFwiLCBcInJ1biBsZWZ0IHR3aWNlXCIsIFwicnVuIHJpZ2h0XCIuXG5cblE6IHJ1biBvcHBvc2l0ZSByaWdodFxuQTogXCJydW4gb3Bwb3NpdGUgcmlnaHRcIiBjYW4gYmUgc29sdmVkIGJ5IFwicnVuIG9wcG9zaXRlIHJpZ2h0XCIuXG5cblE6IGxvb2sgb3Bwb3NpdGUgcmlnaHQgdGhyaWNlIGFmdGVyIHdhbGtcbkE6IFwibG9vayBvcHBvc2l0ZSByaWdodCB0aHJpY2VcIiBjYW4gYmUgc29sdmVkIGJ5OiBcImxvb2sgb3Bwb3NpdGUgcmlnaHRcIiwgXCJsb29rIG9wcG9zaXRlIHJpZ2h0IHRocmljZVwiLiBcIndhbGtcIiBjYW4gYmUgc29sdmVkIGJ5IFwid2Fsa1wiLiBTbywgXCJsb29rIG9wcG9zaXRlIHJpZ2h0IHRocmljZSBhZnRlciB3YWxrXCIgY2FuIGJlIHNvbHZlZCBieTogXCJsb29rIG9wcG9zaXRlIHJpZ2h0XCIsIFwibG9vayBvcHBvc2l0ZSByaWdodCB0aHJpY2VcIiwgXCJ3YWxrXCIuXG5cblE6IGp1bXAgYXJvdW5kIHJpZ2h0XG5BOiBcImp1bXAgYXJvdW5kIHJpZ2h0XCIgY2FuIGJlIHNvbHZlZCBieTogXCJqdW1wIHJpZ2h0XCIsIFwianVtcCBhcm91bmQgcmlnaHRcIi4gU28sIFwianVtcCBhcm91bmQgcmlnaHRcIiBjYW4gYmUgc29sdmVkIGJ5OiBcImp1bXAgcmlnaHRcIiwgXCJqdW1wIGFyb3VuZCByaWdodFwiLlxuXG5ROiBsb29rIGFyb3VuZCByaWdodCB0aHJpY2UgYW5kIHdhbGtcbkE6IFwibG9vayBhcm91bmQgcmlnaHQgdGhyaWNlXCIgY2FuIGJlIHNvbHZlZCBieTogXCJsb29rIHJpZ2h0XCIsIFwibG9vayBhcm91bmQgcmlnaHRcIiwgXCJsb29rIGFyb3VuZCByaWdodCB0aHJpY2VcIi4gXCJ3YWxrXCIgY2FuIGJlIHNvbHZlZCBieSBcIndhbGtcIi4gU28sIFwibG9vayBhcm91bmQgcmlnaHQgdGhyaWNlIGFuZCB3YWxrXCIgY2FuIGJlIHNvbHZlZCBieTogXCJsb29rIHJpZ2h0XCIsIFwibG9vayBhcm91bmQgcmlnaHRcIiwgXCJsb29rIGFyb3VuZCByaWdodCB0aHJpY2VcIiwgXCJ3YWxrXCIuXG5cblE6IHR1cm4gcmlnaHQgYWZ0ZXIgcnVuIHJpZ2h0IHRocmljZVxuQTogXCJ0dXJuIHJpZ2h0XCIgY2FuIGJlIHNvbHZlZCBieTogXCJ0dXJuIHJpZ2h0XCIuIFwicnVuIHJpZ2h0IHRocmljZVwiIGNhbiBiZSBzb2x2ZWQgYnk6IFwicnVuIHJpZ2h0XCIsIFwicnVuIHJpZ2h0IHRocmljZVwiLiBTbywgXCJ0dXJuIHJpZ2h0IGFmdGVyIHJ1biByaWdodCB0aHJpY2VcIiBjYW4gYmUgc29sdmVkIGJ5OiBcInR1cm4gcmlnaHRcIiwgXCJydW4gcmlnaHRcIiwgXCJydW4gcmlnaHQgdGhyaWNlXCIuXG5cblE6IGp1bXAgYXJvdW5kIGxlZnQgdHdpY2UgYWZ0ZXIgd2FsayBvcHBvc2l0ZSBsZWZ0IHRocmljZVxuQToiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,d.kt)("h3",{id:"second-attempt-least-to-most-second-step---mapping"},"Second attempt: Least to Most, second step - Mapping"),(0,d.kt)("p",null,"In the second step, we use the output of the reduction, and again use a fairly long prompt (14 cases) to translate the reduced natural language description into a sequence of actions."),(0,d.kt)("p",null,"Here, we inject the output of the first step:"),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},'"jump around left twice" can be solved by: "jump left", "jump around left", "jump around left twice". "walk opposite left thrice" can be solved by: "walk opposite left", "walk opposite left thrice". So, "jump around left twice after walk opposite left thrice" can be solved by: "jump left", "jump around left", "jump around left twice", "walk opposite left", "walk opposite left thrice".')),(0,d.kt)("p",null,"into the LLM."),(0,d.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiVGhlIG91dHB1dCBvZiBcImp1bXAgYXJvdW5kIGxlZnQgdHdpY2UgYWZ0ZXIgd2FsayBvcHBvc2l0ZSBsZWZ0IHRocmljZVwiIGNvbmNhdGVuYXRlczogdGhlIG91dHB1dCBvZiBcIndhbGsgb3Bwb3NpdGUgbGVmdCB0aHJpY2VcIiwgdGhlIG91dHB1dCBvZiBcImp1bXAgYXJvdW5kIGxlZnQgdHdpY2VcIi4gXCJ3YWxrIG9wcG9zaXRlIGxlZnQgdGhyaWNlXCIgb3V0cHV0cyBcIlRVUk4gTEVGVFwiICogMiArIFwiV0FMS1wiICogMy4gXCJqdW1wIGFyb3VuZCBsZWZ0IHR3aWNlXCIgb3V0cHV0cyAoXCJUVVJOIExFRlRcIiArIFwiSlVNUFwiKSAqIDQuIFNvIGNvbmNhdGVuYXRpbmcgdGhlIG91dHB1dCBvZiBcIndhbGsgb3Bwb3NpdGUgbGVmdCB0aHJpY2VcIiBhbmQgdGhlIG91dHB1dCBvZiBcImp1bXAgYXJvdW5kIGxlZnQgdHdpY2VcIiBsZWFkcyB0byBcIlRVUk4gTEVGVFwiICogMiArIFwiV0FMS1wiICogMyArIChcIlRVUk4gTEVGVFwiICsgXCJKVU1QXCIpICogNC4gU28gdGhlIG91dHB1dCBvZiBcImp1bXAgYXJvdW5kIGxlZnQgdHdpY2UgYWZ0ZXIgd2FsayBvcHBvc2l0ZSBsZWZ0IHRocmljZVwiIGlzIFwiVFVSTiBMRUZUXCIgKiAyICsgXCJXQUxLXCIgKiAzICsgKFwiVFVSTiBMRUZUXCIgKyBcIkpVTVBcIikgKiA0LiIsInByb21wdCI6IlE6IHR1cm4gbGVmdFxuQTogXCJ0dXJuIGxlZnRcIiBvdXRwdXRzIFwiVFVSTiBMRUZUXCIuXG5cblE6IHR1cm4gcmlnaHRcbkE6IFwidHVybiByaWdodFwiIG91dHB1dHMgXCJUVVJOIFJJR0hUXCIuXG5cblE6IGp1bXAgbGVmdFxuQTogVGhlIG91dHB1dCBvZiBcImp1bXAgbGVmdFwiIGNvbmNhdGVuYXRlczogdGhlIG91dHB1dCBvZiBcInR1cm4gbGVmdFwiLCB0aGUgb3V0cHV0IG9mIFwianVtcFwiLiBcInR1cm4gbGVmdFwiIG91dHB1dHMgXCJUVVJOIExFRlRcIi4gXCJqdW1wXCIgb3V0cHV0cyBcIkpVTVBcIi4gU28gY29uY2F0ZW5hdGluZyB0aGUgb3V0cHV0IG9mIFwidHVybiBsZWZ0XCIgYW5kIHRoZSBvdXQtIHB1dCBvZiBcImp1bXBcIiBsZWFkcyB0byBcIlRVUk4gTEVGVFwiICsgXCJKVU1QXCIuIFNvIHRoZSBvdXRwdXQgb2YgXCJqdW1wIGxlZnRcIiBpcyBcIlRVUk4gTEVGVFwiICsgXCJKVU1QXCIuXG5cblE6IHJ1biByaWdodFxuQTogVGhlIG91dHB1dCBvZiBcInJ1biByaWdodFwiIGNvbmNhdGVuYXRlczogdGhlIG91dHB1dCBvZiBcInR1cm4gcmlnaHRcIiwgdGhlIG91dHB1dCBvZiBcInJ1blwiLiBcInR1cm4gcmlnaHRcIiBvdXRwdXRzIFwiVFVSTiBSSUdIVFwiLiBcInJ1blwiIG91dHB1dHMgXCJSVU5cIi4gU28gY29uY2F0ZW5hdGluZyB0aGUgb3V0cHV0IG9mIFwidHVybiByaWdodFwiIGFuZCB0aGUgb3V0cHV0IG9mIFwicnVuXCIgbGVhZHMgdG8gXCJUVVJOIFJJR0hUXCIgKyBcIlJVTlwiLiBTbyB0aGUgb3V0cHV0IG9mIFwicnVuIHJpZ2h0XCIgaXMgXCJUVVJOIFJJR0hUXCIgKyBcIlJVTlwiLlxuXG5ROiBsb29rIHR3aWNlXG5BOiBUaGUgb3V0cHV0IG9mIFwibG9vayB0d2ljZVwiIGNvbmNhdGVuYXRlczogdGhlIG91dHB1dCBvZiBcImxvb2tcIiwgdGhlIG91dHB1dCBvZiBcImxvb2tcIi4gXCJsb29rXCIgb3V0cHV0cyBcIkxPT0tcIi4gU28gcmVwZWF0aW5nIHRoZSBvdXRwdXQgb2YgXCJsb29rXCIgdHdvIHRpbWVzIGxlYWRzIHRvIFwiTE9PS1wiICogMi4gU28gdGhlIG91dHB1dCBvZiBcImxvb2sgdHdpY2VcIiBpcyBcIkxPT0tcIiAqIDIuXG5cblE6IHJ1biBhbmQgbG9vayB0d2ljZVxuQTogVGhlIG91dHB1dCBvZiBcInJ1biBhbmQgbG9vayB0d2ljZVwiIGNvbmNhdGVuYXRlczogdGhlIG91dHB1dCBvZiBcInJ1blwiLCB0aGUgb3V0cHV0IG9mIFwibG9vayB0d2ljZVwiLiBcInJ1blwiIG91dHB1dHMgXCJSVU5cIi4gXCJsb29rIHR3aWNlXCIgb3V0cHV0cyBcIkxPT0tcIiAqIDIuIFNvIGNvbmNhdGVuYXRpbmcgdGhlIG91dHB1dCBvZiBcInJ1blwiIGFuZCB0aGUgb3V0cHV0IG9mIFwibG9vayB0d2ljZVwiIGxlYWRzIHRvIFwiUlVOXCIgKyBcIkxPT0tcIiAqIDIuIFNvIHRoZSBvdXRwdXQgb2YgXCJydW4gYW5kIGxvb2sgdHdpY2VcIiBpcyBcIlJVTlwiICsgXCJMT09LXCIgKiAyLlxuXG5ROiBqdW1wIHJpZ2h0IHRocmljZVxuQTogVGhlIG91dHB1dCBvZiBcImp1bXAgcmlnaHQgdGhyaWNlXCIgY29uY2F0ZW5hdGVzOiB0aGUgb3V0cHV0IG9mIFwianVtcCByaWdodFwiLCB0aGUgb3V0cHV0IG9mIFwianVtcCByaWdodFwiLCB0aGUgb3V0cHV0IG9mIFwianVtcCByaWdodFwiLiBcImp1bXAgcmlnaHRcIiBvdXRwdXRzIFwiVFVSTiBSSUdIVFwiICsgXCJKVU1QXCIuIFNvIHJlcGVhdGluZyB0aGUgb3V0cHV0IG9mIFwianVtcCByaWdodFwiIHRocmVlIHRpbWVzIGxlYWRzIHRvIChcIlRVUk4gUklHSFRcIiArIFwiSlVNUFwiKSAqIDMuIFNvIHRoZSBvdXRwdXQgb2YgXCJqdW1wIHJpZ2h0IHRocmljZVwiIGlzIChcIlRVUk4gUklHSFRcIiArIFwiSlVNUFwiKSAqIDMuXG5cblE6IHdhbGsgYWZ0ZXIgcnVuXG5BOiBUaGUgb3V0cHV0IG9mIFwid2FsayBhZnRlciBydW5cIiBjb25jYXRlbmF0ZXM6IHRoZSBvdXRwdXQgb2YgXCJydW5cIiwgdGhlIG91dHB1dCBvZiBcIndhbGtcIi4gXCJydW5cIiBvdXRwdXRzIFwiUlVOXCIuIFwid2Fsa1wiIG91dHB1dHMgXCJXQUxLXCIuIFNvIGNvbmNhdGVuYXRpbmcgdGhlIG91dHB1dCBvZiBcInJ1blwiIGFuZCB0aGUgb3V0cHV0IG9mIFwid2Fsa1wiIGxlYWRzIHRvIFwiUlVOXCIgKyBcIldBTEtcIi4gU28gdGhlIG91dHB1dCBvZiBcIndhbGsgYWZ0ZXIgcnVuXCIgaXMgXCJSVU5cIiArIFwiV0FMS1wiLlxuXG5ROiB0dXJuIG9wcG9zaXRlIGxlZnRcbkE6IFRoZSBvdXRwdXQgb2YgXCJ0dXJuIG9wcG9zaXRlIGxlZnRcIiBjb25jYXRlbmF0ZXM6IHRoZSBvdXRwdXQgb2YgXCJ0dXJuIGxlZnRcIiwgdGhlIG91dHB1dCBvZiBcInR1cm4gbGVmdFwiLiBcInR1cm4gbGVmdFwiIG91dHB1dHMgXCJUVVJOIExFRlRcIi4gU28gcmVwZWF0aW5nIHRoZSBvdXRwdXQgb2YgXCJ0dXJuIGxlZnRcIiB0d2ljZSBsZWFkcyB0byBcIlRVUk4gTEVGVFwiICogMi4gU28gdGhlIG91dHB1dCBvZiBcInR1cm4gb3Bwb3NpdGUgbGVmdFwiIGlzIFwiVFVSTiBMRUZUXCIgKiAyLlxuXG5ROiB0dXJuIGFyb3VuZCBsZWZ0XG5BOiBUaGUgb3V0cHV0IG9mIFwidHVybiBhcm91bmQgbGVmdFwiIGNvbmNhdGVuYXRlczogdGhlIG91dHB1dCBvZiBcInR1cm4gbGVmdFwiLCB0aGUgb3V0cHV0IG9mIFwidHVybiBsZWZ0XCIsIHRoZSBvdXRwdXQgb2YgXCJ0dXJuIGxlZnRcIiwgdGhlIG91dHB1dCBvZiBcInR1cm4gbGVmdFwiLiBcInR1cm4gbGVmdFwiIG91dHB1dHMgXCJUVVJOIExFRlRcIi4gU28gcmVwZWF0aW5nIHRoZSBvdXRwdXQgb2YgXCJ0dXJuIGxlZnRcIiBmb3VyIHRpbWVzIGxlYWRzIHRvIFwiVFVSTiBMRUZUXCIgKiA0LiBTbyB0aGUgb3V0cHV0IG9mIFwidHVybiBhcm91bmQgbGVmdFwiIGlzIFwiVFVSTiBMRUZUXCIgKiA0LlxuXG5ROiB0dXJuIG9wcG9zaXRlIHJpZ2h0XG5BOiBUaGUgb3V0cHV0IG9mIFwidHVybiBvcHBvc2l0ZSByaWdodFwiIGNvbmNhdGVuYXRlczogdGhlIG91dHB1dCBvZiBcInR1cm4gcmlnaHRcIiwgdGhlIG91dHB1dCBvZiBcInR1cm4gcmlnaHRcIi4gXCJ0dXJuIHJpZ2h0XCIgb3V0cHV0cyBcIlRVUk4gUklHSFRcIi4gU28gcmVwZWF0aW5nIHRoZSBvdXRwdXQgb2YgXCJ0dXJuIHJpZ2h0XCIgdHdpY2UgbGVhZHMgdG8gXCJUVVJOIFJJR0hUXCIgKiAyLiBTbyB0aGUgb3V0cHV0IG9mIFwidHVybiBvcHBvc2l0ZSByaWdodFwiIGlzIFwiVFVSTiBSSUdIVFwiICogMi5cblxuUTogdHVybiBhcm91bmQgcmlnaHRcbkE6IFRoZSBvdXRwdXQgb2YgXCJ0dXJuIGFyb3VuZCByaWdodFwiIGNvbmNhdGVuYXRlczogdGhlIG91dHB1dCBvZiBcInR1cm4gcmlnaHRcIiwgdGhlIG91dHB1dCBvZiBcInR1cm4gcmlnaHRcIiwgdGhlIG91dHB1dCBvZiBcInR1cm4gcmlnaHRcIiwgdGhlIG91dHB1dCBvZiBcInR1cm4gcmlnaHRcIi4gXCJ0dXJuIHJpZ2h0XCIgb3V0cHV0cyBcIlRVUk4gUklHSFRcIi4gU28gcmVwZWF0aW5nIHRoZSBvdXRwdXQgb2YgXCJ0dXJuIHJpZ2h0XCIgZm91ciB0aW1lcyBsZWFkcyB0byBcIlRVUk4gUklHSFRcIiAqIDQuIFNvIHRoZSBvdXRwdXQgb2YgXCJ0dXJuIGFyb3VuZCByaWdodFwiIGlzIFwiVFVSTiBSSUdIVFwiICogNC5cblxuUTogd2FsayBvcHBvc2l0ZSBsZWZ0XG5BOiBUaGUgb3V0cHV0IG9mIFwid2FsayBvcHBvc2l0ZSBsZWZ0XCIgY29uY2F0ZW5hdGVzOiB0aGUgb3V0cHV0IG9mIFwidHVybiBvcHBvc2l0ZSBsZWZ0XCIsIHRoZSBvdXRwdXQgb2YgXCJ3YWxrXCIuIFwidHVybiBvcHBvc2l0ZSBsZWZ0XCIgb3V0cHV0cyBcIlRVUk4gTEVGVFwiICogMi4gXCJ3YWxrXCIgb3V0cHV0cyBcIldBTEtcIi4gU28gY29uY2F0ZW5hdGluZyB0aGUgb3V0cHV0IG9mIFwidHVybiBvcHBvc2l0ZSBsZWZ0XCIgYW5kIHRoZSBvdXRwdXQgb2YgXCJ3YWxrXCIgbGVhZHMgdG8gXCJUVVJOIExFRlRcIiAqIDIgKyBcIldBTEtcIi4gU28gdGhlIG91dHB1dCBvZiBcIndhbGsgb3Bwb3NpdGUgbGVmdFwiIGlzIFwiVFVSTiBMRUZUXCIgKiAyICsgXCJXQUxLXCIuXG5cblE6IHdhbGsgYXJvdW5kIGxlZnRcbkE6IFRoZSBvdXRwdXQgb2YgXCJ3YWxrIGFyb3VuZCBsZWZ0XCIgY29uY2F0ZW5hdGVzOiB0aGUgb3V0cHV0IG9mIFwid2FsayBsZWZ0XCIsIHRoZSBvdXRwdXQgb2YgXCJ3YWxrIGxlZnRcIiwgdGhlIG91dHB1dCBvZiBcIndhbGsgbGVmdFwiLCB0aGUgb3V0cHV0IG9mIFwid2FsayBsZWZ0XCIuIFwid2FsayBsZWZ0XCIgb3V0cHV0cyBcIlRVUk4gTEVGVFwiICsgXCJXQUxLXCIuIFNvIHJlcGVhdGluZyB0aGUgb3V0cHV0IG9mIFwid2FsayBhcm91bmQgbGVmdFwiIGZvdXIgdGltZXMgbGVhZHMgdG8gKFwiVFVSTiBMRUZUXCIgKyBcIldBTEtcIikgKiA0LiBTbyB0aGUgb3V0cHV0IG9mIFwid2FsayBhcm91bmQgbGVmdFwiIGlzIChcIlRVUk4gTEVGVFwiICsgXCJXQUxLXCIpICogNC5cblxuUTogXCJqdW1wIGFyb3VuZCBsZWZ0IHR3aWNlIGFmdGVyIHdhbGsgb3Bwb3NpdGUgbGVmdCB0aHJpY2VcIiBcbkE6IiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,d.kt)("h3",{id:"results-1"},"Results"),(0,d.kt)("p",null,"LtM leads to multiple improvements:"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"improved accuracy over Chain of Thought"),(0,d.kt)("li",{parentName:"ul"},"increased generalization on problems harder than those in the prompt"),(0,d.kt)("li",{parentName:"ul"},"dramatically improved performance in compositional generalization, in particular the SCAN benchmark",(0,d.kt)("sup",{parentName:"li",id:"fnref-3"},(0,d.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")))),(0,d.kt)("p",null,"Standard prompting with text-davinci-002 (the model used in the paper) results in 6% of successful SCAN problems solved, while Least to Most prompting results in an impressive 76% success rate. The results are event more significant with code-davinci-002, where Least to Most prompting achieves a 99.7% success rate."),(0,d.kt)("div",{className:"footnotes"},(0,d.kt)("hr",{parentName:"div"}),(0,d.kt)("ol",{parentName:"div"},(0,d.kt)("li",{parentName:"ol",id:"fn-1"},"Zhou, D., Sch\xe4rli, N., Hou, L., Wei, J., Scales, N., Wang, X., Schuurmans, D., Cui, C., Bousquet, O., Le, Q., & Chi, E. (2022). Least-to-Most Prompting Enables Complex Reasoning in Large Language Models.\n",(0,d.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,d.kt)("li",{parentName:"ol",id:"fn-2"},"Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models.\n",(0,d.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,d.kt)("li",{parentName:"ol",id:"fn-3"},"Lake, B. M., & Baroni, M. (2018). Generalization without Systematicity: On the Compositional Skills of Sequence-to-Sequence Recurrent Networks. https://doi.org/10.48550/arXiv.1711.00350\n",(0,d.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}B.isMDXComponent=!0}}]);