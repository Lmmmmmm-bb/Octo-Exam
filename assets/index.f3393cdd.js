import{d,o as n,n as _,p as t,c as g,w as i,I as o,a as s,u as e,$ as f,v as w,t as z,q as E,f as $,s as y,C as B,F as k,G as F,az as M,ar as V}from"./vendor.f69bab02.js";/* empty css                *//* empty css                *//* empty css               *//* empty css                */import{_ as D}from"./index.0f8372b2.js";/* empty css             *//* empty css             */import{_ as x}from"./plugin-vue_export-helper.1c6f6f40.js";import{u as L,h as W,R as H}from"./index.432e9199.js";import{c as I}from"./index.7955fae0.js";const R=d({name:"Calendar"}),S={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},A=t("path",{fill:"currentColor",d:"M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"},null,-1),q=[A];function N(u,c,a,m,r,p){return n(),_("svg",S,q)}var T=x(R,[["render",N]]);const j=d({name:"Reading"}),O={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},b=t("path",{fill:"currentColor",d:"m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72l384 54.848zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z"},null,-1),G=t("path",{fill:"currentColor",d:"M480 192h64v704h-64z"},null,-1),U=[b,G];function J(u,c,a,m,r,p){return n(),_("svg",O,U)}var K=x(j,[["render",J]]);const P=d({name:"Timer"}),Q={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},X=t("path",{fill:"currentColor",d:"M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"},null,-1),Y=t("path",{fill:"currentColor",d:"M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32z"},null,-1),Z=t("path",{fill:"currentColor",d:"M448 576a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96z"},null,-1),tt=[X,Y,Z];function et(u,c,a,m,r,p){return n(),_("svg",Q,tt)}var at=x(P,[["render",et]]);const st="_cardWrapper_1ru30_2";var C={cardWrapper:st};const rt="_examCard_1l8qm_2";var ot={examCard:rt};const nt={class:"font-medium"},ct={class:"text-gray-500"},lt={class:"mt-2"},it={class:"flex items-center justify-evenly mt-16"},ut={class:"text-sm flex items-center"},mt={class:"text-sm flex items-center"},pt={class:"text-sm flex items-center"},_t=d({props:{exam:null},emits:["onClick"],setup(u,{emit:c}){const a=u;return(m,r)=>(n(),g(e(z),{class:w(e(ot).examCard),shadow:"hover",onClick:r[0]||(r[0]=p=>c("onClick"))},{header:i(()=>[t("h3",nt,o(a.exam.source),1)]),default:i(()=>[t("p",ct,o(a.exam.source)+" - "+o(a.exam.description),1),t("p",lt,o(a.exam.tips),1),t("div",it,[t("span",ut,[s(e(f),{color:"#409EFF",style:{"margin-right":"4px"}},{default:i(()=>[s(e(T))]),_:1}),t("span",null,o(a.exam.examDate),1)]),t("span",mt,[s(e(f),{color:"#409EFF",style:{"margin-right":"4px"}},{default:i(()=>[s(e(at))]),_:1}),t("span",null,o(a.exam.totalTime)+" \u5206\u949F",1)]),t("span",pt,[s(e(f),{color:"#409EFF",style:{"margin-right":"4px"}},{default:i(()=>[s(e(K))]),_:1}),t("span",null,"\u6EE1\u5206 "+o(a.exam.totalScore)+" \u5206",1)])])]),_:1},8,["class"]))}}),dt={class:"outerWrapper"},ht={class:"flex justify-between items-center"},Ft=d({setup(u){const c=E(),a=L(),m=$([{text:"\u6211\u7684\u8003\u8BD5"},{text:"\u8BD5\u5377\u5217\u8868"}]),r=$([]),p=l=>{c.push({name:H.Exam,params:{paperId:l.paperId,examCode:l.examCode}})};return y(async()=>{try{const{studentId:l}=a.userConfig,{data:v}=await W.getRequest(`${I}/${l}`);r.value=v}catch{}}),(l,v)=>(n(),_("div",dt,[t("div",ht,[s(D,{path:m.value},null,8,["path"])]),s(e(B)),t("div",{class:w(e(C).cardWrapper)},[(n(!0),_(k,null,F(r.value,h=>(n(),g(e(V),{key:h.examCode,content:"\u70B9\u51FB\u53C2\u52A0\u8003\u8BD5",placement:"top",effect:"light"},{default:i(()=>[s(_t,{exam:h,onOnClick:ft=>p(h)},null,8,["exam","onOnClick"])]),_:2},1024))),128))],2),s(e(M),{target:`.${e(C).cardWrapper}`},null,8,["target"])]))}});export{Ft as default};
