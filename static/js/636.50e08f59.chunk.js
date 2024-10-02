"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[636],{636:(e,n,o)=>{o.r(n),o.d(n,{default:()=>W});var t=o(43),l=o(3),i=o(464),d=o(156),r=o(423),s=o(184);const a=i.Ay.main`
padding: 15px 3px;
    border: 1px solid rgb(7, 94, 138);
`,c=i.Ay.div`
display: block;
width: 130px;
height: 70px;
margin-left: 50px;
    border: 1px solid rgb(56, 61, 63);
    border-radius: 5px;
`,p=i.Ay.button`
width: 100%;
background-color: inherit;
border: none;
`,x=(0,i.Ay)(s.ui4)`
    width: 25px;
    height: 25px;
`,h=i.Ay.p`
    font-size: 18px;
`,u=(0,i.Ay)(r.pte)`
    width: 20px;
    height: 20px;
`,y=(0,i.Ay)(d.KfJ)`
    fill: #0e0e7e;
    width: 20px;
    height: 20px;
`,m=(0,i.Ay)(r.OQo)`
    width: 20px;
    height: 20px;
`,j=(0,i.Ay)(d.oeh)`
     fill: #0e0e7e;
     width: 20px;
    height: 20px;
`,v=i.Ay.span`
    display: flex;
`;var g=o(950),k=o(394);const b=i.Ay.div`
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
`,f=i.Ay.div`
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
`,A=i.Ay.button`
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: transparent;
  border: none;
  padding: 0;
`,w=(0,i.Ay)(k.$8F)`
  color: #2e2828;
  width: 30px;
  height: 30px;
  &:hover,
  &:focus {
    /* color: ${e=>e.theme.colors.btnActive}; */
    cursor: pointer;
  }
`;var C=o(579);const I=document.getElementById("modal-root"),F=e=>{let{active:n,onClick:o,setActive:l,children:i}=e;return(0,t.useEffect)((()=>{document.body.style.overflow="hidden";const e=e=>{"Escape"===e.code&&(l(!1),document.body.style.overflow="")};return window.addEventListener("keydown",e),()=>{document.body.style.overflow="",window.removeEventListener("keydown",e)}}),[l]),(0,g.createPortal)((0,C.jsx)(f,{className:n?"modal active":"modal",onClick:o,children:(0,C.jsxs)(b,{children:[i,(0,C.jsx)(A,{onClick:o,children:(0,C.jsx)(w,{})})]})}),I)},S=e=>e.mainCatalog.mainCatalog,M=e=>e.mainCatalog.secondaryCatalog,D=e=>e.mainCatalog.loading;var E=o(611),P=o(390);const J=e=>e.item.mainItem,L=e=>e.item.secondaryItem,O=l.d4,z=()=>{const e=O(J);return(0,C.jsx)("div",{children:(0,C.jsx)("ul",{children:e.map((e=>(0,C.jsxs)("li",{children:[e.name," - ",e.price]},e.id)))})})},K=i.Ay.form`
    
    width: 200px;
    height: 200px;
`,N=l.d4,$=e=>{let{closeModal:n,openFolderId:o,isSecondary:i}=e;const d=(0,l.wA)(),[r,s]=(0,t.useState)(""),a=N(D);return(0,C.jsxs)(K,{onClick:e=>e.stopPropagation(),onSubmit:e=>{e.preventDefault(),r?(i?(d((0,E.J6)({openFolderId:o,name:r})),console.log("openFolderId",o)):(console.log("else"),d((0,E.ct)({name:r}))),s(""),n()):alert("Please fill in all fields")},children:[(0,C.jsxs)("div",{children:[(0,C.jsx)("label",{htmlFor:"name",children:"Catalog Name:"}),(0,C.jsx)("input",{type:"text",id:"name",value:r,onChange:e=>s(e.target.value)})]}),(0,C.jsx)("button",{type:"submit",disabled:a,children:a?"Adding...":"Add Catalog"})]})},q=l.d4,B=e=>{let{closeModal:n,openFolderId:o,isSecondaryItem:i}=e;const d=(0,l.wA)(),r=q(D),[s,a]=(0,t.useState)([{key:"name",value:""},{key:"price",value:""},{key:"description",value:""}]),c=e=>{const{name:n,value:o}=e.target;a((e=>e.map((e=>e.key===n?{...e,value:o}:e))))},p=s.reduce(((e,n)=>(""===n.value&&"name"!==n.key&&"price"!==n.key||(e[n.key]=n.value),e)),{});console.log("result",p);const x=e=>{var n;return(null===(n=s.find((n=>n.key===e)))||void 0===n?void 0:n.value)||""};return(0,C.jsxs)("form",{onClick:e=>e.stopPropagation(),onSubmit:async e=>{if(e.preventDefault(),o)try{i?await d((0,P.jf)({catalog:o,fields:p})):await d((0,P.aL)({catalog:o,fields:p})),a((e=>e.map((e=>({...e,value:""}))))),n()}catch(t){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u0456 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0430:",t)}else alert("Catalog ID is missing")},children:[s.map((e=>(0,C.jsxs)("div",{children:[(0,C.jsxs)("label",{htmlFor:e.key,children:[e.key.charAt(0).toUpperCase()+e.key.slice(1),":"]}),(0,C.jsx)("input",{type:"text",id:e.key,name:e.key,required:"name"===e.key||"price"===e.key,value:x(e.key),onChange:c})]},e.key))),(0,C.jsx)("button",{type:"submit",disabled:r,children:r?"Adding...":"Add SecondaryItem"})]})},Q=(i.Ay.div`
    
    width: 400px;
    border: 1px solid rgb(7, 94, 138);
