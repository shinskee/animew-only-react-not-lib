import{r as n,a as k,u as f,g as L,d as S,j as t,U as M,V as b}from"./index-CFvUuHqS.js";import{u as N,S as q}from"./loader-CNtuLgT5.js";const B="_episodesList_baqlx_1",C="_episode_baqlx_1",H="_episodeActive_baqlx_5",V="_previewWrapper_baqlx_28",W="_name_baqlx_45",D="_loader_baqlx_56",A="_header_baqlx_62",I="_sortButton_baqlx_73",a={episodesList:B,episode:C,episodeActive:H,previewWrapper:V,name:W,loader:D,header:A,sortButton:I},U=e=>n.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M13 12H21M13 8H21M13 16H21M6 7V17M6 7L3 10M6 7L9 10",stroke:"#000000",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),y=e=>n.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M13 12H21M13 8H21M13 16H21M6 7V17M6 17L3 14M6 17L9 14",stroke:"#000000",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}));function E({currentEpisode:e,isShowEpisodes:p}){const{episodes:o,isSort:x}=k(s=>s.title),m=f(),{ref:v,inView:l}=N({threshold:.5});let r=n.useRef();const c=L(),_=S(),w=Math.ceil((o==null?void 0:o.length)-(e==null?void 0:e.ordinal)),[i,u]=n.useState(p?[0,w+5]:[0,10]),[d,g]=n.useState(e==null?void 0:e.ordinal);n.useEffect(()=>{l&&i[1]<=(o==null?void 0:o.length)&&u([i[0],i[1]+10])},[l]),n.useEffect(()=>{var s;(s=r.current)==null||s.scrollIntoView({behavior:"smooth",block:"center"})},[d]);const j=s=>{c(M(s.hls_720)),_(`/player/${m.id}/${s.id}`),g(s.ordinal)},h=()=>{c(b())};return t.jsxs("div",{className:a.episodesList,children:[t.jsx("div",{className:a.header,children:x?t.jsx(U,{className:a.sortButton,onClick:h}):t.jsx(y,{onClick:h,className:a.sortButton})}),o==null?void 0:o.slice(i[0],i[1]).map(s=>t.jsxs("div",{ref:d===s.ordinal?r:null,className:(e==null?void 0:e.ordinal)===s.ordinal?a.episodeActive:a.episode,onClick:()=>j(s),children:[t.jsx("div",{className:a.previewWrapper,children:t.jsx("span",{children:new Date(s.duration*1e3).toISOString().substr(14,5)})}),t.jsxs("div",{className:a.title,children:[t.jsxs("p",{className:a.number,children:[s.ordinal,". Эпизод"]}),t.jsx("p",{className:a.name,children:s.name})]})]},s.id)),t.jsx("div",{className:a.loader,children:!l&&t.jsx(q,{})}),t.jsx("div",{ref:v})]})}export{E};
