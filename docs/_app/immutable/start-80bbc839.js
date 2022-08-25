var We=Object.defineProperty;var Je=(a,e,t)=>e in a?We(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var ue=(a,e,t)=>(Je(a,typeof e!="symbol"?e+"":e,t),t);import{S as He,i as Fe,s as Ge,a as Me,e as q,c as Ye,b as W,g as ne,t as V,d as re,f as z,h as B,j as Xe,o as me,k as Qe,l as Ze,m as et,n as de,p as N,q as tt,r as nt,u as rt,v as H,w as ye,x as F,y as G,z as Ce}from"./chunks/index-454abe97.js";import{g as De,f as Ne,a as xe,s as K,b as _e,i as at}from"./chunks/singletons-25cc589a.js";import{s as st}from"./chunks/paths-65b54fae.js";import"./chunks/index-5eed206f.js";class ee{constructor(e,t){ue(this,"name","HttpError");ue(this,"stack");this.status=e,this.message=t!=null?t:`Error: ${e}`}toString(){return this.message}}class Te{constructor(e,t){this.status=e,this.location=t}}function it(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function ot(a){for(const e in a)a[e]=a[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return a}class lt extends URL{get hash(){throw new Error("url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.")}}function ct(a){let e=5381,t=a.length;if(typeof a=="string")for(;t;)e=e*33^a.charCodeAt(--t);else for(;t;)e=e*33^a[--t];return(e>>>0).toString(36)}const te=window.fetch;function ft(a,e){let o=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof a=="string"?a:a.url)}]`;e&&typeof e.body=="string"&&(o+=`[sveltekit\\:data-body="${ct(e.body)}"]`);const i=document.querySelector(o);if(i&&i.textContent){const{body:d,...n}=JSON.parse(i.textContent);return Promise.resolve(new Response(d,n))}return te(a,e)}const ut=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function dt(a){const e=[],t=[];let o=!0;if(/\]\[/.test(a))throw new Error(`Invalid route ${a} \u2014 parameters must be separated`);if(qe("[",a)!==qe("]",a))throw new Error(`Invalid route ${a} \u2014 brackets are unbalanced`);return{pattern:a===""?/^\/$/:new RegExp(`^${a.split(/(?:\/|$)/).filter(pt).map((d,n,u)=>{const w=decodeURIComponent(d),h=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(w);if(h)return e.push(h[1]),t.push(h[2]),"(?:/(.*))?";const g=n===u.length-1;return w&&"/"+w.split(/\[(.+?)\]/).map(($,E)=>{if(E%2){const C=ut.exec($);if(!C)throw new Error(`Invalid param: ${$}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,O,M,Y]=C;return e.push(M),t.push(Y),O?"(.*?)":"([^/]+?)"}return g&&$.includes(".")&&(o=!1),$.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${o?"/?":""}$`),names:e,types:t}}function pt(a){return!/^\([^)]+\)$/.test(a)}function ht(a,e,t,o){const i={};for(let d=0;d<e.length;d+=1){const n=e[d],u=t[d],w=a[d+1]||"";if(u){const h=o[u];if(!h)throw new Error(`Missing "${u}" param matcher`);if(!h(w))return}i[n]=w}return i}function qe(a,e){let t=0;for(let o=0;o<e.length;o+=1)e[o]===a&&(t+=1);return t}function mt(a,e,t){return Object.entries(e).map(([o,[i,d,n]])=>{const{pattern:u,names:w,types:h}=dt(o),g=i<0;g&&(i=~i);const $={id:o,exec:E=>{const C=u.exec(E);if(C)return ht(C,w,h,t)},errors:[1,...n||[]].map(E=>a[E]),layouts:[0,...d||[]].map(E=>a[E]),leaf:a[i],uses_server_data:g};return $.errors.length=$.layouts.length=Math.max($.errors.length,$.layouts.length),$})}function _t(a,e){return new ee(a,e)}function gt(a){let e,t,o;var i=a[0][0];function d(n){return{props:{data:n[1],errors:n[3]}}}return i&&(e=new i(d(a))),{c(){e&&H(e.$$.fragment),t=q()},l(n){e&&ye(e.$$.fragment,n),t=q()},m(n,u){e&&F(e,n,u),W(n,t,u),o=!0},p(n,u){const w={};if(u&2&&(w.data=n[1]),u&8&&(w.errors=n[3]),i!==(i=n[0][0])){if(e){ne();const h=e;V(h.$$.fragment,1,0,()=>{G(h,1)}),re()}i?(e=new i(d(n)),H(e.$$.fragment),z(e.$$.fragment,1),F(e,t.parentNode,t)):e=null}else i&&e.$set(w)},i(n){o||(e&&z(e.$$.fragment,n),o=!0)},o(n){e&&V(e.$$.fragment,n),o=!1},d(n){n&&B(t),e&&G(e,n)}}}function wt(a){let e,t,o;var i=a[0][0];function d(n){return{props:{data:n[1],$$slots:{default:[yt]},$$scope:{ctx:n}}}}return i&&(e=new i(d(a))),{c(){e&&H(e.$$.fragment),t=q()},l(n){e&&ye(e.$$.fragment,n),t=q()},m(n,u){e&&F(e,n,u),W(n,t,u),o=!0},p(n,u){const w={};if(u&2&&(w.data=n[1]),u&517&&(w.$$scope={dirty:u,ctx:n}),i!==(i=n[0][0])){if(e){ne();const h=e;V(h.$$.fragment,1,0,()=>{G(h,1)}),re()}i?(e=new i(d(n)),H(e.$$.fragment),z(e.$$.fragment,1),F(e,t.parentNode,t)):e=null}else i&&e.$set(w)},i(n){o||(e&&z(e.$$.fragment,n),o=!0)},o(n){e&&V(e.$$.fragment,n),o=!1},d(n){n&&B(t),e&&G(e,n)}}}function yt(a){let e,t,o;var i=a[0][1];function d(n){return{props:{data:n[2]}}}return i&&(e=new i(d(a))),{c(){e&&H(e.$$.fragment),t=q()},l(n){e&&ye(e.$$.fragment,n),t=q()},m(n,u){e&&F(e,n,u),W(n,t,u),o=!0},p(n,u){const w={};if(u&4&&(w.data=n[2]),i!==(i=n[0][1])){if(e){ne();const h=e;V(h.$$.fragment,1,0,()=>{G(h,1)}),re()}i?(e=new i(d(n)),H(e.$$.fragment),z(e.$$.fragment,1),F(e,t.parentNode,t)):e=null}else i&&e.$set(w)},i(n){o||(e&&z(e.$$.fragment,n),o=!0)},o(n){e&&V(e.$$.fragment,n),o=!1},d(n){n&&B(t),e&&G(e,n)}}}function Ve(a){let e,t=a[5]&&ze(a);return{c(){e=Qe("div"),t&&t.c(),this.h()},l(o){e=Ze(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=et(e);t&&t.l(i),i.forEach(B),this.h()},h(){de(e,"id","svelte-announcer"),de(e,"aria-live","assertive"),de(e,"aria-atomic","true"),N(e,"position","absolute"),N(e,"left","0"),N(e,"top","0"),N(e,"clip","rect(0 0 0 0)"),N(e,"clip-path","inset(50%)"),N(e,"overflow","hidden"),N(e,"white-space","nowrap"),N(e,"width","1px"),N(e,"height","1px")},m(o,i){W(o,e,i),t&&t.m(e,null)},p(o,i){o[5]?t?t.p(o,i):(t=ze(o),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(o){o&&B(e),t&&t.d()}}}function ze(a){let e;return{c(){e=tt(a[6])},l(t){e=nt(t,a[6])},m(t,o){W(t,e,o)},p(t,o){o&64&&rt(e,t[6])},d(t){t&&B(e)}}}function bt(a){let e,t,o,i,d;const n=[wt,gt],u=[];function w(g,$){return g[0][1]?0:1}e=w(a),t=u[e]=n[e](a);let h=a[4]&&Ve(a);return{c(){t.c(),o=Me(),h&&h.c(),i=q()},l(g){t.l(g),o=Ye(g),h&&h.l(g),i=q()},m(g,$){u[e].m(g,$),W(g,o,$),h&&h.m(g,$),W(g,i,$),d=!0},p(g,[$]){let E=e;e=w(g),e===E?u[e].p(g,$):(ne(),V(u[E],1,1,()=>{u[E]=null}),re(),t=u[e],t?t.p(g,$):(t=u[e]=n[e](g),t.c()),z(t,1),t.m(o.parentNode,o)),g[4]?h?h.p(g,$):(h=Ve(g),h.c(),h.m(i.parentNode,i)):h&&(h.d(1),h=null)},i(g){d||(z(t),d=!0)},o(g){V(t),d=!1},d(g){u[e].d(g),g&&B(o),h&&h.d(g),g&&B(i)}}}function vt(a,e,t){let{stores:o}=e,{page:i}=e,{components:d}=e,{data_0:n=null}=e,{data_1:u=null}=e,{errors:w}=e;Xe(o.page.notify);let h=!1,g=!1,$=null;return me(()=>{const E=o.page.subscribe(()=>{h&&(t(5,g=!0),t(6,$=document.title||"untitled page"))});return t(4,h=!0),E}),a.$$set=E=>{"stores"in E&&t(7,o=E.stores),"page"in E&&t(8,i=E.page),"components"in E&&t(0,d=E.components),"data_0"in E&&t(1,n=E.data_0),"data_1"in E&&t(2,u=E.data_1),"errors"in E&&t(3,w=E.errors)},a.$$.update=()=>{a.$$.dirty&384&&o.page.set(i)},[d,n,u,w,h,g,$,o,i]}class kt extends He{constructor(e){super(),Fe(this,e,vt,bt,Ge,{stores:7,page:8,components:0,data_0:1,data_1:2,errors:3})}}const Et=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),$t=function(a,e){return new URL(a,e).href},Be={},Z=function(e,t,o){return!t||t.length===0?e():Promise.all(t.map(i=>{if(i=$t(i,o),i in Be)return;Be[i]=!0;const d=i.endsWith(".css"),n=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${n}`))return;const u=document.createElement("link");if(u.rel=d?"stylesheet":Et,d||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),d)return new Promise((w,h)=>{u.addEventListener("load",w),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},Lt={},ae=[()=>Z(()=>import("./chunks/0-698fa546.js"),["chunks/0-698fa546.js","components/pages/_layout.svelte-3b535c70.js","chunks/index-454abe97.js","chunks/paths-65b54fae.js"],import.meta.url),()=>Z(()=>import("./chunks/1-38cc160f.js"),["chunks/1-38cc160f.js","assets/FallbackImage-50b9f56d.css","components/pages/_error.svelte-8f17d5cc.js","assets/+error-6d8e2bf5.css","chunks/index-454abe97.js","chunks/singletons-25cc589a.js","chunks/index-5eed206f.js","chunks/paths-65b54fae.js"],import.meta.url),()=>Z(()=>import("./chunks/2-7e5860d6.js"),["chunks/2-7e5860d6.js","assets/FallbackImage-50b9f56d.css","components/pages/_page.svelte-b523d4c1.js","assets/+page-18687783.css","chunks/index-454abe97.js","chunks/index-5eed206f.js"],import.meta.url),()=>Z(()=>import("./chunks/3-f4468e8b.js"),["chunks/3-f4468e8b.js","components/pages/colors/_page.svelte-455e4905.js","assets/+page-b28fd92e.css","chunks/index-454abe97.js","chunks/paths-65b54fae.js"],import.meta.url)],Rt={"":[2],colors:[3]},Ke="sveltekit:scroll",T="sveltekit:index",pe=mt(ae,Rt,Lt),ge=ae[0],we=ae[1];ge();we();let X={};try{X=JSON.parse(sessionStorage[Ke])}catch{}function he(a){X[a]=_e()}function St({target:a,base:e,trailing_slash:t}){var Pe;const o=[],i={id:null,promise:null},d={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,session_id:0,url:null},u=!1,w=!0,h=!1,g=1,$=null,E,C=!0,O=(Pe=history.state)==null?void 0:Pe[T];O||(O=Date.now(),history.replaceState({...history.state,[T]:O},"",location.href));const M=X[O];M&&(history.scrollRestoration="manual",scrollTo(M.x,M.y));let Y=!1,se,be;async function ve(r,{noscroll:c=!1,replaceState:f=!1,keepfocus:s=!1,state:l={}},b){if(typeof r=="string"&&(r=new URL(r,De(document))),C)return ce({url:r,scroll:c?_e():null,keepfocus:s,redirect_chain:b,details:{state:l,replaceState:f},accepted:()=>{},blocked:()=>{}});await x(r)}async function ke(r){const c=Se(r);if(!c)throw new Error("Attempted to prefetch a URL that does not belong to this app");return i.promise=Re(c),i.id=c.id,i.promise}async function Ee(r,c,f,s){var y,R,P;const l=Se(r),b=be={};let p=l&&await Re(l);if(!p&&r.origin===location.origin&&r.pathname===location.pathname&&(p=await le({status:404,error:new Error(`Not found: ${r.pathname}`),url:r,routeId:null})),!p)return await x(r),!1;if(r=(l==null?void 0:l.url)||r,be!==b)return!1;if(o.length=0,p.type==="redirect")if(c.length>10||c.includes(r.pathname))p=await le({status:500,error:new Error("Redirect loop"),url:r,routeId:null});else return C?ve(new URL(p.location,r).href,{},[...c,r.pathname]):await x(new URL(p.location,location.href)),!1;else((R=(y=p.props)==null?void 0:y.page)==null?void 0:R.status)>=400&&await K.updated.check()&&await x(r);if(h=!0,f&&f.details){const{details:k}=f,S=k.replaceState?0:1;k.state[T]=O+=S,history[k.replaceState?"replaceState":"pushState"](k.state,"",r)}if(u?(n=p.state,p.props.page&&(p.props.page.url=r),E.$set(p.props)):$e(p),f){const{scroll:k,keepfocus:S}=f;if(!S){const L=document.body,U=L.getAttribute("tabindex");L.tabIndex=-1,L.focus({preventScroll:!0}),setTimeout(()=>{var _;(_=getSelection())==null||_.removeAllRanges()}),U!==null?L.setAttribute("tabindex",U):L.removeAttribute("tabindex")}if(await Ce(),w){const L=r.hash&&document.getElementById(r.hash.slice(1));k?scrollTo(k.x,k.y):L?L.scrollIntoView():scrollTo(0,0)}}else await Ce();i.promise=null,i.id=null,w=!0,p.props.page&&(se=p.props.page);const v=p.state.branch[p.state.branch.length-1];C=((P=v==null?void 0:v.node.shared)==null?void 0:P.router)!==!1,s&&s(),h=!1}function $e(r){n=r.state;const c=document.querySelector("style[data-sveltekit]");if(c&&c.remove(),se=r.props.page,E=new kt({target:a,props:{...r.props,stores:K},hydrate:!0}),C){const f={from:null,to:new URL(location.href)};d.after_navigate.forEach(s=>s(f))}u=!0}async function Q({url:r,params:c,branch:f,status:s,error:l,routeId:b,validation_errors:p}){const v=f.filter(Boolean),y={type:"loaded",state:{url:r,params:c,branch:f,error:l,session_id:g},props:{components:v.map(S=>S.node.component),errors:p}};let R={},P=!1;for(let S=0;S<v.length;S+=1)R={...R,...v[S].data},(P||!n.branch.some(L=>L===v[S]))&&(y.props[`data_${S}`]=R,P=!0);if(!n.url||r.href!==n.url.href||n.error!==l||P){y.props.page={error:l,params:c,routeId:b,status:s,url:r,data:R};const S=(L,U)=>{Object.defineProperty(y.props.page,L,{get:()=>{throw new Error(`$page.${L} has been replaced by $page.url.${U}`)}})};S("origin","origin"),S("path","pathname"),S("query","searchParams")}return y}async function ie({loader:r,parent:c,url:f,params:s,routeId:l,server_data_node:b}){var R,P,k,S,L;let p=null;const v={dependencies:new Set,params:new Set,parent:!1,url:!1},y=await r();if((R=y.shared)!=null&&R.load){let U=function(...m){for(const D of m){const{href:I}=new URL(D,f);v.dependencies.add(I)}};const _={};for(const m in s)Object.defineProperty(_,m,{get(){return v.params.add(m),s[m]},enumerable:!0});const A=new lt(f),j={routeId:l,params:_,data:(P=b==null?void 0:b.data)!=null?P:null,get url(){return v.url=!0,A},async fetch(m,D){let I;typeof m=="string"?I=m:(I=m.url,D={body:m.method==="GET"||m.method==="HEAD"?void 0:await m.blob(),cache:m.cache,credentials:m.credentials,headers:m.headers,integrity:m.integrity,keepalive:m.keepalive,method:m.method,mode:m.mode,redirect:m.redirect,referrer:m.referrer,referrerPolicy:m.referrerPolicy,signal:m.signal,...D});const J=new URL(I,f).href;return U(J),u?te(J,D):ft(I,D)},setHeaders:()=>{},depends:U,parent(){return v.parent=!0,c()}};Object.defineProperties(j,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),p=(k=await y.shared.load.call(null,j))!=null?k:null}return{node:y,loader:r,server:b,shared:(S=y.shared)!=null&&S.load?{type:"data",data:p,uses:v}:null,data:(L=p!=null?p:b==null?void 0:b.data)!=null?L:null}}function Le(r,c,f){if(!f)return!1;if(f.parent&&c||r.url&&f.url)return!0;for(const s of r.params)if(f.params.has(s))return!0;for(const s of f.dependencies)if(o.some(l=>l(s)))return!0;return!1}function oe(r){var c,f;return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set((c=r.uses.dependencies)!=null?c:[]),params:new Set((f=r.uses.params)!=null?f:[]),parent:!!r.uses.parent,url:!!r.uses.url}}:null}async function Re({id:r,url:c,params:f,route:s}){if(i.id===r&&i.promise)return i.promise;const{errors:l,layouts:b,leaf:p}=s,v=n.url&&{url:r!==n.url.pathname+n.url.search,params:Object.keys(f).filter(_=>n.params[_]!==f[_])};[...l,...b,p].forEach(_=>_==null?void 0:_().catch(()=>{}));const y=[...b,p];let R=null;const P=y.reduce((_,A,j)=>{var I;const m=n.branch[j],D=A&&((m==null?void 0:m.loader)!==A||Le(v,_.some(Boolean),(I=m.server)==null?void 0:I.uses));return _.push(D),_},[]);if(s.uses_server_data&&P.some(Boolean)){try{const _=await te(`${c.pathname}${c.pathname.endsWith("/")?"":"/"}__data.json${c.search}`,{headers:{"x-sveltekit-invalidated":P.map(A=>A?"1":"").join(",")}});if(R=await _.json(),!_.ok)throw R}catch{x(c);return}if(R.type==="redirect")return R}const k=R==null?void 0:R.nodes;let S=!1;const L=y.map(async(_,A)=>{var J,Ue,je,Oe;if(!_)return;const j=n.branch[A],m=(J=k==null?void 0:k[A])!=null?J:null;if((!m||m.type==="skip")&&_===(j==null?void 0:j.loader)&&!Le(v,S,(Ue=j.shared)==null?void 0:Ue.uses))return j;if(S=!0,(m==null?void 0:m.type)==="error")throw m.httperror?_t(m.httperror.status,m.httperror.message):m.error;return ie({loader:_,url:c,params:f,routeId:s.id,parent:async()=>{var Ie;const Ae={};for(let fe=0;fe<A;fe+=1)Object.assign(Ae,(Ie=await L[fe])==null?void 0:Ie.data);return Ae},server_data_node:(Oe=(je=oe(m))!=null?je:j==null?void 0:j.server)!=null?Oe:null})});for(const _ of L)_.catch(()=>{});const U=[];for(let _=0;_<y.length;_+=1)if(y[_])try{U.push(await L[_])}catch(A){const j=A;if(j instanceof Te)return{type:"redirect",location:j.location};const m=A instanceof ee?A.status:500;for(;_--;)if(l[_]){let D,I=_;for(;!U[I];)I-=1;try{return D={node:await l[_](),loader:l[_],data:{},server:null,shared:null},await Q({url:c,params:f,branch:U.slice(0,I+1).concat(D),status:m,error:j,routeId:s.id})}catch{continue}}x(c);return}else U.push(void 0);return await Q({url:c,params:f,branch:U,status:200,error:null,routeId:s.id})}async function le({status:r,error:c,url:f,routeId:s}){var R;const l={},b=await ge();let p=null;if(b.server){const P=await te(`${f.pathname}${f.pathname.endsWith("/")?"":"/"}__data.json${f.search}`,{headers:{"x-sveltekit-invalidated":"1"}}),k=await P.json();if(p=(R=k==null?void 0:k[0])!=null?R:null,!P.ok||(k==null?void 0:k.type)!=="data"){x(f);return}}const v=await ie({loader:ge,url:f,params:l,routeId:s,parent:()=>Promise.resolve({}),server_data_node:oe(p)}),y={node:await we(),loader:we,shared:null,server:null,data:null};return await Q({url:f,params:l,branch:[v,y],status:r,error:c,routeId:s})}function Se(r){if(r.origin!==location.origin||!r.pathname.startsWith(e))return;const c=decodeURI(r.pathname.slice(e.length)||"/");for(const f of pe){const s=f.exec(c);if(s){const l=new URL(r.origin+it(r.pathname,t)+r.search+r.hash);return{id:l.pathname+l.search,route:f,params:ot(s),url:l}}}}async function ce({url:r,scroll:c,keepfocus:f,redirect_chain:s,details:l,accepted:b,blocked:p}){const v=n.url;let y=!1;const R={from:v,to:r,cancel:()=>y=!0};if(d.before_navigate.forEach(P=>P(R)),y){p();return}he(O),b(),u&&K.navigating.set({from:n.url,to:r}),await Ee(r,s,{scroll:c,keepfocus:f,details:l},()=>{const P={from:v,to:r};d.after_navigate.forEach(k=>k(P)),K.navigating.set(null)})}function x(r){return location.href=r.href,new Promise(()=>{})}return{after_navigate:r=>{me(()=>(d.after_navigate.push(r),()=>{const c=d.after_navigate.indexOf(r);d.after_navigate.splice(c,1)}))},before_navigate:r=>{me(()=>(d.before_navigate.push(r),()=>{const c=d.before_navigate.indexOf(r);d.before_navigate.splice(c,1)}))},disable_scroll_handling:()=>{(h||!u)&&(w=!1)},goto:(r,c={})=>ve(r,c,[]),invalidate:r=>{var c,f;if(r===void 0){for(const s of n.branch)(c=s==null?void 0:s.server)==null||c.uses.dependencies.add(""),(f=s==null?void 0:s.shared)==null||f.uses.dependencies.add("");o.push(()=>!0)}else if(typeof r=="function")o.push(r);else{const{href:s}=new URL(r,location.href);o.push(l=>l===s)}return $||($=Promise.resolve().then(async()=>{await Ee(new URL(location.href),[]),$=null})),$},prefetch:async r=>{const c=new URL(r,De(document));await ke(c)},prefetch_routes:async r=>{const f=(r?pe.filter(s=>r.some(l=>s.exec(l))):pe).map(s=>Promise.all([...s.layouts,s.leaf].map(l=>l==null?void 0:l())));await Promise.all(f)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{let l=!1;const b={from:n.url,to:null,cancel:()=>l=!0};d.before_navigate.forEach(p=>p(b)),l?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){he(O);try{sessionStorage[Ke]=JSON.stringify(X)}catch{}}});const r=s=>{const l=Ne(s);l&&l.href&&l.hasAttribute("sveltekit:prefetch")&&ke(xe(l))};let c;const f=s=>{clearTimeout(c),c=setTimeout(()=>{var l;(l=s.target)==null||l.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",r),addEventListener("mousemove",f),addEventListener("sveltekit:trigger_prefetch",r),addEventListener("click",s=>{if(!C||s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const l=Ne(s);if(!l||!l.href)return;const b=l instanceof SVGAElement,p=xe(l);if(!b&&!(p.protocol==="https:"||p.protocol==="http:"))return;const v=(l.getAttribute("rel")||"").split(/\s+/);if(l.hasAttribute("download")||v.includes("external")||l.hasAttribute("sveltekit:reload")||(b?l.target.baseVal:l.target))return;const[y,R]=p.href.split("#");if(R!==void 0&&y===location.href.split("#")[0]){Y=!0,he(O),K.page.set({...se,url:p}),K.page.notify();return}ce({url:p,scroll:l.hasAttribute("sveltekit:noscroll")?_e():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:p.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault()})}),addEventListener("popstate",s=>{if(s.state&&C){if(s.state[T]===O)return;ce({url:new URL(location.href),scroll:X[s.state[T]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=s.state[T]},blocked:()=>{const l=O-s.state[T];history.go(l)}})}}),addEventListener("hashchange",()=>{Y&&(Y=!1,history.replaceState({...history.state,[T]:++O},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&K.navigating.set(null)})},_hydrate:async({status:r,error:c,node_ids:f,params:s,routeId:l})=>{const b=new URL(location.href);let p;try{const v=(k,S)=>{const L=document.querySelector(`script[sveltekit\\:data-type="${k}"]`);return L!=null&&L.textContent?JSON.parse(L.textContent):S},y=v("server_data",[]),R=v("validation_errors",void 0),P=f.map(async(k,S)=>ie({loader:ae[k],url:b,params:s,routeId:l,parent:async()=>{const L={};for(let U=0;U<S;U+=1)Object.assign(L,(await P[U]).data);return L},server_data_node:oe(y[S])}));p=await Q({url:b,params:s,branch:await Promise.all(P),status:r,error:c!=null&&c.__is_http_error?new ee(c.status,c.message):c,validation_errors:R,routeId:l})}catch(v){const y=v;if(y instanceof Te){await x(new URL(v.location,location.href));return}p=await le({status:y instanceof ee?y.status:500,error:y,url:b,routeId:l})}$e(p)}}}function It(a){}async function Ct({paths:a,target:e,route:t,spa:o,trailing_slash:i,hydrate:d}){const n=St({target:e,base:a.base,trailing_slash:i});at({client:n}),st(a),d&&await n._hydrate(d),t&&(o&&n.goto(location.href,{replaceState:!0}),n._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{It as set_public_env,Ct as start};
