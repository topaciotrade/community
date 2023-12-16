import{_ as K,q as Z,r as _,u as O,s as ee,o as Q,a as m,g as y,d as s,e as z,t as G,l as F,v as ae,x as te,y as B,S as E,z as ne,p as oe,b as se,j as k,A as V,f as R,k as S,m as N,w as $,B as le,F as D,C as re,c as ie,h as ce}from"./index-6b92c8fe.js";import{e as M,_ as de}from"./Paginator.vue_vue_type_style_index_0_lang-b1df2556.js";import{_ as ue}from"./Tmine2-25d51798.js";import{_ as X}from"./Paginator.vue_vue_type_script_setup_true_lang-a96b836c.js";const ve="/img/update-meta.svg",fe="/img/fly-svgrepo-com.svg",ge="/img/claim_.svg";const _e={name:"SendNFT",props:["show","idtarget"],emits:["closeModalSend"],setup(b,{emit:f}){const{show:p,idtarget:o}=Z(b),d=_(!1),i=_(""),u=O();ee(()=>{i.value="",d.value=!1}),Q(()=>{d.value=!1,i.value=""});const g=()=>{i.value="",d.value=!1,f("closeModalSend",!0)};return{store:u,show:p,closeModal:g,confirmSend:async()=>{d.value=!0;const x=i.value.toString().trim().replaceAll("	",""),w=E.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:c=>{c.addEventListener("mouseenter",E.stopTimer),c.addEventListener("mouseleave",E.resumeTimer)}});if(!ne(x))return d.value=!1,g(),w.fire({icon:"error",title:"Wallet is no valid"});const t=o.value;f("transferNFT",{w:x,id:t})},loading:d,wallet:i}}},U=b=>(oe("data-v-5e478752"),b=b(),se(),b),me={class:"modal-container"},pe={class:"Cabecera"},we={class:"Contenido"},he={key:0,class:"loader-interno"},ye={key:1,class:"group"},be=U(()=>s("span",{class:"highlight"},null,-1)),Te=U(()=>s("span",{class:"bar"},null,-1)),ke=U(()=>s("label",null,"Wallet destine",-1)),xe={class:"Bootonera"};function Se(b,f,p,o,d,i){return m(),y("section",{class:B({"modal-t":!0,"show-modal":o.show,"hide-modal":!o.show})},[s("div",me,[s("div",pe,[z(" SEND NFT 🔖 "+G(p.idtarget)+" ",1),s("button",{class:"close",onClick:f[0]||(f[0]=(...u)=>o.closeModal&&o.closeModal(...u))},"✖")]),s("div",we,[o.loading?(m(),y("div",he)):F("",!0),o.loading?F("",!0):(m(),y("div",ye,[ae(s("input",{type:"text","onUpdate:modelValue":f[1]||(f[1]=u=>o.wallet=u),required:""},null,512),[[te,o.wallet]]),be,Te,ke]))]),s("div",xe,[o.loading?F("",!0):(m(),y("span",{key:0,class:"btn-send",onClick:f[2]||(f[2]=(...u)=>o.confirmSend&&o.confirmSend(...u))},"CONFIRM"))])])],2)}const Ne=K(_e,[["render",Se],["__scopeId","data-v-5e478752"]]);const Ie={class:"header-card"},Ce=["href"],Le=s("img",{class:"img-link-polygon",src:de,alt:"logo matic"},null,-1),Pe={class:"content-card"},Me={key:0,class:"footer-card"},Fe={class:"nft-number nft-reward-tmine"},Be=s("img",{src:ue,alt:"tmine logo",class:"img-logo-tmine"},null,-1),Ae={key:1,class:"snippet","data-title":"dot-flashing"},$e=s("div",{class:"stage"},[s("div",{class:"dot-flashing"})],-1),Ee=[$e],Y={__name:"nftItemGallery",props:["nftId","grid","target"],setup(b,{expose:f}){const p=b,o=k("getDataNFT"),d=k("getLinkNftScan"),i=k("toVault"),u=k("syncBalance"),g=k("syncTmineBalance"),I=k("claimReward"),x=k("transferNFT"),w=k("refreshTokens"),t=_(p.nftId),c=_(!1),l=_(null),A=_(null),v=_(!1),r=O(),C=()=>{v.value=!0},L=async({w:e,id:a})=>{console.log("toTransferNFT",{w:e,id:a});const n=await x(e,a,v);console.log("transferNFT * ",{resp:n}),await u(),await g(),await w(),console.log({modalSend:A,resp:n}),!(n!=null&&n.blockNumber)||n===null?A.value.loading=!1:v.value=!1},P=async()=>{c.value=!0;const e=parseInt(t.value),a=await o(e);a.id&&a.id===t.value&&(l.value=a,r.web3.nftLoad[e]=a),await u(),await g(),setTimeout(()=>{c.value=!1},2e3)},T=V(()=>{const e=parseInt(t.value);return r.web3.nftLoad[e]!==void 0}),j=async()=>{const e=parseInt(t.value);if(await I(e)===!0){await u(),await g(),console.log("* toClaim ok");const n=await o(e);n.id&&n.id===t.value&&e&&(l.value=n,r.web3.nftLoad[e]=n)}},q=V(()=>{var n,h,W,H;const e=parseInt(t.value),a=p.grid&&p.grid&&p.target.length>7?"cover":"150% 100%";return(h=(n=l==null?void 0:l.value)==null?void 0:n.metadata)!=null&&h.image&&console.log("* img",l.value.metadata.image),r.web3.nftLoad[e]!==void 0&&((H=(W=l==null?void 0:l.value)==null?void 0:W.metadata)!=null&&H.image)?`
	--crt:#fff;
    background-image: url(${l.value.metadata.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${a};`:""}),J=e=>{const a=e.target,n=e.pageX-a.offsetLeft,h=e.pageY-a.offsetTop;a.style.setProperty("--x",n+"px"),a.style.setProperty("--y",h+"px")};return R(T,async e=>{if(e&&(console.log(e,"*existInLoad",r.web3.nftLoad[t.value]!==void 0,t.value,l.value),e&&!l.value)){const a=parseInt(t.value),n=await o(a);n.id&&n.id===t.value&&(l.value=n),console.log({resp:n})}}),R(()=>p.nftId,async function(e){var a;if(t.value=e,l.value=null,console.log("w",e,T.value,r.web3.nftLoad[e]),!T.value&&!r.web3.nftLoad[e]){const n=parseInt(t.value);console.log("*startSearch");const h=await o(n);h.id&&h.id===t.value&&(l.value=h,r.web3.nftLoad[n]=h),console.log("* meta",l.value,{data:h})}r.web3.nftLoad[e],((a=r.web3.nftLoad[e])==null?void 0:a.id)===e&&(l.value=r.web3.nftLoad[e])}),Q(async()=>{const e=parseInt(t.value),a=await o(e);a.id&&a.id===t.value&&r.web3.nftLoad[e]&&(l.value=a,r.web3.nftLoad[e]=a),a&&!r.web3.nftLoad[t.value]&&(l.value=a,r.web3.nftLoad[t.value]=a)}),f({nftId:t,existInLoad:T,mainStore:r,getBgNft:q,getLinkNftScan:d,moseMoveInCard:J,toClaim:j,loadRedresh:c,toRefresh:P,showModalSedNft:v,toSend:C,toTransferNFT:L,Popper:M,toVault:i}),(e,a)=>{var n;return m(),y(D,null,[s("div",{class:B({"nft-item":!0,"loader-bg":!T.value}),style:le(q.value),onMousemove:J},[s("div",Ie,[s("a",{href:S(d)(t.value),target:"_blank"},[z("# "+G(t.value)+" ",1),N(S(M),{content:"Examinar en Polygonscan",arrow:!0,hover:!0},{default:$(()=>[Le]),_:1})],8,Ce),N(S(M),{content:"Actualizar Metadata",arrow:!0,hover:!0},{default:$(()=>[s("img",{src:ve,class:B({"icon-update-meta":!0,"loading-refresh":c.value}),onClick:P},null,2)]),_:1})]),s("div",Pe,[N(S(M),{content:"Enviar NFT",arrow:!0,hover:!0,placement:"top"},{default:$(()=>[s("img",{src:fe,onClick:C})]),_:1})]),(n=l.value)!=null&&n.reward&&T.value&&!c.value?(m(),y("div",Me,[s("label",Fe,[Be,z(" "+G(l.value.reward)+" TMINE ",1)]),N(S(M),{content:"Hacer Claim de TMINE",hover:!0},{default:$(()=>[s("img",{src:ge,onClick:j,class:"icon-reward-claim"})]),_:1})])):F("",!0),!T.value||c.value?(m(),y("div",Ae,Ee)):F("",!0)],38),N(Ne,{show:v.value,idtarget:t.value,onCloseModalSend:a[0]||(a[0]=h=>v.value=!1),onTransferNFT:L,ref_key:"modalSend",ref:A},null,8,["show","idtarget"])],64)}}};const ze={key:0,class:"paginator"},Ge={class:"slot-btn btn-grid"},Ve={key:1,class:"paginator"},Re={__name:"ContainerGallery",setup(b,{expose:f}){const p=new ce,o=O(),d=_(1),i=_(!1),u=_(null),g=_(5),I=v=>{d.value=v,t()},x=()=>{i.value=!i.value,i.value?g.value=10:g.value=5,c.value=t()},w=V(()=>t().elementosPagina),t=()=>{const v=JSON.parse(JSON.stringify(o.web3.nftTokensIds)),r=p.arrayPaginator(v,g.value,d.value);return u.value=r.totalPaginas,r},c=_(t()),l=()=>{d.value<u.value&&(d.value++,c.value=t()),console.log("nextPage",d.value)};return R(()=>o.web3.nftTokensIds,v=>{v&&(c.value=t())}),f({data:[],mainStore:o,currentPage:c,nextPage:l,nftItemGallery:Y,getCurrentTarget:w,multiGrid14:i,changeToMultigrid:x,Paginator:X,updatePage:I,amountPerPage:g}),(v,r)=>{var C,L,P;return m(),y(D,null,[s("section",{class:B({content:!0,"multi-grid-14":i.value,lessMinimal:w.value&&((C=w.value)==null?void 0:C.length)&&((L=w.value)==null?void 0:L.length)<=4,"minimal-size":i.value&&((P=w.value)==null?void 0:P.length)<=3})},[(m(!0),y(D,null,re(w.value,T=>(m(),ie(Y,{grid:i.value,target:w.value,"nft-id":T},null,8,["grid","target","nft-id"]))),256))],2),c.value&&c.value.paginaActual?(m(),y("section",ze,[s("span",Ge,[s("i",{class:B({"fas fa-th icon-grid":!0,active:i.value}),style:{color:"#ffffff"},onClick:x},null,2)]),N(X,{currentPage:c.value,total:S(o).web3.nftTokensIds.length,amountPerPage:g.value,onUpdate:I},null,8,["currentPage","total","amountPerPage"])])):(m(),y("section",Ve))],64)}}},qe=K(Re,[["__scopeId","data-v-755e7290"]]);export{qe as C};
