import{_ as J,i as O,j as c,u as H,r as m,f as K,o as L,a as u,g as T,k as o,d as t,e as i,t as r,l as w,m as g,w as M,c as R,p as U,b as q,n as z,h as Q}from"./index-15d4b111.js";import{_ as X}from"./Tmine2-25d51798.js";import{C as N}from"./ContainerGallery-b37f5604.js";import{_ as B,a as S,b as V}from"./ScrollAreaComponent.vue_vue_type_style_index_0_lang-c9b86a21.js";import"./Paginator.vue_vue_type_style_index_0_lang-c9deeff2.js";import"./Paginator.vue_vue_type_script_setup_true_lang-55e5ecec.js";const D="/img/Tmine2-w.svg";const l=p=>(U("data-v-6ef00150"),p=p(),q(),p),Y={class:"subscription"},Z={key:0,class:"title"},ee={class:"title-left-section"},te=l(()=>t("img",{src:D,alt:"tmine logo",class:"img-logo-tmine"},null,-1)),se={class:"sidebar"},oe={key:0,id:"list-options"},ae={class:"lbl-left"},ne=l(()=>t("span",null,[t("img",{src:z,alt:"matic-logo-banance",class:"matic-logo-banance"}),i(" MATIC ")],-1)),ie={class:"lbl-left"},ce=l(()=>t("span",null,[t("img",{src:D,alt:"tmine-logo-banance",class:"tmine-logo-banance"}),i(" TMINE ")],-1)),re=l(()=>t("label",{class:"lbl-left"},[t("span",{class:"add-to-metamask"},[t("img",{src:X,class:"tmine-logo-banance"}),i(" Add TMine ")])],-1)),le=[re],pe={class:"in-col p-1 li-sort"},de=l(()=>t("span",null,"Proximo Sorteo",-1)),_e={class:"p-1-lr"},me={__name:"DashboardView",setup(p,{expose:E}){const f=O.useToast(),y=c("syncTmineTotalSupply"),b=c("addTmineToMetamask");c("executeSelectWinner"),c("resetTimeEventDaily"),c("selectWinnerSorteo");const $=c("addMeToSorteo"),A=new Q,e=H(),d=m(1),v=m(null),F=m(10),W=()=>{var a=1,s=confetti.shapeFromText({text:"💎",scalar:a});confetti({particleCount:100,spread:180,shapes:[s]})},x=async()=>{var a,s,_,I,P;try{const n=await $();f.open({message:"Registro procesado satisfactoriamente.",type:"success",position:"top-right"})}catch(n){console.log({e:n}),n!=null&&n.reason?f.open({message:n.reason,type:"error",position:"top-right"}):(_=(s=(a=n==null?void 0:n.info)==null?void 0:a.error)==null?void 0:s.data)!=null&&_.message&&((P=(I=n==null?void 0:n.info)==null?void 0:I.error)==null?void 0:P.code)==-32603&&f.open({message:"Gas insuficiente",type:"error",position:"top-right"})}},h=()=>{if(e.web3.nftTokensIds.length==0)return{elementosPagina:[],totalPaginas:1,paginaActual:1};const a=JSON.parse(JSON.stringify(e.web3.nftTokensIds)),s=A.arrayPaginator(a,F.value,d.value);return v.value=s.totalPaginas,console.log({dataFormat:s}),s},j=()=>{d.value<v.value&&(d.value++,k.value=h()),console.log("nextPage",d.value)},k=m(h()),C=()=>{var a;return(a=e==null?void 0:e.web3)!=null&&a.participantsInSorteo&&e.web3.participantsInSorteo.length==0?[]:e.web3.participantsInSorteo?e.web3.participantsInSorteo.flatMap(s=>s.substring(0,7)+"    ......    "+s.slice(-7)):[]};K(()=>e.web3.nftTokensIds,a=>{a&&(h(),y())});const G=[];return L(()=>{y()}),E({data:G,mainStore:e,currentPage:k,nextPage:j,ContainerGallery:N,addTmineToMetamask:b,shooterConfetti:W,CountdownComponent:B,ButtomComponent:S,registerInSorteo:x,ScrollAreaComponent:V,formatWallets:C}),(a,s)=>(u(),T("main",Y,[o(e).connected&&o(e).web3?(u(),T("h1",Z,[t("span",ee,[i(" Tmine "),te,i(" Existencia Total: "+r(o(e).web3.tmineTotalSupply),1)]),i(" Topacio Nft's assets "+r(o(e).web3.nftBalance)+" 💎 / Holders: "+r(o(e).web3.holdersCount),1)])):w("",!0),t("section",se,[o(e).connected?(u(),T("ul",oe,[t("li",null,[t("label",ae,[i(r(o(e).web3.balanceFormat)+" ",1),ne])]),t("li",null,[t("label",ie,[i(r(o(e).web3.tmineBalance)+" ",1),ce])]),t("li",{onClick:s[0]||(s[0]=(..._)=>o(b)&&o(b)(..._))},le),t("li",pe,[de,g(B,{dateTarget:o(e).web3.dateNextSorteo},null,8,["dateTarget"]),g(S,{class:"bnt1",onClick:x},{default:M(()=>[i("Participar")]),_:1}),g(S,{class:"btn3 p-1 no-cursor"},{default:M(()=>[i("Participantes en dia: "+r(o(e).web3.participantsInSorteo.length),1)]),_:1})]),t("li",_e,[g(V,{title:"Participando para sorteo",items:C(),showKey:!0},null,8,["items"])])])):w("",!0)]),o(e).connected?(u(),R(N,{key:1})):w("",!0)]))}},we=J(me,[["__scopeId","data-v-6ef00150"]]);export{we as default};
