(this["webpackJsonpvirtual-keyboard-ciq"]=this["webpackJsonpvirtual-keyboard-ciq"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(7),s=c.n(r),o=(c(12),c(13),c(2)),i=c(4),b=["` ~","1 !","2 @","3 #","4 $","5 %","6 ^","7 &","8 *","9 (","0 )","_ -","= +"],u=["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"],d=["[ {","] }","\\ |","; :","' \"",", <",". >","/ ?"],j="delete",l="caps lock",y="enter",O="space",f="shift",x="tab",k=c(0),h=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([].concat(Object(o.a)(b),Object(o.a)(u),Object(o.a)(d))),s=Object(i.a)(r,2),h=s[0],v=s[1],p=Object(n.useState)(!1),m=Object(i.a)(p,2),K=m[0],N=m[1],w=Object(n.useState)(!1),g=Object(i.a)(w,2),E=g[0],S=g[1],B=function(e){if("BUTTON"===e.target.tagName){var t=e.target.innerText;switch(t){case j:a((function(e){return e.substring(0,e.length-1)}));break;case l:N((function(e){return!e}));break;case y:a((function(e){return e+"\n"}));break;case O:a((function(e){return e+" "}));break;case f:S((function(e){return!e}));break;case x:a((function(e){return e+"    "}));break;default:var c,n=t;v((function(e){return function(e){for(var t,c=e.length;0!==c;){t=Math.floor(Math.random()*c),c--;var n=[e[t],e[c]];e[c]=n[0],e[t]=n[1]}return e}(e)})),S((function(e){return c=e,e?!e:e})),c&&(n=u.includes(t.toLowerCase())?n.toUpperCase():n.split(" ")[1]),c||(n=n.split(" ")[0]),a((function(e){return"".concat(e).concat(n)}))}}};Object(n.useEffect)((function(){var e=document.getElementById("keyboardKeys");return e.addEventListener("click",B),function(){e.removeEventListener("click",(function(){console.log("events removed ")}))}}),[]);var q=function(e){var t=e.value;switch(t){case j:return Object(k.jsx)("button",{type:"button",className:"keyboardKey keyboardKey--wide",children:t});case l:return Object(k.jsx)("button",{type:"button",className:"keyboardKey keyboardKey--wide ".concat(K?"active":""),children:t});case f:return Object(k.jsx)("button",{type:"button",className:"keyboardKey keyboardKey--wide ".concat(E?"active":""),children:t});case y:return Object(k.jsx)("button",{type:"button",className:"keyboardKey keyboardKey--wide",children:t});case O:return Object(k.jsx)("button",{type:"button",className:"keyboardKey keyboardKey--extra-wide",children:t});case x:return Object(k.jsx)("button",{type:"button",className:"keyboardKey keyboardKey--wide",children:t});default:return Object(k.jsx)("button",{type:"button",className:"keyboardKey",children:K?t.toUpperCase():t})}};return Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:"dFlex",children:Object(k.jsx)("textarea",{defaultValue:c,className:"inputBox",id:"input",disabled:!0})}),Object(k.jsx)("div",{className:"keyboard",children:Object(k.jsx)("div",{className:"keyboardKeys",id:"keyboardKeys",children:function(e){return[].concat(Object(o.a)(e.slice(0,13)),[j,x],Object(o.a)(e.slice(13,47)),[f,l,O,y]).map((function(t,c){var n=-1!==[j,e[22],e[31],e[38],f,y].indexOf(t);return Object(k.jsxs)("span",{children:[Object(k.jsx)(q,{value:t}),n&&Object(k.jsx)("br",{})]},"".concat(t,"_").concat(c))}))}(h)})})]})},v=function(){var e=function(){return Object(k.jsx)("div",{className:"dFlex header",children:Object(k.jsx)("h1",{children:"Virtual Keyboard"})})};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(e,{}),Object(k.jsx)(h,{})]})};var p=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(v,{})})};s.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(p,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.dc713a07.chunk.js.map