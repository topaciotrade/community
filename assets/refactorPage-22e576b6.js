import{V as C,d as g}from"./lightweight-charts.production-a08ad01f.js";import{_ as E,u as P,a as M,f as w,b as _,g as B}from"./index-05699e6e.js";const I=P(),h=new B,V={mounted(){const e=document.getElementById("chart-container"),o=document.getElementById("mainchart"),i=parseInt(e.offsetWidth/1.01),a=parseInt(o.offsetHeight/1.1);let c=h.getConfigChart(i,a);const s=h.getConfigVelasTransparentes();console.log({mainStore:I,w:i,h:a,composableMainStore:h,configChart:c,configCandles:s});const l=C(e,c),n=l.addCandlestickSeries(s);n.setData([{time:"2022-01-01",open:100,high:110,low:90,close:105},{time:"2022-01-02",open:105,high:115,low:95,close:110},{time:"2022-01-03",open:110,high:120,low:100,close:115}]);const r=[n.createPriceLine({price:110,color:"red",lineWidth:2,lineStyle:g.Solid,axisLabelVisible:!0,title:"Line 1"}),n.createPriceLine({price:115,color:"blue",lineWidth:2,lineStyle:g.Solid,axisLabelVisible:!0,title:"Line 2"})];let d=!1,t=null;function S(p){if(!d||t===null)return;const u=e.getBoundingClientRect(),f=n.coordinateToPrice(p.clientY-u.top);r[t].applyOptions({price:f})}function L(p){const u=e.getBoundingClientRect(),f=n.coordinateToPrice(p.clientY-u.top);r.forEach((v,x)=>{const m=parseFloat(v.options().price.toFixed(5)),y=parseFloat(f.toFixed(5));Math.abs(y-m)<.01*m&&(d=!0,t=x,l.applyOptions({handleScroll:!1,handleScale:!1}))})}function b(){t!==null&&alert(`Price line ${t+1} moved to: `+r[t].options().price.toFixed(5)),d=!1,t=null,l.applyOptions({handleScroll:!0,handleScale:!0})}e.addEventListener("mousemove",S),e.addEventListener("mousedown",L),e.addEventListener("mouseup",b),console.log("mounted")},setup(){}},F={id:"mainchart",class:"charts"};function $(e,o,i,a,c,s){return M(),w("main",F,o[0]||(o[0]=[_("h1",null,"Refactor",-1),_("div",{id:"chart-container"},null,-1)]))}const R=E(V,[["render",$],["__scopeId","data-v-9831703b"]]);export{R as default};
