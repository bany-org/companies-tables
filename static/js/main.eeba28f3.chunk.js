(this["webpackJsonpcompanies-tables"]=this["webpackJsonpcompanies-tables"]||[]).push([[0],{14:function(e,t,n){e.exports=n(36)},36:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(13),r=n.n(c),i=n(2),u=n(3),l=n.n(u);var s=function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),u=Object(i.a)(r,2),s=u[0],m=u[1],d=Object(a.useState)([]),f=Object(i.a)(d,2),p=f[0],h=f[1],v=Object(a.useState)(10),b=Object(i.a)(v,2),g=b[0],E=b[1],O=Object(a.useState)(0),j=Object(i.a)(O,2),k=j[0],w=j[1];return Object(a.useEffect)((function(){l.a.get("https://recruitment.hal.skygate.io/companies").then((function(e){m(e.data),h(e.data),c(!1)})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){var e=s.sort((function(e,t){return e.id-t.id})).slice(k,k+g);l.a.all(e.map((function(e){return l.a.get("https://recruitment.hal.skygate.io/incomes/".concat(e.id))}))).then(l.a.spread((function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var o=[].concat(n),c=o.map((function(t){var n=e.find((function(e){return e.id===t.data.id})),a=t.data.incomes.map((function(e){return e.value})).reduce((function(e,t){return parseFloat(e)+parseFloat(t)}));return console.log("element month",t.data),Object.assign(n,{suma:a,avrg:a/t.data.incomes.length})}));h(c)}))).catch((function(e){}))}),[s,k,g]),console.log("render",p),o.a.createElement("div",{className:"App"},o.a.createElement("div",null,"ile na stronie",o.a.createElement("select",{onChange:function(e){return E(parseInt(e.target.value))},value:g},o.a.createElement("option",{value:5},"5"),o.a.createElement("option",{value:10},"10"),o.a.createElement("option",{value:20},"20"))),n&&o.a.createElement("h1",null,"loading"),!n&&p.map((function(e){return o.a.createElement("p",{key:e.id},"id:",e.id," Income: ",Number(e.suma).toFixed(2)," ","\u015brednia: ",Number(e.avrg).toFixed(2))})),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return w(k-g)}},"Offset -",g),o.a.createElement("button",{onClick:function(){return w(k+g)}},"Offset +",g)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.eeba28f3.chunk.js.map