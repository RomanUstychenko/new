"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[214],{214:(e,n,s)=>{s.r(n),s.d(n,{default:()=>b});var l=s(43),t=s(3),a=s(394);const i=e=>e.catalog.mainCatalog;console.log("getMainCatalogs",i);const d=e=>e.catalog.loading;var r=s(464),o=s(184);const c=(0,r.Ay)(o.KfJ)`
    
`,x=(0,r.Ay)(o.oeh)`
    
`;var h=s(579);const j=()=>(0,h.jsx)("div",{children:"list items"}),u=()=>(0,h.jsxs)("div",{children:[(0,h.jsx)("button",{children:"add catalog"}),(0,h.jsx)("button",{children:"add item"}),(0,h.jsx)("p",{children:"List Catalogs"}),(0,h.jsx)(j,{})]}),g=t.d4,m=()=>{const[e,n]=(0,l.useState)(null),s=g(i);return(0,h.jsx)("ul",{children:s.map((s=>(0,h.jsxs)("li",{children:[(0,h.jsxs)("span",{onClick:()=>{return e=s.id,void n((n=>n===e?null:e));var e},children:[e===s.id?(0,h.jsx)(x,{}):(0,h.jsx)(c,{}),(0,h.jsx)("p",{children:s.name})," "]}),e===s.id&&(0,h.jsx)(u,{})]},s.id)))})},p=r.Ay.div`
    
    width: 400px;
    border: 1px solid rgb(7, 94, 138);
`,v=t.d4,b=()=>{const e=(0,t.wA)(),n=v(d),[s,i]=(0,l.useState)("");return(0,h.jsxs)("main",{children:[(0,h.jsx)("h1",{children:"main page"}),(0,h.jsxs)(p,{children:[(0,h.jsxs)("form",{onSubmit:n=>{n.preventDefault(),s?(e((0,a.c)({name:s})),i("")):alert("Please fill in all fields")},children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("label",{htmlFor:"name",children:"Catalog Name:"}),(0,h.jsx)("input",{type:"text",id:"name",value:s,onChange:e=>i(e.target.value)})]}),(0,h.jsx)("button",{type:"submit",disabled:n,children:n?"Adding...":"Add Catalog"})]}),(0,h.jsx)(m,{})]})]})}}}]);
//# sourceMappingURL=214.8db33a40.chunk.js.map