import k from"./BnNYdnGs.js";import v from"./Dus2Hznf.js";import w from"./CsUEacBa.js";import{u as I}from"./BkoS5XlS.js";import{d as A,Y as S,I as g,M as n,c as a,e as r,f as o,h as i,F as C,Z as B,k as e,w as u,p as L,j as N,s as b,$ as P,X as V,l as F}from"./CWsukJrg.js";import"./BcWussCh.js";const T=t=>(L("data-v-b45484ec"),t=t(),N(),t),Y={key:0,class:"articles-list"},$={class:"featured"},j={class:"layout"},q={key:1,class:"tour"},D=T(()=>o("p",null,"Seems like there are no articles yet.",-1)),E=A({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,l;const _=t,{data:m}=([s,l]=S(async()=>I(_.path,async()=>await b(P(_.path)).sort({date:-1}).find(),"$WcHhN7Pvd2")),s=await s,l(),s),c=g(()=>m.value||[]);return(H,M)=>{var d;const p=k,h=v,f=w;return(d=n(c))!=null&&d.length?(a(),r("div",Y,[o("div",$,[i(p,{article:n(c)[0],featured:!0},null,8,["article"])]),o("div",j,[(a(!0),r(C,null,B(n(c).slice(1),(y,x)=>(a(),V(p,{key:x,article:y},null,8,["article"]))),128))])])):(a(),r("div",q,[D,o("p",null,[e(" You can start by "),i(h,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:u(()=>[e("creating")]),_:1}),e(" one in the "),i(f,null,{default:u(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}}),K=F(E,[["__scopeId","data-v-b45484ec"]]);export{K as default};
