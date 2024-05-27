import{K as Ot,a4 as et}from"./index-1cf41952.js";const j=/^[a-z0-9]+(-[a-z0-9]+)*$/,D=(t,e,n,r="")=>{const o=t.split(":");if(t.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),f={provider:o.length>0?o[0]:r,prefix:l,name:c};return e&&!L(f)?null:f}const i=o[0],s=i.split("-");if(s.length>1){const c={provider:r,prefix:s.shift(),name:s.join("-")};return e&&!L(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:i};return e&&!L(c,n)?null:c}return null},L=(t,e)=>t?!!((t.provider===""||t.provider.match(j))&&(e&&t.prefix===""||t.prefix.match(j))&&t.name.match(j)):!1,mt=Object.freeze({left:0,top:0,width:16,height:16}),_=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),N=Object.freeze({...mt,..._}),Q=Object.freeze({...N,body:"",hidden:!1});function Lt(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}function nt(t,e){const n=Lt(t,e);for(const r in Q)r in _?r in t&&!(r in n)&&(n[r]=_[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function Ft(t,e){const n=t.icons,r=t.aliases||Object.create(null),o=Object.create(null);function i(s){if(n[s])return o[s]=[];if(!(s in o)){o[s]=null;const c=r[s]&&r[s].parent,l=c&&i(c);l&&(o[s]=[c].concat(l))}return o[s]}return(e||Object.keys(n).concat(Object.keys(r))).forEach(i),o}function At(t,e,n){const r=t.icons,o=t.aliases||Object.create(null);let i={};function s(c){i=nt(r[c]||o[c],i)}return s(e),n.forEach(s),nt(t,i)}function yt(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(o=>{e(o,null),n.push(o)});const r=Ft(t);for(const o in r){const i=r[o];i&&(e(o,At(t,o,i)),n.push(o))}return n}const _t={provider:"",aliases:{},not_found:{},...mt};function z(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function bt(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!z(t,_t))return null;const n=e.icons;for(const o in n){const i=n[o];if(!o.match(j)||typeof i.body!="string"||!z(i,Q))return null}const r=e.aliases||Object.create(null);for(const o in r){const i=r[o],s=i.parent;if(!o.match(j)||typeof s!="string"||!n[s]&&!r[s]||!z(i,Q))return null}return e}const ot=Object.create(null);function Dt(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function v(t,e){const n=ot[t]||(ot[t]=Object.create(null));return n[e]||(n[e]=Dt(t,e))}function J(t,e){return bt(e)?yt(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function Nt(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let P=!1;function wt(t){return typeof t=="boolean"&&(P=t),P}function Rt(t){const e=typeof t=="string"?D(t,!0,P):t;if(e){const n=v(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function Bt(t,e){const n=D(t,!0,P);if(!n)return!1;const r=v(n.provider,n.prefix);return Nt(r,n.name,e)}function zt(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),P&&!e&&!t.prefix){let o=!1;return bt(t)&&(t.prefix="",yt(t,(i,s)=>{s&&Bt(i,s)&&(o=!0)})),o}const n=t.prefix;if(!L({provider:e,prefix:n,name:"a"}))return!1;const r=v(e,n);return!!J(r,t)}const xt=Object.freeze({width:null,height:null}),It=Object.freeze({...xt,..._}),Vt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Qt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function rt(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split(Vt);if(r===null||!r.length)return t;const o=[];let i=r.shift(),s=Qt.test(i);for(;;){if(s){const c=parseFloat(i);isNaN(c)?o.push(i):o.push(Math.ceil(c*e*n)/n)}else o.push(i);if(i=r.shift(),i===void 0)return o.join("");s=!s}}function $t(t,e="defs"){let n="";const r=t.indexOf("<"+e);for(;r>=0;){const o=t.indexOf(">",r),i=t.indexOf("</"+e);if(o===-1||i===-1)break;const s=t.indexOf(">",i);if(s===-1)break;n+=t.slice(o+1,i).trim(),t=t.slice(0,r).trim()+t.slice(s+1)}return{defs:n,content:t}}function qt(t,e){return t?"<defs>"+t+"</defs>"+e:e}function Ht(t,e,n){const r=$t(t);return qt(r.defs,e+r.content+n)}const Ut=t=>t==="unset"||t==="undefined"||t==="none";function Gt(t,e){const n={...N,...t},r={...It,...e},o={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(g=>{const a=[],C=g.hFlip,I=g.vFlip;let w=g.rotate;C?I?w+=2:(a.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),a.push("scale(-1 1)"),o.top=o.left=0):I&&(a.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),a.push("scale(1 -1)"),o.top=o.left=0);let y;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:y=o.height/2+o.top,a.unshift("rotate(90 "+y.toString()+" "+y.toString()+")");break;case 2:a.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:y=o.width/2+o.left,a.unshift("rotate(-90 "+y.toString()+" "+y.toString()+")");break}w%2===1&&(o.left!==o.top&&(y=o.left,o.left=o.top,o.top=y),o.width!==o.height&&(y=o.width,o.width=o.height,o.height=y)),a.length&&(i=Ht(i,'<g transform="'+a.join(" ")+'">',"</g>"))});const s=r.width,c=r.height,l=o.width,f=o.height;let u,d;s===null?(d=c===null?"1em":c==="auto"?f:c,u=rt(d,l/f)):(u=s==="auto"?l:s,d=c===null?rt(u,f/l):c==="auto"?f:c);const p={},m=(g,a)=>{Ut(a)||(p[g]=a.toString())};m("width",u),m("height",d);const x=[o.left,o.top,l,f];return p.viewBox=x.join(" "),{attributes:p,viewBox:x,body:i}}const Kt=/\sid="(\S+)"/g,Jt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Wt=0;function Xt(t,e=Jt){const n=[];let r;for(;r=Kt.exec(t);)n.push(r[1]);if(!n.length)return t;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const s=typeof e=="function"?e(i):e+(Wt++).toString(),c=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+s+o+"$3")}),t=t.replace(new RegExp(o,"g"),""),t}const $=Object.create(null);function Yt(t,e){$[t]=e}function q(t){return $[t]||$[""]}function W(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const X=Object.create(null),T=["https://api.simplesvg.com","https://api.unisvg.com"],F=[];for(;T.length>0;)T.length===1||Math.random()>.5?F.push(T.shift()):F.push(T.pop());X[""]=W({resources:["https://api.iconify.design"].concat(F)});function Zt(t,e){const n=W(e);return n===null?!1:(X[t]=n,!0)}function Y(t){return X[t]}const te=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let it=te();function ee(t,e){const n=Y(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(s=>{o=Math.max(o,s.length)});const i=e+".json?icons=";r=n.maxURL-o-n.path.length-i.length}return r}function ne(t){return t===404}const oe=(t,e,n)=>{const r=[],o=ee(t,e),i="icons";let s={type:i,provider:t,prefix:e,icons:[]},c=0;return n.forEach((l,f)=>{c+=l.length+1,c>=o&&f>0&&(r.push(s),s={type:i,provider:t,prefix:e,icons:[]},c=l.length),s.icons.push(l)}),r.push(s),r};function re(t){if(typeof t=="string"){const e=Y(t);if(e)return e.path}return"/"}const ie=(t,e,n)=>{if(!it){n("abort",424);return}let r=re(e.provider);switch(e.type){case"icons":{const i=e.prefix,c=e.icons.join(","),l=new URLSearchParams({icons:c});r+=i+".json?"+l.toString();break}case"custom":{const i=e.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let o=503;it(t+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{n(ne(s)?"abort":"next",s)});return}return o=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",o)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",o)})},se={prepare:oe,send:ie};function ce(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((o,i)=>o.provider!==i.provider?o.provider.localeCompare(i.provider):o.prefix!==i.prefix?o.prefix.localeCompare(i.prefix):o.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const i=o.provider,s=o.prefix,c=o.name,l=n[i]||(n[i]=Object.create(null)),f=l[s]||(l[s]=v(i,s));let u;c in f.icons?u=e.loaded:s===""||f.missing.has(c)?u=e.missing:u=e.pending;const d={provider:i,prefix:s,name:c};u.push(d)}),e}function St(t,e){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==e))})}function le(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,o=t.prefix;e.forEach(i=>{const s=i.icons,c=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==o)return!0;const f=l.name;if(t.icons[f])s.loaded.push({provider:r,prefix:o,name:f});else if(t.missing.has(f))s.missing.push({provider:r,prefix:o,name:f});else return n=!0,!0;return!1}),s.pending.length!==c&&(n||St([t],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let fe=0;function ue(t,e,n){const r=fe++,o=St.bind(null,n,r);if(!e.pending.length)return o;const i={id:r,icons:e,callback:t,abort:o};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),o}function ae(t,e=!0,n=!1){const r=[];return t.forEach(o=>{const i=typeof o=="string"?D(o,e,n):o;i&&r.push(i)}),r}var de={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function he(t,e,n,r){const o=t.resources.length,i=t.random?Math.floor(Math.random()*o):t.index;let s;if(t.random){let h=t.resources.slice(0);for(s=[];h.length>1;){const b=Math.floor(Math.random()*h.length);s.push(h[b]),h=h.slice(0,b).concat(h.slice(b+1))}s=s.concat(h)}else s=t.resources.slice(i).concat(t.resources.slice(0,i));const c=Date.now();let l="pending",f=0,u,d=null,p=[],m=[];typeof r=="function"&&m.push(r);function x(){d&&(clearTimeout(d),d=null)}function g(){l==="pending"&&(l="aborted"),x(),p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function a(h,b){b&&(m=[]),typeof h=="function"&&m.push(h)}function C(){return{startTime:c,payload:e,status:l,queriesSent:f,queriesPending:p.length,subscribe:a,abort:g}}function I(){l="failed",m.forEach(h=>{h(void 0,u)})}function w(){p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function y(h,b,k){const M=b!=="success";switch(p=p.filter(S=>S!==h),l){case"pending":break;case"failed":if(M||!t.dataAfterTimeout)return;break;default:return}if(b==="abort"){u=k,I();return}if(M){u=k,p.length||(s.length?B():I());return}if(x(),w(),!t.random){const S=t.resources.indexOf(h.resource);S!==-1&&S!==t.index&&(t.index=S)}l="completed",m.forEach(S=>{S(k)})}function B(){if(l!=="pending")return;x();const h=s.shift();if(h===void 0){if(p.length){d=setTimeout(()=>{x(),l==="pending"&&(w(),I())},t.timeout);return}I();return}const b={status:"pending",resource:h,callback:(k,M)=>{y(b,k,M)}};p.push(b),f++,d=setTimeout(B,t.rotate),n(h,e,b.callback)}return setTimeout(B),C}function vt(t){const e={...de,...t};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,l,f){const u=he(e,c,l,(d,p)=>{r(),f&&f(d,p)});return n.push(u),u}function i(c){return n.find(l=>c(l))||null}return{query:o,find:i,setIndex:c=>{e.index=c},getIndex:()=>e.index,cleanup:r}}function st(){}const V=Object.create(null);function pe(t){if(!V[t]){const e=Y(t);if(!e)return;const n=vt(e),r={config:e,redundancy:n};V[t]=r}return V[t]}function ge(t,e,n){let r,o;if(typeof t=="string"){const i=q(t);if(!i)return n(void 0,424),st;o=i.send;const s=pe(t);s&&(r=s.redundancy)}else{const i=W(t);if(i){r=vt(i);const s=t.resources?t.resources[0]:"",c=q(s);c&&(o=c.send)}}return!r||!o?(n(void 0,424),st):r.query(e,o,n)().abort}const ct="iconify2",E="iconify",Ct=E+"-count",lt=E+"-version",kt=36e5,me=168,ye=50;function H(t,e){try{return t.getItem(e)}catch{}}function Z(t,e,n){try{return t.setItem(e,n),!0}catch{}}function ft(t,e){try{t.removeItem(e)}catch{}}function U(t,e){return Z(t,Ct,e.toString())}function G(t){return parseInt(H(t,Ct))||0}const R={local:!0,session:!0},Tt={local:new Set,session:new Set};let tt=!1;function be(t){tt=t}let O=typeof window>"u"?{}:window;function jt(t){const e=t+"Storage";try{if(O&&O[e]&&typeof O[e].length=="number")return O[e]}catch{}R[t]=!1}function Pt(t,e){const n=jt(t);if(!n)return;const r=H(n,lt);if(r!==ct){if(r){const c=G(n);for(let l=0;l<c;l++)ft(n,E+l.toString())}Z(n,lt,ct),U(n,0);return}const o=Math.floor(Date.now()/kt)-me,i=c=>{const l=E+c.toString(),f=H(n,l);if(typeof f=="string"){try{const u=JSON.parse(f);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&e(u,c))return!0}catch{}ft(n,l)}};let s=G(n);for(let c=s-1;c>=0;c--)i(c)||(c===s-1?(s--,U(n,s)):Tt[t].add(c))}function Et(){if(!tt){be(!0);for(const t in R)Pt(t,e=>{const n=e.data,r=e.provider,o=n.prefix,i=v(r,o);if(!J(i,n).length)return!1;const s=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function we(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in R)Pt(r,o=>{const i=o.data;return o.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===e});return!0}function xe(t,e){tt||Et();function n(r){let o;if(!R[r]||!(o=jt(r)))return;const i=Tt[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=G(o),s>=ye||!U(o,s+1))return;const c={cached:Math.floor(Date.now()/kt),provider:t.provider,data:e};return Z(o,E+s.toString(),JSON.stringify(c))}e.lastModified&&!we(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function ut(){}function Ie(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,le(t)}))}function Se(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,o=t.iconsToLoad;delete t.iconsToLoad;let i;if(!o||!(i=q(n)))return;i.prepare(n,r,o).forEach(c=>{ge(n,c,l=>{if(typeof l!="object")c.icons.forEach(f=>{t.missing.add(f)});else try{const f=J(t,l);if(!f.length)return;const u=t.pendingIcons;u&&f.forEach(d=>{u.delete(d)}),xe(t,l)}catch(f){console.error(f)}Ie(t)})})}))}const ve=(t,e)=>{const n=ae(t,!0,wt()),r=ce(n);if(!r.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(r.loaded,r.missing,r.pending,ut)}),()=>{l=!1}}const o=Object.create(null),i=[];let s,c;return r.pending.forEach(l=>{const{provider:f,prefix:u}=l;if(u===c&&f===s)return;s=f,c=u,i.push(v(f,u));const d=o[f]||(o[f]=Object.create(null));d[u]||(d[u]=[])}),r.pending.forEach(l=>{const{provider:f,prefix:u,name:d}=l,p=v(f,u),m=p.pendingIcons||(p.pendingIcons=new Set);m.has(d)||(m.add(d),o[f][u].push(d))}),i.forEach(l=>{const{provider:f,prefix:u}=l;o[f][u].length&&Se(l,o[f][u])}),e?ue(e,r,i):ut};function Ce(t,e){const n={...t};for(const r in e){const o=e[r],i=typeof o;r in xt?(o===null||o&&(i==="string"||i==="number"))&&(n[r]=o):i===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const ke=/[\s,]+/;function Te(t,e){e.split(ke).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function je(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(t);return isNaN(o)?0:r(o)}else if(n!==t){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/o,i%1===0?r(i):0)}}return e}function Pe(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function Ee(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Me(t){return"data:image/svg+xml,"+Ee(t)}function Oe(t){return'url("'+Me(t)+'")'}const at={...It,inline:!1},Le={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Fe={display:"inline-block"},K={backgroundColor:"currentColor"},Mt={backgroundColor:"transparent"},dt={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},ht={webkitMask:K,mask:K,background:Mt};for(const t in ht){const e=ht[t];for(const n in dt)e[t+n]=dt[n]}const A={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";A[t+"-flip"]=e,A[t.slice(0,1)+"-flip"]=e,A[t+"Flip"]=e});function pt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const gt=(t,e)=>{const n=Ce(at,e),r={...Le},o=e.mode||"svg",i={},s=e.style,c=typeof s=="object"&&!(s instanceof Array)?s:{};for(let g in e){const a=e[g];if(a!==void 0)switch(g){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[g]=a===!0||a==="true"||a===1;break;case"flip":typeof a=="string"&&Te(n,a);break;case"color":i.color=a;break;case"rotate":typeof a=="string"?n[g]=je(a):typeof a=="number"&&(n[g]=a);break;case"ariaHidden":case"aria-hidden":a!==!0&&a!=="true"&&delete r["aria-hidden"];break;default:{const C=A[g];C?(a===!0||a==="true"||a===1)&&(n[C]=!0):at[g]===void 0&&(r[g]=a)}}}const l=Gt(t,n),f=l.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),o==="svg"){r.style={...i,...c},Object.assign(r,f);let g=0,a=e.id;return typeof a=="string"&&(a=a.replace(/-/g,"_")),r.innerHTML=Xt(l.body,a?()=>a+"ID"+g++:"iconifyVue"),et("svg",r)}const{body:u,width:d,height:p}=t,m=o==="mask"||(o==="bg"?!1:u.indexOf("currentColor")!==-1),x=Pe(u,{...f,width:d+"",height:p+""});return r.style={...i,"--svg":Oe(x),width:pt(f.width),height:pt(f.height),...Fe,...m?K:Mt,...c},et("span",r)};wt(!0);Yt("",se);if(typeof document<"u"&&typeof window<"u"){Et();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!zt(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const r="IconifyProviders["+n+"] is invalid.";try{const o=e[n];if(typeof o!="object"||!o||o.resources===void 0)continue;Zt(n,o)||console.error(r)}catch{console.error(r)}}}}const Ae={...N,body:""},De=Ot({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=D(t,!1,!0))===null)return this.abortLoading(),null;const r=Rt(n);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:t,abort:ve([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t));const o=["iconify"];return n.prefix!==""&&o.push("iconify--"+n.prefix),n.provider!==""&&o.push("iconify--"+n.provider),{data:r,classes:o}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted||t.ssr?this.getIcon(t.icon,t.onLoad):null;if(!e)return gt(Ae,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),gt({...N,...e.data},n)}});export{De as I};
