import{_ as Q,q as X,r as _,i as pe,o as Z,B as me,C as ue,v as be,a as $,f as R,d as E,k as ge,l as Le,R as Ve,u as J,y as Se,z as ve,x as C}from"./index-8c23cd9d.js";import{u as ee,Y as ye}from"./chart-c4f46509.js";const Me=["id"],ke={class:"legend"},_e={key:0,class:"rsi"},Ce={__name:"Candles",props:["chartNameId","micro","main","t"],emits:["resizeChart"],setup(w,{expose:D,emit:u}){const o=w,e=ee(),V=X(),f=new J;let p=[];const S=_(!1),m=_(0),b=_(!1);let d,M,x=!1;const g=_(!1);let F,W,I,B,A,z,q,P,T,H,U;const ae=()=>{const i=document.querySelector(`#${o.chartNameId}`),r=parseInt(i.offsetWidth/1.01),c=parseInt(i.offsetHeight/1.01);let a=f.getConfigChart(r,c);const h=f.getConfigVelasTransparentes();d=ye(i,a),M=d.addCandlestickSeries(h);const s=new Date().toLocaleString();o.main&&o.main===!0&&d.applyOptions({watermark:{color:"#00ff11",visible:!0,text:`Topacio ${String(e.getSymbol).toUpperCase()}  ${e.getTemporality}  ${s}`,fontSize:14,horzAlign:"left",vertAlign:"top"}}),o.micro&&o.micro===!0&&o.t&&d.applyOptions({watermark:{color:"#00ff11",visible:!0,text:`Topacio ${String(e.getSymbol).toUpperCase()}  ${o.t} Seg.`,fontSize:14,horzAlign:"left",vertAlign:"top"}}),F=d.addLineSeries({color:"#f6483e33",lineWidth:7,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),W=d.addLineSeries({color:"#f0f8ff8f",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:2}),I=d.addLineSeries({color:"#00ffa521",lineWidth:7,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),d.addLineSeries({color:"yellow",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:3}),B=d.addLineSeries({color:"#84ff3d8a",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),A=d.addLineSeries({color:"orange",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),z=d.addLineSeries({color:"#f70776",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),q=d.addLineSeries({color:"#00bbf0",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),P=d.addLineSeries({color:"#bae8e8",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),d.addLineSeries({color:"#fff",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),T=d.addLineSeries({color:"yellow",lineWidth:4,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:1}),H=d.addLineSeries({color:"#c1c1c1",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:1}),U=d.addLineSeries({color:"#c1c1c1",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:1})},j=async i=>new Promise(async(r,c)=>{i==null&&(console.log("#",i),c("undefined lastCandle"));const a=o.micro===!0&&o.t,h=a?p:e.chart.data;let s=JSON.parse(JSON.stringify(h));if(!(s.length<=15)){if(s[s.length-1].close=i.close,s[s.length-1].high=i.high,s[s.length-1].low=i.low,!a){const t=s.flatMap(l=>l.close),n=await f.calculoRSI(t);g.value=parseFloat(n[n.length-1]).toFixed(2)}r(g.value)}}),te=async(i=!0)=>{b.value=i;const r=e.chart.data.flatMap(n=>n.close),c=await f.calculoRSI(r);let a=f.calcularMACD(r);const h=await f.calculateBollingerBands(r,89,3),s=f.calculateHMA(e.chart.data,10).flatMap(n=>n.value),t=f.calculateHMA(e.chart.data,20).flatMap(n=>n.value);e.chart.data[e.chart.data.length-1].bb||console.log("** noposee BB ",e.chart.data[e.chart.data.length-1],{isMicro:o.micro}),e.chart.data[e.chart.data.length-1].bb=h.pop(),e.chart.data[e.chart.data.length-1].rsi=c.pop(),e.chart.data[e.chart.data.length-1].macd=a.pop(),e.chart.data[e.chart.data.length-1].hma10=s.pop(),e.chart.data[e.chart.data.length-1].hma20=t.pop(),g.value=e.chart.data[e.chart.data.length-1].rsi},ie=()=>{if(F.setData([]),I.setData([]),W.setData([]),!e.chart.indicators.bb)return;const i=e.chart.data.flatMap(n=>{let l={value:n.bb.upper,time:n.time};return n.high>n.bb.upper&&(l.color="#f443369e"),l}),r=e.chart.data.flatMap(n=>{let l={value:n.bb.lower,time:n.time};return n.low<n.bb.lower&&(l.color="#00ffa58a"),l}),c=e.chart.data.flatMap(n=>({value:n.bb.middle,time:n.time}));function a(n,l){return n.time<l.time?-1:n.time>l.time?1:0}const h=i.sort(a),s=r.sort(a),t=c.sort(a);F.setData(h),I.setData(s),W.setData(t)},le=()=>{if(o.micro&&p.length>=20){const i=p.sort((a,h)=>a.time<h.time?-1:a.time>h.time?1:0);console.log("renderHmaMicro",{dataCandlesMicro:p,dtOrdernada:i});const r=f.calculateHMA(i,10);B.setData(r);const c=f.calculateHMA(i,20,"#f70776");A.setData(c)}},se=()=>{if(!o.micro){if(e.chart.data=e.chart.data.sort((i,r)=>i.time<r.time?-1:i.time>r.time?1:0),e.chart.indicators.hma10){const i=e.chart.data.flatMap(r=>({value:r.hma10,time:r.time}));B.setData(i)}if(e.chart.indicators.hma20){const i=e.chart.data.flatMap(r=>({value:r.hma20,time:r.time}));A.setData(i)}if(e.chart.indicators.hma55){const i=f.calculateHMA(e.chart.data,55,"#f70776");z.setData(i)}if(e.chart.indicators.hma89){const i=f.calculateHMA(e.chart.data,89,"#9896f1");q.setData(i)}if(e.chart.indicators.hma233){const i=f.calculateHMA(e.chart.data,233,"#00bbf0");P.setData(i)}}},re=async()=>{const i=String(e.getSymbol).toLowerCase(),r=e.getTemporality,c=await new WebSocket(`wss://fstream.binance.com/ws/${i}@kline_${r}`);let a,h=0;c.addEventListener("message",async function(s){var n;if(V.loading)return;const t=JSON.parse(s.data);if(s&&(t!=null&&t.s)&&t.result==null&&(t!=null&&t.k)&&(t==null?void 0:t.k)!=null&&((n=t==null?void 0:t.k)==null?void 0:n.i)==e.getTemporality&&String(t.s).toUpperCase()==String(e.getSymbol).toUpperCase()){const l=parseFloat(t.k.c);t.k.T&&parseInt(t.k.T);const he=t.k.x?t.k.x:!1,L=t.k.V?parseFloat(t.k.V):null,{micro:k,t:v}=o;if(k||(a={time:parseInt(t.k.T),open:parseFloat(t.k.o),high:parseFloat(t.k.h),low:parseFloat(t.k.l),close:l,value:l,volume:L},a.close=l,a.value=l,a.volume=L,a.high&&l>a.high&&(a.high=l),a&&a.low&&l<a.low&&(a.low=l),o.micro&&o.t?a.time=parseInt(m.value):a.time=parseInt(t.k.T),a&&a.close&&j(a)),!S.value&&k&&v&&(m.value=t.E+v*1e3,a={time:m.value,open:parseFloat(l),high:parseFloat(l),low:parseFloat(l),close:l,value:l,volume:L},S.value=!0),he&&!k){const G=e.chart.data[e.chart.data.length-1].time-e.chart.data[e.chart.data.length-2].time;a.time=parseInt(t.k.T)+G,a.open=parseFloat(t.k.o),a.high=parseFloat(t.k.h),a.low=parseFloat(t.k.l),a.close=parseFloat(l),a.volume=L,e.chart.data.push(a),b.value=!0,K()}k&&v&&S.value&&(x&&(a.open=parseFloat(l),a.high=parseFloat(l),a.low=parseFloat(l),a.close=l,a.value=l,a.volume=L,x=!1),a.time=m.value,a.close=l,a.value=l,a.volume=L,l>a.high&&(a.high=l),l<a.low&&(a.low=l),t.E>m.value&&(b.value=!0,x=!0,m.value=t.E+v*1e3,a.time=parseInt(m.value),p.push(JSON.parse(JSON.stringify(a))),p=p.sort((N,O)=>O.time-N.time).filter((N,O,de)=>O===de.findIndex(fe=>fe.time===N.time)),console.log("close micro",p.length,v,m.value,p),ne()),a&&a.close&&j(a)),t.E>h&&M.update(a)}h=t.E})},ne=async()=>{le(),oe(),ce()},oe=()=>{if(p.length>=5){const r=p.sort((s,t)=>t.high-s.high),c=p.flatMap(s=>s.close),a=Ve.calculate({values:c,period:10}),h=p.slice(5*-1);console.log("calcularDivergenciaMicro",{dtOrdernadaPriceHigh:r,highLast30Candles:h,closeMicro:c,rsi:a})}},K=async()=>{o.micro||(await te(),ie(),se(),Y())},ce=()=>{if(p.length<=5)return;const i=p.sort((t,n)=>t.time-n.time),r=i.length<89?i.length:89,c=f.kernelChannel(i,r,2.5),a=c.flatMap(t=>({time:t.time,value:parseFloat(parseFloat(t.upperChannel).toFixed(4))})),h=c.flatMap(t=>({time:t.time,value:parseFloat(parseFloat(t.lowerChannel).toFixed(4))})),s=c.flatMap(t=>({time:t.time,value:parseFloat(parseFloat(t.smoothedData).toFixed(4))}));T.setData(s),H.setData(a),U.setData(h),console.log({channelData:c,dtOrdernadaPriceHigh:i})},Y=()=>{const r=f.kernelChannel(e.chart.data,89,2.5),c=r.flatMap(s=>({time:s.time,value:parseFloat(parseFloat(s.upperChannel).toFixed(4))})),a=r.flatMap(s=>({time:s.time,value:parseFloat(parseFloat(s.lowerChannel).toFixed(4))})),h=r.flatMap((s,t)=>{const n=parseFloat(s.smoothedData)<e.chart.data[t].close?"#A6FF96":"#DA0C81";return{time:s.time,value:parseFloat(parseFloat(s.smoothedData).toFixed(4)),color:n}});T.setData(h),H.setData(c),U.setData(a),console.log({channelData:r})};return pe(()=>e.chart.data,function(i){o.main&&o.main===!0&&(K(),M.setData(e.chart.data),Y())}),Z(async()=>{await ae(),re()}),D({chartStore:e,mainStore:V,chartNameId:o.chartNameId,lastRSI:g}),(i,r)=>me(($(),R("div",{id:w.chartNameId,ref:"chartElement",class:"charts-graphy"},[E("div",ke,[g.value?($(),R("label",_e,"RSI:"+ge(g.value),1)):Le("",!0)])],8,Me)),[[ue,!be(V).loading]])}},y=Q(Ce,[["__scopeId","data-v-e08cd054"]]);const we={class:"charts"},De={class:"MainChart"},xe={class:"microSection"},Fe={__name:"ChartAgresive",setup(w,{expose:D}){var m,b;const u=ee(),o=X(),e=Se();ve();const V=new J,f=e.params&&e.params&&e.params.symbol?e.params.symbol.toString().toUpperCase():"BTCUSDT",p=e.params&&e.params&&e.params.temporality?e.params.temporality.toString().toLocaleLowerCase():"4h";(m=e==null?void 0:e.params)!=null&&m.symbol?u.chart.symbols=String(e.params.symbol).toUpperCase():u.chart.symbols=f,(b=e==null?void 0:e.params)!=null&&b.temporality?u.chart.temporality=e.params.temporality:u.chart.temporality=p;const S=async()=>{u.chart.data=await V.searchData({exchange:u.getExchange,interval:u.getTemporality,symbolsPairs:u.getSymbol,limit:500})};return Z(async()=>{o.loading=!0,await S(),o.loading=!1}),D({Candles:y}),(d,M)=>($(),R("main",we,[E("div",De,[C(y,{"chart-name-id":"chart-main",main:!0})]),E("div",xe,[C(y,{"chart-name-id":"chart-5s",micro:!0,t:5}),C(y,{"chart-name-id":"chart-15s",micro:!0,t:15}),C(y,{"chart-name-id":"chart-30s",micro:!0,t:30})])]))}},Ae=Q(Fe,[["__scopeId","data-v-515551f0"]]);export{Ae as default};
