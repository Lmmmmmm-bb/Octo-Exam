import{d as b,f as y,e as x,ag as k,al as I,o as S,n as D,a1 as C,u as e,c as T,w as p,a,am as c,an as L,B as A,ao as U,a2 as V,C as z,I as P,ab as j,p as w,Z as q,af as N,y as H}from"./vendor.ed303139.js";/* empty css                *//* empty css              */import"./input.6fe220a3.js";/* empty css               *//* empty css                    *//* empty css                */import{_ as M}from"./index.4fd4c2d1.js";import{w as O,_ as F,a as W,r as Z}from"./index.9423e0b8.js";/* empty css            *//* empty css               */import{u as R}from"./useToggle.88171619.js";import{h}from"./index.fc3cc74b.js";import{_ as G}from"./index.72d3b543.js";import{s as J}from"./search.35fc359b.js";/* empty css               */const K=[{text:"\u6210\u7EE9\u7BA1\u7406"},{text:"\u6210\u7EE9\u5217\u8868"}],Q="/score",X="/scores",$="/score",Y=`${Q}/exam`,ee={class:"w-full flex justify-center items-center flex-col"},te=z("\u5220\u9664"),ae=b({props:{isHidePagination:{type:Boolean}},setup(B,{expose:n}){const m=B,f=y([]),{isActive:E,onToggle:s}=R(),u=x({total:0,data:[]}),l=x({current:1,pageSize:10}),i=async()=>{try{s();const{data:t}=await h.getRequest(X,{params:{page:l.current,pageSize:l.pageSize}}),{list:o,total:_}=t;u.data=o,u.total=_}catch{}finally{s()}},v=async t=>{try{s();const{data:o}=await h.getRequest(`${Y}/${t}`);u.data=o,u.total=o.length}catch{}finally{s()}},g=t=>f.value=t,r=async t=>{try{await h.deleteRequest($,{params:{list:t.scoreId}}),await i()}catch{}return!0};return n({selectedRows:f,onFetchScore:i,onFetchScoreByExamCode:v}),k(()=>{i()}),(t,o)=>{const _=I("loading");return S(),D("div",ee,[C((S(),T(e(U),{"empty-text":"\u6682\u65E0\u6210\u7EE9\u6570\u636E",size:"large","row-key":"scoreId",data:e(u).data,"highlight-current-row":"",onSelectionChange:g},{default:p(()=>[a(e(c),{type:"selection",width:"50",align:"center"}),a(e(c),{label:"\u8003\u751F\u53F7",prop:"studentId"}),a(e(c),{label:"\u8003\u8BD5\u7F16\u53F7",prop:"examCode"}),a(e(c),{label:"\u79D1\u76EE",prop:"subject"}),a(e(c),{label:"\u5206\u6570",prop:"score"}),a(e(c),{label:"\u63D0\u4EA4\u65F6\u95F4",prop:"answerDate"}),a(e(c),{label:"\u64CD\u4F5C"},{default:p(d=>[a(e(L),{icon:e(O),"icon-color":"red",title:"\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u6210\u7EE9\u5417","confirm-button-text":"\u786E\u5B9A","cancel-button-text":"\u53D6\u6D88",onConfirm:re=>r(d.row)},{reference:p(()=>[a(e(A),{size:"small",type:"danger",plain:""},{default:p(()=>[te]),_:1})]),_:2},1032,["icon","onConfirm"])]),_:1})]),_:1},8,["data"])),[[_,e(E)]]),C(a(G,{"current-page":e(l).current,"onUpdate:current-page":o[0]||(o[0]=d=>e(l).current=d),"page-size":e(l).pageSize,"onUpdate:page-size":o[1]||(o[1]=d=>e(l).pageSize=d),class:"mt-4",total:e(u).total,onPageChange:i},null,8,["current-page","page-size","total"]),[[V,m.isHidePagination]])])}}}),oe={class:"outerWrapper"},ne={class:"w-full flex justify-between mb-2"},se=z(" \u641C \u7D22 "),xe=b({setup(B){const n=y(),{isActive:m,onActive:f,onUnActive:E}=R(),s=y(""),u=P(()=>n.value?n.value.selectedRows.length===0:!0),l=()=>{E(),n.value&&n.value.onFetchScore()},i=()=>{if(n.value){const{onFetchScore:r,onFetchScoreByExamCode:t}=n.value;s.value.trim().length===0?r():(f(),t(s.value))}},v=async()=>{if(n.value){const r=n.value.selectedRows;N.confirm(`\u786E\u5B9A\u8981\u5220\u9664 ${r.length} \u4F4D\u5B66\u751F\u5417\uFF1F`,"\u63D0\u793A",{cancelButtonText:"\u53D6\u6D88",confirmButtonText:"\u786E\u5B9A"}).then(async()=>{const t=r.map(o=>o.scoreId.toString());await h.deleteRequest($,{params:{list:t.join(",")}}),g()})}},g=()=>{if(n.value){const{onFetchScore:r,onFetchScoreByExamCode:t}=n.value;m.value?t(s.value):r()}};return(r,t)=>(S(),D("div",oe,[a(M,{path:e(K)},null,8,["path"]),a(e(j)),w("div",ne,[a(e(q),{size:"large"},{default:p(()=>[a(e(H),{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=o=>s.value=o),placeholder:"\u901A\u8FC7\u8003\u8BD5\u7F16\u53F7\u67E5\u8BE2",clearable:"",onClear:l},null,8,["modelValue"]),a(e(A),{type:"primary",icon:e(J),onClick:i},{default:p(()=>[se]),_:1},8,["icon"])]),_:1}),w("div",null,[a(F,{icon:e(W),disabled:e(u),type:"danger",content:"\u6279\u91CF\u5220\u9664",onOnClick:v},null,8,["icon","disabled"]),a(F,{icon:e(Z),type:"primary",content:"\u70B9\u51FB\u5237\u65B0",onOnClick:g},null,8,["icon"])])]),a(ae,{ref_key:"tableRef",ref:n,"is-hide-pagination":!e(m)},null,8,["is-hide-pagination"])]))}});export{xe as default};
