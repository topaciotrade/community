import{_,u as m,r as s,e as d,a as g,f,b as v,g as S}from"./index-5dad1934.js";import{C as b}from"./ContainerGallery-cbdd7981.js";import"./Paginator.vue_vue_type_style_index_0_lang-3fe19031.js";import"./Tmine2-25d51798.js";import"./Paginator.vue_vue_type_script_setup_true_lang-268217da.js";import"./iconify-1af7415c.js";import"./index-f107b465.js";const P={class:"subscription"},w={__name:"SubscriptionView",setup(x,{expose:c}){const u=new S,o=m(),t=s(1),r=s(null),l=s(10),n=()=>{const a=JSON.parse(JSON.stringify(o.web3.nftTokensIds)),e=u.arrayPaginator(a,l.value,t.value);return r.value=e.totalPaginas,console.log({dataFormat:e}),e},p=()=>{t.value<r.value&&(t.value++,i.value=n()),console.log("nextPage",t.value)},i=s(n());return d(()=>o.web3.nftTokensIds,a=>{a&&n()}),c({data:[],mainStore:o,currentPage:i,nextPage:p,ContainerGallery:b}),(a,e)=>(g(),f("main",P,e[0]||(e[0]=[v("h1",{class:"title"},"Subscription IT'S COMING",-1)])))}},O=_(w,[["__scopeId","data-v-1fda228c"]]);export{O as default};
