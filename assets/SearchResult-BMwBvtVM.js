import{u as I,f as $,h as ee,i as U,j as le,k as ae,t as se,l as te,m as j,p as q,q as he,s as B,v as a,x as O,y as _,R as F,z as ne,A as oe,B as re,C as ie,O as ue,P as me,D as ce,E as ve,F as we,G as de,H as pe,I as ye,J as ze,K as D}from"./app-ctOK5d28.js";const fe=["/","/zh-hans/assets.html","/zh-hans/de.html","/zh-hans/","/zh-hans/md.html","/zh-hans/sitehelp.html","/zh-hans/up.html","/zh-hant/","/zh-hans/account/apkxa.html","/zh-hans/account/google.html","/zh-hans/account/","/zh-hans/account/ios.html","/zh-hans/markdown/","/zh-hans/mw/game-info.html","/zh-hans/mw/","/zh-hans/mw/mw-press.html","/zh-hans/mwt/","/zh-hans/markdown/other/","/zh-hans/mw/collection/cn-warships.html","/zh-hans/mw/collection/cn.html","/zh-hans/mw/collection/ct.html","/zh-hans/mw/collection/ctto.html","/zh-hans/mw/collection/egg.html","/zh-hans/mw/collection/events-less.html","/zh-hans/mw/collection/","/zh-hans/mw/collection/lj.html","/zh-hans/mw/collection/market.html","/zh-hans/mw/collection/musk.html","/zh-hans/mw/collection/mw68.html","/zh-hans/mw/collection/mw70.html","/zh-hans/mw/collection/mw77.html","/zh-hans/mw/collection/mwben.html","/zh-hans/mw/collection/news.html","/zh-hans/mw/collection/pan.html","/zh-hans/mw/column/","/zh-hans/mw/download/app.html","/zh-hans/mw/download/","/zh-hans/mw/download/mod.html","/zh-hans/mw/download/pc.html","/zh-hans/mw/download/sys.html","/zh-hans/mw/download/zg.html","/zh-hans/mw/official/bp.html","/zh-hans/mw/official/bs.html","/zh-hans/mw/official/","/zh-hans/mw/official/jd.html","/zh-hans/mw/official/lt.html","/zh-hans/mw/official/qt.html","/zh-hans/mw/official/sc.html","/zh-hans/mw/official/sd.html","/zh-hans/mw/official/wf.html","/zh-hans/mw/official/yj.html","/zh-hans/mw/official/zb.html","/zh-hans/mw/official/zd.html","/zh-hans/mw/official/zh.html","/zh-hans/mw/official/zy.html","/zh-hans/mw/skills/cyct.html","/zh-hans/mw/skills/game.html","/zh-hans/mw/skills/","/zh-hans/mw/skills/mom.html","/zh-hans/mw/skills/mw-rules.html","/zh-hans/mw/skills/stan-bilibili.html","/zh-hans/mw/skills/x51.html","/zh-hans/markdown/other/emoji/nature.html","/zh-hans/markdown/other/emoji/object.html","/zh-hans/markdown/other/emoji/people.html","/zh-hans/markdown/other/emoji/place.html","/zh-hans/markdown/other/emoji/symbol.html","/zh-hans/mw/column/realitymw/bomber.html","/zh-hans/mw/column/realitymw/fighter.html","/zh-hans/mw/column/realitymw/helicopter.html","/zh-hans/mw/column/realitymw/","/zh-hans/mw/column/realitymw/strike-fighters.html","/zh-hans/mw/column/realitymw/uav.html","/zh-hans/mw/column/realitymw2/cruiser.html","/zh-hans/mw/column/realitymw2/","/404.html","/zh-hans/markdown/other/emoji/"],ke="SEARCH_PRO_QUERY_HISTORY",v=I(ke,[]),ge=()=>{const{queryHistoryCount:s}=D,t=s>0;return{enabled:t,queryHistory:v,addQueryHistory:h=>{t&&(v.value.length<s?v.value=Array.from(new Set([h,...v.value])):v.value=Array.from(new Set([h,...v.value.slice(0,s-1)])))},removeQueryHistory:h=>{v.value=[...v.value.slice(0,h),...v.value.slice(h+1)]}}},A=s=>fe[s.id]+("anchor"in s?`#${s.anchor}`:""),He="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:C}=D,w=I(He,[]),Re=()=>{const s=C>0;return{enabled:s,resultHistory:w,addResultHistory:t=>{if(s){const h={link:A(t),display:t.display};"header"in t&&(h.header=t.header),w.value.length<C?w.value=[h,...w.value]:w.value=[h,...w.value.slice(0,C-1)]}},removeResultHistory:t=>{w.value=[...w.value.slice(0,t),...w.value.slice(t+1)]}}},Qe=s=>{const t=ue(),h=U(),{search:H,terminate:m}=me(),p=j(!1),y=ce([]);return ve(()=>{const d=()=>{y.value=[],p.value=!1},R=ze(z=>{p.value=!0,z?H({type:"search",query:z,locale:h.value,options:t.value}).then(c=>{y.value=c,p.value=!1}).catch(c=>{console.error(c),d()}):d()},D.searchDelay);B([s,h],()=>R(s.value),{immediate:!0}),we(()=>{m()})}),{searching:p,results:y}};var be=$({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:t}){const h=ee(),H=U(),m=le(ae),{enabled:p,addQueryHistory:y,queryHistory:d,removeQueryHistory:R}=ge(),{enabled:z,resultHistory:c,addResultHistory:E,removeResultHistory:M}=Re(),L=p||z,Q=se(s,"query"),{results:f,searching:Y}=Qe(Q),n=te({isQuery:!0,index:0}),i=j(0),u=j(0),P=q(()=>L&&(d.value.length>0||c.value.length>0)),x=q(()=>f.value.length>0),b=q(()=>f.value[i.value]||null),G=()=>{const{isQuery:e,index:l}=n;l===0?(n.isQuery=!e,n.index=e?c.value.length-1:d.value.length-1):n.index=l-1},J=()=>{const{isQuery:e,index:l}=n;l===(e?d.value.length-1:c.value.length-1)?(n.isQuery=!e,n.index=0):n.index=l+1},K=()=>{i.value=i.value>0?i.value-1:f.value.length-1,u.value=b.value.contents.length-1},V=()=>{i.value=i.value<f.value.length-1?i.value+1:0,u.value=0},N=()=>{u.value<b.value.contents.length-1?u.value+=1:V()},W=()=>{u.value>0?u.value-=1:K()},S=e=>e.map(l=>de(l)?l:a(l[0],l[1])),X=e=>{if(e.type==="customField"){const l=pe[e.index]||"$content",[o,g=""]=ye(l)?l[H.value].split("$content"):l.split("$content");return e.display.map(r=>a("div",S([o,...r,g])))}return e.display.map(l=>a("div",S(l)))},k=()=>{i.value=0,u.value=0,t("updateQuery",""),t("close")};return he("keydown",e=>{if(s.isFocusing){if(x.value){if(e.key==="ArrowUp")W();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const l=b.value.contents[u.value];y(s.query),E(l),h.push(A(l)),k()}}else if(z){if(e.key==="ArrowUp")G();else if(e.key==="ArrowDown")J();else if(e.key==="Enter"){const{index:l}=n;n.isQuery?(t("updateQuery",d.value[l]),e.preventDefault()):(h.push(c.value[l].link),k())}}}}),B([i,u],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:Q.value?!x.value:!P.value}],id:"search-pro-results"},Q.value===""?L?P.value?[p?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},m.value.queryHistory),d.value.map((e,l)=>a("div",{class:["search-pro-result-item",{active:n.isQuery&&n.index===l}],onClick:()=>{t("updateQuery",e)}},[a(O,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:o=>{o.preventDefault(),o.stopPropagation(),R(l)}})]))])):null,z?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},m.value.resultHistory),c.value.map((e,l)=>a(F,{to:e.link,class:["search-pro-result-item",{active:!n.isQuery&&n.index===l}],onClick:()=>{k()}},()=>[a(O,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(o=>S(o)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:o=>{o.preventDefault(),o.stopPropagation(),M(l)}})]))])):null]:m.value.emptyHistory:m.value.emptyResult:Y.value?a(ne,{hint:m.value.searching}):x.value?a("ul",{class:"search-pro-result-list"},f.value.map(({title:e,contents:l},o)=>{const g=i.value===o;return a("li",{class:["search-pro-result-list-item",{active:g}]},[a("div",{class:"search-pro-result-title"},e||m.value.defaultTitle),l.map((r,Z)=>{const T=g&&u.value===Z;return a(F,{to:A(r),class:["search-pro-result-item",{active:T,"aria-selected":T}],onClick:()=>{y(s.query),E(r),k()}},()=>[r.type==="text"?null:a(r.type==="title"?oe:r.type==="heading"?re:ie,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[r.type==="text"&&r.header?a("div",{class:"content-header"},r.header):null,a("div",X(r))])])})])})):m.value.emptyResult)}});export{be as default};
