import{_ as B}from"./Selector-6ac44b01.js";import{C as c}from"./Candles-2ae991ae.js";import{_ as P,u as U,G as E,H as I,r as o,o as L,l as _,a as M,g as w,d as n,n as l,h as N,p as R,b as V}from"./index-1d5de55c.js";import{u as z}from"./processDivergence-95299720.js";const C=i=>(R("data-v-fea9a127"),i=i(),V(),i),F={key:0,class:"charts"},G={class:"target-symbols"},H={class:"MainChart"},j={class:"microSection"},q={key:1},J=C(()=>n("h1",null,"Necesitas al menos 1 fragmento de alguna de las gemas del Meta de Topacio",-1)),K=C(()=>n("p",{class:"message-info"}," Encuentra alguno de los Nft's de este hermoso proyecto. participa de los difrentes eventos, se parte de la descentralización. y siguenos en las redes sociales para estar atento y estar participando para los Airdoprs. ",-1)),O=[J,K],Q={__name:"ChartAgresive",setup(i,{expose:x}){var b,v;const a=z(),r=U(),e=E(),T=I(),y=new N,m=o([]),p=o(null),h=o(null),u=o(null),d=o(null);let g=null;o(!1);const k=e.params&&e.params&&e.params.symbol?e.params.symbol.toString().toUpperCase():"BTCUSDT",A=e.params&&e.params&&e.params.temporality?e.params.temporality.toString().toLocaleLowerCase():"1m";(b=e==null?void 0:e.params)!=null&&b.symbol?a.chart.symbols=String(e.params.symbol).toUpperCase():a.chart.symbols=k,(v=e==null?void 0:e.params)!=null&&v.temporality?a.chart.temporality=e.params.temporality:a.chart.temporality=A;const f=async s=>{g=s.value,p.value&&(r.loading=!0,T.push({name:"agresive:data",params:{symbol:String(g).toLowerCase(),temporality:a.chart.temporality}}),a.chart.symbols=s.value,await p.value.changeTarget(s),a.chart.data=await y.searchData({exchange:a.getExchange,interval:a.getTemporality,symbolsPairs:a.getSymbol,limit:500}),h.value&&await h.value.resetMicro(s),u.value&&await u.value.resetMicro(s),d.value&&await d.value.resetMicro(s),r.loading=!1)},D=async()=>{const S=(await a.searchSymbolsFutures()).flatMap(t=>a.chart.symbols!=t.symbol?{label:t.symbol,value:t.symbol}:{label:t.symbol,value:t.symbol,selected:!0});m.value=S.filter(t=>t.value.includes("USDT")),a.chart.data=await y.searchData({exchange:a.getExchange,interval:a.getTemporality,symbolsPairs:a.getSymbol,limit:500})};return L(async()=>{r.loading=!0,await D(),r.loading=!1}),x({Candles:c,mainStore:r,dataPairs:m,changeTarget:f}),(s,S)=>{const t=B;return _(r).connected&&_(r).web3.nftBalance>0?(M(),w("main",F,[n("div",G,[l(t,{opciones:m.value,onlyLabel:!1,lblPorDefecto:_(a).chart.symbols,onActionChange:f},null,8,["opciones","lblPorDefecto"])]),n("div",H,[l(c,{"chart-name-id":"chart-main","chart-indicators":{},main:!0,ref_key:"chartMainAgresive",ref:p},null,512)]),n("div",j,[l(c,{"chart-name-id":"chart-5s","chart-indicators":{},micro:!0,t:5,ref_key:"chartMicro1",ref:h},null,512),l(c,{"chart-name-id":"chart-15s","chart-indicators":{},micro:!0,t:15,ref_key:"chartMicro2",ref:u},null,512),l(c,{"chart-name-id":"chart-30s","chart-indicators":{},micro:!0,t:30,ref_key:"chartMicro3",ref:d},null,512)])])):(M(),w("main",q,O))}}},$=P(Q,[["__scopeId","data-v-fea9a127"]]);export{$ as default};
