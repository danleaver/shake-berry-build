(this["webpackJsonpberry-shake"]=this["webpackJsonpberry-shake"]||[]).push([[0],{23:function(n,e,t){n.exports=t.p+"static/media/cam.7ced313f.svg"},24:function(n,e,t){n.exports=t.p+"static/media/cam_off.97f6b482.svg"},25:function(n,e,t){n.exports=t(48)},30:function(n,e,t){},48:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(18),c=t.n(o),i=(t(30),t(2)),u=t(5),l=t(19),s=t.n(l),f=t(3);function m(){var n=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: ",";\n  padding: ",";\n"]);return m=function(){return n},n}function d(){var n=Object(i.a)(["\n  padding: 0.5rem 1rem;\n  font-size: 2rem;\n"]);return d=function(){return n},n}function h(){var n=Object(i.a)(["\n  padding: 1rem 0.5rem;\n"]);return h=function(){return n},n}var v=f.a.div(h()),p=f.a.div(d()),b=f.a.div(m(),(function(n){return n.isLabel?"#d9d9d9":"#92d150"}),(function(n){return n.isLabel?"0.25rem":"0.5rem"})),g=function(){var n=Object(r.useState)([]),e=Object(u.a)(n,2),t=e[0],o=e[1];return Object(r.useEffect)((function(){var n=!0;return function e(){s.a.get("/api/shakerdata.txt").then((function(t){n&&(o(t.data),setTimeout((function(){e()}),1e3))})).catch(console.log)}(),function(){return n=!1}}),[]),a.a.createElement(v,null,t.map((function(n,e){return a.a.createElement(p,{key:e},a.a.createElement(b,{isLabel:!0},n.label),a.a.createElement(b,null,n.value))})))};function w(){var n=Object(i.a)(["\n  position: absolute;\n  width:100vw;\n  height:100vh;\n"]);return w=function(){return n},n}function k(){var n=Object(i.a)(["\n  // display: flex;\n  // width: 1vw;\n  // height: 100%;\n"]);return k=function(){return n},n}var E=f.a.div(k()),j=f.a.iframe(w()),O=function(){return a.a.createElement(E,null,a.a.createElement(j,{src:"http://localhost:8081",frameborder:"0",allowfullscreen:!0}))},x=t(23),y=t.n(x),C=t(24),z=t.n(C);function L(){var n=Object(i.a)(["\n  position: fixed;\n  // top: 1.15rem;\n  // right: 2rem;\n  top: 0rem;\n  right: 0.25rem;\n  height: 60px;\n  width: 60px;\n  background: url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  z-index: 1;\n  filter: opacity(",");\n  \n"]);return L=function(){return n},n}var S=f.a.div(L(),(function(n){return n.showCam?z.a:y.a}),(function(n){return n.showCam?"50%":"100%"})),B=function(){var n=Object(r.useState)(!1),e=Object(u.a)(n,2),t=e[0],o=e[1];return console.log(t),a.a.createElement(a.a.Fragment,null,a.a.createElement(S,{onClick:function(){return o(!t)},showCam:t}),t?a.a.createElement(O,null):a.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.2c270b2d.chunk.js.map