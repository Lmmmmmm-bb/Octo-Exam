import{d as C,o as _,c as A,w as t,n as f,H as o,a,u as e,V as y,ad as F,S as s,a1 as h,G as n,U as W,s as b,$ as z,f as S,e as P,q as L,m as v,B as T,am as $,t as x,F as w,D as M,an as U,ao as I}from"./vendor.87962847.js";/* empty css                *//* empty css                      *//* empty css                */import{_ as V}from"./index.18f6ddb6.js";import{u as q}from"./useToggle.27a48a26.js";/* empty css             *//* empty css             *//* empty css               *//* empty css                          *//* empty css            *//* empty css                    *//* empty css               *//* empty css              *//* empty css                */import{h as k}from"./index.a12c56c8.js";import{E as N,a as j}from"./index.12213794.js";import{_ as R}from"./copyable.a9556f73.js";import{a as G}from"./close.77dff18e.js";import{_ as H}from"./index.22e1d88f.js";import"./plugin-vue_export-helper.1c6f6f40.js";/* empty css               */const O={class:"flex justify-between"},J=C({props:{exam:null},emits:["onDelete"],setup(B,{emit:p}){const r=B,g=async()=>{try{z.confirm("\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u8003\u8BD5\u5417\uFF1F","\u63D0\u793A",{cancelButtonText:"\u53D6\u6D88",confirmButtonText:"\u786E\u5B9A"}).then(async()=>{const{examCode:i}=r.exam;await k.deleteRequest(N,{params:{list:i}}),p("onDelete")})}catch{}};return(i,D)=>(_(),A(e(b),{shadow:"hover"},{header:t(()=>[f("div",O,[f("p",null,o(r.exam.source)+" - "+o(r.exam.description),1),a(e(F),{placement:"top",effect:"light",content:"\u5220\u9664\u8003\u8BD5"},{default:t(()=>[a(e(y),{class:"cursor-pointer",color:"#b92222",onClick:g},{default:t(()=>[a(e(G))]),_:1})]),_:1})])]),default:t(()=>[a(e(W),{column:2},{default:t(()=>[a(e(s),{label:"\u8003\u8BD5\u7801",span:2},{default:t(()=>[a(e(h),{class:"mr-1"},{default:t(()=>[n(o(r.exam.examCode),1)]),_:1}),a(R,{"copy-text":r.exam.examCode.toString(),tip:"\u70B9\u51FB\u590D\u5236\u8003\u8BD5\u7801"},null,8,["copy-text"])]),_:1}),a(e(s),{label:"\u8003\u8BD5\u65F6\u95F4"},{default:t(()=>[n(o(r.exam.examDate),1)]),_:1}),a(e(s),{label:"\u8003\u8BD5\u65F6\u957F"},{default:t(()=>[n(o(r.exam.totalTime)+" \u5206\u949F ",1)]),_:1}),a(e(s),{span:2,label:"\u5907\u6CE8"},{default:t(()=>[n(o(r.exam.tips),1)]),_:1}),a(e(s),{label:"\u5B66\u9662"},{default:t(()=>[n(o(r.exam.institute),1)]),_:1}),a(e(s),{label:"\u4E13\u4E1A"},{default:t(()=>[n(o(r.exam.major),1)]),_:1}),a(e(s),{label:"\u5E74\u7EA7"},{default:t(()=>[a(e(h),null,{default:t(()=>[n(o(r.exam.grade),1)]),_:1})]),_:1})]),_:1})]),_:1}))}}),K="_cardSkeleton_txdeh_2",Q="_examMainWrapper_txdeh_8",X="_examCardWrapper_txdeh_15",Y="_examPagination_txdeh_24";var m={cardSkeleton:K,examMainWrapper:Q,examCardWrapper:X,examPagination:Y};const Z={class:"outerWrapper"},Se=C({setup(B){const p=S([]),r=S(0),{isActive:g,onActive:i,onUnActive:D}=q(!0),l=P({current:1,pageSize:10}),E=async()=>{try{i();const{data:c}=await k.getRequest(j,{params:{page:l.current,pageSize:l.pageSize}});p.value=c.list,r.value=c.total}catch{}finally{D()}};return L(()=>{E()}),(c,d)=>(_(),v("div",Z,[a(V,{path:[{text:"\u8003\u8BD5\u7BA1\u7406"},{text:"\u8003\u8BD5\u5217\u8868"}]}),a(e(T)),a(e(I),{loading:e(g),count:3,throttle:500,animated:""},{template:t(()=>[a(e($),{class:x(e(m).cardSkeleton),variant:"rect"},null,8,["class"])]),default:t(()=>[f("div",{class:x(e(m).examMainWrapper)},[f("div",{class:x(e(m).examCardWrapper)},[(_(!0),v(w,null,M(p.value,u=>(_(),A(J,{key:u.paperId,exam:u,onOnDelete:E},null,8,["exam"]))),128)),a(e(U),{target:`.${e(m).examCardWrapper}`},null,8,["target"])],2),a(H,{currentPage:e(l).current,"onUpdate:currentPage":d[0]||(d[0]=u=>e(l).current=u),pageSize:e(l).pageSize,"onUpdate:pageSize":d[1]||(d[1]=u=>e(l).pageSize=u),class:x(e(m).examPagination),total:r.value,onPageChange:E},null,8,["currentPage","pageSize","class","total"])],2)]),_:1},8,["loading"])]))}});export{Se as default};
