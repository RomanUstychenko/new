"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[517],{517:(e,t,n)=>{n.r(t),n.d(t,{default:()=>B});var l=n(43),o=n(3),i=n(464),d=n(156);const a=i.Ay.div`
    
    width: 400px;
    border: 1px solid rgb(7, 94, 138);
`,s=(0,i.Ay)(d.KfJ)`
    
`,r=(0,i.Ay)(d.oeh)`
    
`;var c=n(950),p=n(394);const u=i.Ay.div`
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
`,h=i.Ay.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  overflow-y: auto;
  overflow-x: hidden;
  transition: 0.5s;
  justify-content: center;
  display: flex;
  opacity: 0;
  pointer-events: none;
  transition: 1s;
  &.active {
    opacity: 1;
    pointer-events: all;
  }
`,x=i.Ay.button`
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: transparent;
  border: none;
  padding: 0;
`,m=(0,i.Ay)(p.$8F)`
  color: #2e2828;
  width: 30px;
  height: 30px;
  &:hover,
  &:focus {
    /* color: ${e=>e.theme.colors.btnActive}; */
    cursor: pointer;
  }
`;var j=n(579);const v=document.getElementById("modal-root"),g=e=>{let{active:t,onClick:n,setActive:o,children:i}=e;return(0,l.useEffect)((()=>{document.body.style.overflow="hidden";const e=e=>{"Escape"===e.code&&(o(!1),document.body.style.overflow="")};return window.addEventListener("keydown",e),()=>{document.body.style.overflow="",window.removeEventListener("keydown",e)}}),[o]),(0,c.createPortal)((0,j.jsx)(h,{className:t?"modal active":"modal",onClick:n,children:(0,j.jsxs)(u,{children:[i,(0,j.jsx)(x,{onClick:n,children:(0,j.jsx)(m,{})})]})}),v)},b=e=>e.mainCatalog.mainCatalog,y=e=>e.mainCatalog.secondaryCatalog,f=e=>e.mainCatalog.loading;var C=n(611);const A=i.Ay.form`
    
    width: 200px;
    height: 200px;
`,w=o.d4,k=e=>{let{closeModal:t}=e;const n=w(f),[i,d]=(0,l.useState)(""),a=(0,o.wA)();return(0,j.jsxs)(A,{onClick:e=>e.stopPropagation(),onSubmit:e=>{e.preventDefault(),i?(a((0,C.ct)({name:i})),d(""),t()):alert("Please fill in all fields")},children:[(0,j.jsxs)("div",{children:[(0,j.jsx)("label",{htmlFor:"name",children:"Catalog Name:"}),(0,j.jsx)("input",{type:"text",id:"name",value:i,onChange:e=>d(e.target.value)})]}),(0,j.jsx)("button",{type:"submit",disabled:n,children:n?"Adding...":"Add Catalog"})]})};var F=n(390);const I=e=>e.item.mainItem,S=o.d4,M=()=>{const e=S(I);return(0,j.jsxs)("div",{children:[(0,j.jsx)("button",{children:"add item"}),(0,j.jsx)("ul",{children:e.map((e=>(0,j.jsxs)("li",{children:[e.name," - ",e.price]},e.id)))})]})},P=i.Ay.form`
    
    width: 200px;
    height: 200px;
`,D=o.d4,E=e=>{let{closeModal:t,openFolderId:n}=e;const i=(0,o.wA)(),[d,a]=(0,l.useState)(""),s=D(f);return(0,j.jsxs)(P,{onClick:e=>e.stopPropagation(),onSubmit:e=>{e.preventDefault(),d?(i((0,C.J6)({openFolderId:n,name:d})),console.log("openFolderId",n),a(""),t()):alert("Please fill in all fields")},children:[(0,j.jsxs)("div",{children:[(0,j.jsx)("label",{htmlFor:"name",children:"Catalog Name:"}),(0,j.jsx)("input",{type:"text",id:"name",value:d,onChange:e=>a(e.target.value)})]}),(0,j.jsx)("button",{type:"submit",disabled:s,children:s?"Adding...":"Add Catalog"})]})},N=o.d4,J=e=>{let{closeModal:t,openFolderId:n}=e;const i=(0,o.wA)(),[d,a]=(0,l.useState)(""),[s,r]=(0,l.useState)(""),[c,p]=(0,l.useState)(""),u=N(f);return(0,j.jsxs)("form",{onClick:e=>e.stopPropagation(),onSubmit:e=>{e.preventDefault(),d?(i((0,F.a)({catalog:n,name:d,description:s,price:c})),console.log("openFolderId",n),t()):alert("Please fill in all fields")},children:[(0,j.jsxs)("div",{children:[(0,j.jsx)("label",{htmlFor:"name",children:"Item Name:"}),(0,j.jsx)("input",{type:"text",id:"name",value:d,onChange:e=>a(e.target.value)})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("label",{htmlFor:"price",children:"Item Price:"}),(0,j.jsx)("input",{type:"text",id:"price",value:c,onChange:e=>p(e.target.value)})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("label",{htmlFor:"name",children:"Item Description:"}),(0,j.jsx)("input",{type:"text",id:"Description",value:s,onChange:e=>r(e.target.value)})]}),(0,j.jsx)("button",{type:"submit",disabled:u,children:u?"Adding...":"Add MainItem"})]})},L=o.d4,$=e=>{let{openFolderId:t}=e;const n=L(y),[o,i]=(0,l.useState)(!1),[d,a]=(0,l.useState)(!1),s=()=>{i(!1),a(!1)};return(0,j.jsxs)("div",{children:[o&&(0,j.jsx)(g,{active:o,setActive:i,onClick:s,children:(0,j.jsx)(E,{openFolderId:t,closeModal:s})}),d&&(0,j.jsx)(g,{active:d,setActive:a,onClick:s,children:(0,j.jsx)(J,{openFolderId:t,closeModal:s})}),(0,j.jsx)("button",{onClick:()=>i(!0),children:"Add Secondary Catalog"}),(0,j.jsx)("button",{onClick:()=>a(!0),children:"Add Main Item"}),(0,j.jsx)("ul",{children:n.map((e=>(0,j.jsx)("li",{children:e.name},e.id)))}),(0,j.jsx)(M,{})]})},z=o.d4,B=()=>{const[e,t]=(0,l.useState)(!1),[n,i]=(0,l.useState)(null),d=z(b),c=(0,o.wA)(),p=()=>{t(!1)};return(0,j.jsxs)("main",{children:[(0,j.jsx)("h1",{children:"main page"}),(0,j.jsxs)(a,{children:[(0,j.jsx)("button",{onClick:()=>t(!0),children:"add Main Catalog"}),e&&(0,j.jsx)(g,{active:e,setActive:t,onClick:p,children:(0,j.jsx)(k,{closeModal:p})}),(0,j.jsx)("ul",{children:d.map((e=>(0,j.jsxs)("li",{children:[(0,j.jsxs)("span",{onClick:t=>((e,t)=>{t.preventDefault();const l=n===e?null:e;i(l),console.log("newOpenFolder",l),c((0,C.yj)(l)),c((0,F.C)(l))})(e.id,t),children:[n===e.id?(0,j.jsx)(r,{}):(0,j.jsx)(s,{}),(0,j.jsx)("p",{children:e.name})," "]}),n===e.id&&(0,j.jsx)($,{openFolderId:n})]},e.id)))})]})]})}}}]);
//# sourceMappingURL=517.b158813e.chunk.js.map