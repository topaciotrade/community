import{_ as G,j as f,r as g,u as K,A as j,f as O,o as X,a as b,g as M,d as r,l as x,e as N,t as d,n as J,w as U,m as D,y as se,C as ue,p as oe,b as le,I as de,F as Q,B as ge,c as q,h as ie,i as pe,q as re}from"./index-6cbc998d.js";import{e as Z,_ as fe}from"./Paginator.vue_vue_type_style_index_0_lang-f6359a4c.js";import{_ as _e}from"./Paginator.vue_vue_type_script_setup_true_lang-2ccc2b80.js";import{_ as ee,a as V,b as te}from"./ScrollAreaComponent.vue_vue_type_style_index_0_lang-15ff08b4.js";import"./iconify-c42330ce.js";import"./index-b09e77da.js";const Y=T=>(oe("data-v-0c65f1ff"),T=T(),le(),T),ve={class:"box-card"},me={class:"box-content"},he={class:"header-card p-start"},we=["href"],ye=Y(()=>r("img",{class:"img-link-polygon",src:fe,alt:"logo matic"},null,-1)),be=Y(()=>r("i",{class:"fa-solid fa-circle-info icon-info"},null,-1)),Se={class:"fecha-sorteo"},Ie={key:0,class:"legend"},Te={class:"content prop"},ke={class:"content prop"},$e=Y(()=>r("div",{class:"box-img"},null,-1)),xe={class:"content info"},Le={__name:"nftItemEvent",props:["nftId","grid","target","k","w","h"],setup(T,{expose:z}){const k=f("getDataNFT"),A=f("getLinkNftScan"),E=f("syncBalance"),L=f("syncTmineBalance"),h=f("claimReward"),P=f("transferNFT"),l=f("refreshTokens"),_=T,o=g(_.nftId),p=g(_.w),C=g(_.k),F=g(!1),s=g(null),w=g(null),y=g(!1),u=K(),B=e=>{const n=parseInt(String(e)+"999");return new Date(n).toLocaleDateString()+" "+new Date(n).toLocaleTimeString()},W=e=>e.substring(0,7)+"    ......    "+e.slice(-7),t=()=>{y.value=!0},i=async({w:e,id:n})=>{console.log("toTransferNFT",{w:e,id:n});const a=await P(e,n);await E(),await L(),await l(),await m(),console.log({modalSend:w,resp:a}),!(a!=null&&a.blockNumber)||a===null?w.value.loading=!1:y.value=!1},m=async()=>{F.value=!0;const e=parseInt(o.value),n=await k(e);n.id&&n.id===o.value&&(s.value=n,u.web3.nftLoad[e]=n),await E(),await L(),setTimeout(()=>{F.value=!1},2e3)},S=j(()=>{const e=parseInt(o.value);return u.web3.nftLoad[e]!==void 0}),$=async()=>{const e=parseInt(o.value);if(await h(e)===!0){await E(),await L(),console.log("* toClaim ok");const a=await k(e);a.id&&a.id===o.value&&e&&(s.value=a,u.web3.nftLoad[e]=a)}},c=e=>{const a=I().filter(v=>v.prop==e);return a[0]&&a[0].value?a[0].value:null},I=()=>{var e,n;return(n=(e=s==null?void 0:s.value)==null?void 0:e.metadata)!=null&&n.attributes?s.value.metadata.attributes.flatMap(a=>({prop:a!=null&&a.trait_type?a==null?void 0:a.trait_type:null,value:a.value})):[]},R=j(()=>{var a,v;const e=parseInt(o.value),n=_.grid&&_.grid&&_.target.length>7?"cover":"150% 100%";return u.web3.nftLoad[e]!==void 0&&((v=(a=s==null?void 0:s.value)==null?void 0:a.metadata)!=null&&v.image)?`
	--crt:#fff;
    background-image: url(${s.value.metadata.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${n};`:""}),H=e=>{const n=e.target,a=e.pageX-n.offsetLeft,v=e.pageY-n.offsetTop;n.style.setProperty("--x",a+"px"),n.style.setProperty("--y",v+"px")};return O(S,async e=>{if(e&&(console.log(e,"*existInLoad",u.web3.nftLoad[o.value]!==void 0,o.value,s.value),e&&!s.value)){const n=parseInt(o.value),a=await k(n);a.id&&a.id===o.value&&(s.value=a),console.log({resp:a})}}),O(()=>_.nftId,async function(e){var n;if(o.value=e,s.value=null,console.log("w",e,S.value,u.web3.nftLoad[e]),!S.value&&!u.web3.nftLoad[e]){const a=parseInt(o.value);console.log("*startSearch");const v=await k(a);v.id&&v.id===o.value&&(s.value=v,u.web3.nftLoad[a]=v),console.log("* meta",s.value,{data:v})}u.web3.nftLoad[e],((n=u.web3.nftLoad[e])==null?void 0:n.id)===e&&(s.value=u.web3.nftLoad[e])}),X(async()=>{const e=parseInt(o.value),n=await k(e);n.id&&n.id===o.value&&u.web3.nftLoad[e]&&(s.value=n,u.web3.nftLoad[e]=n),n&&!u.web3.nftLoad[o.value]&&(s.value=n,u.web3.nftLoad[o.value]=n)}),z({nftId:o,existInLoad:S,mainStore:u,getBgNft:R,getLinkNftScan:A,moseMoveInCard:H,toClaim:$,loadRedresh:F,toRefresh:m,showModalSedNft:y,toSend:t,toTransferNFT:i,Popper:Z,key:C,formatDateTime:B,winnerWallet:p,formatWallet:W,getNftAtributes:I,getProp:c}),(e,n)=>{var a,v;return(a=s.value)!=null&&a.metadata?(b(),M("div",{key:0,class:se({"nft-item-event":!0}),onMousemove:H,style:ue(`background-image: url(${s.value.metadata.image})`)},[r("div",ve,[r("div",me,[r("div",he,[r("a",{href:x(A)(o.value),target:"_blank"},[N("# "+d(o.value)+" ",1),J(x(Z),{content:"Examinar en Polygonscan",arrow:!0,hover:!0},{default:U(()=>[ye]),_:1})],8,we),be,r("span",Se,d(B(C.value)),1)]),(v=s.value)!=null&&v.metadata?(b(),M("span",Ie,[r("p",null,"Winner: "+d(W(p.value)),1),r("div",Te,"Type: "+d(c("Type"))+" Luck: "+d(c("Luck")),1),r("div",ke,"Staking: "+d(c("Staking")),1)])):D("",!0)]),$e]),r("p",xe,d(s.value.metadata.name),1)],36)):D("",!0)}}},ae=G(Le,[["__scopeId","data-v-0c65f1ff"]]);const Pe={key:1,class:"paginator"},Ce={key:2,class:"paginator"},Ne={__name:"ContainerEventList",setup(T,{expose:z}){const k=f("searchLastSorteo"),A=f("searchWinnerInSorteo"),E=new ie,L=K(),h=g(1);g(null);const P=g(null),l=g(!1),_=g(null),o=g(9),p=de({winners:[],loading:!0}),C=t=>{h.value=t,w(),console.log("updatePage",t),u(t)},F=()=>{l.value=!l.value,l.value?o.value=10:o.value=5,y.value=w()},s=j(()=>p.winners&&p.winners.length==0?[]:p.winners.flatMap(t=>t.id)),w=()=>{const t=JSON.parse(JSON.stringify(L.web3.nftTokensIds)),i=E.arrayPaginator(t,o.value,h.value);return _.value=i.totalPaginas,i},y=g(w()),u=async t=>{if(h.value=parseInt(t),y.value=w(),console.log("toPage",h.value),h.value>1){const m=h.value*o.value,S=P.value-m,$=Array.from({length:S}).map((I,R)=>R).splice(parseInt(o.value)*-1);console.log({sorteosPrevios:$});let c=[];for(var i=0;i<$.length;i++){const I=await A($[i]);I.hash&&I.hash!=""&&c.push(I)}p.winners=c}},B=()=>{h.value<_.value&&(h.value++,y.value=w()),console.log("nextPage",h.value)};O(()=>L.web3.nftTokensIds,t=>{t&&(y.value=w())});const W=[];return X(async()=>{P.value=await k();let t=await A(P.value);for(var i=P.value;p.winners.length<o.value;i--){const m=await A(i);m.hash&&m.hash!=""&&p.winners.push(m)}console.log({last_sorteo:P,winnerLast:t,winnersTarget:p}),p.loading=!1}),z({data:W,mainStore:L,currentPage:y,nextPage:B,nftItemEvent:ae,getCurrentTarget:s,multiGrid14:l,changeToMultigrid:F,Paginator:_e,updatePage:C,amountPerPage:o,last_sorteo:P}),(t,i)=>{var m,S,$;return b(),M(Q,null,[p.loading?D("",!0):(b(),M("section",{key:0,class:se({content:!0,"multi-grid-14":l.value,lessMinimal:s.value&&((m=s.value)==null?void 0:m.length)&&((S=s.value)==null?void 0:S.length)<=4,"minimal-size":l.value&&(($=s.value)==null?void 0:$.length)<=3})},[(b(!0),M(Q,null,ge(s.value,(c,I)=>(b(),q(ae,{grid:l.value,target:s.value,"nft-id":c,h:p.winners[I].hash,k:p.winners[I].timestamp,w:p.winners[I].wallet,key:I},null,8,["grid","target","nft-id","h","k","w"]))),128))],2)),y.value&&y.value.paginaActual?(b(),M("section",Pe)):(b(),M("section",Ce))],64)}}},ne=G(Ne,[["__scopeId","data-v-c947d440"]]);const ce=T=>(oe("data-v-296a53a3"),T=T(),le(),T),Me={class:"event"},Ae={key:0,class:"title"},Ee={class:"title-left-section"},Fe={class:"sidebar"},Be={key:0,id:"list-options"},De={class:"lbl-left"},We=ce(()=>r("img",{src:re,alt:"matic-logo-banance",class:"matic-logo-banance"},null,-1)),ze={class:"lbl-left"},Je=ce(()=>r("img",{src:re,alt:"matic-logo-banance",class:"matic-logo-banance"},null,-1)),Oe={class:"in-col p-1 li-sort"},Re={class:"p-1-lr"},Ve={__name:"EventPage",setup(T,{expose:z}){const k=pe.useToast(),A=f("syncTmineTotalSupply"),E=f("addTmineToMetamask");f("executeSelectWinner"),f("resetTimeEventDaily"),f("selectWinnerSorteo");const L=f("getCostoInSorteo"),h=f("addMeToSorteo"),P=new ie,l=K(),_=g(1),o=g(null),p=g(10),C=g(null),F=()=>{var t=1,i=confetti.shapeFromText({text:"💎",scalar:t});confetti({particleCount:100,spread:180,shapes:[i]})},s=async()=>{var t,i,m,S,$;try{const c=await h();k.open({message:$t("general.titles.registration_processed_successfully"),type:"success",position:"top-right"})}catch(c){console.log({e:c}),c!=null&&c.reason?k.open({message:c.reason,type:"error",position:"top-right"}):(m=(i=(t=c==null?void 0:c.info)==null?void 0:t.error)==null?void 0:i.data)!=null&&m.message&&(($=(S=c==null?void 0:c.info)==null?void 0:S.error)==null?void 0:$.code)==-32603&&k.open({message:$t("general.titles.insufficient_gas"),type:"error",position:"top-right"})}},w=()=>{if(l.web3.nftTokensIds.length==0)return{elementosPagina:[],totalPaginas:1,paginaActual:1};const t=JSON.parse(JSON.stringify(l.web3.nftTokensIds)),i=P.arrayPaginator(t,p.value,_.value);return o.value=i.totalPaginas,console.log({dataFormat:i}),i},y=()=>{_.value<o.value&&(_.value++,u.value=w()),console.log("nextPage",_.value)},u=g(w()),B=()=>{var t;return(t=l==null?void 0:l.web3)!=null&&t.participantsInSorteo&&l.web3.participantsInSorteo.length==0?[]:l.web3.participantsInSorteo?l.web3.participantsInSorteo.flatMap(i=>i.substring(0,7)+"    ......    "+i.slice(-7)):[]};O(()=>l.web3.nftTokensIds,async t=>{t&&(w(),A(),C.value=await L())});const W=[];return X(async()=>{C.value=await L(),console.log({costoSorteo:C.value}),A()}),z({data:W,mainStore:l,currentPage:u,nextPage:y,ContainerEventList:ne,addTmineToMetamask:E,shooterConfetti:F,CountdownComponent:ee,ButtomComponent:V,registerInSorteo:s,ScrollAreaComponent:te,formatWallets:B,costoSorteo:C}),(t,i)=>(b(),M("main",Me,[x(l).connected&&x(l).web3?(b(),M("h1",Ae,[r("span",Ee,d(t.$t("general.titles.daily_giveaway_event")),1),N(" Topacio Nft's "+d(t.$t("general.titles.list_of_released_fragments"))+" 💎 / "+d(t.$t("general.titles.current_holders"))+": "+d(x(l).web3.holdersCount),1)])):D("",!0),r("section",Fe,[x(l).connected?(b(),M("ul",Be,[r("li",null,[r("label",De,[N(d(t.$t("general.titles.my_balance"))+" ",1),r("span",null,[N(d(x(l).web3.balanceFormat)+" ",1),We,N(" MATIC ")])])]),r("li",null,[r("label",ze,[N(d(t.$t("general.titles.participation"))+" ",1),r("span",null,[N(d(C.value)+" ",1),Je,N(" MATIC ")])])]),r("li",Oe,[r("span",null,d(t.$t("general.titles.next_draw")),1),x(l).web3.dateNextSorteo>999?(b(),q(ee,{key:0,dateTarget:x(l).web3.dateNextSorteo},null,8,["dateTarget"])):D("",!0),J(V,{class:"bnt1",onClick:s},{default:U(()=>[N(d(t.$t("general.titles.participate")),1)]),_:1}),J(V,{class:"btn3 p-1 no-cursor"},{default:U(()=>[N(d(t.$t("general.titles.participants_of_the_day"))+": "+d(x(l).web3.participantsInSorteo.length),1)]),_:1})]),r("li",Re,[J(te,{title:t.$t("general.titles.participating_in_the_draw"),items:B(),showKey:!0},null,8,["title","items"])])])):D("",!0)]),x(l).connected?(b(),q(ne,{key:1})):D("",!0)]))}},Ye=G(Ve,[["__scopeId","data-v-296a53a3"]]);export{Ye as default};
