import{d as E,o as l,c as h,w as a,I as n,J as r,a as t,u as e,a4 as i,a6 as q,v as g,s as v,f as B,t as w,p as C,D as x,aB as D,az as A,x as k,q as S,G as b,H as W,as as I,aA as L}from"./vendor.7076edc9.js";/* empty css                *//* empty css                *//* empty css               *//* empty css                *//* empty css                      */import{_ as $}from"./index.b8d37dcf.js";/* empty css             *//* empty css                          */import{h as y,R as N}from"./index.f978a734.js";import{a as Q}from"./index.99c0167c.js";import{u as R}from"./useToggle.d2fcbe59.js";const M=E({props:{question:null},emits:["onClick"],setup(m,{emit:c}){const s=m;return(_,o)=>(l(),h(e(g),{shadow:"hover",class:"cursor-pointer",onClick:o[0]||(o[0]=f=>c("onClick"))},{header:a(()=>[n(r(s.question.question),1)]),default:a(()=>[t(e(q),{column:1},{default:a(()=>[t(e(i),{label:"A"},{default:a(()=>[n(r(s.question.answerA),1)]),_:1}),t(e(i),{label:"B"},{default:a(()=>[n(r(s.question.answerB),1)]),_:1}),t(e(i),{label:"C"},{default:a(()=>[n(r(s.question.answerC),1)]),_:1}),t(e(i),{label:"D"},{default:a(()=>[n(r(s.question.answerD),1)]),_:1})]),_:1})]),_:1}))}}),T="_cardSkeleton_jh83n_2",V="_questionCardWrapper_jh83n_8";var d={cardSkeleton:T,questionCardWrapper:V};const j=[{text:"\u9898\u5E93\u7BA1\u7406"},{text:"\u9009\u62E9\u9898\u9898\u5E93"}],z={class:"outerWrapper"},se=E({setup(m){const c=v(),{isActive:s,onUnActive:_}=R(!0),o=B([]),f=u=>{c.push({name:N.QuestionMultipleChoiceDetail,params:{id:u.questionId}})};return w(async()=>{const{data:u}=await y.getRequest(Q);o.value=u,_()}),(u,F)=>(l(),C("div",z,[t($,{path:e(j)},null,8,["path"]),t(e(x)),t(e(D),{loading:e(s),count:3,animated:""},{template:a(()=>[t(e(A),{class:k(e(d).cardSkeleton),variant:"rect"},null,8,["class"])]),default:a(()=>[S("div",{class:k(e(d).questionCardWrapper)},[(l(!0),C(b,null,W(o.value,p=>(l(),h(e(I),{key:p.questionId,effect:"light",content:"\u70B9\u51FB\u67E5\u770B\u9898\u76EE\u8BE6\u60C5",placement:"top"},{default:a(()=>[t(M,{question:p,onOnClick:O=>f(p)},null,8,["question","onOnClick"])]),_:2},1024))),128))],2),t(e(L),{target:`.${e(d).questionCardWrapper}`},null,8,["target"])]),_:1},8,["loading"])]))}});export{se as default};
