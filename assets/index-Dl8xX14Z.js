import{b as o,x as v,k as x,f as g,r as p,j as s,y as j}from"./index-B5JsWJmu.js";import{G as l}from"./GridList-CLoJa3y4.js";function y(){const t=o(a=>a.auth.isAuth),[c,{data:e,isLoading:n,isSuccess:i,isFetching:d}]=v(),u=o(a=>a.favorites.favorites),f=x(),h=g();if(p.useEffect(()=>{(async()=>{const r=await c();r.isSuccess&&f(j(r.data.data))})()},[t]),t||h("/"),d)return s.jsx("div",{children:"...Загрузка"});if(i)return s.jsx("main",{children:e&&s.jsxs("div",{className:"container",children:[s.jsx("h2",{children:"Избранное"}),s.jsx(l,{data:e.data,isLoading:n,isSuccess:i,dataFavorites:u})]})})}export{y as default};
