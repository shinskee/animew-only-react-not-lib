import{t as v,a as o,H as g,h as x,d as p,r as j,j as s,I as l}from"./index-BU_Pne4S.js";import{G as m}from"./GridList-DAGphKJv.js";function F(){const t=o(a=>a.auth.isAuth),[n,{data:e,isLoading:c,isSuccess:i,isFetching:d}]=g(),u=o(a=>a.favorites.favorites),f=x(),h=p();if(j.useEffect(()=>{(async()=>{const r=await n();r.isSuccess&&f(l(r.data.data))})()},[t]),t||h("/"),d)return s.jsx("div",{children:"...Загрузка"});if(i)return s.jsx("main",{children:e&&s.jsxs("div",{className:"container",children:[s.jsx("h2",{children:"Избранное"}),s.jsx(m,{data:e.data,isLoading:c,isSuccess:i,dataFavorites:u})]})})}const E=v(F);export{E as default};
