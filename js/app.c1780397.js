(function(){"use strict";var n={8571:function(n,e,t){var r=t(9242),a=t(3396),o=t(7139);const i={class:"container"},s=(0,a._)("h1",{class:"container-head"},"Telegram message",-1),c={class:"container-mes"};function u(n,e,t,r,u,p){return(0,a.wg)(),(0,a.iD)("div",i,[s,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(u.message,(n=>((0,a.wg)(),(0,a.iD)("div",{class:"container-content",key:n.id},[(0,a._)("div",c,[(0,a._)("h2",null,(0,o.zw)(n.fromUser.name)+" ("+(0,o.zw)(n.fromUser.username)+") :",1),(0,a._)("p",null,(0,o.zw)(n.message.text),1)])])))),128))])}t(7658);const p=new URL("https://api.chatapp.online/v1/tokens"),f={"Content-Type":"application/json",Accept:"application/json"};let l={email:"olga991325@mail.ru",password:"Mama33mama",appId:"app_10979_1"};async function d(){let n=fetch(p,{method:"POST",headers:f,body:JSON.stringify(l)}).then((n=>n.json())),e=await n;return e.data.accessToken}var h=t(4410),m=t.n(h),v={name:"App",data(){return{message:[]}},async created(){let n=await d(),e=new(m())("ChatsAppApiProdKey",{wsHost:"socket.chatapp.online",wssPort:6001,disableStats:!0,authEndpoint:"https://api.chatapp.online/broadcasting/auth",auth:{headers:{Authorization:n}},enabledTransports:["ws"],forceTLS:!0}),t=e.subscribe("private-v1.licenses.22197.messengers.telegram");t.bind("message",(n=>{n?.payload.data.forEach((n=>{n.fromMe||this.message.push(n)}))}))}},g=t(89);const w=(0,g.Z)(v,[["render",u]]);var b=w;(0,r.ri)(b).mount("#app")}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,function(){var n=[];t.O=function(e,r,a,o){if(!r){var i=1/0;for(p=0;p<n.length;p++){r=n[p][0],a=n[p][1],o=n[p][2];for(var s=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(t.O).every((function(n){return t.O[n](r[c])}))?r.splice(c--,1):(s=!1,o<i&&(i=o));if(s){n.splice(p--,1);var u=a();void 0!==u&&(e=u)}}return e}o=o||0;for(var p=n.length;p>0&&n[p-1][2]>o;p--)n[p]=n[p-1];n[p]=[r,a,o]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,r){var a,o,i=r[0],s=r[1],c=r[2],u=0;if(i.some((function(e){return 0!==n[e]}))){for(a in s)t.o(s,a)&&(t.m[a]=s[a]);if(c)var p=c(t)}for(e&&e(r);u<i.length;u++)o=i[u],t.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return t.O(p)},r=self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(8571)}));r=t.O(r)})();
//# sourceMappingURL=app.c1780397.js.map