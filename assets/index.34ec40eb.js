import{d as v,W as C,f as h,q as b,o as r,m as k,a,u as e,B as g,ao as B,w as t,am as x,t as c,c as d,S as u,G as s,H as o,a1 as D,U as w,s as A}from"./vendor.87962847.js";/* empty css                          *//* empty css            *//* empty css             *//* empty css                *//* empty css                      */import{R as p,h as S}from"./index.a12c56c8.js";import{_ as y}from"./index.18f6ddb6.js";import{M as q}from"./index.99c0167c.js";import{u as I}from"./useToggle.27a48a26.js";import{_ as $}from"./index.48a6b7a1.js";import{_ as M}from"./index.736a80fe.js";/* empty css              */const R=[{text:"\u9898\u5E93\u7BA1\u7406"},{text:"\u9009\u62E9\u9898\u9898\u5E93",to:{name:p.QuestionMultipleChoice}},{text:"\u9898\u76EE\u8BE6\u60C5"}],F="_cardSkeleton_xheto_2",N="_detailCard_xheto_7";var m={cardSkeleton:F,detailCard:N};const Q={class:"outerWrapper"},Y=v({setup(T){const _=C(),{isActive:f,onUnActive:E}=I(!0),l=h({});return b(async()=>{const{id:i}=_.params,{data:n}=await S.getRequest(`${q}/${i}`);l.value=n!=null?n:{},E()}),(i,n)=>(r(),k("div",Q,[a(y,{path:e(R)},null,8,["path"]),a(e(g)),a(e(B),{loading:e(f),animated:""},{template:t(()=>[a(e(x),{class:c(e(m).cardSkeleton),variant:"rect"},null,8,["class"])]),default:t(()=>[l.value.questionId?(r(),d(e(A),{key:0,class:c(e(m).detailCard),shadow:"hover"},{default:t(()=>[a(e(w),{column:2,size:"large",title:`\u9898\u76EE ID\uFF1A ${l.value.questionId}`},{extra:t(()=>[a(M,{level:l.value.level},null,8,["level"])]),default:t(()=>[a(e(u),{span:2,label:"\u9898\u76EE"},{default:t(()=>[s(o(l.value.question),1)]),_:1}),a(e(u),{label:"\u8003\u8BD5\u79D1\u76EE"},{default:t(()=>[s(o(l.value.subject),1)]),_:1}),a(e(u),{label:"\u6240\u5C5E\u7AE0\u8282"},{default:t(()=>[s(o(l.value.section),1)]),_:1}),a(e(u),{span:2,label:"\u5206\u503C"},{default:t(()=>[s(o(l.value.score),1)]),_:1}),a(e(u),{label:"A"},{default:t(()=>[s(o(l.value.answerA),1)]),_:1}),a(e(u),{label:"B"},{default:t(()=>[s(o(l.value.answerB),1)]),_:1}),a(e(u),{label:"C"},{default:t(()=>[s(o(l.value.answerC),1)]),_:1}),a(e(u),{label:"D"},{default:t(()=>[s(o(l.value.answerD),1)]),_:1}),a(e(u),{span:2,label:"\u6B63\u786E\u7B54\u6848"},{default:t(()=>[a(e(D),null,{default:t(()=>[s(o(l.value.rightAnswer),1)]),_:1})]),_:1}),a(e(u),{span:2,label:"\u9898\u76EE\u89E3\u6790"},{default:t(()=>[s(o(l.value.analysis||"\u6682\u65E0\u89E3\u6790"),1)]),_:1})]),_:1},8,["title"])]),_:1},8,["class"])):(r(),d($,{key:1,"link-props":{text:"\u8FD4\u56DE\u9898\u5E93",to:{name:e(p).QuestionMultipleChoice}}},null,8,["link-props"]))]),_:1},8,["loading"])]))}});export{Y as default};
