import{u as m}from"./DNQOMv_1.js";import{d as v,r as h,I as f,c as e,e as o,M as i,g as p,f as t,F as y,Z as C,p as k,j as g,t as b,l as I}from"./CoEYDztK.js";const n=s=>(k("data-v-4b3d548f"),s=s(),g(),s),S={key:0,class:"copied"},w=n(()=>t("div",{class:"scrim"},null,-1)),x=n(()=>t("div",{class:"content"}," Copied! ",-1)),B=[w,x],T=n(()=>t("div",{class:"header"},[t("div",{class:"controls"},[t("div"),t("div"),t("div")]),t("div",{class:"title"}," Bash ")],-1)),j={class:"window"},F=n(()=>t("span",{class:"sign"},"$",-1)),N={class:"content"},V={key:1,class:"prompt"},q=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(s){const a=s,{copy:l}=m(),c=h("init"),d=f(()=>typeof a.content=="string"?[a.content]:a.content),_=u=>{l(d.value.join(`
`)).then(()=>{c.value="copied",setTimeout(()=>{c.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,A)=>(e(),o("div",{class:"terminal",onClick:_},[i(c)==="copied"?(e(),o("div",S,B)):p("",!0),T,t("div",j,[(e(!0),o(y,null,C(i(d),r=>(e(),o("span",{key:r,class:"line"},[F,t("span",N,b(r),1)]))),128))]),i(c)!=="copied"?(e(),o("div",V," Click to copy ")):p("",!0)]))}}),L=I(q,[["__scopeId","data-v-4b3d548f"]]);export{L as default};