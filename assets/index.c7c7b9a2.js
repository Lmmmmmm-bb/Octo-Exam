import{d as h,o as u,c as f,w as s,a as t,u as e,$ as x,n as q,G as z,aI as k,p as v,H as c,I as l,ah as I,a3 as n,a5 as C,F as T,aJ as D,f as $,e as Q,s as B,ab as N,C as j,a6 as A}from"./vendor.f69bab02.js";/* empty css                */import{_ as F}from"./index.0f8372b2.js";/* empty css            *//* empty css                          */import{_ as R}from"./index.eb9c8598.js";/* empty css             */import{c as V,a as J}from"./close.2a2edd12.js";import{_ as M}from"./copyable.ce677b35.js";import{u as E}from"./useLocale.448bb733.js";import{R as w,h as U}from"./index.26d83821.js";import{b as G}from"./index.99c0167c.js";import{_ as H}from"./index.d708a4d4.js";import{u as P}from"./useToggle.48734944.js";import"./question.83046fb6.js";import"./plugin-vue_export-helper.1c6f6f40.js";/* empty css                *//* empty css               *//* empty css              *//* empty css               */const W=h({props:{answer:null},setup(p){const r=p;return(o,m)=>r.answer==="T"?(u(),f(e(x),{key:0,color:"#569cba"},{default:s(()=>[t(e(V))]),_:1})):(u(),f(e(x),{key:1,color:"#b92222"},{default:s(()=>[t(e(J))]),_:1}))}}),K={class:"text-base"},O={class:"ml-3"},X=h({props:{questionList:null},setup(p){const r=p,{t:o}=E();return(m,g)=>(u(),f(e(D),{accordion:""},{default:s(()=>[(u(!0),q(T,null,z(r.questionList,a=>(u(),f(e(k),{key:a.questionId,name:a.questionId},{title:s(()=>[v("div",K,[t(e(I),null,{default:s(()=>[c(l(a.questionId),1)]),_:2},1024),v("span",O,l(a.question),1)])]),default:s(()=>[t(e(C),{column:2},{default:s(()=>[t(e(n),{label:e(o)("question.id"),span:2},{default:s(()=>[t(e(I),{class:"mr-1"},{default:s(()=>[c(l(a.questionId),1)]),_:2},1024),t(M,{tip:e(o)("common.copyable",{target:e(o)("question.id")}),"tip-placement":"right","copy-text":a.questionId.toString()},null,8,["tip","copy-text"])]),_:2},1032,["label"]),t(e(n),{label:e(o)("score.score")},{default:s(()=>[c(l(a.score),1)]),_:2},1032,["label"]),t(e(n),{label:e(o)("question.level")},{default:s(()=>[t(R,{level:a.level},null,8,["level"])]),_:2},1032,["label"]),t(e(n),{label:e(o)("score.subject")},{default:s(()=>[c(l(a.subject),1)]),_:2},1032,["label"]),t(e(n),{label:e(o)("question.section")},{default:s(()=>[c(l(a.section||e(o)("question.noSection")),1)]),_:2},1032,["label"]),t(e(n),{label:e(o)("question.analysis"),span:2},{default:s(()=>[c(l(a.analysis||e(o)("question.noAnalysis")),1)]),_:2},1032,["label"]),t(e(n),{label:e(o)("question.answer")},{default:s(()=>[t(W,{answer:a.answer},null,8,["answer"])]),_:2},1032,["label"])]),_:2},1024)]),_:2},1032,["name"]))),128))]),_:1}))}}),Y={class:"outerWrapper"},Z={class:"flex justify-center"},ye=h({setup(p){const{t:r}=E(),{isActive:o,onToggle:m}=P(),g=$([]),a=$(0),i=Q({current:1,pageSize:10}),L=[{text:r(`menu.${w.QuestionManage}`)},{text:r(`menu.${w.QuestionTrueFalse}`)}],y=async()=>{try{m();const{data:d}=await U.getRequest(G,{params:{page:i.current,pageSize:i.pageSize}});g.value=d.list,a.value=d.total}catch{}finally{m()}};return B(()=>{y()}),(d,_)=>{const S=N("loading");return u(),q("div",Y,[t(F,{path:L}),t(e(j)),A(t(X,{"question-list":g.value},null,8,["question-list"]),[[S,e(o)]]),v("div",Z,[t(H,{"current-page":e(i).current,"onUpdate:current-page":_[0]||(_[0]=b=>e(i).current=b),"page-size":e(i).pageSize,"onUpdate:page-size":_[1]||(_[1]=b=>e(i).pageSize=b),class:"mt-4",total:a.value,onPageChange:y},null,8,["current-page","page-size","total"])])])}}});export{ye as default};