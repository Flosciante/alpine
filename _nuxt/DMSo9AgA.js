import k from"./BL6yqx95.js";import w from"./BOlqF97Q.js";import v from"./C8Eh2li1.js";import{u as I}from"./DJxh0FO6.js";import{d as A,Y as S,I as g,M as c,c as a,e as r,f as o,h as i,F as C,Z as B,k as e,w as u,p as L,j as b,s as M,$ as N,X as T,l as V}from"./6IytWUAB.js";import"./BcWussCh.js";const q=t=>(L("data-v-a2eb3f5f"),t=t(),b(),t),F={key:0,class:"articles-list"},P={class:"featured"},Y={class:"layout"},$={key:1,class:"tour"},j=q(()=>o("p",null,"Seems like there are no articles yet.",-1)),D=A({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,l;const _=t,{data:m}=([s,l]=S(async()=>I(_.path,async()=>await M(N(_.path)).sort({date:-1}).find(),"$qseMKTax2M")),s=await s,l(),s),n=g(()=>m.value||[]);return(E,K)=>{var d;const p=k,f=w,h=v;return(d=c(n))!=null&&d.length?(a(),r("div",F,[o("div",P,[i(p,{article:c(n)[0],featured:!0},null,8,["article"])]),o("div",Y,[(a(!0),r(C,null,B(c(n).slice(1),(y,x)=>(a(),T(p,{key:x,article:y},null,8,["article"]))),128))])])):(a(),r("div",$,[j,o("p",null,[e(" You can start by "),i(f,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:u(()=>[e("creating")]),_:1}),e(" one in the "),i(h,null,{default:u(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}}),O=V(D,[["__scopeId","data-v-a2eb3f5f"]]);export{O as default};
