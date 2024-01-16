import{_ as q,j as g,r as d,u as H,A as G,f as J,o as K,a as I,g as M,d as c,l as N,e as $,t as k,n as R,w as U,m as W,y as se,C as ue,p as oe,b as le,I as de,F as Q,B as pe,c as ie,h as ce,i as ge,q as re}from"./index-5d9c99f0.js";import{e as Z,_ as fe}from"./Paginator.vue_vue_type_style_index_0_lang-e1c07d7e.js";import{_ as _e}from"./Paginator.vue_vue_type_script_setup_true_lang-53b8586c.js";import{_ as ee,a as j,b as te}from"./ScrollAreaComponent.vue_vue_type_style_index_0_lang-5553d465.js";import"./iconify-67965fb0.js";import"./index-3b8dde9d.js";const X=S=>(oe("data-v-0c65f1ff"),S=S(),le(),S),ve={class:"box-card"},me={class:"box-content"},he={class:"header-card p-start"},we=["href"],be=X(()=>c("img",{class:"img-link-polygon",src:fe,alt:"logo matic"},null,-1)),ye=X(()=>c("i",{class:"fa-solid fa-circle-info icon-info"},null,-1)),Ie={class:"fecha-sorteo"},Se={key:0,class:"legend"},Te={class:"content prop"},xe={class:"content prop"},ke=X(()=>c("div",{class:"box-img"},null,-1)),Pe={class:"content info"},Le={__name:"nftItemEvent",props:["nftId","grid","target","k","w","h"],setup(S,{expose:z}){const T=g("getDataNFT"),A=g("getLinkNftScan"),E=g("syncBalance"),P=g("syncTmineBalance"),m=g("claimReward"),L=g("transferNFT"),l=g("refreshTokens"),f=S,s=d(f.nftId),p=d(f.w),C=d(f.k),F=d(!1),n=d(null),h=d(null),w=d(!1),u=H(),B=e=>{const a=parseInt(String(e)+"999");return new Date(a).toLocaleDateString()+" "+new Date(a).toLocaleTimeString()},D=e=>e.substring(0,7)+"    ......    "+e.slice(-7),o=()=>{w.value=!0},i=async({w:e,id:a})=>{console.log("toTransferNFT",{w:e,id:a});const t=await L(e,a);await E(),await P(),await l(),await v(),console.log({modalSend:h,resp:t}),!(t!=null&&t.blockNumber)||t===null?h.value.loading=!1:w.value=!1},v=async()=>{F.value=!0;const e=parseInt(s.value),a=await T(e);a.id&&a.id===s.value&&(n.value=a,u.web3.nftLoad[e]=a),await E(),await P(),setTimeout(()=>{F.value=!1},2e3)},b=G(()=>{const e=parseInt(s.value);return u.web3.nftLoad[e]!==void 0}),x=async()=>{const e=parseInt(s.value);if(await m(e)===!0){await E(),await P(),console.log("* toClaim ok");const t=await T(e);t.id&&t.id===s.value&&e&&(n.value=t,u.web3.nftLoad[e]=t)}},r=e=>{const t=y().filter(_=>_.prop==e);return t[0]&&t[0].value?t[0].value:null},y=()=>{var e,a;return(a=(e=n==null?void 0:n.value)==null?void 0:e.metadata)!=null&&a.attributes?n.value.metadata.attributes.flatMap(t=>({prop:t!=null&&t.trait_type?t==null?void 0:t.trait_type:null,value:t.value})):[]},V=G(()=>{var t,_;const e=parseInt(s.value),a=f.grid&&f.grid&&f.target.length>7?"cover":"150% 100%";return u.web3.nftLoad[e]!==void 0&&((_=(t=n==null?void 0:n.value)==null?void 0:t.metadata)!=null&&_.image)?`
	--crt:#fff;
    background-image: url(${n.value.metadata.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${a};`:""}),Y=e=>{const a=e.target,t=e.pageX-a.offsetLeft,_=e.pageY-a.offsetTop;a.style.setProperty("--x",t+"px"),a.style.setProperty("--y",_+"px")};return J(b,async e=>{if(e&&(console.log(e,"*existInLoad",u.web3.nftLoad[s.value]!==void 0,s.value,n.value),e&&!n.value)){const a=parseInt(s.value),t=await T(a);t.id&&t.id===s.value&&(n.value=t),console.log({resp:t})}}),J(()=>f.nftId,async function(e){var a;if(s.value=e,n.value=null,console.log("w",e,b.value,u.web3.nftLoad[e]),!b.value&&!u.web3.nftLoad[e]){const t=parseInt(s.value);console.log("*startSearch");const _=await T(t);_.id&&_.id===s.value&&(n.value=_,u.web3.nftLoad[t]=_),console.log("* meta",n.value,{data:_})}u.web3.nftLoad[e],((a=u.web3.nftLoad[e])==null?void 0:a.id)===e&&(n.value=u.web3.nftLoad[e])}),K(async()=>{const e=parseInt(s.value),a=await T(e);a.id&&a.id===s.value&&u.web3.nftLoad[e]&&(n.value=a,u.web3.nftLoad[e]=a),a&&!u.web3.nftLoad[s.value]&&(n.value=a,u.web3.nftLoad[s.value]=a)}),z({nftId:s,existInLoad:b,mainStore:u,getBgNft:V,getLinkNftScan:A,moseMoveInCard:Y,toClaim:x,loadRedresh:F,toRefresh:v,showModalSedNft:w,toSend:o,toTransferNFT:i,Popper:Z,key:C,formatDateTime:B,winnerWallet:p,formatWallet:D,getNftAtributes:y,getProp:r}),(e,a)=>{var t,_;return(t=n.value)!=null&&t.metadata?(I(),M("div",{key:0,class:se({"nft-item-event":!0}),onMousemove:Y,style:ue(`background-image: url(${n.value.metadata.image})`)},[c("div",ve,[c("div",me,[c("div",he,[c("a",{href:N(A)(s.value),target:"_blank"},[$("# "+k(s.value)+" ",1),R(N(Z),{content:"Examinar en Polygonscan",arrow:!0,hover:!0},{default:U(()=>[be]),_:1})],8,we),ye,c("span",Ie,k(B(C.value)),1)]),(_=n.value)!=null&&_.metadata?(I(),M("span",Se,[c("p",null,"Winner: "+k(D(p.value)),1),c("div",Te,"Type: "+k(r("Type"))+" Luck: "+k(r("Luck")),1),c("div",xe,"Staking: "+k(r("Staking")),1)])):W("",!0)]),ke]),c("p",Pe,k(n.value.metadata.name),1)],36)):W("",!0)}}},ae=q(Le,[["__scopeId","data-v-0c65f1ff"]]);const Ce={key:1,class:"paginator"},$e={key:2,class:"paginator"},Ne={__name:"ContainerEventList",setup(S,{expose:z}){const T=g("searchLastSorteo"),A=g("searchWinnerInSorteo"),E=new ce,P=H(),m=d(1);d(null);const L=d(null),l=d(!1),f=d(null),s=d(9),p=de({winners:[],loading:!0}),C=o=>{m.value=o,h(),console.log("updatePage",o),u(o)},F=()=>{l.value=!l.value,l.value?s.value=10:s.value=5,w.value=h()},n=G(()=>p.winners&&p.winners.length==0?[]:p.winners.flatMap(o=>o.id)),h=()=>{const o=JSON.parse(JSON.stringify(P.web3.nftTokensIds)),i=E.arrayPaginator(o,s.value,m.value);return f.value=i.totalPaginas,i},w=d(h()),u=async o=>{if(m.value=parseInt(o),w.value=h(),console.log("toPage",m.value),m.value>1){const v=m.value*s.value,b=L.value-v,x=Array.from({length:b}).map((y,V)=>V).splice(parseInt(s.value)*-1);console.log({sorteosPrevios:x});let r=[];for(var i=0;i<x.length;i++){const y=await A(x[i]);y.hash&&y.hash!=""&&r.push(y)}p.winners=r}},B=()=>{m.value<f.value&&(m.value++,w.value=h()),console.log("nextPage",m.value)};J(()=>P.web3.nftTokensIds,o=>{o&&(w.value=h())});const D=[];return K(async()=>{L.value=await T();let o=await A(L.value);for(var i=L.value;p.winners.length<s.value;i--){const v=await A(i);v.hash&&v.hash!=""&&p.winners.push(v)}console.log({last_sorteo:L,winnerLast:o,winnersTarget:p}),p.loading=!1}),z({data:D,mainStore:P,currentPage:w,nextPage:B,nftItemEvent:ae,getCurrentTarget:n,multiGrid14:l,changeToMultigrid:F,Paginator:_e,updatePage:C,amountPerPage:s,last_sorteo:L}),(o,i)=>{var v,b,x;return I(),M(Q,null,[p.loading?W("",!0):(I(),M("section",{key:0,class:se({content:!0,"multi-grid-14":l.value,lessMinimal:n.value&&((v=n.value)==null?void 0:v.length)&&((b=n.value)==null?void 0:b.length)<=4,"minimal-size":l.value&&((x=n.value)==null?void 0:x.length)<=3})},[(I(!0),M(Q,null,pe(n.value,(r,y)=>(I(),ie(ae,{grid:l.value,target:n.value,"nft-id":r,h:p.winners[y].hash,k:p.winners[y].timestamp,w:p.winners[y].wallet,key:y},null,8,["grid","target","nft-id","h","k","w"]))),128))],2)),w.value&&w.value.paginaActual?(I(),M("section",Ce)):(I(),M("section",$e))],64)}}},ne=q(Ne,[["__scopeId","data-v-c947d440"]]);const O=S=>(oe("data-v-ac0bcb07"),S=S(),le(),S),Me={class:"event"},Ae={key:0,class:"title"},Ee=O(()=>c("span",{class:"title-left-section"}," Evento de Sorteo Diario ",-1)),Fe={class:"sidebar"},Be={key:0,id:"list-options"},De={class:"lbl-left"},We=O(()=>c("img",{src:re,alt:"matic-logo-banance",class:"matic-logo-banance"},null,-1)),ze={class:"lbl-left"},Re=O(()=>c("img",{src:re,alt:"matic-logo-banance",class:"matic-logo-banance"},null,-1)),Je={class:"in-col p-1 li-sort"},Oe=O(()=>c("span",null,"Proximo Sorteo",-1)),Ve={class:"p-1-lr"},je={__name:"EventPage",setup(S,{expose:z}){const T=ge.useToast(),A=g("syncTmineTotalSupply"),E=g("addTmineToMetamask");g("executeSelectWinner"),g("resetTimeEventDaily"),g("selectWinnerSorteo");const P=g("getCostoInSorteo"),m=g("addMeToSorteo"),L=new ce,l=H(),f=d(1),s=d(null),p=d(10),C=d(null),F=()=>{var o=1,i=confetti.shapeFromText({text:"💎",scalar:o});confetti({particleCount:100,spread:180,shapes:[i]})},n=async()=>{var o,i,v,b,x;try{const r=await m();T.open({message:"Registro procesado satisfactoriamente.",type:"success",position:"top-right"})}catch(r){console.log({e:r}),r!=null&&r.reason?T.open({message:r.reason,type:"error",position:"top-right"}):(v=(i=(o=r==null?void 0:r.info)==null?void 0:o.error)==null?void 0:i.data)!=null&&v.message&&((x=(b=r==null?void 0:r.info)==null?void 0:b.error)==null?void 0:x.code)==-32603&&T.open({message:"Gas insuficiente",type:"error",position:"top-right"})}},h=()=>{if(l.web3.nftTokensIds.length==0)return{elementosPagina:[],totalPaginas:1,paginaActual:1};const o=JSON.parse(JSON.stringify(l.web3.nftTokensIds)),i=L.arrayPaginator(o,p.value,f.value);return s.value=i.totalPaginas,console.log({dataFormat:i}),i},w=()=>{f.value<s.value&&(f.value++,u.value=h()),console.log("nextPage",f.value)},u=d(h()),B=()=>{var o;return(o=l==null?void 0:l.web3)!=null&&o.participantsInSorteo&&l.web3.participantsInSorteo.length==0?[]:l.web3.participantsInSorteo?l.web3.participantsInSorteo.flatMap(i=>i.substring(0,7)+"    ......    "+i.slice(-7)):[]};J(()=>l.web3.nftTokensIds,async o=>{o&&(h(),A(),C.value=await P())});const D=[];return K(async()=>{C.value=await P(),console.log({costoSorteo:C}),A()}),z({data:D,mainStore:l,currentPage:u,nextPage:w,ContainerEventList:ne,addTmineToMetamask:E,shooterConfetti:F,CountdownComponent:ee,ButtomComponent:j,registerInSorteo:n,ScrollAreaComponent:te,formatWallets:B,costoSorteo:C}),(o,i)=>(I(),M("main",Me,[N(l).connected&&N(l).web3?(I(),M("h1",Ae,[Ee,$(" Topacio Nft's Listado de Fargmentos Liberados 💎 / Holders actuales: "+k(N(l).web3.holdersCount),1)])):W("",!0),c("section",Fe,[N(l).connected?(I(),M("ul",Be,[c("li",null,[c("label",De,[$(" Mi Balance "),c("span",null,[$(k(N(l).web3.balanceFormat)+" ",1),We,$(" MATIC ")])])]),c("li",null,[c("label",ze,[$(" PATICIPACIÓN "),c("span",null,[$(k(C.value)+" ",1),Re,$(" MATIC ")])])]),c("li",Je,[Oe,R(ee,{dateTarget:N(l).web3.dateNextSorteo},null,8,["dateTarget"]),R(j,{class:"bnt1",onClick:n},{default:U(()=>[$("Participar")]),_:1}),R(j,{class:"btn3 p-1 no-cursor"},{default:U(()=>[$("Participantes en dia: "+k(N(l).web3.participantsInSorteo.length),1)]),_:1})]),c("li",Ve,[R(te,{title:"Participando para sorteo",items:B(),showKey:!0},null,8,["items"])])])):W("",!0)]),N(l).connected?(I(),ie(ne,{key:1})):W("",!0)]))}},Ye=q(je,[["__scopeId","data-v-ac0bcb07"]]);export{Ye as default};
