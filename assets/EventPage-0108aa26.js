import{_ as k,Q as D,N as x,m as I,r as S,o as P,s as N,a as w,Y as F,c as n,g as m,d as e,f as l,F as h,B as b,z as B,C as L,E as y,b as a,w as E,Z as T,e as C,p as W,h as M,$ as V}from"./index-493ab8ad.js";const A={name:"EventPage",components:{CountDown:D,NeedConnect:x},setup(){const s=I(),r=S(0),c=S(!1),o=()=>{var t;return(t=s==null?void 0:s.sorteoParticipantsInDay)!=null&&t.length?s.sorteoParticipantsInDay.length:0},v=t=>`${t.substr(0,7)}  . . .  ${t.substr(-7,7)}`,p=t=>!t||!t.attributes?"":`${t.attributes.flatMap((u,f)=>`🔹${u.trait_type}:${u.value}
`).toString().replaceAll(",","")}`;setInterval(()=>{r.value=r.value>0?r.value-1:0},1e3),P(()=>{_()});const _=async()=>{s.showLoader(),s.hashesWinners.data=[],await N(),await s.searchWinners();const t=s&&s.proximoSorteo?parseInt((parseInt(s.proximoSorteo)*1e3-new Date().getTime())/1e3):0;t>0&&(r.value=t),c.value=!0,s.hideLoader()};return w(async()=>{c.value||(await _(),c.value=!0)}),F(async()=>{c.value||(setTimeout(_,1e3),c.value=!0)}),{store:s,cantidadParticipantes:o,formatWallet:v,cantidadSegundosSorteo:r,getAtributesFragment:p,isInit:c,initData:_,scrollController:({target:{scrollTop:t,clientHeight:d,scrollHeight:u,lastElementChild:f}})=>{console.log({scrollTop:t,clientHeight:d,scrollHeight:u,more:t+d>=u,more2:u-d<=t+100,lastElementChild:f},"scrollController")}}}},i=s=>(W("data-v-21e635f8"),s=s(),M(),s),j={key:0,class:"loader-bg"},G=i(()=>e("span",{class:"loader loader-chart"},null,-1)),R=[G],U={key:1,id:"container-event",class:"w-full min-h-[calc(100vh-180px)] flex items-center justify-center"},z={class:"text-center mt-[-20vh] md:mt-0"},Q={class:"parent-content-event"},Y={class:"card lateral-l"},Z={class:"content"},q=i(()=>e("h2",{class:"title"},"Fragmentos Genesis",-1)),J=i(()=>e("p",{class:"copy"},"Evento del Sorteo al Mint Genesis",-1)),K=i(()=>e("img",{src:V,alt:"",id:"logo-topacio",class:"profile jv mini-logo"},null,-1)),O={class:"copy"},X={class:"details-center container-details"},$=i(()=>e("article",null," Detalle de Todos los fragmentos liberados durante el evento ",-1)),H=["v-key","id"],tt={class:"text-nft"},et={key:0},ot=["href"],st=["src"],at={class:"lateral-r"},nt=i(()=>e("article",null,"Resumen Diario",-1)),rt={class:"container"},lt={key:0},it={key:1},ct=i(()=>e("label",{class:"lbl-resumen subtitle"},"Sorteo Fecha",-1)),dt={class:"lbl-resumen"},_t={class:"contenedor-detalle-participantes"},ut=i(()=>e("label",null,"Participantes",-1)),mt={class:"lbl-participante"},ht=["src"];function vt(s,r,c,o,v,p){const _=y("CountDown"),g=y("NeedConnect");return a(),n(h,null,[o.store.load?(a(),n("div",j,R)):m("",!0),o.store.hasConnection?(a(),n("div",U,[e("div",z,[e("main",Q,[e("div",Y,[e("div",Z,[q,J,K,e("button",{class:"btn btn-sorteo-register",onClick:r[0]||(r[0]=t=>o.store.participarEnSorteo())}," Participar en Sorteo "),e("p",O,l(o.store.costoParticipacionSorteo),1)])]),e("div",X,[$,e("ul",{class:"container-list-winners",onScroll:r[1]||(r[1]=(...t)=>o.scrollController&&o.scrollController(...t))},[(a(!0),n(h,null,b(o.store.hashesWinners.data,(t,d)=>E((a(),n("li",{"v-key":d,id:`winner-${d}`},[e("label",tt,[C(" NFT 🔖"+l(t.nftId)+" - "+l(o.formatWallet(t.wallet))+" ("+l(new Date(t.timestamp*1e3).toLocaleString())+") ",1),t.attributes?(a(),n("p",et,l(o.getAtributesFragment(t)),1)):m("",!0)]),e("a",{target:"_blank",href:`${o.store.getURLBlockchainScan()}/token/${o.store.getContractNFTS()}?a=${t.nftId}`},[t.img?(a(),n("img",{key:0,src:t.img,alt:"image nft"},null,8,st)):m("",!0)],8,ot)],8,H)),[[T,t.img]])),256))],32)]),e("div",at,[nt,e("div",rt,[e("ul",null,[e("li",null," Cantidad Participaciones: "+l(o.cantidadParticipantes()),1),o.store.numeroSorteo>0?(a(),n("li",lt," Fragmentos Liberados: "+l(o.store.numeroSorteo-1),1)):m("",!0),o.store.proximoSorteo>0?(a(),n("li",it,[ct,e("label",dt,l(new Date(o.store.proximoSorteo*1e3).toLocaleString()),1),B(_,{totalSegunds:o.cantidadSegundosSorteo,titleCustom:"Tiempo para el sorteo"},null,8,["totalSegunds"])])):m("",!0),e("li",_t,[ut,(a(!0),n(h,null,b(o.store.sorteoParticipantsInDay,t=>(a(),n("label",mt,[e("img",{class:"author-img avatar mini",src:`https://avatars.dicebear.com/api/identicon/${t}.svg?background=%23000`,alt:"avatar"},null,8,ht),C(" "+l(o.formatWallet(t)),1)]))),256))])])])])])])])):(a(),L(g,{key:2}))],64)}const gt=k(A,[["render",vt],["__scopeId","data-v-21e635f8"]]);export{gt as default};
//# sourceMappingURL=EventPage-0108aa26.js.map
