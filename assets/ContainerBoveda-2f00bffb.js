import{e as k,_ as Q}from"./Paginator.vue_vue_type_style_index_0_lang-40bb918d.js";import{_ as G,j as c,r as y,u as H,A,f as P,o as X,a as i,g as p,d as u,l as r,e as S,t as w,n as z,w as C,F as Y,B as q,y as R,m as x,C as j,p as J,b as K,c as D}from"./index-7c9a2f94.js";import{_ as U}from"./Tmine2-25d51798.js";const O=v=>(J("data-v-c9cd289d"),v=v(),K(),v),Z={class:"header-card"},ee=["href"],ae=O(()=>u("img",{class:"img-link-polygon",src:Q,alt:"logo matic"},null,-1)),te={key:0,class:"detaills-gem"},oe={key:1,class:"title-gem-boveda"},ne={key:0,class:"footer-card"},se={class:"nft-number nft-reward-tmine"},le={key:0,class:"snippet","data-title":"dot-flashing"},ce=O(()=>u("div",{class:"stage"},[u("div",{class:"dot-flashing"})],-1)),re=[ce],de={__name:"nftItemBoveda",props:["nftId","grid","target","h","key"],setup(v,{expose:T}){const d=v,b=c("getDataNFT"),B=c("getLinkNftScan"),h=c("toVault"),L=c("claimVault");c("syncBalance"),c("syncTmineBalance"),c("claimReward"),c("refreshTokens");const N=c("getNFTVault");c("tmineAddAllowance");const o=y(d.nftId),_=y(!1),e=y(null);y(null);const f=y(null),n=H(),g=A(()=>{const a=parseInt(o.value);return n.web3.nftLoad[a]!==void 0}),F=A(()=>e.value.metadata&&e.value.metadata.attributes?e.value.metadata.attributes.flatMap(a=>({type:a.trait_type,value:a.value})):[]),M=A(()=>e.value.metadata&&e.value.metadata.name&&e.value.metadata.name.length>25?e.value.metadata.name.replace("Fragment ",""):e.value.metadata.name),V=A(()=>{var t,s,l,I;const a=parseInt(o.value);return(s=(t=e==null?void 0:e.value)==null?void 0:t.metadata)!=null&&s.image&&console.log("* img",e.value.metadata.image),n.web3.nftLoad[a]!==void 0&&((I=(l=e==null?void 0:e.value)==null?void 0:l.metadata)!=null&&I.image)?`
	--crt:#fff;
    background-image: url(${e.value.metadata.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    `:""}),$=a=>{const t=a.target,s=a.pageX-t.offsetLeft,l=a.pageY-t.offsetTop;t.style.setProperty("--x",s+"px"),t.style.setProperty("--y",l+"px")};return P(g,async a=>{if(a&&(console.log(a,"*existInLoad",n.web3.nftLoad[o.value]!==void 0,o.value,e.value),a&&!e.value)){const t=parseInt(o.value),s=await b(t);s.id&&s.id===o.value&&(e.value=s),console.log({resp:s})}}),P(()=>d.nftId,async function(a){var t;if(o.value=a,e.value=null,console.log("w",a,g.value,n.web3.nftLoad[a]),!g.value&&!n.web3.nftLoad[a]){const s=parseInt(o.value);console.log("*startSearch");const l=await b(s);l.id&&l.id===o.value&&(e.value=l,n.web3.nftLoad[s]=l),console.log("* meta",e.value,{data:l})}n.web3.nftLoad[a],((t=n.web3.nftLoad[a])==null?void 0:t.id)===a&&(e.value=n.web3.nftLoad[a])}),X(async()=>{const a=parseInt(o.value),t=await b(a);f.value=await N(a),t.id&&t.id===o.value&&n.web3.nftLoad[a]&&(e.value=t,n.web3.nftLoad[a]=t),t&&!n.web3.nftLoad[o.value]&&(e.value=t,n.web3.nftLoad[o.value]=t)}),T({nftId:o,existInLoad:g,mainStore:n,getBgNft:V,getLinkNftScan:B,moseMoveInCard:$,loadRedresh:_,Popper:k,toVault:h,dataItem:f,claimVault:L,getProperties:F,titleFormat:M}),(a,t)=>{var s,l,I,E;return i(),p("div",{class:R({"nft-item-boveda":!0,"loader-bg":!g.value}),style:j(`height: ${d.h}px;`),onMousemove:$},[u("div",{class:"content-card",style:j(V.value)},[u("div",Z,[u("a",{href:r(B)(o.value),target:"_blank"},[S("# "+w(o.value)+" ",1),z(r(k),{content:"Examinar en Polygonscan",arrow:!0,hover:!0},{default:C(()=>[ae]),_:1})],8,ee)]),(l=(s=e.value)==null?void 0:s.metadata)!=null&&l.attributes?(i(),p("div",te,[u("ul",null,[(i(!0),p(Y,null,q(F.value,m=>(i(),p("li",{class:R({colorEpic:m.type=="Staking"&&m.value>=4,colorEpicRarity:m.value=="epic"})},w(m.type)+" : "+w(m.value),3))),256))])])):x("",!0),(E=(I=e.value)==null?void 0:I.metadata)!=null&&E.name?(i(),p("div",oe,w(M.value),1)):x("",!0),z(r(k),{content:"Exatraer Fragmento",arrow:!1,hover:!0,zIndex:"10000"},{default:C(()=>{var m;return[(m=f.value)!=null&&m.priceW&&g.value&&!_.value?(i(),p("div",ne,[u("label",se,[u("img",{class:"img-logo-tmine",src:U,alt:"tmine logo",onClick:t[0]||(t[0]=fe=>r(L)(o.value,f.value.priceW))}),S(" "+w(f.value.price)+" TMINE ",1)])])):x("",!0)]}),_:1})],4),!g.value||_.value?(i(),p("div",le,re)):x("",!0)],38)}}},W=G(de,[["__scopeId","data-v-c9cd289d"]]);const ie=v=>(J("data-v-971b1b14"),v=v(),K(),v),ue={class:"content container-items"},ve=ie(()=>u("i",{class:"fa-solid fa-chevron-up icon-alloance"},null,-1)),_e={__name:"ContainerBoveda",setup(v,{expose:T}){const d=H(),b=y(!1),B=c("getNFTsBoveda");c("tmineCheckAllowanceBoveda");const h=c("incrementAllowanceInBoveda"),L=[];function N(_,e){return _=Math.ceil(_),e=Math.floor(e),Math.floor(Math.random()*(e-_+1))+_}const o=()=>N(280,500);return X(async()=>{await B(),console.log("tokens",d.web3.bovedaTokens)}),T({data:L,getHeight:o,nftItemBoveda:W,multiGrid14:b,Popper:k,incrementAllowanceInBoveda:h,mainStore:d}),(_,e)=>(i(),p("main",ue,[r(d).connected&&!r(d).web3.bovedaAlloance||r(d).web3.bovedaAlloance==0?(i(),D(r(k),{key:0,content:"Incrementar TMine permitido para Boveda",arrow:!1,hover:!0,zIndex:"10000"},{default:C(()=>[u("span",{class:"amountAlloance",onClick:e[0]||(e[0]=(...f)=>r(h)&&r(h)(...f))},[S(w(r(d).web3.bovedaAlloance),1),ve])]),_:1})):x("",!0),(i(!0),p(Y,null,q(r(d).web3.bovedaTokens,(f,n)=>(i(),D(W,{grid:b.value,target:r(d).web3.bovedaTokens,"nft-id":f,h:o(),key:n},null,8,["grid","target","nft-id","h"]))),128))]))}},be=G(_e,[["__scopeId","data-v-971b1b14"]]);export{be as default};
