import"./B5Pu2FKB.js";import{d as p,r as o,c as _,e as f,f as s,h as v,n,M as l,aq as h,ar as g,a6 as y,l as V}from"./BDiB4Hsv.js";import{r}from"./BcyoeN35.js";import"./2ETV-d1z.js";const C={class:"summary"},w={class:"content"},k=p({__name:"Callout",props:{type:{type:String,default:"info",validator(a){return["info","success","warning","danger","primary"].includes(a)}},modelValue:{required:!1,default:()=>o(!1)}},emits:["update:modelValue"],setup(a,{emit:c}){const i=a,u=c,e=o(i.modelValue),d=()=>{e.value=!e.value,u("update:modelValue",e.value)};return(t,B)=>{const m=y;return _(),f("div",{class:n(["callout",[a.type]])},[s("span",{class:"preview",onClick:d},[s("span",C,[r(t.$slots,"summary",{},void 0,!0)]),v(m,{name:"heroicons-outline:chevron-right",class:n(["icon",[l(e)&&"rotate"]])},null,8,["class"])]),h(s("div",w,[r(t.$slots,"content",{},void 0,!0)],512),[[g,l(e)]])],2)}}}),N=V(k,[["__scopeId","data-v-a5dbd502"]]);export{N as default};
