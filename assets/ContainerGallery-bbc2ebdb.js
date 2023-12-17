import{_ as Z,q as te,r as _,u as U,s as ne,o as ee,a as f,g as m,d as s,e as D,t as B,l as $,v as oe,x as se,y as C,S as V,z as le,p as re,b as ie,j as T,A as G,f as O,k as N,m as I,w as A,F as R,B as ae,C as ce,c as ue,h as de}from"./index-1921295b.js";import{e as L,_ as ve}from"./Paginator.vue_vue_type_style_index_0_lang-10e09dac.js";import{_ as fe}from"./Tmine2-25d51798.js";import{_ as K}from"./Paginator.vue_vue_type_script_setup_true_lang-98fa0a34.js";const ge="/img/update-meta.svg",_e="/img/fly-svgrepo-com.svg",me="/img/claim_.svg";const pe={name:"SendNFT",props:["show","idtarget"],emits:["closeModalSend"],setup(k,{emit:g}){const{show:h,idtarget:l}=te(k),d=_(!1),c=_(""),v=U();ne(()=>{c.value="",d.value=!1}),ee(()=>{d.value=!1,c.value=""});const p=()=>{c.value="",d.value=!1,g("closeModalSend",!0)};return{store:v,show:h,closeModal:p,confirmSend:async()=>{d.value=!0;const S=c.value.toString().trim().replaceAll("	",""),y=V.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:u=>{u.addEventListener("mouseenter",V.stopTimer),u.addEventListener("mouseleave",V.resumeTimer)}});if(!le(S))return d.value=!1,p(),y.fire({icon:"error",title:"Wallet is no valid"});const t=l.value;g("transferNFT",{w:S,id:t})},loading:d,wallet:c}}},j=k=>(re("data-v-5e478752"),k=k(),ie(),k),we={class:"modal-container"},he={class:"Cabecera"},ye={class:"Contenido"},be={key:0,class:"loader-interno"},ke={key:1,class:"group"},Te=j(()=>s("span",{class:"highlight"},null,-1)),Se=j(()=>s("span",{class:"bar"},null,-1)),xe=j(()=>s("label",null,"Wallet destine",-1)),Ne={class:"Bootonera"};function Ie(k,g,h,l,d,c){return f(),m("section",{class:C({"modal-t":!0,"show-modal":l.show,"hide-modal":!l.show})},[s("div",we,[s("div",he,[D(" SEND NFT 🔖 "+B(h.idtarget)+" ",1),s("button",{class:"close",onClick:g[0]||(g[0]=(...v)=>l.closeModal&&l.closeModal(...v))},"✖")]),s("div",ye,[l.loading?(f(),m("div",be)):$("",!0),l.loading?$("",!0):(f(),m("div",ke,[oe(s("input",{type:"text","onUpdate:modelValue":g[1]||(g[1]=v=>l.wallet=v),required:""},null,512),[[se,l.wallet]]),Te,Se,xe]))]),s("div",Ne,[l.loading?$("",!0):(f(),m("span",{key:0,class:"btn-send",onClick:g[2]||(g[2]=(...v)=>l.confirmSend&&l.confirmSend(...v))},"CONFIRM"))])])],2)}const Ce=Z(pe,[["render",Ie],["__scopeId","data-v-5e478752"]]);const Le={class:"header-card"},Pe=["href"],Me=s("img",{class:"img-link-polygon",src:ve,alt:"logo matic"},null,-1),Fe={class:"content-card"},Ae={key:0,class:"footer-card"},Be={class:"nft-number nft-reward-tmine"},$e=s("img",{src:fe,alt:"tmine logo",class:"img-logo-tmine"},null,-1),Ee={key:1,class:"snippet","data-title":"dot-flashing"},ze=s("div",{class:"stage"},[s("div",{class:"dot-flashing"})],-1),Ge=[ze],Q={__name:"nftItemGallery",props:["nftId","grid","target"],setup(k,{expose:g}){const h=k,l=T("getDataNFT"),d=T("getLinkNftScan"),c=T("toVault"),v=T("syncBalance"),p=T("syncTmineBalance"),P=T("claimReward"),S=T("transferNFT"),y=T("refreshTokens"),t=_(h.nftId),u=_(!1),n=_(null),E=_(null),w=_(!1),b=_(!1),r=U(),M=G(()=>n.value&&n.value.metadata&&n.value.metadata.attributes?n.value.metadata.attributes.flatMap(e=>({type:e.trait_type,value:e.value})):[]),F=()=>{b.value=!0},z=async({w:e,id:a})=>{console.log("toTransferNFT",{w:e,id:a});const o=await S(e,a,b);console.log("transferNFT * ",{resp:o}),await v(),await p(),await y(),console.log({modalSend:E,resp:o}),!(o!=null&&o.blockNumber)||o===null?E.value.loading=!1:b.value=!1},q=async()=>{u.value=!0;const e=parseInt(t.value),a=await l(e);a.id&&a.id===t.value&&(n.value=a,r.web3.nftLoad[e]=a),await v(),await p(),setTimeout(()=>{u.value=!1},2e3)},x=G(()=>{const e=parseInt(t.value);return r.web3.nftLoad[e]!==void 0}),J=async()=>{const e=parseInt(t.value);if(await P(e)===!0){await v(),await p(),console.log("* toClaim ok");const o=await l(e);o.id&&o.id===t.value&&e&&(n.value=o,r.web3.nftLoad[e]=o)}},W=G(()=>{var o,i,X,Y;const e=parseInt(t.value),a=h.grid&&h.grid&&h.target.length>7?"cover":"150% 100%";return(i=(o=n==null?void 0:n.value)==null?void 0:o.metadata)!=null&&i.image&&console.log("* img",n.value.metadata.image),r.web3.nftLoad[e]!==void 0&&((Y=(X=n==null?void 0:n.value)==null?void 0:X.metadata)!=null&&Y.image)?`
	--crt:#fff;
    background-image: url(${n.value.metadata.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${a};`:""}),H=e=>{const a=e.target,o=e.pageX-a.offsetLeft,i=e.pageY-a.offsetTop;a.style.setProperty("--x",o+"px"),a.style.setProperty("--y",i+"px")};return O(x,async e=>{if(e&&(console.log(e,"*existInLoad",r.web3.nftLoad[t.value]!==void 0,t.value,n.value),e&&!n.value)){const a=parseInt(t.value),o=await l(a);o.id&&o.id===t.value&&(n.value=o),console.log({resp:o})}}),O(()=>h.nftId,async function(e){var a;if(t.value=e,n.value=null,console.log("w",e,x.value,r.web3.nftLoad[e]),!x.value&&!r.web3.nftLoad[e]){const o=parseInt(t.value);console.log("*startSearch");const i=await l(o);i.id&&i.id===t.value&&(n.value=i,r.web3.nftLoad[o]=i),console.log("* meta",n.value,{data:i})}r.web3.nftLoad[e],((a=r.web3.nftLoad[e])==null?void 0:a.id)===e&&(n.value=r.web3.nftLoad[e])}),ee(async()=>{const e=parseInt(t.value),a=await l(e);a.id&&a.id===t.value&&r.web3.nftLoad[e]&&(n.value=a,r.web3.nftLoad[e]=a),a&&!r.web3.nftLoad[t.value]&&(n.value=a,r.web3.nftLoad[t.value]=a)}),g({nftId:t,existInLoad:x,mainStore:r,getBgNft:W,getLinkNftScan:d,moseMoveInCard:H,toClaim:J,loadRedresh:u,toRefresh:q,showModalSedNft:b,toSend:F,toTransferNFT:z,Popper:L,toVault:c,showDetails:w,getProperties:M}),(e,a)=>{var o;return f(),m(R,null,[s("div",{class:C({"nft-item":!0,"loader-bg":!x.value}),style:ce(W.value),onMousemove:H},[s("div",Le,[s("a",{href:N(d)(t.value),target:"_blank"},[D("# "+B(t.value)+" ",1),I(N(L),{content:"Examinar en Polygonscan",arrow:!0,hover:!0},{default:A(()=>[Me]),_:1})],8,Pe),I(N(L),{content:"Atributos de Nft",arrow:!0,hover:!0},{default:A(()=>[s("i",{class:"fa-solid fa-circle-info icon-info",onClick:a[0]||(a[0]=i=>w.value=!w.value)})]),_:1}),I(N(L),{content:"Actualizar Metadata",arrow:!0,hover:!0},{default:A(()=>[s("img",{src:ge,class:C({"icon-update-meta":!0,"loading-refresh":u.value}),onClick:q},null,2)]),_:1})]),s("div",{class:C({"details-attributes":!0,active:w.value})},[s("ul",null,[(f(!0),m(R,null,ae(M.value,i=>(f(),m("li",{class:C({colorEpic:i.type=="Staking"&&i.value>=4,colorEpicRarity:i.value=="epic"})},B(i.type)+" : "+B(i.value),3))),256))])],2),s("div",Fe,[I(N(L),{content:"Enviar NFT",arrow:!0,hover:!0,placement:"top"},{default:A(()=>[s("img",{src:_e,onClick:F})]),_:1})]),(o=n.value)!=null&&o.reward&&x.value&&!u.value?(f(),m("div",Ae,[s("label",Be,[$e,D(" "+B(n.value.reward)+" TMINE ",1)]),I(N(L),{content:"Hacer Claim de TMINE",hover:!0},{default:A(()=>[s("img",{src:me,onClick:J,class:"icon-reward-claim"})]),_:1})])):$("",!0),!x.value||u.value?(f(),m("div",Ee,Ge)):$("",!0)],38),I(Ce,{show:b.value,idtarget:t.value,onCloseModalSend:a[1]||(a[1]=i=>b.value=!1),onTransferNFT:z,ref_key:"modalSend",ref:E},null,8,["show","idtarget"])],64)}}};const Re={key:0,class:"paginator"},Ve={class:"slot-btn btn-grid"},De={key:1,class:"paginator"},Oe={__name:"ContainerGallery",setup(k,{expose:g}){const h=new de,l=U(),d=_(1),c=_(!1),v=_(null),p=_(5),P=w=>{d.value=w,t()},S=()=>{c.value=!c.value,c.value?p.value=10:p.value=5,u.value=t()},y=G(()=>t().elementosPagina),t=()=>{const w=JSON.parse(JSON.stringify(l.web3.nftTokensIds)),b=h.arrayPaginator(w,p.value,d.value);return v.value=b.totalPaginas,b},u=_(t()),n=()=>{d.value<v.value&&(d.value++,u.value=t()),console.log("nextPage",d.value)};return O(()=>l.web3.nftTokensIds,w=>{w&&(u.value=t())}),g({data:[],mainStore:l,currentPage:u,nextPage:n,nftItemGallery:Q,getCurrentTarget:y,multiGrid14:c,changeToMultigrid:S,Paginator:K,updatePage:P,amountPerPage:p}),(w,b)=>{var r,M,F;return f(),m(R,null,[s("section",{class:C({content:!0,"multi-grid-14":c.value,lessMinimal:y.value&&((r=y.value)==null?void 0:r.length)&&((M=y.value)==null?void 0:M.length)<=4,"minimal-size":c.value&&((F=y.value)==null?void 0:F.length)<=3})},[(f(!0),m(R,null,ae(y.value,z=>(f(),ue(Q,{grid:c.value,target:y.value,"nft-id":z},null,8,["grid","target","nft-id"]))),256))],2),u.value&&u.value.paginaActual?(f(),m("section",Re,[s("span",Ve,[s("i",{class:C({"fas fa-th icon-grid":!0,active:c.value}),style:{color:"#ffffff"},onClick:S},null,2)]),I(K,{currentPage:u.value,total:N(l).web3.nftTokensIds.length,amountPerPage:p.value,onUpdate:P},null,8,["currentPage","total","amountPerPage"])])):(f(),m("section",De))],64)}}},We=Z(Oe,[["__scopeId","data-v-755e7290"]]);export{We as C};
