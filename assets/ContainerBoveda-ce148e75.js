import{e as B,_ as Q}from"./Paginator.vue_vue_type_style_index_0_lang-16b60b49.js";import{_ as G,j as c,r as y,u as H,A as L,f as P,o as X,a as u,g as m,d as v,l as r,e as S,t as h,n as z,w as C,F as Y,B as q,y as R,m as x,C as j,p as J,b as K,c as D}from"./index-ac84db00.js";import"./iconify-84fe8823.js";import{_ as U}from"./Tmine2-25d51798.js";const O=_=>(J("data-v-98645ed1"),_=_(),K(),_),Z={class:"header-card"},ee=["href"],ae=O(()=>v("img",{class:"img-link-polygon",src:Q,alt:"logo matic"},null,-1)),te={key:0,class:"detaills-gem"},oe={key:1,class:"title-gem-boveda"},ne={key:0,class:"footer-card"},se={class:"nft-number nft-reward-tmine"},le={key:0,class:"snippet","data-title":"dot-flashing"},ce=O(()=>v("div",{class:"stage"},[v("div",{class:"dot-flashing"})],-1)),re=[ce],de={__name:"nftItemBoveda",props:["nftId","grid","target","h","key"],setup(_,{expose:A}){const d=c("getDataNFT"),b=c("getLinkNftScan"),N=c("toVault"),w=c("claimVault");c("syncBalance"),c("syncTmineBalance"),c("claimReward"),c("refreshTokens");const T=c("getNFTVault");c("tmineAddAllowance");const I=_,o=y(I.nftId),i=y(!1),e=y(null);y(null);const f=y(null),n=H(),g=L(()=>{const a=parseInt(o.value);return n.web3.nftLoad[a]!==void 0}),F=L(()=>e.value.metadata&&e.value.metadata.attributes?e.value.metadata.attributes.flatMap(a=>({type:a.trait_type,value:a.value})):[]),M=L(()=>e.value.metadata&&e.value.metadata.name&&e.value.metadata.name.length>25?e.value.metadata.name.replace("Fragment ",""):e.value.metadata.name),V=L(()=>{var t,s,l,k;const a=parseInt(o.value);return(s=(t=e==null?void 0:e.value)==null?void 0:t.metadata)!=null&&s.image&&console.log("* img",e.value.metadata.image),n.web3.nftLoad[a]!==void 0&&((k=(l=e==null?void 0:e.value)==null?void 0:l.metadata)!=null&&k.image)?`
	--crt:#fff;
    background-image: url(${e.value.metadata.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    `:""}),$=a=>{const t=a.target,s=a.pageX-t.offsetLeft,l=a.pageY-t.offsetTop;t.style.setProperty("--x",s+"px"),t.style.setProperty("--y",l+"px")};return P(g,async a=>{if(a&&(console.log(a,"*existInLoad",n.web3.nftLoad[o.value]!==void 0,o.value,e.value),a&&!e.value)){const t=parseInt(o.value),s=await d(t);s.id&&s.id===o.value&&(e.value=s),console.log({resp:s})}}),P(()=>I.nftId,async function(a){var t;if(o.value=a,e.value=null,console.log("w",a,g.value,n.web3.nftLoad[a]),!g.value&&!n.web3.nftLoad[a]){const s=parseInt(o.value);console.log("*startSearch");const l=await d(s);l.id&&l.id===o.value&&(e.value=l,n.web3.nftLoad[s]=l),console.log("* meta",e.value,{data:l})}n.web3.nftLoad[a],((t=n.web3.nftLoad[a])==null?void 0:t.id)===a&&(e.value=n.web3.nftLoad[a])}),X(async()=>{const a=parseInt(o.value),t=await d(a);f.value=await T(a),t.id&&t.id===o.value&&n.web3.nftLoad[a]&&(e.value=t,n.web3.nftLoad[a]=t),t&&!n.web3.nftLoad[o.value]&&(e.value=t,n.web3.nftLoad[o.value]=t)}),A({nftId:o,existInLoad:g,mainStore:n,getBgNft:V,getLinkNftScan:b,moseMoveInCard:$,loadRedresh:i,Popper:B,toVault:N,dataItem:f,claimVault:w,getProperties:F,titleFormat:M}),(a,t)=>{var s,l,k,E;return u(),m("div",{class:R({"nft-item-boveda":!0,"loader-bg":!g.value}),style:j(`height: ${I.h}px;`),onMousemove:$},[v("div",{class:"content-card",style:j(V.value)},[v("div",Z,[v("a",{href:r(b)(o.value),target:"_blank"},[S("# "+h(o.value)+" ",1),z(r(B),{content:"Examinar en Polygonscan",arrow:!0,hover:!0},{default:C(()=>[ae]),_:1})],8,ee)]),(l=(s=e.value)==null?void 0:s.metadata)!=null&&l.attributes?(u(),m("div",te,[v("ul",null,[(u(!0),m(Y,null,q(F.value,p=>(u(),m("li",{class:R({colorEpic:p.type=="Staking"&&p.value>=4,colorEpicRarity:p.value=="epic"})},h(p.type)+" : "+h(p.value),3))),256))])])):x("",!0),(E=(k=e.value)==null?void 0:k.metadata)!=null&&E.name?(u(),m("div",oe,h(M.value),1)):x("",!0),z(r(B),{content:"Exatraer Fragmento",arrow:!1,hover:!0,zIndex:"10000"},{default:C(()=>{var p;return[(p=f.value)!=null&&p.priceW&&g.value&&!i.value?(u(),m("div",ne,[v("label",se,[v("img",{class:"img-logo-tmine",src:U,alt:"tmine logo",onClick:t[0]||(t[0]=fe=>r(w)(o.value,f.value.priceW))}),S(" "+h(f.value.price)+" TMINE ",1)])])):x("",!0)]}),_:1})],4),!g.value||i.value?(u(),m("div",le,re)):x("",!0)],38)}}},W=G(de,[["__scopeId","data-v-98645ed1"]]);const ie=_=>(J("data-v-9e1fc22d"),_=_(),K(),_),ue={class:"content container-items"},ve=ie(()=>v("i",{class:"fa-solid fa-chevron-up icon-alloance"},null,-1)),_e={__name:"ContainerBoveda",setup(_,{expose:A}){const d=H(),b=y(!1),N=c("getNFTsBoveda");c("tmineCheckAllowanceBoveda");const w=c("incrementAllowanceInBoveda"),T=[];function I(i,e){return i=Math.ceil(i),e=Math.floor(e),Math.floor(Math.random()*(e-i+1))+i}const o=()=>I(280,500);return X(async()=>{await N(),console.log("tokens",d.web3.bovedaTokens)}),A({data:T,getHeight:o,nftItemBoveda:W,multiGrid14:b,Popper:B,incrementAllowanceInBoveda:w,mainStore:d}),(i,e)=>(u(),m("main",ue,[r(d).connected&&!r(d).web3.bovedaAlloance||r(d).web3.bovedaAlloance==0?(u(),D(r(B),{key:0,content:i.$t("general.titles.increase_tmine_allowed_for_vault"),arrow:!1,hover:!0,zIndex:"10000"},{default:C(()=>[v("span",{class:"amountAlloance",onClick:e[0]||(e[0]=(...f)=>r(w)&&r(w)(...f))},[S(h(r(d).web3.bovedaAlloance),1),ve])]),_:1},8,["content"])):x("",!0),(u(!0),m(Y,null,q(r(d).web3.bovedaTokens,(f,n)=>(u(),D(W,{grid:b.value,target:r(d).web3.bovedaTokens,"nft-id":f,h:o(),key:n},null,8,["grid","target","nft-id","h"]))),128))]))}},ye=G(_e,[["__scopeId","data-v-9e1fc22d"]]);export{ye as default};
