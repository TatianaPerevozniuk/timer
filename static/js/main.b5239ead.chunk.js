(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(4),r=n.n(s),j=(n(9),n(3)),l=n(0),o=function(e){return Object(l.jsxs)("div",{className:"display",children:[Object(l.jsxs)("section",{children:[Object(l.jsx)("p",{children:("0"+Math.floor(e.time/6e4%60)).slice(-2)}),Object(l.jsx)("p",{children:Object(l.jsx)("small",{children:"Minutes"})})]}),Object(l.jsx)("span",{children:":"}),Object(l.jsxs)("section",{children:[Object(l.jsx)("p",{children:("0"+Math.floor(e.time/1e3%60)).slice(-2)}),Object(l.jsx)("p",{children:Object(l.jsx)("small",{children:"Seconds"})})]}),Object(l.jsx)("span",{children:":"}),Object(l.jsxs)("section",{children:[Object(l.jsx)("p",{children:("0"+e.time/10%100).slice(-2)}),Object(l.jsx)("p",{children:Object(l.jsx)("small",{children:"Milliseconds"})})]})]})},a=function(e){var t=Object(c.useState)(e.timeStart),n=Object(j.a)(t,2),i=n[0],s=n[1],r=Object(c.useState)(!1),a=Object(j.a)(r,2),u=a[0],b=a[1];return Object(c.useEffect)((function(){var e=null;return u?e=setInterval((function(){s((function(e){return e>0?e-10:0}))}),10):(!u||i<=0)&&clearInterval(e),function(){return clearInterval(e)}}),[u]),Object(l.jsx)("section",{className:"timer-container",children:Object(l.jsxs)("section",{className:"timer",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h2",{children:"Countdown timer"})}),Object(l.jsx)(o,{time:i}),Object(l.jsxs)("div",{className:"buttons",children:[!u&&i===e.timeStart&&Object(l.jsx)("button",{onClick:function(){return b(!0)},children:"Start"}),u&&Object(l.jsx)("button",{onClick:function(){return b(!1)},children:"Stop"}),!u&&i<e.timeStart&&Object(l.jsx)("button",{onClick:function(){return s(e.timeStart)},children:"Reset"}),!u&&i<e.timeStart&&Object(l.jsx)("button",{onClick:function(){return b(!0)},children:"Resume"})]})]})})};n(11);var u=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(a,{timeStart:6e4})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),b()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.b5239ead.chunk.js.map