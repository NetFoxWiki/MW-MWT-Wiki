import{u as U,f as Z,h as ee,i as _,j as le,k as te,t as ae,l as se,m as L,p as A,q as ie,s as I,v as t,x as j,y as F,R as O,z as oe,A as re,B as ue,C as he,D as ce,E as me,F as ne,G as ve,O as we,H as de,I as pe,P as ye,J as Ce,K as ze,L as P}from"./app-BPj-COV5.js";const Ne=["/","/en-US/","/zh-CN/assets.html","/zh-CN/de.html","/zh-CN/","/zh-CN/md.html","/zh-CN/sitehelp.html","/zh-CN/up.html","/zh-CN/account/apkxa.html","/zh-CN/account/google.html","/zh-CN/account/","/zh-CN/account/ios.html","/zh-CN/dev/","/zh-CN/markdown/","/zh-CN/mw/game-info.html","/zh-CN/mw/","/zh-CN/mw/mw-press.html","/zh-CN/mwt/","/zh-CN/markdown/other/","/zh-CN/mw/collection/cn-warships.html","/zh-CN/mw/collection/cn.html","/zh-CN/mw/collection/ct.html","/zh-CN/mw/collection/ctto.html","/zh-CN/mw/collection/egg.html","/zh-CN/mw/collection/events-less.html","/zh-CN/mw/collection/game-modes.html","/zh-CN/mw/collection/","/zh-CN/mw/collection/lj.html","/zh-CN/mw/collection/market.html","/zh-CN/mw/collection/musk.html","/zh-CN/mw/collection/mw68.html","/zh-CN/mw/collection/mw70.html","/zh-CN/mw/collection/mw77.html","/zh-CN/mw/collection/mwben.html","/zh-CN/mw/collection/news.html","/zh-CN/mw/collection/pan.html","/zh-CN/mw/column/","/zh-CN/mw/download/app.html","/zh-CN/mw/download/","/zh-CN/mw/download/mod.html","/zh-CN/mw/download/pc.html","/zh-CN/mw/download/sys.html","/zh-CN/mw/download/zg.html","/zh-CN/mw/official/bp.html","/zh-CN/mw/official/bs.html","/zh-CN/mw/official/","/zh-CN/mw/official/jd.html","/zh-CN/mw/official/lt.html","/zh-CN/mw/official/qt.html","/zh-CN/mw/official/sc.html","/zh-CN/mw/official/sd.html","/zh-CN/mw/official/wf.html","/zh-CN/mw/official/yj.html","/zh-CN/mw/official/zb.html","/zh-CN/mw/official/zd.html","/zh-CN/mw/official/zh.html","/zh-CN/mw/official/zy.html","/zh-CN/mw/skills/cyct.html","/zh-CN/mw/skills/game.html","/zh-CN/mw/skills/","/zh-CN/mw/skills/mom.html","/zh-CN/mw/skills/mw-rules.html","/zh-CN/mw/skills/stan-bilibili.html","/zh-CN/mw/skills/x51.html","/zh-CN/mw/column/realitymw/bomber.html","/zh-CN/mw/column/realitymw/fighter.html","/zh-CN/mw/column/realitymw/helicopter.html","/zh-CN/mw/column/realitymw/","/zh-CN/mw/column/realitymw/strike-fighters.html","/zh-CN/mw/column/realitymw/uav.html","/zh-CN/mw/column/realitymw2/cruiser.html","/zh-CN/mw/column/realitymw2/destroyer.html","/zh-CN/mw/column/realitymw2/","/404.html"],fe="SEARCH_PRO_QUERY_HISTORY",w=U(fe,[]),ge=()=>{const{queryHistoryCount:a}=P,s=a>0;return{enabled:s,queryHistory:w,addQueryHistory:i=>{s&&(w.value.length<a?w.value=Array.from(new Set([i,...w.value])):w.value=Array.from(new Set([i,...w.value.slice(0,a-1)])))},removeQueryHistory:i=>{w.value=[...w.value.slice(0,i),...w.value.slice(i+1)]}}},E=a=>Ne[a.id]+("anchor"in a?`#${a.anchor}`:""),ke="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:D}=P,d=U(ke,[]),He=()=>{const a=D>0;return{enabled:a,resultHistory:d,addResultHistory:s=>{if(a){const i={link:E(s),display:s.display};"header"in s&&(i.header=s.header),d.value.length<D?d.value=[i,...d.value]:d.value=[i,...d.value.slice(0,D-1)]}},removeResultHistory:s=>{d.value=[...d.value.slice(0,s),...d.value.slice(s+1)]}}},Re=a=>{const s=ce(),i=_(),x=me(),r=L(!1),y=ne([]);return ve(()=>{const{search:f,terminate:p}=we(),g=()=>{y.value=[],r.value=!1},C=ze(n=>{r.value=!0,n?f(n,i.value,s.value).then(v=>{var k,z;return((z=(k=s.value).searchFilter)==null?void 0:z.call(k,v,n,i.value,x.value))??v}).then(v=>{y.value=v,r.value=!1}).catch(v=>{console.error(v),g()}):g()},P.searchDelay);I([a,i],()=>C(a.value),{immediate:!0}),de(()=>{p()})}),{searching:r,results:y}};var Qe=Z({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:s}){const i=ee(),x=_(),r=le(te),{enabled:y,addQueryHistory:f,queryHistory:p,removeQueryHistory:g}=ge(),{enabled:C,resultHistory:n,addResultHistory:v,removeResultHistory:k}=He(),z=y||C,Q=ae(a,"query"),{results:N,searching:B}=Re(Q),o=se({isQuery:!0,index:0}),c=L(0),m=L(0),T=A(()=>z&&(p.value.length>0||n.value.length>0)),b=A(()=>N.value.length>0),S=A(()=>N.value[c.value]||null),M=()=>{const{isQuery:e,index:l}=o;l===0?(o.isQuery=!e,o.index=e?n.value.length-1:p.value.length-1):o.index=l-1},Y=()=>{const{isQuery:e,index:l}=o;l===(e?p.value.length-1:n.value.length-1)?(o.isQuery=!e,o.index=0):o.index=l+1},G=()=>{c.value=c.value>0?c.value-1:N.value.length-1,m.value=S.value.contents.length-1},J=()=>{c.value=c.value<N.value.length-1?c.value+1:0,m.value=0},K=()=>{m.value<S.value.contents.length-1?m.value+=1:J()},V=()=>{m.value>0?m.value-=1:G()},q=e=>e.map(l=>pe(l)?l:t(l[0],l[1])),W=e=>{if(e.type==="customField"){const l=ye[e.index]||"$content",[u,R=""]=Ce(l)?l[x.value].split("$content"):l.split("$content");return e.display.map(h=>t("div",q([u,...h,R])))}return e.display.map(l=>t("div",q(l)))},H=()=>{c.value=0,m.value=0,s("updateQuery",""),s("close")};return ie("keydown",e=>{if(a.isFocusing){if(b.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const l=S.value.contents[m.value];f(a.query),v(l),i.push(E(l)),H()}}else if(C){if(e.key==="ArrowUp")M();else if(e.key==="ArrowDown")Y();else if(e.key==="Enter"){const{index:l}=o;o.isQuery?(s("updateQuery",p.value[l]),e.preventDefault()):(i.push(n.value[l].link),H())}}}}),I([c,m],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:Q.value?!b.value:!T.value}],id:"search-pro-results"},Q.value===""?z?T.value?[y?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},r.value.queryHistory),p.value.map((e,l)=>t("div",{class:["search-pro-result-item",{active:o.isQuery&&o.index===l}],onClick:()=>{s("updateQuery",e)}},[t(j,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:F,onClick:u=>{u.preventDefault(),u.stopPropagation(),g(l)}})]))])):null,C?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},r.value.resultHistory),n.value.map((e,l)=>t(O,{to:e.link,class:["search-pro-result-item",{active:!o.isQuery&&o.index===l}],onClick:()=>{H()}},()=>[t(j,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(u=>q(u)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:F,onClick:u=>{u.preventDefault(),u.stopPropagation(),k(l)}})]))])):null]:r.value.emptyHistory:r.value.emptyResult:B.value?t(oe,{hint:r.value.searching}):b.value?t("ul",{class:"search-pro-result-list"},N.value.map(({title:e,contents:l},u)=>{const R=c.value===u;return t("li",{class:["search-pro-result-list-item",{active:R}]},[t("div",{class:"search-pro-result-title"},e||r.value.defaultTitle),l.map((h,X)=>{const $=R&&m.value===X;return t(O,{to:E(h),class:["search-pro-result-item",{active:$,"aria-selected":$}],onClick:()=>{f(a.query),v(h),H()}},()=>[h.type==="text"?null:t(h.type==="title"?re:h.type==="heading"?ue:he,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[h.type==="text"&&h.header?t("div",{class:"content-header"},h.header):null,t("div",W(h))])])})])})):r.value.emptyResult)}});export{Qe as default};
