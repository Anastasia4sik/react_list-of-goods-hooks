(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),o=n.n(s),i=n(6),a=n(8),r=n(1),l=(n(13),n(14),n(4)),u=n.n(l),b=n(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var j=function(){var t=Object(r.useState)(!1),e=Object(i.a)(t,2),n=e[0],s=e[1],o=Object(r.useState)(c.NONE),l=Object(i.a)(o,2),j=l[0],N=l[1],O=function(t,e,n){var s=Object(a.a)(t);switch(e){case c.ALPHABET:s.sort((function(t,e){return t.localeCompare(e)}));break;case c.LENGTH:s.sort((function(t,e){return t.length-e.length}));case c.NONE:}return n&&s.reverse(),s}(h,j,n),d=n||j!==c.NONE;return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button is-info",{"is-light":j!==c.ALPHABET}),onClick:function(){N(c.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()("button is-success",{"is-light":j!==c.LENGTH}),onClick:function(){N(c.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()("button is-warning",{"is-light":!n}),onClick:function(){s(!n)},children:"Reverse"}),d&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(!1),N(c.NONE)},children:"Reset"})]}),Object(b.jsx)("ul",{children:O.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.75478eef.chunk.js.map