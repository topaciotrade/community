import{e as k,_ as Q}from"./Paginator.vue_vue_type_style_index_0_lang-9ea35e36.js";import{_ as G,j as c,r as h,u as H,A,f as P,o as X,a as d,g as p,d as u,k as r,e as S,t as y,m as z,w as C,F as Y,B as q,y as R,l as x,C as j,p as J,b as K,c as D}from"./index-f7495f4a.js";import{_ as U}from"./Tmine2-25d51798.js";const O=v=>(J("data-v-2ec645b2"),v=v(),K(),v),Z={class:"header-card"},ee=["href"],ae=O(()=>u("img",{class:"img-link-polygon",src:Q,alt:"logo matic"},null,-1)),te={key:0,class:"detaills-gem"},oe={key:1,class:"title-gem"},ne={key:0,class:"footer-card"},se={class:"nft-number nft-reward-tmine"},le={key:0,class:"snippet","data-title":"dot-flashing"},ce=O(()=>u("div",{class:"stage"},[u("div",{class:"dot-flashing"})],-1)),re=[ce],ie={__name:"nftItemBoveda",props:["nftId","grid","target","h"],setup(v,{expose:T}){const i=v,w=c("getDataNFT"),B=c("getLinkNftScan"),b=c("toVault"),L=c("claimVault");c("syncBalance"),c("syncTmineBalance"),c("claimReward"),c("refreshTokens");const N=c("getNFTVault");c("tmineAddAllowance");const o=h(i.nftId),_=h(!1),e=h(null);h(null);const f=h(null),s=H(),g=A(()=>{const a=parseInt(o.value);return s.web3.nftLoad[a]!==void 0}),F=A(()=>e.value.metadata&&e.value.metadata.attributes?e.value.metadata.attributes.flatMap(a=>({type:a.trait_type,value:a.value})):[]),M=A(()=>e.value.metadata&&e.value.metadata.name&&e.value.metadata.name.length>25?e.value.metadata.name.replace("Fragment ",""):e.value.metadata.name),V=A(()=>{var t,n,l,I;const a=parseInt(o.value);return(n=(t=e==null?void 0:e.value)==null?void 0:t.metadata)!=null&&n.image&&console.log("* img",e.value.metadata.image),s.web3.nftLoad[a]!==void 0&&((I=(l=e==null?void 0:e.value)==null?void 0:l.metadata)!=null&&I.image)?`
	--crt:#fff;
    background-image: url(${e.value.metadata.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    `:""}),$=a=>{const t=a.target,n=a.pageX-t.offsetLeft,l=a.pageY-t.offsetTop;t.style.setProperty("--x",n+"px"),t.style.setProperty("--y",l+"px")};return P(g,async a=>{if(a&&(console.log(a,"*existInLoad",s.web3.nftLoad[o.value]!==void 0,o.value,e.value),a&&!e.value)){const t=parseInt(o.value),n=await w(t);n.id&&n.id===o.value&&(e.value=n),console.log({resp:n})}}),P(()=>i.nftId,async function(a){var t;if(o.value=a,e.value=null,console.log("w",a,g.value,s.web3.nftLoad[a]),!g.value&&!s.web3.nftLoad[a]){const n=parseInt(o.value);console.log("*startSearch");const l=await w(n);l.id&&l.id===o.value&&(e.value=l,s.web3.nftLoad[n]=l),console.log("* meta",e.value,{data:l})}s.web3.nftLoad[a],((t=s.web3.nftLoad[a])==null?void 0:t.id)===a&&(e.value=s.web3.nftLoad[a])}),X(async()=>{const a=parseInt(o.value),t=await w(a);f.value=await N(a),t.id&&t.id===o.value&&s.web3.nftLoad[a]&&(e.value=t,s.web3.nftLoad[a]=t),t&&!s.web3.nftLoad[o.value]&&(e.value=t,s.web3.nftLoad[o.value]=t)}),T({nftId:o,existInLoad:g,mainStore:s,getBgNft:V,getLinkNftScan:B,moseMoveInCard:$,loadRedresh:_,Popper:k,toVault:b,dataItem:f,claimVault:L,getProperties:F,titleFormat:M}),(a,t)=>{var n,l,I,E;return d(),p("div",{class:R({"nft-item":!0,"loader-bg":!g.value}),style:j(`height: ${i.h}px;`),onMousemove:$},[u("div",{class:"content-card",style:j(V.value)},[u("div",Z,[u("a",{href:r(B)(o.value),target:"_blank"},[S("# "+y(o.value)+" ",1),z(r(k),{content:"Examinar en Polygonscan",arrow:!0,hover:!0},{default:C(()=>[ae]),_:1})],8,ee)]),(l=(n=e.value)==null?void 0:n.metadata)!=null&&l.attributes?(d(),p("div",te,[u("ul",null,[(d(!0),p(Y,null,q(F.value,m=>(d(),p("li",{class:R({colorEpic:m.type=="Staking"&&m.value>=4,colorEpicRarity:m.value=="epic"})},y(m.type)+" : "+y(m.value),3))),256))])])):x("",!0),(E=(I=e.value)==null?void 0:I.metadata)!=null&&E.name?(d(),p("div",oe,y(M.value),1)):x("",!0),z(r(k),{content:"Exatraer Fragmento",arrow:!1,hover:!0,zIndex:"10000"},{default:C(()=>{var m;return[(m=f.value)!=null&&m.priceW&&g.value&&!_.value?(d(),p("div",ne,[u("label",se,[u("img",{class:"img-logo-tmine",src:U,alt:"tmine logo",onClick:t[0]||(t[0]=fe=>r(L)(o.value,f.value.priceW))}),S(" "+y(f.value.price)+" TMINE ",1)])])):x("",!0)]}),_:1})],4),!g.value||_.value?(d(),p("div",le,re)):x("",!0)],38)}}},W=G(ie,[["__scopeId","data-v-2ec645b2"]]);const de=v=>(J("data-v-81985064"),v=v(),K(),v),ue={class:"content container-items"},ve=de(()=>u("i",{class:"fa-solid fa-chevron-up icon-alloance"},null,-1)),_e={__name:"ContainerBoveda",setup(v,{expose:T}){const i=H(),w=h(!1),B=c("getNFTsBoveda");c("tmineCheckAllowanceBoveda");const b=c("incrementAllowanceInBoveda"),L=[];function N(_,e){return _=Math.ceil(_),e=Math.floor(e),Math.floor(Math.random()*(e-_+1))+_}const o=()=>N(280,500);return X(async()=>{await B(),console.log("tokens",i.web3.bovedaTokens)}),T({data:L,getHeight:o,nftItemBoveda:W,multiGrid14:w,Popper:k,incrementAllowanceInBoveda:b,mainStore:i}),(_,e)=>(d(),p("main",ue,[r(i).connected&&!r(i).web3.bovedaAlloance||r(i).web3.bovedaAlloance==0?(d(),D(r(k),{key:0,content:"Incrementar TMine permitido para Boveda",arrow:!1,hover:!0,zIndex:"10000"},{default:C(()=>[u("span",{class:"amountAlloance",onClick:e[0]||(e[0]=(...f)=>r(b)&&r(b)(...f))},[S(y(r(i).web3.bovedaAlloance),1),ve])]),_:1})):x("",!0),(d(!0),p(Y,null,q(r(i).web3.bovedaTokens,f=>(d(),D(W,{grid:w.value,target:r(i).web3.bovedaTokens,"nft-id":f,h:o()},null,8,["grid","target","nft-id","h"]))),256))]))}},we=G(_e,[["__scopeId","data-v-81985064"]]);export{we as default};
