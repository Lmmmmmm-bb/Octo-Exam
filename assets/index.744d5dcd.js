import{d as v,o as n,c as f,w as s,a as t,u as e,a1 as h,p as B,H as I,aJ as w,q as E,I as r,J as u,ai as x,a4 as o,a6 as z,G as F,aK as L,f as y,e as S,t as $,ac as k,D as A,a7 as C}from"./vendor.7076edc9.js";/* empty css                */import{_ as T}from"./index.b8d37dcf.js";/* empty css            *//* empty css                          */import{_ as J}from"./index.902f5409.js";/* empty css             */import{c as N,a as Q}from"./close.4d9810e0.js";import{_ as V}from"./copyable.e2987053.js";import{h as j}from"./index.f978a734.js";import{b as q}from"./index.99c0167c.js";import{_ as U}from"./index.7e3859b2.js";import{u as G}from"./useToggle.d2fcbe59.js";import"./question.83046fb6.js";import"./plugin-vue_export-helper.1c6f6f40.js";/* empty css                *//* empty css               *//* empty css              *//* empty css               */const H=[{text:"\u9898\u5E93\u7BA1\u7406"},{text:"\u5224\u65AD\u9898\u9898\u5E93"}];const K=v({props:{answer:null},setup(c){const i=c;return(p,m)=>i.answer==="T"?(n(),f(e(h),{key:0,color:"#569cba"},{default:s(()=>[t(e(N))]),_:1})):(n(),f(e(h),{key:1,color:"#b92222"},{default:s(()=>[t(e(Q))]),_:1}))}}),M={class:"text-base"},P={class:"ml-3"},R=v({props:{questionList:null},setup(c){const i=c;return(p,m)=>(n(),f(e(L),{accordion:""},{default:s(()=>[(n(!0),B(F,null,I(i.questionList,a=>(n(),f(e(w),{key:a.questionId,name:a.questionId},{title:s(()=>[E("div",M,[t(e(x),null,{default:s(()=>[r(u(a.questionId),1)]),_:2},1024),E("span",P,u(a.question),1)])]),default:s(()=>[t(e(z),{column:2},{default:s(()=>[t(e(o),{label:"\u9898\u76EE\u7F16\u53F7",span:2},{default:s(()=>[t(e(x),{class:"mr-1"},{default:s(()=>[r(u(a.questionId),1)]),_:2},1024),t(V,{tip:"\u70B9\u51FB\u590D\u5236\u9898\u76EE\u7F16\u53F7","tip-placement":"right","copy-text":a.questionId.toString()},null,8,["copy-text"])]),_:2},1024),t(e(o),{label:"\u5206\u6570"},{default:s(()=>[r(u(a.score)+" \u5206 ",1)]),_:2},1024),t(e(o),{label:"\u96BE\u5EA6"},{default:s(()=>[t(J,{level:a.level},null,8,["level"])]),_:2},1024),t(e(o),{label:"\u79D1\u76EE"},{default:s(()=>[r(u(a.subject),1)]),_:2},1024),t(e(o),{label:"\u6240\u5C5E\u7AE0\u8282"},{default:s(()=>[r(u(a.section||"\u6682\u65E0\u7AE0\u8282\u4FE1\u606F"),1)]),_:2},1024),t(e(o),{label:"\u9898\u76EE\u89E3\u6790",span:2},{default:s(()=>[r(u(a.analysis||"\u6682\u65E0\u89E3\u6790"),1)]),_:2},1024),t(e(o),{label:"\u6B63\u786E\u7B54\u6848"},{default:s(()=>[t(K,{answer:a.answer},null,8,["answer"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["name"]))),128))]),_:1}))}}),W={class:"outerWrapper"},O={class:"flex justify-center"},ge=v({setup(c){const{isActive:i,onToggle:p}=G(),m=y([]),a=y(0),l=S({current:1,pageSize:10}),b=async()=>{try{p();const{data:d}=await j.getRequest(q,{params:{page:l.current,pageSize:l.pageSize}});m.value=d.list,a.value=d.total}catch{}finally{p()}};return $(()=>{b()}),(d,_)=>{const D=k("loading");return n(),B("div",W,[t(T,{path:e(H)},null,8,["path"]),t(e(A)),C(t(R,{"question-list":m.value},null,8,["question-list"]),[[D,e(i)]]),E("div",O,[t(U,{"current-page":e(l).current,"onUpdate:current-page":_[0]||(_[0]=g=>e(l).current=g),"page-size":e(l).pageSize,"onUpdate:page-size":_[1]||(_[1]=g=>e(l).pageSize=g),class:"mt-4",total:a.value,onPageChange:b},null,8,["current-page","page-size","total"])])])}}});export{ge as default};
