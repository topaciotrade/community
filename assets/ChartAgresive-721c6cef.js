import{_ as ce,u as he,r as D,E as ne,A as W,f as Te,o as de,v as Ae,J as Be,k as K,a as w,g as C,d as S,t as T,l as oe,e as He,R as Ee,p as fe,b as pe,h as me,H as Ne,I as $e,m as A}from"./index-0cf38a0c.js";import{u as ue,p as Ue,Y as je}from"./processDivergence-e76aa644.js";const Oe=m=>(fe("data-v-79a8dfa2"),m=m(),pe(),m),Re=["id"],Pe={class:"legend"},ze={key:0,class:"rsi"},qe={key:0,class:"timer-counter"},Ke=Oe(()=>S("span",null,"Left time",-1)),Ye={__name:"Candles",props:["chartNameId","micro","main","t"],emits:["resizeChart"],setup(m,{expose:B,emit:b}){var le;const c=m,a=ue(),y=he(),f=new me;let p=[];const _=D(!1),u=D(0),g=D(!1);let d,x,H=!1;const v=D(!1),Y=D(null);let E,N,$,G,U,j,Q,X,Z,O,R,P;const L=ne({bajista:[],alcista:[]}),J=ne({alcistas:[],bajistas:[]}),ee=()=>{const i=new Ue(a.chart.data);return new Promise((s,o)=>{i.agregarCallback(e=>{L.alcista=e.alcista,L.bajista=e.bajista}),s(i.iniciarProceso())})},ge=()=>{let i=f.calculateEMA(a.chart.data,200,"#F2F7A1");G.setData(i)};function F(){const i=new Date().getTime()+Y.value*1e3-Date.parse(new Date),s=Math.floor(i/1e3%60),o=Math.floor(i/1e3/60%60),e=Math.floor(i/(1e3*60*60)%24),h=Math.floor(i/(1e3*60*60*24));return{total:i,days:h<10?"0"+h:h,hours:e<10?"0"+e:e,minutes:o<10?"0"+o:o,seconds:s<10?"0"+s:s}}const ve=W(()=>F().seconds),Le=W(()=>F().minutes),Ve=W(()=>F().hours);W(()=>F().days);const Se=()=>{const i=document.querySelector(`#${c.chartNameId}`),s=parseInt(i.offsetWidth/1.01),o=parseInt(i.offsetHeight/1.01);let e=f.getConfigChart(s,o);const h=f.getConfigVelasTransparentes();d=je(i,e),x=d.addCandlestickSeries(h);const r=new Date().toLocaleString();c.main&&c.main===!0&&d.applyOptions({watermark:{color:"#00ff11",visible:!0,text:`Topacio ${String(a.getSymbol).toUpperCase()}  ${a.getTemporality}  ${r}`,fontSize:14,horzAlign:"left",vertAlign:"top"}}),c.micro&&c.micro===!0&&c.t&&d.applyOptions({watermark:{color:"#00ff11",visible:!0,text:`Topacio ${String(a.getSymbol).toUpperCase()}  ${c.t} Seg.`,fontSize:14,horzAlign:"left",vertAlign:"top"}}),E=d.addLineSeries({color:"#f6483e33",lineWidth:7,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),N=d.addLineSeries({color:"#f0f8ff8f",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:2}),$=d.addLineSeries({color:"#00ffa521",lineWidth:7,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),G=d.addLineSeries({color:"yellow",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:3}),U=d.addLineSeries({color:"#84ff3d8a",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),j=d.addLineSeries({color:"orange",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),Q=d.addLineSeries({color:"#f70776",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),X=d.addLineSeries({color:"#00bbf0",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),Z=d.addLineSeries({color:"#bae8e8",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),d.addLineSeries({color:"#fff",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),O=d.addLineSeries({color:"yellow",lineWidth:4,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:1}),R=d.addLineSeries({color:"#c1c1c1",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:1}),P=d.addLineSeries({color:"#c1c1c1",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:1})},ae=async i=>(Y.value=parseInt((i.time-new Date().getTime())/1e3),new Promise(async(s,o)=>{i==null&&(console.log("#",i),o("undefined lastCandle"));const e=c.micro===!0&&c.t,h=e?p:a.chart.data;let r=JSON.parse(JSON.stringify(h));if(!(r.length<=15)){if(r[r.length-1].close=i.close,r[r.length-1].high=i.high,r[r.length-1].low=i.low,!e){const t=r.flatMap(l=>l.close),n=await f.calculoRSI(t);v.value=parseFloat(n[n.length-1]).toFixed(2)}s(v.value)}})),ye=async(i=!0)=>{g.value=i;const s=a.chart.data.flatMap(n=>n.close),o=await f.calculoRSI(s);let e=f.calcularMACD(s);const h=await f.calculateBollingerBands(s,89,3),r=f.calculateHMA(a.chart.data,10).flatMap(n=>n.value),t=f.calculateHMA(a.chart.data,20).flatMap(n=>n.value);a.chart.data[a.chart.data.length-1].bb||console.log("** noposee BB ",a.chart.data[a.chart.data.length-1],{isMicro:c.micro}),a.chart.data[a.chart.data.length-1].bb=h.pop(),a.chart.data[a.chart.data.length-1].rsi=o.pop(),a.chart.data[a.chart.data.length-1].macd=e.pop(),a.chart.data[a.chart.data.length-1].hma10=r.pop(),a.chart.data[a.chart.data.length-1].hma20=t.pop(),v.value=a.chart.data[a.chart.data.length-1].rsi},_e=()=>{if(E.setData([]),$.setData([]),N.setData([]),!a.chart.indicators.bb)return;const i=a.chart.data.flatMap(n=>{let l={value:n.bb.upper,time:n.time};return n.high>n.bb.upper&&(l.color="#f443369e"),l}),s=a.chart.data.flatMap(n=>{let l={value:n.bb.lower,time:n.time};return n.low<n.bb.lower&&(l.color="#00ffa58a"),l}),o=a.chart.data.flatMap(n=>({value:n.bb.middle,time:n.time}));function e(n,l){return n.time<l.time?-1:n.time>l.time?1:0}const h=i.sort(e),r=s.sort(e),t=o.sort(e);E.setData(h),$.setData(r),N.setData(t)},Me=()=>{if(c.micro&&p.length>=20){const i=p.sort((e,h)=>e.time<h.time?-1:e.time>h.time?1:0);console.log("renderHmaMicro",{dataCandlesMicro:p,dtOrdernada:i});const s=f.calculateHMA(i,10);U.setData(s);const o=f.calculateHMA(i,20,"#f70776");j.setData(o)}},De=()=>{if(!c.micro){if(a.chart.data=a.chart.data.sort((i,s)=>i.time<s.time?-1:i.time>s.time?1:0),a.chart.indicators.hma10){const i=a.chart.data.flatMap(s=>({value:s.hma10,time:s.time}));U.setData(i)}if(a.chart.indicators.hma20){const i=a.chart.data.flatMap(s=>({value:s.hma20,time:s.time}));j.setData(i)}if(a.chart.indicators.hma55){const i=f.calculateHMA(a.chart.data,55,"#f70776");Q.setData(i)}if(a.chart.indicators.hma89){const i=f.calculateHMA(a.chart.data,89,"#9896f1");X.setData(i)}if(a.chart.indicators.hma233){const i=f.calculateHMA(a.chart.data,233,"#00bbf0");Z.setData(i)}}},ke=async()=>{const i=String(a.getSymbol).toLowerCase(),s=a.getTemporality,o=await new WebSocket(`wss://fstream.binance.com/ws/${i}@kline_${s}`);let e,h=0;o.addEventListener("message",async function(r){var n;if(y.loading)return;const t=JSON.parse(r.data);if(r&&(t!=null&&t.s)&&t.result==null&&(t!=null&&t.k)&&(t==null?void 0:t.k)!=null&&((n=t==null?void 0:t.k)==null?void 0:n.i)==a.getTemporality&&String(t.s).toUpperCase()==String(a.getSymbol).toUpperCase()){const l=parseFloat(t.k.c);t.k.T&&parseInt(t.k.T);const Fe=t.k.x?t.k.x:!1,V=t.k.V?parseFloat(t.k.V):null,{micro:I,t:M}=c;if(I||(e={time:parseInt(t.k.T),open:parseFloat(t.k.o),high:parseFloat(t.k.h),low:parseFloat(t.k.l),close:l,value:l,volume:V},e.close=l,e.value=l,e.volume=V,e.high&&l>e.high&&(e.high=l),e&&e.low&&l<e.low&&(e.low=l),c.micro&&c.t?e.time=parseInt(u.value):e.time=parseInt(t.k.T),e&&e.close&&ae(e)),!_.value&&I&&M&&(u.value=t.E+M*1e3,e={time:u.value,open:parseFloat(l),high:parseFloat(l),low:parseFloat(l),close:l,value:l,volume:V},_.value=!0),Fe&&!I){const re=a.chart.data[a.chart.data.length-1].time-a.chart.data[a.chart.data.length-2].time;e.time=parseInt(t.k.T)+re,e.open=parseFloat(t.k.o),e.high=parseFloat(t.k.h),e.low=parseFloat(t.k.l),e.close=parseFloat(l),e.volume=V,a.chart.data.push(e),g.value=!0,te()}I&&M&&_.value&&(H&&(e.open=parseFloat(l),e.high=parseFloat(l),e.low=parseFloat(l),e.close=l,e.value=l,e.volume=V,H=!1),e.time=u.value,e.close=l,e.value=l,e.volume=V,l>e.high&&(e.high=l),l<e.low&&(e.low=l),t.E>u.value&&(g.value=!0,H=!0,u.value=t.E+M*1e3,e.time=parseInt(u.value),p.push(JSON.parse(JSON.stringify(e))),p=p.sort((z,q)=>q.time-z.time).filter((z,q,Ie)=>q===Ie.findIndex(We=>We.time===z.time)),console.log("close micro",p.length,M,u.value,p),we()),e&&e.close&&ae(e)),t.E>h&&x.update(e)}h=t.E})},we=async()=>{Me(),Ce(),xe()},Ce=()=>{if(p.length>=5){const s=p.sort((r,t)=>t.high-r.high),o=p.flatMap(r=>r.close),e=Ee.calculate({values:o,period:10}),h=p.slice(5*-1);console.log("calcularDivergenciaMicro",{dtOrdernadaPriceHigh:s,highLast30Candles:h,closeMicro:o,rsi:e})}},te=async()=>{c.micro||(await ye(),_e(),De(),ie(),ge())},xe=()=>{if(p.length<=5)return;const i=p.sort((t,n)=>t.time-n.time),s=i.length<89?i.length:80,o=f.kernelChannel(i,s,2.5),e=o.flatMap(t=>({time:t.time,value:parseFloat(parseFloat(t.upperChannel).toFixed(4))})),h=o.flatMap(t=>({time:t.time,value:parseFloat(parseFloat(t.lowerChannel).toFixed(4))})),r=o.flatMap(t=>({time:t.time,value:parseFloat(parseFloat(t.smoothedData).toFixed(4))}));O.setData(r),R.setData(e),P.setData(h),console.log({channelData:o,dtOrdernadaPriceHigh:i})},ie=()=>{const s=f.kernelChannel(a.chart.data,89,2.5),o=s.flatMap(r=>({time:r.time,value:parseFloat(parseFloat(r.upperChannel).toFixed(4))})),e=s.flatMap(r=>({time:r.time,value:parseFloat(parseFloat(r.lowerChannel).toFixed(4))})),h=s.flatMap((r,t)=>{const n=parseFloat(r.smoothedData)<a.chart.data[t].close?"#A6FF96":"#DA0C81";return{time:r.time,value:parseFloat(parseFloat(r.smoothedData).toFixed(4)),color:n}});O.setData(h),R.setData(o),P.setData(e)},se=()=>{setTimeout(function(){new Promise((i,s)=>{L.bajista.length>0&&L.bajista.forEach(o=>{let e=d.addLineSeries({color:"#fff",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,crosshairMarkerVisible:!1,lineStyle:0});e.setData(o),J.bajistas.push(e)}),L.alcista.length>0&&L.alcista.forEach(o=>{let e=d.addLineSeries({color:"#fff",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,crosshairMarkerVisible:!1,lineStyle:0});e.setData(o),J.alcistas.push(e)}),i(!0)})},0)};return(le=a==null?void 0:a.getIndicators)!=null&&le.divergences&&c.main&&c.main===!0&&setTimeout(function(){Promise.resolve(ee()).then(se())},0),Te(()=>a.chart.data,function(i){c.main&&c.main===!0&&(te(),x.setData(a.chart.data),ie(),ee().then(se()))}),de(async()=>{await Se(),ke()}),B({chartStore:a,mainStore:y,chartNameId:c.chartNameId,lastRSI:v}),(i,s)=>Ae((w(),C("div",{id:m.chartNameId,ref:"chartElement",class:"charts-graphy"},[S("div",Pe,[v.value?(w(),C("label",ze,"RSI:"+T(v.value),1)):oe("",!0)]),c.micro?oe("",!0):(w(),C("div",qe,[Ke,He(" "+T(Ve.value)+":"+T(Le.value)+":"+T(ve.value),1)]))],8,Re)),[[Be,!K(y).loading]])}},k=ce(Ye,[["__scopeId","data-v-79a8dfa2"]]);const be=m=>(fe("data-v-d78c862d"),m=m(),pe(),m),Ge={key:0,class:"charts"},Qe={class:"MainChart"},Xe={class:"microSection"},Ze={key:1},Je=be(()=>S("h1",null,"Necesitas al menos 1 fragmento de alguna de las gemas del Meta de Topacio",-1)),ea=be(()=>S("p",{class:"message-info"}," Encuentra alguno de los Nft's de este hermoso proyecto. participa de los difrentes eventos, se parte de la descentralización. y siguenos en las redes sociales para estar atento y estar participando para los Airdoprs. ",-1)),aa=[Je,ea],ta={__name:"ChartAgresive",setup(m,{expose:B}){var u,g;const b=ue(),c=he(),a=Ne();$e();const y=new me,f=a.params&&a.params&&a.params.symbol?a.params.symbol.toString().toUpperCase():"BTCUSDT",p=a.params&&a.params&&a.params.temporality?a.params.temporality.toString().toLocaleLowerCase():"1m";(u=a==null?void 0:a.params)!=null&&u.symbol?b.chart.symbols=String(a.params.symbol).toUpperCase():b.chart.symbols=f,(g=a==null?void 0:a.params)!=null&&g.temporality?b.chart.temporality=a.params.temporality:b.chart.temporality=p;const _=async()=>{b.chart.data=await y.searchData({exchange:b.getExchange,interval:b.getTemporality,symbolsPairs:b.getSymbol,limit:500})};return de(async()=>{c.loading=!0,await _(),c.loading=!1}),B({Candles:k,mainStore:c}),(d,x)=>K(c).connected&&K(c).web3.nftBalance>0?(w(),C("main",Ge,[S("div",Qe,[A(k,{"chart-name-id":"chart-main",main:!0})]),S("div",Xe,[A(k,{"chart-name-id":"chart-5s",micro:!0,t:5}),A(k,{"chart-name-id":"chart-15s",micro:!0,t:15}),A(k,{"chart-name-id":"chart-30s",micro:!0,t:30})])])):(w(),C("main",Ze,aa))}},ra=ce(ta,[["__scopeId","data-v-d78c862d"]]);export{ra as default};
