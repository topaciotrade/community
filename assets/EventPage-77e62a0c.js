import{_ as H,j as g,r as d,u as K,A as G,f as J,o as X,a as I,g as M,d as c,k as N,e as $,t as k,m as R,w as U,l as W,y as se,B as ue,p as oe,b as le,E as de,F as Q,C as pe,c as ie,h as ce,i as ge,n as re}from"./index-4da8d0d0.js";import{e as Z,_ as ve,a as _e}from"./Paginator.vue_vue_type_style_index_0_lang-8f8a861d.js";import{_ as ee,a as j,b as te}from"./ScrollAreaComponent.vue_vue_type_style_index_0_lang-c731d699.js";const Y=S=>(oe("data-v-b68c7386"),S=S(),le(),S),fe={class:"box-card"},me={class:"box-content"},he={class:"header-card p-start"},we=["href"],be=Y(()=>c("img",{class:"img-link-polygon",src:ve,alt:"logo matic"},null,-1)),ye=Y(()=>c("i",{class:"fa-solid fa-circle-info icon-info"},null,-1)),Ie={class:"fecha-sorteo"},Se={key:0,class:"legend"},Te={class:"content prop"},xe={class:"content prop"},ke=Y(()=>c("div",{class:"box-img"},null,-1)),Pe={class:"content info"},Le={__name:"nftItemEvent",props:["nftId","grid","target","k","w","h"],setup(S,{expose:z}){const f=S,b=g("getDataNFT"),B=g("getLinkNftScan"),P=g("syncBalance"),v=g("syncTmineBalance"),L=g("claimReward"),l=g("transferNFT"),A=g("refreshTokens"),s=d(f.nftId),p=d(f.w),C=d(f.k),E=d(!1),n=d(null),m=d(null),h=d(!1),u=K(),F=e=>{const a=parseInt(String(e)+"999");return new Date(a).toLocaleDateString()+" "+new Date(a).toLocaleTimeString()},D=e=>e.substring(0,7)+"    ......    "+e.slice(-7),o=()=>{h.value=!0},i=async({w:e,id:a})=>{console.log("toTransferNFT",{w:e,id:a});const t=await l(e,a);await P(),await v(),await A(),console.log({modalSend:m,resp:t}),!(t!=null&&t.blockNumber)||t===null?m.value.loading=!1:h.value=!1},w=async()=>{E.value=!0;const e=parseInt(s.value),a=await b(e);a.id&&a.id===s.value&&(n.value=a,u.web3.nftLoad[e]=a),await P(),await v(),setTimeout(()=>{E.value=!1},2e3)},y=G(()=>{const e=parseInt(s.value);return u.web3.nftLoad[e]!==void 0}),T=async()=>{const e=parseInt(s.value);if(await L(e)===!0){await P(),await v(),console.log("* toClaim ok");const t=await b(e);t.id&&t.id===s.value&&e&&(n.value=t,u.web3.nftLoad[e]=t)}},r=e=>{const t=x().filter(_=>_.prop==e);return t[0]&&t[0].value?t[0].value:null},x=()=>{var e,a;return(a=(e=n==null?void 0:n.value)==null?void 0:e.metadata)!=null&&a.attributes?n.value.metadata.attributes.flatMap(t=>({prop:t!=null&&t.trait_type?t==null?void 0:t.trait_type:null,value:t.value})):[]},V=G(()=>{var t,_;const e=parseInt(s.value),a=f.grid&&f.grid&&f.target.length>7?"cover":"150% 100%";return u.web3.nftLoad[e]!==void 0&&((_=(t=n==null?void 0:n.value)==null?void 0:t.metadata)!=null&&_.image)?`
	--crt:#fff;
    background-image: url(${n.value.metadata.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${a};`:""}),q=e=>{const a=e.target,t=e.pageX-a.offsetLeft,_=e.pageY-a.offsetTop;a.style.setProperty("--x",t+"px"),a.style.setProperty("--y",_+"px")};return J(y,async e=>{if(e&&(console.log(e,"*existInLoad",u.web3.nftLoad[s.value]!==void 0,s.value,n.value),e&&!n.value)){const a=parseInt(s.value),t=await b(a);t.id&&t.id===s.value&&(n.value=t),console.log({resp:t})}}),J(()=>f.nftId,async function(e){var a;if(s.value=e,n.value=null,console.log("w",e,y.value,u.web3.nftLoad[e]),!y.value&&!u.web3.nftLoad[e]){const t=parseInt(s.value);console.log("*startSearch");const _=await b(t);_.id&&_.id===s.value&&(n.value=_,u.web3.nftLoad[t]=_),console.log("* meta",n.value,{data:_})}u.web3.nftLoad[e],((a=u.web3.nftLoad[e])==null?void 0:a.id)===e&&(n.value=u.web3.nftLoad[e])}),X(async()=>{const e=parseInt(s.value),a=await b(e);a.id&&a.id===s.value&&u.web3.nftLoad[e]&&(n.value=a,u.web3.nftLoad[e]=a),a&&!u.web3.nftLoad[s.value]&&(n.value=a,u.web3.nftLoad[s.value]=a)}),z({nftId:s,existInLoad:y,mainStore:u,getBgNft:V,getLinkNftScan:B,moseMoveInCard:q,toClaim:T,loadRedresh:E,toRefresh:w,showModalSedNft:h,toSend:o,toTransferNFT:i,Popper:Z,key:C,formatDateTime:F,winnerWallet:p,formatWallet:D,getNftAtributes:x,getProp:r}),(e,a)=>{var t,_;return(t=n.value)!=null&&t.metadata?(I(),M("div",{key:0,class:se({"nft-item-event":!0}),onMousemove:q,style:ue(`background-image: url(${n.value.metadata.image})`)},[c("div",fe,[c("div",me,[c("div",he,[c("a",{href:N(B)(s.value),target:"_blank"},[$("# "+k(s.value)+" ",1),R(N(Z),{content:"Examinar en Polygonscan",arrow:!0,hover:!0},{default:U(()=>[be]),_:1})],8,we),ye,c("span",Ie,k(F(C.value)),1)]),(_=n.value)!=null&&_.metadata?(I(),M("span",Se,[c("p",null,"Winner: "+k(D(p.value)),1),c("div",Te,"Type: "+k(r("Type"))+" Luck: "+k(r("Luck")),1),c("div",xe,"Staking: "+k(r("Staking")),1)])):W("",!0)]),ke]),c("p",Pe,k(n.value.metadata.name),1)],36)):W("",!0)}}},ae=H(Le,[["__scopeId","data-v-b68c7386"]]);const Ce={key:1,class:"paginator"},$e={key:2,class:"paginator"},Ne={__name:"ContainerEventList",setup(S,{expose:z}){const f=g("searchLastSorteo"),b=g("searchWinnerInSorteo"),B=new ce,P=K(),v=d(1);d(null);const L=d(null),l=d(!1),A=d(null),s=d(9),p=de({winners:[],loading:!0}),C=o=>{v.value=o,m(),console.log("updatePage",o),u(o)},E=()=>{l.value=!l.value,l.value?s.value=10:s.value=5,h.value=m()},n=G(()=>p.winners&&p.winners.length==0?[]:p.winners.flatMap(o=>o.id)),m=()=>{const o=JSON.parse(JSON.stringify(P.web3.nftTokensIds)),i=B.arrayPaginator(o,s.value,v.value);return A.value=i.totalPaginas,i},h=d(m()),u=async o=>{if(v.value=parseInt(o),h.value=m(),console.log("toPage",v.value),v.value>1){const w=v.value*s.value,y=L.value-w,T=Array.from({length:y}).map((x,V)=>V).splice(parseInt(s.value)*-1);console.log({sorteosPrevios:T});let r=[];for(var i=0;i<T.length;i++){const x=await b(T[i]);x.hash&&x.hash!=""&&r.push(x)}p.winners=r}},F=()=>{v.value<A.value&&(v.value++,h.value=m()),console.log("nextPage",v.value)};J(()=>P.web3.nftTokensIds,o=>{o&&(h.value=m())});const D=[];return X(async()=>{L.value=await f();let o=await b(L.value);for(var i=L.value;p.winners.length<s.value;i--){const w=await b(i);w.hash&&w.hash!=""&&p.winners.push(w)}console.log({last_sorteo:L,winnerLast:o,winnersTarget:p}),p.loading=!1}),z({data:D,mainStore:P,currentPage:h,nextPage:F,nftItemEvent:ae,getCurrentTarget:n,multiGrid14:l,changeToMultigrid:E,Paginator:_e,updatePage:C,amountPerPage:s,last_sorteo:L}),(o,i)=>{var w,y,T;return I(),M(Q,null,[p.loading?W("",!0):(I(),M("section",{key:0,class:se({content:!0,"multi-grid-14":l.value,lessMinimal:n.value&&((w=n.value)==null?void 0:w.length)&&((y=n.value)==null?void 0:y.length)<=4,"minimal-size":l.value&&((T=n.value)==null?void 0:T.length)<=3})},[(I(!0),M(Q,null,pe(n.value,(r,x)=>(I(),ie(ae,{grid:l.value,target:n.value,"nft-id":r,h:p.winners[x].hash,k:p.winners[x].timestamp,w:p.winners[x].wallet},null,8,["grid","target","nft-id","h","k","w"]))),256))],2)),h.value&&h.value.paginaActual?(I(),M("section",Ce)):(I(),M("section",$e))],64)}}},ne=H(Ne,[["__scopeId","data-v-670bcbec"]]);const O=S=>(oe("data-v-a8bb3882"),S=S(),le(),S),Me={class:"event"},Ae={key:0,class:"title"},Ee=O(()=>c("span",{class:"title-left-section"}," Evento de Sorteo Diario ",-1)),Fe={class:"sidebar"},Be={key:0,id:"list-options"},De={class:"lbl-left"},We=O(()=>c("img",{src:re,alt:"matic-logo-banance",class:"matic-logo-banance"},null,-1)),ze={class:"lbl-left"},Re=O(()=>c("img",{src:re,alt:"matic-logo-banance",class:"matic-logo-banance"},null,-1)),Je={class:"in-col p-1 li-sort"},Oe=O(()=>c("span",null,"Proximo Sorteo",-1)),Ve={class:"p-1-lr"},je={__name:"EventPage",setup(S,{expose:z}){const f=ge.useToast(),b=g("syncTmineTotalSupply"),B=g("addTmineToMetamask");g("executeSelectWinner"),g("resetTimeEventDaily"),g("selectWinnerSorteo");const P=g("getCostoInSorteo"),v=g("addMeToSorteo"),L=new ce,l=K(),A=d(1),s=d(null),p=d(10),C=d(null),E=()=>{var o=1,i=confetti.shapeFromText({text:"💎",scalar:o});confetti({particleCount:100,spread:180,shapes:[i]})},n=async()=>{var o,i,w,y,T;try{const r=await v();f.open({message:"Registro procesado satisfactoriamente.",type:"success",position:"top-right"})}catch(r){console.log({e:r}),r!=null&&r.reason?f.open({message:r.reason,type:"error",position:"top-right"}):(w=(i=(o=r==null?void 0:r.info)==null?void 0:o.error)==null?void 0:i.data)!=null&&w.message&&((T=(y=r==null?void 0:r.info)==null?void 0:y.error)==null?void 0:T.code)==-32603&&f.open({message:"Gas insuficiente",type:"error",position:"top-right"})}},m=()=>{if(l.web3.nftTokensIds.length==0)return{elementosPagina:[],totalPaginas:1,paginaActual:1};const o=JSON.parse(JSON.stringify(l.web3.nftTokensIds)),i=L.arrayPaginator(o,p.value,A.value);return s.value=i.totalPaginas,console.log({dataFormat:i}),i},h=()=>{A.value<s.value&&(A.value++,u.value=m()),console.log("nextPage",A.value)},u=d(m()),F=()=>{var o;return(o=l==null?void 0:l.web3)!=null&&o.participantsInSorteo&&l.web3.participantsInSorteo.length==0?[]:l.web3.participantsInSorteo?l.web3.participantsInSorteo.flatMap(i=>i.substring(0,7)+"    ......    "+i.slice(-7)):[]};J(()=>l.web3.nftTokensIds,async o=>{o&&(m(),b(),C.value=await P())});const D=[];return X(async()=>{C.value=await P(),console.log({costoSorteo:C}),b()}),z({data:D,mainStore:l,currentPage:u,nextPage:h,ContainerEventList:ne,addTmineToMetamask:B,shooterConfetti:E,CountdownComponent:ee,ButtomComponent:j,registerInSorteo:n,ScrollAreaComponent:te,formatWallets:F,costoSorteo:C}),(o,i)=>(I(),M("main",Me,[N(l).connected&&N(l).web3?(I(),M("h1",Ae,[Ee,$(" Topacio Nft's Listado de Fargmentos Liberados 💎 / Holders actuales: "+k(N(l).web3.holdersCount),1)])):W("",!0),c("section",Fe,[N(l).connected?(I(),M("ul",Be,[c("li",null,[c("label",De,[$(" Mi Balance "),c("span",null,[$(k(N(l).web3.balanceFormat)+" ",1),We,$(" MATIC ")])])]),c("li",null,[c("label",ze,[$(" PATICIPACIÓN "),c("span",null,[$(k(C.value)+" ",1),Re,$(" MATIC ")])])]),c("li",Je,[Oe,R(ee,{dateTarget:N(l).web3.dateNextSorteo},null,8,["dateTarget"]),R(j,{class:"bnt1",onClick:n},{default:U(()=>[$("Participar")]),_:1}),R(j,{class:"btn3 p-1 no-cursor"},{default:U(()=>[$("Participantes en dia: "+k(N(l).web3.participantsInSorteo.length),1)]),_:1})]),c("li",Ve,[R(te,{title:"Participando para sorteo",items:F(),showKey:!0},null,8,["items"])])])):W("",!0)]),N(l).connected?(I(),ie(ne,{key:1})):W("",!0)]))}},Ke=H(je,[["__scopeId","data-v-a8bb3882"]]);export{Ke as default};
