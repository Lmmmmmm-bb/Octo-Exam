import{d as E,o as l,c as h,w as a,H as n,I as r,a as t,u as e,a3 as i,a5 as q,t as g,q as v,f as B,s as w,n as C,C as x,aA as A,ay as D,v as k,p as S,F as b,G as W,ar as y,az as I}from"./vendor.f69bab02.js";/* empty css                *//* empty css                *//* empty css               *//* empty css                *//* empty css                      */import{_ as L}from"./index.0f8372b2.js";/* empty css             *//* empty css                          */import{h as $,R as N}from"./index.432e9199.js";import{a as Q}from"./index.99c0167c.js";import{u as R}from"./useToggle.48734944.js";const F=E({props:{question:null},emits:["onClick"],setup(m,{emit:c}){const s=m;return(_,o)=>(l(),h(e(g),{shadow:"hover",class:"cursor-pointer",onClick:o[0]||(o[0]=f=>c("onClick"))},{header:a(()=>[n(r(s.question.question),1)]),default:a(()=>[t(e(q),{column:1},{default:a(()=>[t(e(i),{label:"A"},{default:a(()=>[n(r(s.question.answerA),1)]),_:1}),t(e(i),{label:"B"},{default:a(()=>[n(r(s.question.answerB),1)]),_:1}),t(e(i),{label:"C"},{default:a(()=>[n(r(s.question.answerC),1)]),_:1}),t(e(i),{label:"D"},{default:a(()=>[n(r(s.question.answerD),1)]),_:1})]),_:1})]),_:1}))}}),M="_cardSkeleton_jh83n_2",T="_questionCardWrapper_jh83n_8";var d={cardSkeleton:M,questionCardWrapper:T};const V=[{text:"\u9898\u5E93\u7BA1\u7406"},{text:"\u9009\u62E9\u9898\u9898\u5E93"}],j={class:"outerWrapper"},se=E({setup(m){const c=v(),{isActive:s,onUnActive:_}=R(!0),o=B([]),f=u=>{c.push({name:N.QuestionMultipleChoiceDetail,params:{id:u.questionId}})};return w(async()=>{const{data:u}=await $.getRequest(Q);o.value=u,_()}),(u,z)=>(l(),C("div",j,[t(L,{path:e(V)},null,8,["path"]),t(e(x)),t(e(A),{loading:e(s),count:3,animated:""},{template:a(()=>[t(e(D),{class:k(e(d).cardSkeleton),variant:"rect"},null,8,["class"])]),default:a(()=>[S("div",{class:k(e(d).questionCardWrapper)},[(l(!0),C(b,null,W(o.value,p=>(l(),h(e(y),{key:p.questionId,effect:"light",content:"\u70B9\u51FB\u67E5\u770B\u9898\u76EE\u8BE6\u60C5",placement:"top"},{default:a(()=>[t(F,{question:p,onOnClick:O=>f(p)},null,8,["question","onOnClick"])]),_:2},1024))),128))],2),t(e(I),{target:`.${e(d).questionCardWrapper}`},null,8,["target"])]),_:1},8,["loading"])]))}});export{se as default};
