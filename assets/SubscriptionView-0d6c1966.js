import{_ as d,u as f,r as o,f as g,a as v,g as S,h as m,p as h,b,d as w}from"./index-c8e1dafe.js";import{C as I}from"./ContainerGallery-ef421cfe.js";const P=e=>(h("data-v-1fda228c"),e=e(),b(),e),x={class:"subscription"},y=P(()=>w("h1",{class:"title"},"Subscription IT'S COMING",-1)),k=[y],C={__name:"SubscriptionView",setup(e,{expose:_}){const u=new m,n=f(),a=o(1),r=o(null),p=o(10),c=()=>{const t=JSON.parse(JSON.stringify(n.web3.nftTokensIds)),s=u.arrayPaginator(t,p.value,a.value);return r.value=s.totalPaginas,console.log({dataFormat:s}),s},l=()=>{a.value<r.value&&(a.value++,i.value=c()),console.log("nextPage",a.value)},i=o(c());return g(()=>n.web3.nftTokensIds,t=>{t&&c()}),_({data:[],mainStore:n,currentPage:i,nextPage:l,ContainerGallery:I}),(t,s)=>(v(),S("main",x,k))}},B=d(C,[["__scopeId","data-v-1fda228c"]]);export{B as default};
