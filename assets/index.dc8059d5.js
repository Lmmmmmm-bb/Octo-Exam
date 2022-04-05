import{d as B,o as v,p as C,q as x,f as y,e as F,t as k,ac as I,a7 as b,u as e,c as T,w as p,a,aF as l,aG as L,R as $,aH as U,a8 as V,I as A,Y as q,D as P,a9 as j,af as N,N as H}from"./vendor.7076edc9.js";/* empty css                *//* empty css              *//* empty css              *//* empty css               *//* empty css                    *//* empty css                */import{_ as M}from"./index.b8d37dcf.js";import{w as O,_ as D,a as G}from"./index.4ca00965.js";/* empty css                 *//* empty css            *//* empty css                *//* empty css               */import{u as z}from"./useToggle.d2fcbe59.js";import{h as _}from"./index.f978a734.js";import{_ as W}from"./index.7e3859b2.js";import{r as Y}from"./refresh.80025912.js";import{_ as J}from"./plugin-vue_export-helper.1c6f6f40.js";/* empty css               */const K=B({name:"Search"}),Q={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},X=x("path",{fill:"currentColor",d:"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"},null,-1),Z=[X];function ee(E,n,d,m,h,r){return v(),C("svg",Q,Z)}var te=J(K,[["render",ee]]);const ae=[{text:"\u6210\u7EE9\u7BA1\u7406"},{text:"\u6210\u7EE9\u5217\u8868"}],oe="/score",ne="/scores",R="/score",re=`${oe}/exam`,se={class:"w-full flex justify-center items-center flex-col"},ce=A("\u5220\u9664"),ue=B({props:{isHidePagination:{type:Boolean}},setup(E,{expose:n}){const d=E,m=y([]),{isActive:h,onToggle:r}=z(),c=F({total:0,data:[]}),u=F({current:1,pageSize:10}),i=async()=>{try{r();const{data:t}=await _.getRequest(ne,{params:{page:u.current,pageSize:u.pageSize}}),{list:o,total:w}=t;c.data=o,c.total=w}catch{}finally{r()}},S=async t=>{try{r();const{data:o}=await _.getRequest(`${re}/${t}`);c.data=o,c.total=o.length}catch{}finally{r()}},g=t=>m.value=t,s=async t=>{try{await _.deleteRequest(R,{params:{list:t.scoreId}}),await i()}catch{}return!0};return n({selectedRows:m,onFetchScore:i,onFetchScoreByExamCode:S}),k(()=>{i()}),(t,o)=>{const w=I("loading");return v(),C("div",se,[b((v(),T(e(U),{"empty-text":"\u6682\u65E0\u6210\u7EE9\u6570\u636E",size:"large","row-key":"scoreId",data:e(c).data,"highlight-current-row":"",onSelectionChange:g},{default:p(()=>[a(e(l),{type:"selection",width:"50",align:"center"}),a(e(l),{label:"\u8003\u751F\u53F7",prop:"studentId"}),a(e(l),{label:"\u8003\u8BD5\u7F16\u53F7",prop:"examCode"}),a(e(l),{label:"\u79D1\u76EE",prop:"subject"}),a(e(l),{label:"\u5206\u6570",prop:"score"}),a(e(l),{label:"\u63D0\u4EA4\u65F6\u95F4",prop:"answerDate"}),a(e(l),{label:"\u64CD\u4F5C"},{default:p(f=>[a(e(L),{icon:e(O),"icon-color":"red",title:"\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u6210\u7EE9\u5417","confirm-button-text":"\u786E\u5B9A","cancel-button-text":"\u53D6\u6D88",onConfirm:de=>s(f.row)},{reference:p(()=>[a(e($),{size:"small",type:"danger",plain:""},{default:p(()=>[ce]),_:1})]),_:2},1032,["icon","onConfirm"])]),_:1})]),_:1},8,["data"])),[[w,e(h)]]),b(a(W,{"current-page":e(u).current,"onUpdate:current-page":o[0]||(o[0]=f=>e(u).current=f),"page-size":e(u).pageSize,"onUpdate:page-size":o[1]||(o[1]=f=>e(u).pageSize=f),class:"mt-4",total:e(c).total,onPageChange:i},null,8,["current-page","page-size","total"]),[[V,d.isHidePagination]])])}}}),le={class:"outerWrapper"},ie={class:"w-full flex justify-between mb-2"},pe=A(" \u641C \u7D22 "),Re=B({setup(E){const n=y(),{isActive:d,onActive:m,onUnActive:h}=z(),r=y(""),c=q(()=>n.value?n.value.selectedRows.length===0:!0),u=()=>{h(),n.value&&n.value.onFetchScore()},i=()=>{if(n.value){const{onFetchScore:s,onFetchScoreByExamCode:t}=n.value;r.value.trim().length===0?s():(m(),t(r.value))}},S=async()=>{if(n.value){const s=n.value.selectedRows;N.confirm(`\u786E\u5B9A\u8981\u5220\u9664 ${s.length} \u4F4D\u5B66\u751F\u5417\uFF1F`,"\u63D0\u793A",{cancelButtonText:"\u53D6\u6D88",confirmButtonText:"\u786E\u5B9A"}).then(async()=>{const t=s.map(o=>o.scoreId.toString());await _.deleteRequest(R,{params:{list:t.join(",")}}),g()})}},g=()=>{if(n.value){const{onFetchScore:s,onFetchScoreByExamCode:t}=n.value;d.value?t(r.value):s()}};return(s,t)=>(v(),C("div",le,[a(M,{path:e(ae)},null,8,["path"]),a(e(P)),x("div",ie,[a(e(j),{size:"large"},{default:p(()=>[a(e(H),{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=o=>r.value=o),placeholder:"\u901A\u8FC7\u8003\u8BD5\u7F16\u53F7\u67E5\u8BE2",clearable:"",onClear:u},null,8,["modelValue"]),a(e($),{type:"primary",icon:e(te),onClick:i},{default:p(()=>[pe]),_:1},8,["icon"])]),_:1}),x("div",null,[a(D,{icon:e(G),disabled:e(c),type:"danger",content:"\u6279\u91CF\u5220\u9664",onOnClick:S},null,8,["icon","disabled"]),a(D,{icon:e(Y),type:"primary",content:"\u70B9\u51FB\u5237\u65B0",onOnClick:g},null,8,["icon"])])]),a(ue,{ref_key:"tableRef",ref:n,"is-hide-pagination":!e(d)},null,8,["is-hide-pagination"])]))}});export{Re as default};