`,(0,i.Ay)(d.KfJ)`
    
`),T=(0,i.Ay)(d.oeh)`
    
`,U=l.d4,G=e=>{let{openSecondaryFolderId:n}=e;const o=U(L),[l,i]=(0,t.useState)(!1),d=()=>{i(!1)};return(0,C.jsxs)("div",{children:[l&&(0,C.jsx)(F,{active:l,setActive:i,onClick:d,children:(0,C.jsx)(B,{openFolderId:n,closeModal:d,isSecondaryItem:!0})}),(0,C.jsx)("button",{onClick:()=>i(!0),children:"add secondary items"}),(0,C.jsx)("ul",{children:o.map((e=>(0,C.jsxs)("li",{children:[e.name," - ",e.price]},e.id)))})]})},H=l.d4,R=e=>{let{openFolderId:n}=e;const o=(0,l.wA)(),i=H(M),[d,r]=(0,t.useState)(!1),[s,a]=(0,t.useState)(!1),[c,p]=(0,t.useState)(null),x=()=>{r(!1),a(!1)};return(0,C.jsxs)("div",{children:[d&&(0,C.jsx)(F,{active:d,setActive:r,onClick:x,children:(0,C.jsx)($,{openFolderId:n,closeModal:x,isSecondary:!0})}),s&&(0,C.jsx)(F,{active:s,setActive:a,onClick:x,children:(0,C.jsx)(B,{openFolderId:n,closeModal:x,isSecondaryItem:!1})}),(0,C.jsx)("button",{onClick:()=>r(!0),children:"Add Secondary Catalog"}),(0,C.jsx)("button",{onClick:()=>a(!0),children:"Add Main Item"}),(0,C.jsx)("ul",{children:i.map((e=>(0,C.jsxs)("li",{children:[(0,C.jsxs)("span",{onClick:n=>((e,n)=>{n.preventDefault();const t=c===e?null:e;p(t),console.log("newOpenFolder",t),o((0,P.rF)(t))})(e.id,n),children:[c===e.id?(0,C.jsx)(T,{}):(0,C.jsx)(Q,{}),(0,C.jsx)("p",{children:e.name})," "]}),c===e.id&&(0,C.jsx)(G,{openSecondaryFolderId:c})]},e.id)))}),(0,C.jsx)(z,{})]})},V=l.d4,W=()=>{const[e,n]=(0,t.useState)(!1),[o,i]=(0,t.useState)(null),d=V(S),r=(0,l.wA)(),s=()=>{n(!1)};return(0,C.jsxs)(a,{children:[(0,C.jsxs)(c,{children:[(0,C.jsx)(x,{}),(0,C.jsx)(p,{onClick:()=>n(!0),children:(0,C.jsx)(h,{children:"Add Catalog"})})]}),e&&(0,C.jsx)(F,{active:e,setActive:n,onClick:s,children:(0,C.jsx)($,{closeModal:s,isSecondary:!1,openFolderId:null})}),(0,C.jsx)("ul",{children:d.map((e=>(0,C.jsxs)("li",{children:[(0,C.jsxs)(v,{onClick:n=>((e,n)=>{n.preventDefault();const t=o===e?null:e;i(t),console.log("newOpenFolder",t),r((0,E.yj)(t)),r((0,P.CT)(t))})(e.id,n),children:[o===e.id?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(u,{}),(0,C.jsx)(j,{})]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(m,{}),(0,C.jsx)(y,{})]}),(0,C.jsx)("p",{children:e.name})," "]}),o===e.id&&(0,C.jsx)(R,{openFolderId:o})]},e.id)))})]})}}}]);
//# sourceMappingURL=636.50e08f59.chunk.js.map