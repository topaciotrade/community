import{_ as P,i as B,u as I,r,f as x,o as N,a as _,g as u,j as a,d as t,e as s,t as n,k as p,c as C,p as M,b as V,l as D,h as j}from"./index-c70bf2fb.js";import{C as h}from"./ContainerGallery-eb2eb5b0.js";const w="/img/Tmine2-w.svg";const m=o=>(M("data-v-8d582e6d"),o=o(),V(),o),A={class:"subscription"},E={key:0,class:"title"},F={class:"title-left-section"},J=m(()=>t("img",{src:w,alt:"tmine logo",class:"img-logo-tmine"},null,-1)),O={class:"sidebar"},G={key:0,id:"list-options"},H={class:"lbl-left"},L=m(()=>t("span",null,[t("img",{src:D,alt:"matic-logo-banance",class:"matic-logo-banance"}),s(" MATIC ")],-1)),U={class:"lbl-left"},q=m(()=>t("span",null,[t("img",{src:w,alt:"tmine-logo-banance",class:"tmine-logo-banance"}),s(" TMINE ")],-1)),z={__name:"DashboardView",setup(o,{expose:y}){const g=B("syncTmineTotalSupply"),T=new j,e=I(),l=r(1),b=r(null),v=r(10),d=()=>{if(e.web3.nftTokensIds.length==0)return{elementosPagina:[],totalPaginas:1,paginaActual:1};const c=JSON.parse(JSON.stringify(e.web3.nftTokensIds)),i=T.arrayPaginator(c,v.value,l.value);return b.value=i.totalPaginas,console.log({dataFormat:i}),i},S=()=>{l.value<b.value&&(l.value++,f.value=d()),console.log("nextPage",l.value)},f=r(d());x(()=>e.web3.nftTokensIds,c=>{c&&(d(),g())});const k=[];return N(()=>{g()}),y({data:k,mainStore:e,currentPage:f,nextPage:S,ContainerGallery:h}),(c,i)=>(_(),u("main",A,[a(e).connected&&a(e).web3.nftBalance>1?(_(),u("h1",E,[t("span",F,[s(" Tmine "),J,s(" Total Supply: "+n(a(e).web3.tmineTotalSupply),1)]),s(" Topacio Nft's assets "+n(a(e).web3.nftBalance)+" 💎 / Holders: "+n(a(e).web3.holdersCount),1)])):p("",!0),t("section",O,[a(e).connected&&a(e).web3.nftBalance>1?(_(),u("ul",G,[t("li",null,[t("label",H,[s(n(a(e).web3.balanceFormat)+" ",1),L])]),t("li",null,[t("label",U,[s(n(a(e).web3.tmineBalance)+" ",1),q])])])):p("",!0)]),a(e).connected&&a(e).web3.nftBalance>1?(_(),C(h,{key:1})):p("",!0)]))}},R=P(z,[["__scopeId","data-v-8d582e6d"]]);export{R as default};
