import{d as k,o as f,c as z,w as o,p as _,I as n,a,u as e,$ as A,ar as B,a3 as l,ah as S,H as s,a5 as L,t as P,ae as $,f as C,e as M,s as T,n as y,C as w,ay as I,v as x,F as N,G as R,az as U,aA as j}from"./vendor.f69bab02.js";/* empty css                *//* empty css                      *//* empty css                */import{_ as V}from"./index.0f8372b2.js";import{u as q}from"./useToggle.48734944.js";import{u as D}from"./useLocale.448bb733.js";/* empty css             *//* empty css             *//* empty css                *//* empty css               *//* empty css                          *//* empty css            *//* empty css                    *//* empty css               *//* empty css              *//* empty css                */import{h as W,R as F}from"./index.26d83821.js";import{a as G,b as H}from"./index.7955fae0.js";import{_ as O}from"./copyable.ce677b35.js";import{a as J}from"./close.2a2edd12.js";import{_ as K}from"./index.d708a4d4.js";import"./plugin-vue_export-helper.1c6f6f40.js";/* empty css               */const Q={class:"flex justify-between"},X=k({props:{exam:null},emits:["onDelete"],setup(b,{emit:g}){const r=b,{t}=D(),h=async()=>{try{$.confirm(t("exam.deleteConfirm"),t("common.tip"),{cancelButtonText:t("common.cancel"),confirmButtonText:t("common.confirm")}).then(async()=>{const{examCode:p}=r.exam;await W.deleteRequest(G,{params:{list:p}}),g("onDelete")})}catch{}};return(p,v)=>(f(),z(e(P),{shadow:"hover"},{header:o(()=>[_("div",Q,[_("p",null,n(r.exam.source)+" - "+n(r.exam.description),1),a(e(B),{placement:"top",effect:"light",content:e(t)("exam.delete")},{default:o(()=>[a(e(A),{class:"cursor-pointer",color:"#b92222",onClick:h},{default:o(()=>[a(e(J))]),_:1})]),_:1},8,["content"])])]),default:o(()=>[a(e(L),{column:2},{default:o(()=>[a(e(l),{label:e(t)("exam.code"),span:2},{default:o(()=>[a(e(S),{class:"mr-1"},{default:o(()=>[s(n(r.exam.examCode),1)]),_:1}),a(O,{"copy-text":r.exam.examCode.toString(),tip:e(t)("common.copyable",{target:e(t)("exam.code")})},null,8,["copy-text","tip"])]),_:1},8,["label"]),a(e(l),{label:e(t)("exam.date")},{default:o(()=>[s(n(r.exam.examDate),1)]),_:1},8,["label"]),a(e(l),{label:e(t)("exam.duration")},{default:o(()=>[s(n(r.exam.totalTime)+" "+n(e(t)("common.minutes")),1)]),_:1},8,["label"]),a(e(l),{span:2,label:e(t)("exam.tips")},{default:o(()=>[s(n(r.exam.tips),1)]),_:1},8,["label"]),a(e(l),{label:e(t)("profile.institute")},{default:o(()=>[s(n(r.exam.institute),1)]),_:1},8,["label"]),a(e(l),{label:e(t)("profile.major")},{default:o(()=>[s(n(r.exam.major),1)]),_:1},8,["label"]),a(e(l),{label:e(t)("profile.grade")},{default:o(()=>[a(e(S),null,{default:o(()=>[s(n(r.exam.grade),1)]),_:1})]),_:1},8,["label"])]),_:1})]),_:1}))}}),Y="_cardSkeleton_txdeh_2",Z="_examMainWrapper_txdeh_8",ee="_examCardWrapper_txdeh_15",ae="_examPagination_txdeh_24";var c={cardSkeleton:Y,examMainWrapper:Z,examCardWrapper:ee,examPagination:ae};const te={class:"outerWrapper"},De=k({setup(b){const{t:g}=D(),r=C([]),t=C(0),{isActive:h,onActive:p,onUnActive:v}=q(!0),i=M({current:1,pageSize:10}),E=async()=>{try{p();const{data:d}=await W.getRequest(H,{params:{page:i.current,pageSize:i.pageSize}});r.value=d.list,t.value=d.total}catch{}finally{v()}};return T(()=>{E()}),(d,u)=>(f(),y("div",te,[a(V,{path:[{text:e(g)(`menu.${e(F).ExamManage}`)}]},null,8,["path"]),a(e(w)),a(e(j),{loading:e(h),count:3,throttle:500,animated:""},{template:o(()=>[a(e(I),{class:x(e(c).cardSkeleton),variant:"rect"},null,8,["class"])]),default:o(()=>[_("div",{class:x(e(c).examMainWrapper)},[_("div",{class:x(e(c).examCardWrapper)},[(f(!0),y(N,null,R(r.value,m=>(f(),z(X,{key:m.paperId,exam:m,onOnDelete:E},null,8,["exam"]))),128)),a(e(U),{target:`.${e(c).examCardWrapper}`},null,8,["target"])],2),a(K,{currentPage:e(i).current,"onUpdate:currentPage":u[0]||(u[0]=m=>e(i).current=m),pageSize:e(i).pageSize,"onUpdate:pageSize":u[1]||(u[1]=m=>e(i).pageSize=m),class:x(e(c).examPagination),total:t.value,onPageChange:E},null,8,["currentPage","pageSize","class","total"])],2)]),_:1},8,["loading"])]))}});export{De as default};
