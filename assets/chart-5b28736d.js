import{O as d,I as y,A as s}from"./index-5d9c99f0.js";const g=d("chart",()=>{const e=y({symbols:"BTCUSDT",temporality:"15m",exchange:"binance",pairs:[],indicators:{divergences:!0,adx:!1,macd:!1,stochastic:!1,heikinAshi:!1,rsi:!1,bb:!0,hma10:!0,hma20:!0,hma55:!1,hma89:!1,hma233:!1,ema10:!1,ema20:!1,ema55:!1,ema89:!1,ema100:!1,ema200:!1,ema233:!1,sma10:!1,sma20:!1,sma55:!1,sma89:!1,sma100:!1,sma200:!1,sma233:!1,psar:!1,kernelChannel:!1,srDinamic:!1},data:[],menuOpen:!1}),r=s(()=>e.indicators),c=s(()=>e.symbols),l=s(()=>e.temporality),i=s(()=>e.exchange),m=s(()=>e.data),f=s(()=>e.menuOpen);async function p(){const a=await fetch("https://api.binance.com/api/v3/exchangeInfo").then(t=>t.json());return e.pairs=a.symbols,e.pairs}async function h(){const a=await fetch("https://fapi.binance.com/fapi/v1/exchangeInfo").then(t=>t.json());return e.pairs=a.symbols,e.pairs}async function u(n="BTCUSDT"){const a=new Headers;a.append("Content-Type","application/json");const t={method:"GET",headers:a};return await fetch(`https://fapi.binance.com/fapi/v1/depth?symbol=${n}`,t).then(o=>o.json()).catch(o=>console.log("error",o))}return{isOpenMenu:f,chart:e,getIndicators:r,getData:m,getSymbol:c,getTemporality:l,getExchange:i,searchSymbolsFutures:h,searchSymbolsSpot:p,searchDataOrderBook:u}});export{g as u};
