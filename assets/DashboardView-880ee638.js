import{_ as B,a as A,b as x}from"./ButtomComponent-5d4e7a2e.js";import{_ as V,i as E,j as M,u as F,r as b,g as H,o as R,k as D,l as G,a as m,b as g,d as t,e as l,t as s,f as d,c as P,m as J,n as L,h as O}from"./index-24a9f632.js";import{C as U}from"./ContainerGallery-cc0899b8.js";import{_ as W}from"./Tmine2-25d51798.js";import"./index-6dd3eea0.js";import"./Paginator.vue_vue_type_style_index_0_lang-a4440c22.js";import"./Paginator.vue_vue_type_script_setup_true_lang-4e62e2a6.js";import"./iconify-f359ef72.js";const I="/img/Tmine2-w.svg",j="/img/MATICTMIME.svg";const y=E.useToast(),q={setup(){const{proxy:n}=M(),o=M();console.log({P:o.proxy.$w3AddMeToSorteo,proxy:n});const h=new O,e=F(),p=b(1),w=b(null),f=b(10),S=()=>{var r=1,i=confetti.shapeFromText({text:"💎",scalar:r});confetti({particleCount:100,spread:180,shapes:[i]})},T=async()=>{var r,i,k,v,C;try{const a=await o.proxy.$w3AddMeToSorteo();y.open({message:"Registro procesado satisfactoriamente.",type:"success",position:"top-right"})}catch(a){console.log({e:a}),a!=null&&a.reason?y.open({message:a.reason,type:"error",position:"top-right"}):(k=(i=(r=a==null?void 0:a.info)==null?void 0:r.error)==null?void 0:i.data)!=null&&k.message&&((C=(v=a==null?void 0:a.info)==null?void 0:v.error)==null?void 0:C.code)==-32603&&y.open({message:$t("general.titles.insufficient_gas"),type:"error",position:"top-right"})}},c=()=>{if(e.web3.nftTokensIds.length==0)return{elementosPagina:[],totalPaginas:1,paginaActual:1};const r=JSON.parse(JSON.stringify(e.web3.nftTokensIds)),i=h.arrayPaginator(r,f.value,p.value);return w.value=i.totalPaginas,console.log({dataFormat:i}),i},_=()=>{p.value<w.value&&(p.value++,u.value=c()),console.log("nextPage",p.value)},u=b(c()),N=()=>{var r;return(r=e==null?void 0:e.web3)!=null&&r.participantsInSorteo&&e.web3.participantsInSorteo.length==0?[]:e.web3.participantsInSorteo?e.web3.participantsInSorteo.flatMap(i=>i.substring(0,7)+"    ......    "+i.slice(-7)):[]};H(()=>e.web3.nftTokensIds,r=>{r&&(c(),n.$w3SyncTmineTotalSupply(),n.$w3SearchTmineRewardPerBlock(),n.$w3SearchHalving())});const $=[];return R(async()=>{console.log({proxy:n,t:this}),await n.$w3SearchTmineRewardPerBlock(),await n.$w3SearchHalving(),n.$w3SyncTmineTotalSupply(),c(),console.log("onMounted",e.connected&&e.web3,e.connected,e.web3)}),D(()=>{n.$w3SearchTmineRewardPerBlock(),n.$w3SearchHalving(),n.$w3SyncTmineTotalSupply(),c()}),{data:$,mainStore:e,currentPage:u,nextPage:_,ContainerGallery:U,shooterConfetti:S,CountdownComponent:B,ButtomComponent:A,registerInSorteo:T,ScrollAreaComponent:x,formatWallets:N,addTmineToMetamask:()=>o.proxy.$w3AddTmineToMetamask()}}},K={class:"subscription"},z={key:0,class:"title"},Q={class:"title-left-section"},X={key:0,class:"block-container"},Y={key:0,class:"text-rate"},Z={class:"halving-container"},ee={class:"sidebar"},te={key:0,id:"list-options"},oe={class:"lbl-left"},ne={class:"lbl-left"},ae={class:"lbl-left"},se={class:"add-to-metamask"},re={class:"p-1-lr"};function ie(n,o,h,e,p,w){var c,_;const f=B,S=x,T=G("ContainerGallery");return m(),g("main",K,[e.mainStore.connected&&e.mainStore.web3?(m(),g("h1",z,[t("span",Q,[o[1]||(o[1]=l(" Tmine ")),o[2]||(o[2]=t("img",{src:I,alt:"tmine logo",class:"img-logo-tmine"},null,-1)),l(" "+s(n.$t("general.titles.total_supply"))+": "+s(e.mainStore.web3.tmineTotalSupply)+" ",1),(_=(c=e.mainStore)==null?void 0:c.web3)!=null&&_.blockNumber?(m(),g("span",X,s(n.$t("general.titles.block"))+": "+s(e.mainStore.web3.blockNumber),1)):d("",!0)]),e.mainStore.web3.rewardTmineBase?(m(),g("span",Y,s(n.$t("general.titles.rate"))+": "+s(e.mainStore.web3.rewardTmineBase),1)):d("",!0),t("div",Z,[l(s(n.$t("general.titles.halving"))+": ",1),e.mainStore.web3.halving?(m(),P(f,{key:0,dateTarget:parseInt(e.mainStore.web3.halving)},null,8,["dateTarget"])):d("",!0)]),l(" Topacio Nft's assets "+s(e.mainStore.web3.nftBalance)+" 💎 / Holders: "+s(e.mainStore.web3.holdersCount),1)])):d("",!0),t("section",ee,[e.mainStore.connected?(m(),g("ul",te,[t("li",null,[t("label",oe,[l(s(e.mainStore.web3.balanceFormat)+" ",1),o[3]||(o[3]=t("span",null,[t("img",{src:J,alt:"matic-logo-banance",class:"matic-logo-banance"}),l(" MATIC ")],-1))])]),t("li",null,[t("label",ne,[l(s(e.mainStore.web3.tmaineBalanceFormat)+" ",1),o[4]||(o[4]=t("span",null,[t("img",{src:I,alt:"tmine-logo-banance",class:"tmine-logo-banance"}),l(" TMINE ")],-1))])]),t("li",{onClick:o[0]||(o[0]=(...u)=>e.addTmineToMetamask&&e.addTmineToMetamask(...u))},[t("label",ae,[t("span",se,[o[5]||(o[5]=t("img",{src:W,class:"tmine-logo-banance"},null,-1)),l(" "+s(n.$t("general.titles.add_tmine")),1)])])]),o[6]||(o[6]=t("li",{class:"container-pool"},[t("img",{src:j,alt:"Liquidity Pool",class:"img-pool"})],-1)),t("li",re,[L(S,{title:"Participando para sorteo",items:e.formatWallets(),showKey:!0},null,8,["items"])])])):d("",!0)]),e.mainStore.connected?(m(),P(T,{key:1})):d("",!0)])}const we=V(q,[["render",ie],["__scopeId","data-v-27b41290"]]);export{we as default};
