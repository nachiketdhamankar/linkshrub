!function(t){var e={};function n(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(o,s,function(e){return t[e]}.bind(null,s));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=[{name:"Web Crawler",url:"https://github.com/nachiketdhamankar/crawler-fakebook"},{name:"Leetcode Timer",url:"http://leetcodetimerdocs.nachiket.me/"},{name:"Little surprise ;)",url:"https://random.dog/"}]},function(t,e,n){const o=n(2),s=(n(0),n(3)),r=n(4),i=n(14);addEventListener("fetch",t=>{t.respondWith(async function(t){let e=new o;return i(t),e.get("/links",t=>s(t)),e.get(".*",t=>r(t)),await e.route(t)}(t.request))})},function(t,e){const n=t=>e=>e.method.toLowerCase()===t.toLowerCase(),o=n("connect"),s=n("delete"),r=n("get"),i=n("head"),c=n("options"),a=n("patch"),l=n("post"),u=n("put"),h=n("trace"),d=t=>e=>{const n=new URL(e.url).pathname;return(n.match(t)||[])[0]===n};t.exports=class{constructor(){this.routes=[]}handle(t,e){return this.routes.push({conditions:t,handler:e}),this}connect(t,e){return this.handle([o,d(t)],e)}delete(t,e){return this.handle([s,d(t)],e)}get(t,e){return this.handle([r,d(t)],e)}head(t,e){return this.handle([i,d(t)],e)}options(t,e){return this.handle([c,d(t)],e)}patch(t,e){return this.handle([a,d(t)],e)}post(t,e){return this.handle([l,d(t)],e)}put(t,e){return this.handle([u,d(t)],e)}trace(t,e){return this.handle([h,d(t)],e)}all(t){return this.handle([],t)}route(t){const e=this.resolve(t);return e?e.handler(t):new Response("resource not found",{status:404,statusText:"not found",headers:{"content-type":"text/plain"}})}resolve(t){return this.routes.find(e=>!(e.conditions&&(!Array.isArray(e)||e.conditions.length))||("function"==typeof e.conditions?e.conditions(t):e.conditions.every(e=>e(t))))}}},function(t,e,n){const o=n(0);t.exports=function(t){const e=JSON.stringify(o,null,2);return new Response(e,{headers:{"content-type":"application/json;charset=UTF-8"}})}},function(t,e,n){const o=n(0),s=n(5),r=n(6),i=n(7),c=n(8),a=n(9),l=n(10),u=n(11),h=n(12),d=n(13),p=(new HTMLRewriter).on("div#links",new i(o)).on("div#profile",new c).on("img#avatar",new a).on("h1#name",new l).on("div#social",new u(s)).on("title",new h).on("body",new d);t.exports=async function(t){const e=await r();return p.transform(e)}},function(t,e){SocialMediaLinks=[{name:"Twitter",url:"https://twitter.com/NachiketSD",icon:"https://www.flaticon.com/svg/static/icons/svg/1384/1384049.svg"},{name:"LinkedIn",url:"https://www.linkedin.com/in/nachiket-dhamankar",icon:"https://simpleicons.org/icons/linkedin.svg"},{name:"Website",url:"https://nachiket.me",icon:"https://www.flaticon.com/svg/static/icons/svg/1034/1034558.svg"},{name:"Email",url:"mailto:nachiket.git@gmail.com",icon:"https://www.flaticon.com/svg/static/icons/svg/625/625016.svg"},{name:"Github",url:"https://github.com/nachiketdhamankar",icon:"https://www.flaticon.com/svg/static/icons/svg/25/25657.svg"}],t.exports=SocialMediaLinks},function(t,e){t.exports=async function(){return fetch("https://static-links-page.signalnerve.workers.dev",{headers:{"content-type":"text/html;charset=UTF-8"}})}},function(t,e){t.exports=class{constructor(t){this.links=t}async element(t){const e=this.links.map(t=>`<a href=${t.url} target="_blank">${t.name}</a>`).join("");t.setInnerContent(e,{html:!0})}}},function(t,e){t.exports=class{element(t){t.setAttribute("style","")}}},function(t,e){t.exports=class{element(t){t.setAttribute("src","https://www.nachiket.me/static/assets/img/landing/me.jpg")}}},function(t,e){t.exports=class{element(t){t.setInnerContent("nachiketsd")}}},function(t,e){t.exports=class{constructor(t){this.socialLinks=t}async element(t){t.removeAttribute("style");const e=this.socialLinks.map(t=>`<a href=${t.url} title="${t.name}"><img src=${t.icon}></a>`).join("");t.setInnerContent(e,{html:!0})}}},function(t,e){t.exports=class{element(t){t.setInnerContent("@nachiketsd|Linktree")}}},function(t,e){t.exports=class{element(t){t.setAttribute("style","background-color: #4DA8DA")}}},function(t,e){t.exports=function(t){console.log(t)}}]);