import{_ as k,s as C,r as p,I as m,f as h,o as B,a as d,g as b,d as f,y as D,F as S,B as L,t as O,m as V}from"./index-8d3ca92a.js";const I={name:"Selector",props:["opciones","onlyLabel"],setup(n,{emit:s}){const{opciones:c,lblPorDefecto:t,onlyLabel:u}=C(n),i=p(!1),l=p(""),e=c.value.filter(a=>a.selected),o=m({label:e&&e[0]&&e[0].label?e[0].label:"SYMBOL",value:e&&e[0]&&e[0].value?e[0].value:""}),v=m({data:[]}),x=()=>{i.value=!i.value};h(c,a=>{const r=a.filter(_=>_.selected);r&&r[0]&&(l.value=r[0].label)}),v.data=c.value;const y=a=>{const r=a.target.value.toUpperCase();l.value=r,o.label="SYMBOL",v.data=n.opciones.filter(_=>_.label.includes(r)),i.value=!0},g=a=>{i.value=!1,o.label=a.label,o.value=a.value,l.value=u&&u.value==!0?a.label:a.value,!(!a||!a.value)&&s("actionChange",a)};return e&&e[0]&&(o.value=e[0].value,o.label=e[0].label,l.value=e[0].label),B(async()=>{n.opciones&&n.opciones[0]!=null&&!e[0]&&(o.label=n.opciones[0].label,o.value=n.opciones[0].value,l.value=n.opciones[0].value)}),{open:i,controllerText:y,clickOption:g,defaultOption:o,txtValue:l,opcionesData:v,porDefault:e,abrir:x}}},M={key:0,class:"container-selector"},T=["value","placeholder"],F=["onClick"];function N(n,s,c,t,u,i){return c.opciones&&c.opciones.length>0&&c.opciones[0].label?(d(),b("div",M,[f("form",null,[f("input",{class:"chosen-value",type:"text",value:t.txtValue,placeholder:t.porDefault,onInput:s[0]||(s[0]=(...l)=>t.controllerText&&t.controllerText(...l)),onClick:s[1]||(s[1]=(...l)=>t.abrir&&t.abrir(...l))},null,40,T),f("ul",{class:D({"value-list":!0,open:t.open})},[(d(!0),b(S,null,L(t.opcionesData.data,l=>(d(),b("li",{onClick:e=>t.clickOption(l)},O(l.label),9,F))),256))],2)])])):V("",!0)}const w=k(I,[["render",N],["__scopeId","data-v-e5b46d83"]]);export{w as _};
