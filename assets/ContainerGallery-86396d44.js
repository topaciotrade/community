import{_ as H,j as T,q as Y,r as v,u as O,s as K,o as X,a as f,g as p,d as r,e as z,t as G,l as F,v as Q,x as Z,y as B,S as E,z as ee,p as ae,b as te,A as R,f as D,k as N,m as I,w as $,B as ne,F as V,C as se,h as oe,c as le}from"./index-669debc8.js";import{e as M,_ as re,a as J}from"./Paginator.vue_vue_type_style_index_0_lang-08316e67.js";const ie="/img/update-meta.svg",ce="/img/fly-svgrepo-com.svg",de="/img/Tmine2.svg",ue="/img/claim_.svg";const ve={name:"SendNFT",props:["show","idtarget"],emits:["closeModalSend"],setup(h,{emit:u}){const g=T("transferNFT"),{show:o,idtarget:_}=Y(h),i=v(!1),c=v(""),y=O();K(()=>{c.value="",i.value=!1}),X(()=>{i.value=!1,c.value="",console.log({transferNFT:g})});const k=()=>{c.value="",i.value=!1,u("closeModalSend",!0)};return{store:y,show:o,closeModal:k,confirmSend:async()=>{i.value=!0;const a=c.value.toString().trim().replaceAll("	",""),d=E.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:b=>{b.addEventListener("mouseenter",E.stopTimer),b.addEventListener("mouseleave",E.resumeTimer)}});if(!ee(a))return i.value=!1,k(),d.fire({icon:"error",title:"Wallet is no valid"});const n=_.value;u("transferNFT",{w:a,id:n})},loading:i,wallet:c}}},U=h=>(ae("data-v-bf79e1a0"),h=h(),te(),h),fe={class:"modal-container"},ge={class:"Cabecera"},_e={class:"Contenido"},me={key:0,class:"loader-interno"},pe={key:1,class:"group"},we=U(()=>r("span",{class:"highlight"},null,-1)),he=U(()=>r("span",{class:"bar"},null,-1)),ye=U(()=>r("label",null,"Wallet destine",-1)),be={class:"Bootonera"};function Te(h,u,g,o,_,i){return f(),p("section",{class:B({"modal-t":!0,"show-modal":o.show,"hide-modal":!o.show})},[r("div",fe,[r("div",ge,[z(" SEND NFT 🔖 "+G(g.idtarget)+" ",1),r("button",{class:"close",onClick:u[0]||(u[0]=(...c)=>o.closeModal&&o.closeModal(...c))},"✖")]),r("div",_e,[o.loading?(f(),p("div",me)):F("",!0),o.loading?F("",!0):(f(),p("div",pe,[Q(r("input",{type:"text","onUpdate:modelValue":u[1]||(u[1]=c=>o.wallet=c),required:""},null,512),[[Z,o.wallet]]),we,he,ye]))]),r("div",be,[o.loading?F("",!0):(f(),p("span",{key:0,class:"btn-send",onClick:u[2]||(u[2]=(...c)=>o.confirmSend&&o.confirmSend(...c))},"CONFIRM"))])])],2)}const ke=H(ve,[["render",Te],["__scopeId","data-v-bf79e1a0"]]);const xe={class:"header-card"},Se=["href"],Ne=r("img",{class:"img-link-polygon",src:re,alt:"logo matic"},null,-1),Ie={class:"content-card"},Ce={key:0,class:"footer-card"},Le={class:"nft-number nft-reward-tmine"},Pe=r("img",{src:de,alt:"tmine logo",class:"img-logo-tmine"},null,-1),Me={key:1,class:"snippet","data-title":"dot-flashing"},Fe=r("div",{class:"stage"},[r("div",{class:"dot-flashing"})],-1),Be=[Fe],W={__name:"nftItemGallery",props:["nftId","grid","target"],setup(h,{expose:u}){const g=h,o=T("getDataNFT"),_=T("getLinkNftScan"),i=T("syncBalance"),c=T("syncTmineBalance"),y=T("claimReward"),k=T("transferNFT"),C=T("refreshTokens"),a=v(g.nftId),d=v(!1),n=v(null),b=v(null),x=v(!1),l=O(),S=()=>{x.value=!0},L=async({w:e,id:t})=>{console.log("toTransferNFT",{w:e,id:t});const s=await k(e,t);await i(),await c(),await C(),console.log({modalSend:b,resp:s}),!(s!=null&&s.blockNumber)||s===null?b.value.loading=!1:x.value=!1},P=async()=>{d.value=!0;const e=parseInt(a.value),t=await o(e);t.id&&t.id===a.value&&(n.value=t,l.web3.nftLoad[e]=t),await i(),await c(),setTimeout(()=>{d.value=!1},2e3)},w=R(()=>{const e=parseInt(a.value);return l.web3.nftLoad[e]!==void 0}),A=async()=>{const e=parseInt(a.value);if(await y(e)===!0){await i(),await c(),console.log("* toClaim ok");const s=await o(e);s.id&&s.id===a.value&&e&&(n.value=s,l.web3.nftLoad[e]=s)}},j=R(()=>{var s,m;const e=parseInt(a.value),t=g.grid&&g.grid&&g.target.length>7?"cover":"150% 100%";return l.web3.nftLoad[e]!==void 0&&((m=(s=n==null?void 0:n.value)==null?void 0:s.metadata)!=null&&m.image)?`
	--crt:#fff;
    background-image: url(${n.value.metadata.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${t};`:""}),q=e=>{const t=e.target,s=e.pageX-t.offsetLeft,m=e.pageY-t.offsetTop;t.style.setProperty("--x",s+"px"),t.style.setProperty("--y",m+"px")};return D(w,async e=>{if(e&&(console.log(e,"*existInLoad",l.web3.nftLoad[a.value]!==void 0,a.value,n.value),e&&!n.value)){const t=parseInt(a.value),s=await o(t);s.id&&s.id===a.value&&(n.value=s),console.log({resp:s})}}),D(()=>g.nftId,async function(e){var t;if(a.value=e,n.value=null,console.log("w",e,w.value,l.web3.nftLoad[e]),!w.value&&!l.web3.nftLoad[e]){const s=parseInt(a.value);console.log("*startSearch");const m=await o(s);m.id&&m.id===a.value&&(n.value=m,l.web3.nftLoad[s]=m),console.log("* meta",n.value,{data:m})}l.web3.nftLoad[e],((t=l.web3.nftLoad[e])==null?void 0:t.id)===e&&(n.value=l.web3.nftLoad[e])}),X(async()=>{const e=parseInt(a.value),t=await o(e);t.id&&t.id===a.value&&l.web3.nftLoad[e]&&(n.value=t,l.web3.nftLoad[e]=t),t&&!l.web3.nftLoad[a.value]&&(n.value=t,l.web3.nftLoad[a.value]=t)}),u({nftId:a,existInLoad:w,mainStore:l,getBgNft:j,getLinkNftScan:_,moseMoveInCard:q,toClaim:A,loadRedresh:d,toRefresh:P,showModalSedNft:x,toSend:S,toTransferNFT:L,Popper:M}),(e,t)=>{var s;return f(),p(V,null,[r("div",{class:B({"nft-item":!0,"loader-bg":!w.value}),style:ne(j.value),onMousemove:q},[r("div",xe,[r("a",{href:N(_)(a.value),target:"_blank"},[z("# "+G(a.value)+" ",1),I(N(M),{content:"Examinar en Polygonscan",arrow:!0,hover:!0},{default:$(()=>[Ne]),_:1})],8,Se),I(N(M),{content:"Actualizar Metadata",arrow:!0,hover:!0},{default:$(()=>[r("img",{src:ie,class:B({"icon-update-meta":!0,"loading-refresh":d.value}),onClick:P},null,2)]),_:1})]),r("div",Ie,[I(N(M),{content:"Enviar NFT",arrow:!0,hover:!0,placement:"top"},{default:$(()=>[r("img",{src:ce,onClick:S})]),_:1})]),(s=n.value)!=null&&s.reward&&w.value&&!d.value?(f(),p("div",Ce,[r("label",Le,[Pe,z(" "+G(n.value.reward)+" TMINE ",1)]),I(N(M),{content:"Hacer Claim de TMINE",hover:!0},{default:$(()=>[r("img",{src:ue,onClick:A,class:"icon-reward-claim"})]),_:1})])):F("",!0),!w.value||d.value?(f(),p("div",Me,Be)):F("",!0)],38),I(ke,{show:x.value,idtarget:a.value,onCloseModalSend:t[0]||(t[0]=m=>x.value=!1),onTransferNFT:L,ref_key:"modalSend",ref:b},null,8,["show","idtarget"])],64)}}};const Ae={key:0,class:"paginator"},$e={class:"slot-btn btn-grid"},Ee={key:1,class:"paginator"},ze={__name:"ContainerGallery",setup(h,{expose:u}){const g=new oe,o=O(),_=v(1),i=v(!1),c=v(null),y=v(5),k=l=>{_.value=l,d()},C=()=>{i.value=!i.value,i.value?y.value=10:y.value=5,n.value=d()},a=R(()=>d().elementosPagina),d=()=>{const l=JSON.parse(JSON.stringify(o.web3.nftTokensIds)),S=g.arrayPaginator(l,y.value,_.value);return c.value=S.totalPaginas,S},n=v(d()),b=()=>{_.value<c.value&&(_.value++,n.value=d()),console.log("nextPage",_.value)};return D(()=>o.web3.nftTokensIds,l=>{l&&(n.value=d())}),u({data:[],mainStore:o,currentPage:n,nextPage:b,nftItemGallery:W,getCurrentTarget:a,multiGrid14:i,changeToMultigrid:C,Paginator:J,updatePage:k,amountPerPage:y}),(l,S)=>{var L,P,w;return f(),p(V,null,[r("section",{class:B({content:!0,"multi-grid-14":i.value,lessMinimal:a.value&&((L=a.value)==null?void 0:L.length)&&((P=a.value)==null?void 0:P.length)<=4,"minimal-size":i.value&&((w=a.value)==null?void 0:w.length)<=3})},[(f(!0),p(V,null,se(a.value,A=>(f(),le(W,{grid:i.value,target:a.value,"nft-id":A},null,8,["grid","target","nft-id"]))),256))],2),n.value&&n.value.paginaActual?(f(),p("section",Ae,[r("span",$e,[r("i",{class:B({"fas fa-th icon-grid":!0,active:i.value}),style:{color:"#ffffff"},onClick:C},null,2)]),I(J,{currentPage:n.value,total:N(o).web3.nftTokensIds.length,amountPerPage:y.value,onUpdate:k},null,8,["currentPage","total","amountPerPage"])])):(f(),p("section",Ee))],64)}}},De=H(ze,[["__scopeId","data-v-755e7290"]]);export{De as C,de as _};
