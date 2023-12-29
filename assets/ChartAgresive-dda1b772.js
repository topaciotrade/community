import{u as de,p as We,C as $e,_ as Ne}from"./Selector-ef8e5e0c.js";import{_ as ue,u as fe,r as b,I as ce,s as Ue,A as J,f as Ee,o as me,v as Oe,J as je,k as G,a as U,g as E,d as C,t as K,l as he,e as He,R as Re,p as pe,b as ge,h as be,G as Pe,H as ze,m as $}from"./index-9b9780bc.js";const qe=v=>(pe("data-v-38efa76b"),v=v(),ge(),v),Je=["id"],Ke={class:"legend"},Ge={key:0,class:"rsi"},Qe={key:0,class:"timer-counter"},Xe=qe(()=>C("span",null,"Left time",-1)),Ye={__name:"Candles",props:["chartNameId","micro","main","t"],emits:["resizeChart"],setup(v,{expose:Q,emit:f}){var oe;const n=v,e=de(),M=fe(),u=new be;let d=[];const w=b(!1),y=b(0),D=b(!1);let o,L,I=!1;const V=b(!1),B=b(null),_=b(null);let x,T,p,A,m,O,ae,X,Y,j,H,R;const S=ce({bajista:[],alcista:[]}),F=ce({alcistas:[],bajistas:[]});Ue(()=>{o&&o.remove()});const te=()=>{const s=new We(e.chart.data);return new Promise((l,a)=>{s.agregarCallback(r=>{S.alcista=r.alcista,S.bajista=r.bajista}),l(s.iniciarProceso())})},ye=()=>{let s=u.calculateEMA(e.chart.data,200,"#F2F7A1");A.setData(s)};function P(){const s=new Date().getTime()+B.value*1e3-Date.parse(new Date),l=Math.floor(s/1e3%60),a=Math.floor(s/1e3/60%60),r=Math.floor(s/(1e3*60*60)%24),c=Math.floor(s/(1e3*60*60*24));return{total:s,days:c<10?"0"+c:c,hours:r<10?"0"+r:r,minutes:a<10?"0"+a:a,seconds:l<10?"0"+l:l}}const Se=J(()=>P().seconds),Le=J(()=>P().minutes),_e=J(()=>P().hours);J(()=>P().days);const se=()=>{const s=document.querySelector(`#${n.chartNameId}`),l=parseInt(s.offsetWidth/1.01),a=parseInt(s.offsetHeight/1.01);let r=u.getConfigChart(l,a);const c=u.getConfigVelasTransparentes();o=$e(s,r),L=o.addCandlestickSeries(c);const t=new Date().toLocaleString();n.main&&n.main===!0&&o.applyOptions({watermark:{color:"#00ff11",visible:!0,text:`Topacio ${String(e.getSymbol).toUpperCase()}  ${e.getTemporality}  ${t}`,fontSize:14,horzAlign:"left",vertAlign:"top"}}),n.micro&&n.micro===!0&&n.t&&o.applyOptions({watermark:{color:"#00ff11",visible:!0,text:`Topacio ${String(e.getSymbol).toUpperCase()}  ${n.t} Seg.`,fontSize:14,horzAlign:"left",vertAlign:"top"}}),x=o.addLineSeries({color:"#f6483e33",lineWidth:7,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),T=o.addLineSeries({color:"#f0f8ff8f",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:2}),p=o.addLineSeries({color:"#00ffa521",lineWidth:7,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),A=o.addLineSeries({color:"yellow",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:3}),m=o.addLineSeries({color:"#84ff3d8a",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),O=o.addLineSeries({color:"orange",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),ae=o.addLineSeries({color:"#f70776",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),X=o.addLineSeries({color:"#00bbf0",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),Y=o.addLineSeries({color:"#bae8e8",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),o.addLineSeries({color:"#fff",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),j=o.addLineSeries({color:"yellow",lineWidth:4,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:1}),H=o.addLineSeries({color:"#c1c1c1",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:1}),R=o.addLineSeries({color:"#c1c1c1",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:1})},ie=async s=>(B.value=parseInt((s.time-new Date().getTime())/1e3),new Promise(async(l,a)=>{s==null&&(console.log("#",s),a("undefined lastCandle"));const r=n.micro===!0&&n.t,c=r?d:e.chart.data;let t=JSON.parse(JSON.stringify(c));if(!(t.length<=15)){if(t[t.length-1].close=s.close,t[t.length-1].high=s.high,t[t.length-1].low=s.low,!r){const h=t.flatMap(g=>g.close),i=await u.calculoRSI(h);V.value=parseFloat(i[i.length-1]).toFixed(2)}l(V.value)}})),Ve=async(s=!0)=>{D.value=s;const l=e.chart.data.flatMap(i=>i.close),a=await u.calculoRSI(l);let r=u.calcularMACD(l);const c=await u.calculateBollingerBands(l,89,3),t=u.calculateHMA(e.chart.data,10).flatMap(i=>i.value),h=u.calculateHMA(e.chart.data,20).flatMap(i=>i.value);e.chart.data[e.chart.data.length-1].bb||console.log("** noposee BB ",e.chart.data[e.chart.data.length-1],{isMicro:n.micro}),e.chart.data[e.chart.data.length-1].bb=c.pop(),e.chart.data[e.chart.data.length-1].rsi=a.pop(),e.chart.data[e.chart.data.length-1].macd=r.pop(),e.chart.data[e.chart.data.length-1].hma10=t.pop(),e.chart.data[e.chart.data.length-1].hma20=h.pop(),V.value=e.chart.data[e.chart.data.length-1].rsi},Me=()=>{if(x.setData([]),p.setData([]),T.setData([]),!e.chart.indicators.bb)return;const s=e.chart.data.flatMap(i=>{let g={value:i.bb.upper,time:i.time};return i.high>i.bb.upper&&(g.color="#f443369e"),g}),l=e.chart.data.flatMap(i=>{let g={value:i.bb.lower,time:i.time};return i.low<i.bb.lower&&(g.color="#00ffa58a"),g}),a=e.chart.data.flatMap(i=>({value:i.bb.middle,time:i.time}));function r(i,g){return i.time<g.time?-1:i.time>g.time?1:0}const c=s.sort(r),t=l.sort(r),h=a.sort(r);console.log("check order",{dt_orderHigh:c,dt_orderLow:t,dt_orderMiddle:h}),x.setData(c),p.setData(t),T.setData(h)},we=()=>{if(n.micro&&d.length>=20){const s=d.sort((r,c)=>r.time<c.time?-1:r.time>c.time?1:0);console.log("renderHmaMicro",{dataCandlesMicro:d,dtOrdernada:s});const l=u.calculateHMA(s,10);m.setData(l);const a=u.calculateHMA(s,20,"#f70776");O.setData(a)}},De=()=>{if(!n.micro){if(e.chart.data=e.chart.data.sort((s,l)=>s.time<l.time?-1:s.time>l.time?1:0),e.chart.indicators.hma10){const s=e.chart.data.flatMap(l=>({value:l.hma10,time:l.time}));m.setData(s)}if(e.chart.indicators.hma20){const s=e.chart.data.flatMap(l=>({value:l.hma20,time:l.time}));O.setData(s)}if(e.chart.indicators.hma55){const s=u.calculateHMA(e.chart.data,55,"#f70776");ae.setData(s)}if(e.chart.indicators.hma89){const s=u.calculateHMA(e.chart.data,89,"#9896f1");X.setData(s)}if(e.chart.indicators.hma233){const s=u.calculateHMA(e.chart.data,233,"#00bbf0");Y.setData(s)}}},ke=async s=>{M.loading=!0;const l=String(e.getSymbol).toLowerCase(),a=String(s.value).toLowerCase(),r=`${l}@kline_${e.getTemporality}`,c=`${a}@kline_${e.getTemporality}`;console.log("resetMicro",{evt:s}),S.alcista=[],S.bajista=[],F.bajistas=[],F.alcistas=[],d=[],j.setData([]),H.setData([]),R.setData([]),m.setData([]),O.setData([]),X.setData([]),Y.setData([]),o.applyOptions({priceScale:{scaleMargins:{top:.1,bottom:.1}},watermark:{color:"#00ff11",visible:!0,text:`Topacio ${String(e.getSymbol).toUpperCase()}  ${n.t} Seg.`,fontSize:14,horzAlign:"left",vertAlign:"top"}}),L.setData([]),await _.value.send(JSON.stringify({method:"UNSUBSCRIBE",params:[r],id:new Date().getTime()})),await _.value.send(JSON.stringify({method:"SUBSCRIBE",params:[c],id:new Date().getTime()})),M.loading=!1},Ce=async s=>{o.remove(),S.alcista=[],S.bajista=[],F.bajistas=[],F.alcistas=[];const l=String(e.getSymbol).toLowerCase(),a=String(s.value).toLowerCase(),r=`${l}@kline_${e.getTemporality}`,c=`${a}@kline_${e.getTemporality}`;se(),console.log("* changeTarget Candles",{evt:s,symbolsMinuscula:l,previusSocket:r}),_.value&&(_.value.send(JSON.stringify({method:"UNSUBSCRIBE",params:[r],id:new Date().getTime()})),_.value.send(JSON.stringify({method:"SUBSCRIBE",params:[c],id:new Date().getTime()})))},xe=async()=>{const s=String(e.getSymbol).toLowerCase(),l=e.getTemporality;_.value=await new WebSocket(`wss://fstream.binance.com/ws/${s}@kline_${l}`);let a,r=0;_.value.addEventListener("message",async function(c){var h;if(M.loading)return;const t=JSON.parse(c.data);if(c&&(t!=null&&t.s)&&t.result==null&&(t!=null&&t.k)&&(t==null?void 0:t.k)!=null&&((h=t==null?void 0:t.k)==null?void 0:h.i)==e.getTemporality&&String(t.s).toUpperCase()==String(e.getSymbol).toUpperCase()){const i=parseFloat(t.k.c);t.k.T&&parseInt(t.k.T);const g=t.k.x?t.k.x:!1,k=t.k.V?parseFloat(t.k.V):null,{micro:W,t:z}=n;if(W||(a={time:parseInt(t.k.T),open:parseFloat(t.k.o),high:parseFloat(t.k.h),low:parseFloat(t.k.l),close:i,value:i,volume:k},a.close=i,a.value=i,a.volume=k,a.high&&i>a.high&&(a.high=i),a&&a.low&&i<a.low&&(a.low=i),n.micro&&n.t?a.time=parseInt(y.value):a.time=parseInt(t.k.T),a&&a.close&&ie(a)),!w.value&&W==!0&&z&&(y.value=t.E+z*1e3,a={time:y.value,open:parseFloat(i),high:parseFloat(i),low:parseFloat(i),close:i,value:i,volume:k},w.value=!0),g&&!W){const q=e.chart.data[e.chart.data.length-1].time-e.chart.data[e.chart.data.length-2].time;a.time=parseInt(t.k.T)+q,a.open=parseFloat(t.k.o),a.high=parseFloat(t.k.h),a.low=parseFloat(t.k.l),a.close=parseFloat(i),a.volume=k,e.chart.data.push(a),D.value=!0,le()}if(W&&z&&w.value&&(I&&(a.open=parseFloat(i),a.high=parseFloat(i),a.low=parseFloat(i),a.close=i,a.value=i,a.volume=k,I=!1),a.time=y.value,a.close=i,a.value=i,a.volume=k,W===!0&&d.length==0&&(a={time:parseInt(t.k.T),open:i,high:i,low:i,close:i,value:i,volume:k}),i>a.high&&(a.high=i),i<a.low&&(a.low=i),t.E>y.value&&(D.value=!0,I=!0,y.value=t.E+z*1e3,a.time=parseInt(y.value),d.push(JSON.parse(JSON.stringify(a))),d=d.sort((Z,ee)=>ee.time-Z.time).filter((Z,ee,Be)=>ee===Be.findIndex(Ae=>Ae.time===Z.time)),d.length>1&&Te()),a&&a.close&&d.length>1&&ie(a)),t.E>r&&a&&a.time&&o&&L)try{L.update(a)}catch(q){console.log({chart:o,candleSeries:L,e:q})}}r=t.E})},Te=async()=>{we(),Fe(),Ie()},Fe=()=>{if(d.length>=5){const l=d.sort((t,h)=>h.high-t.high),a=d.flatMap(t=>t.close),r=Re.calculate({values:a,period:10}),c=d.slice(5*-1);console.log("calcularDivergenciaMicro",{dtOrdernadaPriceHigh:l,highLast30Candles:c,closeMicro:a,rsi:r})}},le=async()=>{n.micro||(await Ve(),Me(),De(),re(),ye())},Ie=()=>{if(d.length<=5)return;const s=d.sort((h,i)=>h.time-i.time),l=s.length<89?s.length:80,a=u.kernelChannel(s,l,2.5),r=a.flatMap(h=>({time:h.time,value:parseFloat(parseFloat(h.upperChannel).toFixed(4))})),c=a.flatMap(h=>({time:h.time,value:parseFloat(parseFloat(h.lowerChannel).toFixed(4))})),t=a.flatMap(h=>({time:h.time,value:parseFloat(parseFloat(h.smoothedData).toFixed(4))}));j.setData(t),H.setData(r),R.setData(c),console.log({channelData:a,dtOrdernadaPriceHigh:s})},re=()=>{const l=u.kernelChannel(e.chart.data,89,2.5),a=l.flatMap(t=>({time:t.time,value:parseFloat(parseFloat(t.upperChannel).toFixed(4))})),r=l.flatMap(t=>({time:t.time,value:parseFloat(parseFloat(t.lowerChannel).toFixed(4))})),c=l.flatMap((t,h)=>{const i=parseFloat(t.smoothedData)<e.chart.data[h].close?"#A6FF96":"#DA0C81";return{time:t.time,value:parseFloat(parseFloat(t.smoothedData).toFixed(4)),color:i}});j.setData(c),H.setData(a),R.setData(r)},ne=()=>{setTimeout(function(){new Promise((s,l)=>{S.bajista.length>0&&S.bajista.forEach(a=>{let r=o.addLineSeries({color:"#fff",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,crosshairMarkerVisible:!1,lineStyle:0});r.setData(a),F.bajistas.push(r)}),S.alcista.length>0&&S.alcista.forEach(a=>{let r=o.addLineSeries({color:"#fff",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,crosshairMarkerVisible:!1,lineStyle:0});r.setData(a),F.alcistas.push(r)}),s(!0)})},0)};return(oe=e==null?void 0:e.getIndicators)!=null&&oe.divergences&&n.main&&n.main===!0&&setTimeout(function(){Promise.resolve(te()).then(ne())},0),Ee(()=>e.chart.data,function(s){n.main&&n.main===!0&&(le(),L.setData(e.chart.data),re(),te().then(ne()))}),me(async()=>{await se(),xe()}),Q({chartStore:e,mainStore:M,chartNameId:n.chartNameId,lastRSI:V,changeTarget:Ce,resetMicro:ke}),(s,l)=>Oe((U(),E("div",{id:v.chartNameId,ref:"chartElement",class:"charts-graphy"},[C("div",Ke,[V.value?(U(),E("label",Ge,"RSI:"+K(V.value),1)):he("",!0)]),n.micro?he("",!0):(U(),E("div",Qe,[Xe,He(" "+K(_e.value)+":"+K(Le.value)+":"+K(Se.value),1)]))],8,Je)),[[je,!G(M).loading]])}},N=ue(Ye,[["__scopeId","data-v-38efa76b"]]);const ve=v=>(pe("data-v-91a8cfa7"),v=v(),ge(),v),Ze={key:0,class:"charts"},ea={class:"target-symbols"},aa={class:"MainChart"},ta={class:"microSection"},sa={key:1},ia=ve(()=>C("h1",null,"Necesitas al menos 1 fragmento de alguna de las gemas del Meta de Topacio",-1)),la=ve(()=>C("p",{class:"message-info"}," Encuentra alguno de los Nft's de este hermoso proyecto. participa de los difrentes eventos, se parte de la descentralización. y siguenos en las redes sociales para estar atento y estar participando para los Airdoprs. ",-1)),ra=[ia,la],na={__name:"ChartAgresive",setup(v,{expose:Q}){var x,T;const f=de(),n=fe(),e=Pe(),M=ze(),u=new be,d=b([]),w=b(null),y=b(null),D=b(null),o=b(null);let L=null;b(!1);const I=e.params&&e.params&&e.params.symbol?e.params.symbol.toString().toUpperCase():"BTCUSDT",V=e.params&&e.params&&e.params.temporality?e.params.temporality.toString().toLocaleLowerCase():"1m";(x=e==null?void 0:e.params)!=null&&x.symbol?f.chart.symbols=String(e.params.symbol).toUpperCase():f.chart.symbols=I,(T=e==null?void 0:e.params)!=null&&T.temporality?f.chart.temporality=e.params.temporality:f.chart.temporality=V;const B=async p=>{L=p.value,w.value&&(n.loading=!0,M.push({name:"agresive:data",params:{symbol:String(L).toLowerCase(),temporality:f.chart.temporality}}),f.chart.symbols=p.value,await w.value.changeTarget(p),f.chart.data=await u.searchData({exchange:f.getExchange,interval:f.getTemporality,symbolsPairs:f.getSymbol,limit:500}),y.value&&await y.value.resetMicro(p),D.value&&await D.value.resetMicro(p),o.value&&await o.value.resetMicro(p),n.loading=!1)},_=async()=>{const A=(await f.searchSymbolsFutures()).flatMap(m=>f.chart.symbols!=m.symbol?{label:m.symbol,value:m.symbol}:{label:m.symbol,value:m.symbol,selected:!0});d.value=A.filter(m=>m.value.includes("USDT")),f.chart.data=await u.searchData({exchange:f.getExchange,interval:f.getTemporality,symbolsPairs:f.getSymbol,limit:500})};return me(async()=>{n.loading=!0,await _(),n.loading=!1}),Q({Candles:N,mainStore:n,dataPairs:d,changeTarget:B}),(p,A)=>{const m=Ne;return G(n).connected&&G(n).web3.nftBalance>0?(U(),E("main",Ze,[C("div",ea,[$(m,{opciones:d.value,onlyLabel:!1,lblPorDefecto:G(f).chart.symbols,onActionChange:B},null,8,["opciones","lblPorDefecto"])]),C("div",aa,[$(N,{"chart-name-id":"chart-main",main:!0,ref_key:"chartMainAgresive",ref:w},null,512)]),C("div",ta,[$(N,{"chart-name-id":"chart-5s",micro:!0,t:5,ref_key:"chartMicro1",ref:y},null,512),$(N,{"chart-name-id":"chart-15s",micro:!0,t:15,ref_key:"chartMicro2",ref:D},null,512),$(N,{"chart-name-id":"chart-30s",micro:!0,t:30,ref_key:"chartMicro3",ref:o},null,512)])])):(U(),E("main",sa,ra))}}},da=ue(na,[["__scopeId","data-v-91a8cfa7"]]);export{da as default};
