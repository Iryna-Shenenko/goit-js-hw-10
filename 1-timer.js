/* empty css                      */import{f as m,i as h}from"./assets/vendor-BbSUbo7J.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();let d,u,f;const l=document.querySelector("#datatime-piker"),s=document.querySelector("[data-start]"),p=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),g=document.querySelector("[data-manites]"),b=document.querySelector("[data-seconds]");s.disabled=!0;m(l,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){d=t[0].getTime(),d<=Date.now()?(E("Please choose a date in the future"),s.disabled=!0):(u=d-Date.now(),s.disabled=!1)}});s.addEventListener("click",()=>{f=setInterval(S,1e3),s.disabled=!0,l.disabled=!0});function S(){if(u<=0){clearInterval(f),l.disabled=!1;return}const{days:t,hours:r,minutes:i,seconds:n}=C(u);p.textContent=a(t),y.textContent=a(r),g.textContent=a(i),b.textContent=a(n),u-=1e3}function C(t){return{days:Math.floor(t/864e5),hours:Math.floor(t%864e5/36e5),minutes:Math.floor(t%36e5/6e4),seconds:Math.floor(t%6e4/1e3)}}function a(t){return String(t).padStart(2,"0")}function E(t){h.error({message:t,position:"topRight",timeout:0,backgroundColor:"#EF4040",messageColor:"#FFFFFF",close:!0})}
//# sourceMappingURL=1-timer.js.map
