(this["webpackJsonprandom-user-app"]=this["webpackJsonprandom-user-app"]||[]).push([[0],{32:function(e,t,a){},34:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var c=a(4),n=a.n(c),s=a(21),i=a.n(s),r=(a(32),a(27)),l=a(19),o=a.n(l),d=a(22),j=a(10),m=a.p+"static/media/mail.42e0750e.svg",u=a.p+"static/media/woman.05242306.svg",b=a.p+"static/media/growing-up-woman.a1585842.svg",h=a.p+"static/media/map.8e5a2a58.svg",O=a.p+"static/media/phone.d017e1ae.svg",x=a.p+"static/media/padlock.8d2c33d2.svg",p=a.p+"static/media/cw.22310668.svg",g=(a(34),a.p+"static/media/design.9f215bce.svg"),v=a(1),f=function(){return Object(v.jsxs)("div",{className:"footer-div",children:[Object(v.jsx)("a",{href:"https://www.linkedin.com/in/ozkankomu/",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:Object(v.jsx)("code",{className:"brand",children:"Ozkan Komu "})}),Object(v.jsx)("img",{src:g,alt:"design",style:{width:"40px",margin:"0  25px 0 10px"}}),Object(v.jsx)("span",{children:"design"})]})},N=a(26),y=function(e){var t=e.table,a=e.flag,c=e.setFlag;return a&&setTimeout((function(){c(!1)}),3e3),Object(v.jsxs)(v.Fragment,{children:[a&&Object(v.jsx)("p",{className:"mesage",style:{marginTop:"10px",color:"darkred",fontSize:"1.1rem"},children:"(You can add the same user only once.)"}),Object(v.jsxs)("table",{className:"table",children:[t.length>0&&Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{className:"head-tr ",children:[Object(v.jsx)("th",{className:"th",children:"Firstname"}),Object(v.jsx)("th",{className:"th",children:"Email"}),Object(v.jsx)("th",{className:"th",children:"Phone"}),Object(v.jsx)("th",{className:"th",children:"Age"})]})}),Object(v.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{className:"td",children:e.firstName}),Object(v.jsx)("th",{className:"td",children:e.email}),Object(v.jsx)("th",{className:"td",children:e.phone}),Object(v.jsx)("th",{className:"td",children:e.age})]},e.id)}))})]})]})};var k=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)([]),i=Object(j.a)(s,2),l=i[0],g=i[1],k=Object(c.useState)(""),w=Object(j.a)(k,2),M=w[0],I=w[1],S=Object(c.useState)(),z=Object(j.a)(S,2),C=z[0],F=z[1],E=function(){var e=Object(d.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://randomuser.me/api/",e.next=3,Object(N.a)("https://randomuser.me/api/");case 3:t=e.sent,a=t.data,n(a.results[0]),F("My name is ".concat(null===a||void 0===a?void 0:a.results[0].name.first,"   ").concat(null===a||void 0===a?void 0:a.results[0].name.last));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){E()}),[]);var J=a.name,T=a.email,A=a.picture,B=a.dob,D=a.location,K=a.phone,P=a.login;return Object(v.jsxs)("main",{children:[Object(v.jsx)("div",{className:"block bcg-orange",children:Object(v.jsx)("img",{src:p,alt:"cw",id:"cw"})}),Object(v.jsx)("div",{className:"block",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("img",{src:null===A||void 0===A?void 0:A.large,alt:"random user",className:"user-img"}),Object(v.jsx)("p",{className:"user-title",style:{fontWeight:"bold",color:"darkred",fontSize:"1.5rem"},children:C}),Object(v.jsx)("p",{className:"user-value"}),Object(v.jsxs)("div",{className:"values-list",children:[Object(v.jsx)("button",{className:"icon","data-label":"name",children:Object(v.jsx)("img",{src:u,alt:"user",id:"iconImg",onMouseOver:function(){return F("My name is :  ".concat(null===J||void 0===J?void 0:J.first," ").concat(null===J||void 0===J?void 0:J.last))}})}),Object(v.jsx)("button",{className:"icon","data-label":"email",children:Object(v.jsx)("img",{src:m,alt:"mail",id:"iconImg",onMouseOver:function(){return F("My emal is :  ".concat(T," "))}})}),Object(v.jsx)("button",{className:"icon","data-label":"age",children:Object(v.jsx)("img",{src:b,alt:"age",id:"iconImg",onMouseOver:function(){return F("My age is : ".concat(null===B||void 0===B?void 0:B.age," "))}})}),Object(v.jsx)("button",{className:"icon","data-label":"street",children:Object(v.jsx)("img",{src:h,alt:"map",id:"iconImg",onMouseOver:function(){return F("My street is : ".concat(D.street.number," ").concat(D.street.name,"  "))}})}),Object(v.jsx)("button",{className:"icon","data-label":"phone",children:Object(v.jsx)("img",{src:O,alt:"phone",id:"iconImg",onMouseOver:function(){return F("My phone number is : ".concat(K," "))}})}),Object(v.jsx)("button",{className:"icon","data-label":"password",children:Object(v.jsx)("img",{src:x,alt:"lock",id:"iconImg",onMouseOver:function(){return F("My user name is : ".concat(P.username," "))}})})]}),Object(v.jsxs)("div",{className:"btn-group",children:[Object(v.jsx)("button",{className:"btn",type:"button",onClick:function(){return E()},children:"new user"}),Object(v.jsx)("button",{className:"btn",type:"button",onClick:function(){return g([])},children:"Reset"}),Object(v.jsx)("button",{className:"btn",type:"button",onClick:function(){var e=l.some((function(e){return e.email===a.email}));e||I(!1),e?I(!0):g([{firstName:a.name.first,lastName:a.name.last,email:a.email,phone:a.phone,age:a.dob.age,id:1e6*Math.ceil(Math.random)}].concat(Object(r.a)(l)))},children:"add user"})]}),Object(v.jsx)(y,{table:l,flag:M,setFlag:I})]})}),Object(v.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(v.jsx)(f,{})})]})};i.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(k,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.ff780b92.chunk.js.map