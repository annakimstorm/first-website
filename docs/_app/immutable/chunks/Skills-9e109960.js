import{S as X,i as Y,s as G,k as x,a as F,q as z,l as k,m as j,h as g,c as I,r as M,U,n as y,b as D,G as _,T as V,u as T,Z as K,a2 as ee,A as ae,V as P,R as te,f as A,g as oe,t as H,d as ne,a3 as se,v as ie,w as re,x as le,y as ce}from"./index-d2cefc3a.js";import{Y as ue}from"./runtime.esm-647531b9.js";import{l as Q}from"./stores-d8ed3349.js";import{f as de}from"./index-6371ca70.js";import{e as me}from"./index-e83ab04c.js";import{b as $}from"./paths-ae0b3329.js";function pe(t){let e,a,n,r,p,d,l,i=(t[2]=="en"?t[0].titulo:t[1].titulo)+"",b,w,v,u=(t[2]=="en"?t[0].contenido:t[1].contenido)+"",h,s,o;return{c(){e=x("section"),a=x("header"),n=x("button"),r=x("img"),d=F(),l=x("h2"),b=z(i),w=F(),v=x("p"),this.h()},l(m){e=k(m,"SECTION",{class:!0});var c=j(e);a=k(c,"HEADER",{class:!0});var E=j(a);n=k(E,"BUTTON",{class:!0});var q=j(n);r=k(q,"IMG",{src:!0,alt:!0,width:!0}),q.forEach(g),d=I(E),l=k(E,"H2",{class:!0});var L=j(l);b=M(L,i),L.forEach(g),E.forEach(g),w=I(c),v=k(c,"P",{class:!0});var Z=j(v);Z.forEach(g),c.forEach(g),this.h()},h(){U(r.src,p=$+"/svg/close.svg")||y(r,"src",p),y(r,"alt","Close"),y(r,"width","25"),y(n,"class","svelte-193azj6"),y(l,"class","svelte-193azj6"),y(a,"class","svelte-193azj6"),y(v,"class","svelte-193azj6"),y(e,"class","active svelte-193azj6")},m(m,c){D(m,e,c),_(e,a),_(a,n),_(n,r),_(a,d),_(a,l),_(l,b),_(e,w),_(e,v),v.innerHTML=u,s||(o=V(n,"click",t[3]),s=!0)},p(m,[c]){t=m,c&7&&i!==(i=(t[2]=="en"?t[0].titulo:t[1].titulo)+"")&&T(b,i),c&7&&u!==(u=(t[2]=="en"?t[0].contenido:t[1].contenido)+"")&&(v.innerHTML=u)},i(m){h||K(()=>{h=ee(e,de,{x:0,y:fe,duration:500,easing:me}),h.start()})},o:ae,d(m){m&&g(e),s=!1,o()}}}const fe=100;function he(t,e,a){let n;P(t,Q,i=>a(2,n=i));let{data_en:r}=e,{data_es:p}=e;const d=te();function l(){d("deactivate",{})}return t.$$set=i=>{"data_en"in i&&a(0,r=i.data_en),"data_es"in i&&a(1,p=i.data_es)},[r,p,n,l]}class ge extends X{constructor(e){super(),Y(this,e,he,pe,G,{data_en:0,data_es:1})}}function f(t,e){return`<a href="https://${t}">${e}</a>`}function S(t,e){const a=e==0?{y:"year",ys:"years",m:"month",ms:"months",hf:"and a half"}:{y:"a\xF1o",ys:"a\xF1os",m:"mes",ms:"meses",hf:"y medio"},n=new Date,r=n.getFullYear()-t.getFullYear(),p=n.getMonth()-t.getMonth(),d=r*12+p,l=Math.floor(d/12),i=Math.floor(d%12/6);return l>0?i==0?`${l} ${l==1?a.y:a.ys}`:`${l} ${l==1?a.y:a.ys} ${a.hf}`:i==0?`${l} ${l==1?a.y:a.ys}`:`${d} ${d==1?a.m:a.ms}`}const N=new Date("9/1/2017"),B=new Date("6/1/2019"),O=new Date("1/4/2019"),C={en:[{titulo:"Education",icono:`${$}/svg/education.svg`,contenido:`I completed my primary and secondary studies at           ${f("www.seminario.edu.uy/index.php/en/","Colegio Seminario")} in Uruguay and I'm currently studying in           ${f("www.fing.edu.uy/","\uB514\uC9C0\uD0C4 \uB514\uC790\uC778 (Digital Design)")} and pursuing a career in \uB514\uC9C0\uD0C4 \uB514\uC790\uC778.           Regarding programming, I've started learning on my own since I was 15, but I also attended a Arduino course            on ${f("www.um.edu.uy/","Universidad de Montevideo (University of Montevideo)")}.`},{titulo:"Languages",icono:`${$}/svg/languages.svg`,contenido:`Currently, I have a strong grasp of the fundamentals of Python and Javascript and I use them on a regular basis,         and I have been working with them for ${S(N,0)} and ${S(B,0)}, respectively. Aditionally, I have ${S(O,0)} of         experience with HTML and CSS. To a lesser extent, I'm familiar with Rust, SQL and Elixir         all of which I intend to delve deeper into.`},{titulo:"Web Apps",icono:`${$}/svg/web_apps.svg`,contenido:`I've been steering towards the development of web applications since the start of 2019. I work with both         backend development, which involves the server that hosts the application and databases, and frontend development         on the other hand, which focuses on the interface and the user experience. I'm fluent in         ${f("www.djangoproject.com/","Django")}, a Python framework         that ensures security and scalability and ${f("svelte.dev/","Svelte")},          a Javascript tool to create highly reactive interfaces with small         amounts of code, ensuring fast loading times for the users.<br> I'm also currently learning ${f("phoenixframework.org/","Phoenix")}         to create real time Elixir applications.`},{titulo:"Web Design",icono:`${$}/svg/design.svg`,contenido:`I enjoy designing the interfaces that users interact with regularly, and I'm acquainted with the         concepts they're built upon. As a user of multiple applications and platforms, I have the opportunity to draw inspiration         from various sources and to understand what works and what doesn't. I practice by creating my own interfaces          in ${f("www.figma.com/","Figma")}, a tool for prototyping designs and interactions that also allows me to share my work with anyone.        `},{titulo:"Platforms",icono:`${$}/svg/platforms.svg`,contenido:`Once finished, every application must be made available for everyone to use. As means to this end,         there are several platforms that provide ways to host applications and to ease the inherently complicated process of         deployment. I currently have worked with ${f("www.pythonanywhere.com/","Python Anywhere")} to deploy         Django servers and ${f("console.firebase.google.com/","Firebase")} or ${f("https://www.netlify.com/","Netlify")} for frontend applications. I'm         currently seeking to learn ${f("aws.amazon.com/es/","AWS")}, as it contains a plethora of services which         englobe all of my clients essential needs.`},{titulo:"UX Design",icono:`${$}/svg/ux.svg`,contenido:"UX Design, which stands for User Experience Design          seeks to polish the details that make an application         more friendly for experienced users and newcomers alike. There are several principles that help to construct a         good user experience, such as making your application behave in a way that's intuitive for the users, and breaking         complex decisions into smaller steps. This way the application feels familiar to the users, so they can start using it         right away instead of figuring out the way the interface works."}],es:[{titulo:"Educaci\xF3n",icono:`${$}/svg/education.svg`,contenido:`           Complet\xE9 mis estudios primarios y secundarios en           ${f("www.seminario.edu.uy/index.php/en/","Colegio Seminario")} en Uruguay y actualmente estoy estudiando en           ${f("www.fing.edu.uy/","Facultad de Ingenier\xEDa")} siguiendo la carrera de ingenier\xEDa el\xE9ctrica. En cuanto a programaci\xF3n,            comenc\xE9 a aprender por mi cuenta desde que ten\xEDa 15 a\xF1os, pero tambi\xE9n asist\xED a un curso de Arduino            en ${f("www.um.edu.uy/","Universidad de Montevideo")}.`},{titulo:"Lenguajes",icono:`${$}/svg/languages.svg`,contenido:`           Actualmente, tengo una buena comprensi\xF3n de los fundamentos de Python y Javascript y los uso regularmente.           Vengo trabajando con ellos desde hace ${S(N,1)} y ${S(B,1)}, respectivamente.           Adicionalmente tengo ${S(O,1)} de experiencia con HTML y CSS.            En menor medida, estoy familiarizado con Rust, SQL y Elixir,           en los cuales tengo la intenci\xF3n de profundizar.`},{titulo:"Aplicaciones web",icono:`${$}/svg/web_apps.svg`,contenido:`         Me he dirigido hacia el desarrollo de aplicaciones web a principios de 2019. Trabajo con         desarrollo de backend, que involucra al servidor que aloja la aplicaci\xF3n y las bases de datos, y con desarrollo frontend         que, por otro lado, se centra en la interfaz y la experiencia del usuario. Soy fluido en         ${f("www.djangoproject.com/","Django")}, un framework de Python         que garantiza seguridad y escalabilidad, y ${f("svelte.dev/","Svelte")}, una herramienta de         Javascript para crear interfaces altamente reactivas con peque\xF1as         cantidades de c\xF3digo, asegurando tiempos de carga r\xE1pidos para los usuarios. <br> Tambi\xE9n estoy aprendiendo         ${f("phoenixframework.org/","Phoenix")} para crear aplicaciones en tiempo real con Elixir .`},{titulo:"Dise\xF1o web",icono:`${$}/svg/design.svg`,contenido:`         Disfruto dise\xF1ando las interfaces con las que los usuarios interact\xFAan regularmente, y estoy familiarizado con los         conceptos en los que se basan. Como usuario de m\xFAltiples aplicaciones y plataformas, tengo la oportunidad de tomar inspiraci\xF3n         de varias fuentes y entender qu\xE9 funciona y qu\xE9 no. Practico creando mis propias interfaces         en ${f("www.figma.com/","Figma")}, una herramienta para prototipos de dise\xF1os e interacciones que tambi\xE9n me permite         compartir mi trabajo con cualquier persona.`},{titulo:"Plataformas",icono:`${$}/svg/platforms.svg`,contenido:`Una vez finalizada, cada aplicaci\xF3n debe estar disponible para que todos la utilicen. Como medio para este fin,          hay varias plataformas que proporcionan formas de alojar aplicaciones y facilitar el proceso intr\xEDnsecamente complicado de          despliegue. Actualmente he trabajado con ${f("www.pythonanywhere.com/","Python Anywhere")} para implementar          servidores Django y ${f("console.firebase.google.com/","Firebase")} o ${f("https://www.netlify.com/","Netlify")} para aplicaciones frontend.          Actualmente busco aprender ${f("aws.amazon.com/es/","AWS")}, ya que contiene una pl\xE9tora de servicios que          engloba todas las necesidades esenciales de mis clientes.`},{titulo:"Dise\xF1o UX",icono:`${$}/svg/ux.svg`,contenido:"El dise\xF1o UX, que significa dise\xF1o de experiencia de usuario,           busca pulir los detalles que hacen a una aplicaci\xF3n          m\xE1s amigable para usuarios experimentados y reci\xE9n llegados por igual. Hay varios principios que ayudan a construir una          buena experiencia de usuario, como hacer que la aplicaci\xF3n se comporte de una manera intuitiva para los usuarios y romper          decisiones complejas en pasos m\xE1s peque\xF1os. De esta manera los usuarios pueden empezar a usar la aplicaci\xF3n directamente en vez de tener          que descifrar el funcionamiento de la interfaz."}]};function R(t,e,a){const n=t.slice();return n[5]=e[a],n[7]=a,n}function J(t){let e,a;return e=new ge({props:{data_en:C.en[t[0]],data_es:C.es[t[0]]}}),e.$on("deactivate",t[3]),{c(){ie(e.$$.fragment)},l(n){re(e.$$.fragment,n)},m(n,r){le(e,n,r),a=!0},p(n,r){const p={};r&1&&(p.data_en=C.en[n[0]]),r&1&&(p.data_es=C.es[n[0]]),e.$set(p)},i(n){a||(A(e.$$.fragment,n),a=!0)},o(n){H(e.$$.fragment,n),a=!1},d(n){ce(e,n)}}}function W(t){let e,a,n,r,p,d,l=t[5].titulo+"",i,b,w,v;function u(){return t[4](t[7])}return{c(){e=x("section"),a=x("img"),p=F(),d=x("h2"),i=z(l),b=F(),this.h()},l(h){e=k(h,"SECTION",{class:!0});var s=j(e);a=k(s,"IMG",{src:!0,alt:!0,class:!0}),p=I(s),d=k(s,"H2",{class:!0});var o=j(d);i=M(o,l),o.forEach(g),b=I(s),s.forEach(g),this.h()},h(){U(a.src,n=t[5].icono)||y(a,"src",n),y(a,"alt",r=t[5].titulo),y(a,"class","clickable svelte-xvjj91"),y(d,"class","clickable svelte-xvjj91"),y(e,"class","clickable svelte-xvjj91")},m(h,s){D(h,e,s),_(e,a),_(e,p),_(e,d),_(d,i),_(e,b),w||(v=V(e,"click",u),w=!0)},p(h,s){t=h,s&4&&!U(a.src,n=t[5].icono)&&y(a,"src",n),s&4&&r!==(r=t[5].titulo)&&y(a,"alt",r),s&4&&l!==(l=t[5].titulo+"")&&T(i,l)},d(h){h&&g(e),w=!1,v()}}}function ve(t){let e,a,n=t[1]("skills.titulo")+"",r,p,d,l=t[1]("skills.subtitulo")+"",i,b,w,v,u=t[0]!=null&&J(t),h=C[t[2]],s=[];for(let o=0;o<h.length;o+=1)s[o]=W(R(t,h,o));return{c(){u&&u.c(),e=F(),a=x("h1"),r=z(n),p=F(),d=x("h2"),i=z(l),b=F(),w=x("div");for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){u&&u.l(o),e=I(o),a=k(o,"H1",{});var m=j(a);r=M(m,n),m.forEach(g),p=I(o),d=k(o,"H2",{class:!0});var c=j(d);i=M(c,l),c.forEach(g),b=I(o),w=k(o,"DIV",{class:!0});var E=j(w);for(let q=0;q<s.length;q+=1)s[q].l(E);E.forEach(g),this.h()},h(){y(d,"class","action svelte-xvjj91"),y(w,"class","svelte-xvjj91")},m(o,m){u&&u.m(o,m),D(o,e,m),D(o,a,m),_(a,r),D(o,p,m),D(o,d,m),_(d,i),D(o,b,m),D(o,w,m);for(let c=0;c<s.length;c+=1)s[c].m(w,null);v=!0},p(o,[m]){if(o[0]!=null?u?(u.p(o,m),m&1&&A(u,1)):(u=J(o),u.c(),A(u,1),u.m(e.parentNode,e)):u&&(oe(),H(u,1,1,()=>{u=null}),ne()),(!v||m&2)&&n!==(n=o[1]("skills.titulo")+"")&&T(r,n),(!v||m&2)&&l!==(l=o[1]("skills.subtitulo")+"")&&T(i,l),m&5){h=C[o[2]];let c;for(c=0;c<h.length;c+=1){const E=R(o,h,c);s[c]?s[c].p(E,m):(s[c]=W(E),s[c].c(),s[c].m(w,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=h.length}},i(o){v||(A(u),v=!0)},o(o){H(u),v=!1},d(o){u&&u.d(o),o&&g(e),o&&g(a),o&&g(p),o&&g(d),o&&g(b),o&&g(w),se(s,o)}}}function ye(t,e,a){let n,r;P(t,ue,i=>a(1,n=i)),P(t,Q,i=>a(2,r=i));let p=null;return[p,n,r,()=>a(0,p=null),i=>a(0,p=i)]}class Ee extends X{constructor(e){super(),Y(this,e,ye,ve,G,{})}}export{Ee as S};