(this.webpackJsonpsmart_mirror=this.webpackJsonpsmart_mirror||[]).push([[0],{46:function(e,t,c){},70:function(e){e.exports=JSON.parse('{"weatherApi":"88d2efcaea28f04722ae5374cd196f84"}')},75:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(40),r=c.n(a),s=(c(46),c(47),c(9)),i=c(16),j=c.n(i),o=c(1),u=function(e){var t=e.stylz,c=Object(n.useState)(j()().format("dddd")+" "+j()().format("LL")),a=Object(s.a)(c,2),r=a[0],i=a[1],u=setInterval((function(){return i(j()().format("dddd")+" "+j()().format("LL"))}),1e4);return Object(n.useEffect)((function(){return function(){clearInterval(u)}}),[]),Object(o.jsx)("div",{className:t,children:r})},l=function(e){var t=e.stylz,c=Object(n.useState)(),a=Object(s.a)(c,2),r=a[0],i=a[1],u=setInterval((function(){return i(j()().format("LTS"),1e3)}));return Object(n.useEffect)((function(){return function(){clearInterval(u)}}),[]),Object(o.jsx)("div",{className:t,children:r})},d=function(e){var t=e.stylz,c=Object(n.useState)("Seattle, Washington"),a=Object(s.a)(c,2),r=a[0];a[1];return Object(o.jsx)("div",{className:t,children:r})},b=function(){return Object(o.jsxs)("div",{className:"flex column",children:[Object(o.jsx)(u,{stylz:"date"}),Object(o.jsxs)("div",{className:"flex pad",children:[Object(o.jsx)(l,{stylz:"time"}),Object(o.jsx)(d,{stylz:"location"})]})]})},f=function(){return Object(o.jsx)("div",{className:"welcome",children:"Greeting Ashwin"})},p=c.p+"static/media/Main.8acefe10.PNG",O=function(e){var t=e.stylz;return Object(o.jsx)("img",{className:t,src:p})},x=c(26);c(76),c(50);x.a.initializeApp({apiKey:"AIzaSyAQGH73pwW3lcMhZZkrgTloGEa09StOB2Q",authDomain:"smartmirror-17d68.firebaseapp.com",projectId:"smartmirror-17d68",storageBucket:"smartmirror-17d68.appspot.com",messagingSenderId:"782610614809",appId:"1:782610614809:web:96e331d39cb59c5e1b7888",measurementId:"G-FPETT3Q4PS"});var h=x.a,m=h.firestore(),v=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){m.collection("Todo").onSnapshot((function(e){a(e.docs.map((function(e){return Object(o.jsx)("li",{className:"todoText",children:e.data().message},e.id)})))}))}),[]),Object(n.useEffect)((function(){return console.log(c)}),[c]),Object(o.jsx)("div",{children:Object(o.jsx)("ul",{children:c})})},w=function(){return Object(o.jsxs)("div",{className:"todoList",children:[Object(o.jsx)("div",{className:"todoLabel",children:"Todo List"}),Object(o.jsx)(v,{})]})},N=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"flex wrap1",children:Object(o.jsx)(O,{stylz:"logo2"})}),Object(o.jsx)("div",{className:"flex",children:Object(o.jsx)(b,{})}),Object(o.jsx)(f,{}),Object(o.jsx)("div",{className:"flex",children:Object(o.jsx)(w,{})})]})},g=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"flex wrap1",children:Object(o.jsx)(u,{stylz:"dateHome"})}),Object(o.jsx)("div",{className:"flex wrap2",children:Object(o.jsx)(O,{stylz:"logoHome"})}),Object(o.jsxs)("div",{className:"flex",children:[Object(o.jsx)(l,{stylz:"timeHome"}),Object(o.jsx)(d,{stylz:"locationHome"})]})]})},y=c(15),S=c.n(y),z=c(19),I=function(e){var t,c=e.path.data.main.temp;return Object(o.jsxs)("div",{className:"temp",children:[(t=c,Math.round(1.8*(t-273.15)+32))," \xb0 F"]})},E=function(e){var t=Object(s.a)(e.path.data.weather,1)[0].icon;return Object(o.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t,"@2x.png"),className:"icon"})},k=function(e){var t=Object(s.a)(e.path.data.weather,1)[0].description;return Object(o.jsx)("div",{className:"iconData description",children:t})},A=function(e){var t=e.path.data.main.humidity;return Object(o.jsxs)("div",{className:"iconData humidity",children:["humidity: ",t,"%"]})},L=function(e){var t=e.path.data.wind.speed;return Object(o.jsxs)("div",{className:"iconData per",children:["wind speed: ",t," m/s"]})},T=c(22),q=c.n(T),F=function(){var e=c(70),t=function(){var t=Object(z.a)(S.a.mark((function t(){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",q.a.get("https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=".concat(e.weatherApi)));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=Object(n.useState)({data:{weather:[{icon:"01d"}],main:{temp:310,humidity:69},wind:{speed:6.429}}}),r=Object(s.a)(a,2),i=r[0],j=r[1],u=function(){var e=Object(z.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=j,e.next=3,t();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=setInterval(u,6e5);return Object(n.useEffect)((function(){return u(),function(){return clearInterval(l)}}),[]),Object(o.jsxs)("div",{className:"flex",style:{width:"1000px"},children:[Object(o.jsx)(E,{path:i}),Object(o.jsxs)("div",{style:{paddingTop:"75px",marginLeft:"0px"},children:[Object(o.jsx)(I,{path:i}),Object(o.jsx)(k,{path:i}),Object(o.jsx)(A,{path:i}),Object(o.jsx)(L,{path:i})]})]})},P=function(){var e=function(){var e=Object(z.a)(S.a.mark((function e(){var t,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get("http://localhost:8080/quote");case 2:return t=e.sent,c=t.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var t=Object(z.a)(S.a.mark((function t(){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=i,t.next=3,e();case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=Object(n.useState)({q:"Kick butt",a:"Ashwin T"}),a=Object(s.a)(c,2),r=a[0],i=a[1],j=setInterval(t,108e5);return Object(n.useEffect)((function(){return t(),function(){clearInterval(j)}}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"quote",children:['"',r.q,'"',Object(o.jsxs)("div",{className:"quoteAuthor",children:["- ",r.a]})]})})},G=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"flex wrap1",children:Object(o.jsx)(O,{stylz:"logo"})}),Object(o.jsx)("div",{className:"flex",children:Object(o.jsx)(b,{})}),Object(o.jsxs)("div",{className:"flex wrap3",children:[Object(o.jsx)(F,{}),Object(o.jsx)(P,{})]})]})},H=c(23),D=c(5),B=function(){var e=Object(D.f)(),t=h.firestore();return Object(n.useEffect)((function(){var c=!1;t.collection("Page").doc("PageNum").onSnapshot((function(t){1==c&&(e.push("/".concat(t.data().Page)),e.go(0)),c=!0}))}),[]),Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(H.a,{history:e,children:Object(o.jsxs)(D.c,{children:[Object(o.jsx)(D.a,{path:"/0",children:Object(o.jsx)(g,{})}),Object(o.jsx)(D.a,{path:"/1",children:Object(o.jsx)(N,{})}),Object(o.jsx)(D.a,{path:"/2",children:Object(o.jsx)(G,{})})]})})})},J=function(){return Object(o.jsx)(H.a,{children:Object(o.jsx)(B,{})})};r.a.render(Object(o.jsx)(J,{}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.a3bece77.chunk.js.map