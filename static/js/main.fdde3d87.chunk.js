(this["webpackJsonpvirtual-keyboard-ciq"]=this["webpackJsonpvirtual-keyboard-ciq"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),s=n.n(a),o=(n(12),n(13),n(5)),u=n(3),i=["` ~","1 !","2 @","3 #","4 $","5 %","6 ^","7 &","8 *","9 (","0 )","_ -","= +"],b=["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"],d=["[ {","] }","\\ |","; :","' \"",", <",". >","/ ?"],j="delete",l="caps lock",y="enter",O="space",f="shift",x="tab",k=n(0),h=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(b),s=Object(u.a)(a,2),h=s[0],v=s[1],p=Object(c.useState)(!1),m=Object(u.a)(p,2),K=m[0],N=m[1],w=Object(c.useState)(!1),g=Object(u.a)(w,2),E=g[0],S=g[1],B=function(e){if("BUTTON"===e.target.tagName){var t=e.target.innerText;switch(t){case j:r((function(e){return e.substring(0,e.length-1)}));break;case l:N((function(e){return!e}));break;case y:r((function(e){return e+"\n"}));break;case O:r((function(e){return e+" "}));break;case f:S((function(e){return!e}));break;case x:r((function(e){return e+"    "}));break;default:b.includes(t.toLowerCase())&&v((function(e){return function(e){for(var t,n=e.length;0!==n;){t=Math.floor(Math.random()*n),n--;var c=[e[t],e[n]];e[n]=c[0],e[t]=c[1]}return e}(e)}));var n,c=t;S((function(e){return n=e,e?!e:e})),n&&(c=b.includes(t.toLowerCase())?c.toUpperCase():c.split(" ")[1]),n||(c=c.split(" ")[0]),r((function(e){return"".concat(e).concat(c)}))}}};Object(c.useEffect)((function(){var e=document.getElementById("keyboardKeys");return e.addEventListener("click",B),function(){e.removeEventListener("click",(function(){console.log("events removed ")}))}}),[]);var C=function(e){var t=e.value;switch(t){case j:return Object(k.jsx)("button",{type:"button",className:"keyboardKey keyboardKey--wide",children:t});case l:return Object(k.jsx)("button",{type:"button",className:"keyboardKey keyboardKey--wide ".concat(K?"active":""),children:t});case f:return Object(k.jsx)("button",{type:"button",className:"keyboardKey keyboardKey--wide ".concat(E?"active":""),children:t});case y:return Object(k.jsx)("button",{type:"button",className:"keyboardKey keyboardKey--wide",children:t});case O:return Object(k.jsx)("button",{type:"button",className:"keyboardKey keyboardKey--extra-wide",children:t});case x:return Object(k.jsx)("button",{type:"button",className:"keyboardKey keyboardKey--wide",children:t});default:return Object(k.jsx)("button",{type:"button",className:"keyboardKey",children:K?t.toUpperCase():t})}};return Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:"dFlex",children:Object(k.jsx)("textarea",{defaultValue:n,className:"inputBox",id:"input",disabled:!0})}),Object(k.jsx)("div",{className:"keyboard",children:Object(k.jsx)("div",{className:"keyboardKeys",id:"keyboardKeys",children:function(e){return[].concat(Object(o.a)(i),[j,x],Object(o.a)(e),Object(o.a)(d),[f,l,O,y]).map((function(t,n){var c=-1!==[j,e[9],e[18],e[25],f,y].indexOf(t);return Object(k.jsxs)("span",{children:[Object(k.jsx)(C,{value:t}),c&&Object(k.jsx)("br",{})]},"".concat(t,"_").concat(n))}))}(h)})})]})},v=function(){var e=function(){return Object(k.jsx)("div",{className:"dFlex header",children:Object(k.jsx)("h1",{children:"Virtual Keyboard"})})};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(e,{}),Object(k.jsx)(h,{})]})};var p=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(v,{})})};s.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(p,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.fdde3d87.chunk.js.map