import{t as j,u as h,a as f,b as v,r as n,c as N,j as s,L as l}from"./index-BU_Pne4S.js";import{E as k}from"./EpisodesList-BZnCxVmA.js";const z="_titlePage_9mzu0_1",F="_main_9mzu0_7",b="_topBlock_9mzu0_12",B="_info_9mzu0_22",E="_poster_9mzu0_27",g="_description_9mzu0_35",y="_titleEn_9mzu0_39",P="_infoBlock_9mzu0_42",W="_buttonFavorite_9mzu0_48",C="_buttonUnFavorite_9mzu0_49",L="_playerWrapper_9mzu0_88",T="_selectWrapper_9mzu0_103",U="_select_9mzu0_103",i={titlePage:z,main:F,topBlock:b,info:B,poster:E,description:g,titleEn:y,infoBlock:P,buttonFavorite:W,buttonUnFavorite:C,playerWrapper:L,selectWrapper:T,select:U};function $(){const{id:a}=h(),{favorites:d,isChanging:p}=f(t=>t.favorites),{data:e,isLoading:m,isError:u,isSuccess:c}=v(a),[o,r]=n.useState(!1),{onClickAddFavorite:_,onClickDeleteFavorite:x}=N();return n.useEffect(()=>{window.scrollTo(0,0)},[]),n.useEffect(()=>{var t;c&&(document.title=(t=e==null?void 0:e.name)==null?void 0:t.main)},[c]),n.useEffect(()=>(d.map(t=>{t.id===Number(a)&&r(!0)}),()=>{r(!1)}),[p]),m?s.jsx(l,{}):u?s.jsx("div",{children:"Ошибка, попробуйте позже"}):s.jsxs("main",{className:`${i.titlePage} container`,children:[e?s.jsxs("div",{className:i.main,children:[s.jsxs("div",{className:i.topBlock,children:[s.jsx("div",{className:i.poster,children:s.jsx("img",{src:`https://anilibria.top${e.poster.src}`,alt:""})}),s.jsxs("div",{className:i.info,children:[s.jsx("p",{className:i.titleEn,children:e.name.english}),s.jsx("h2",{className:i.title,children:e.name.main}),s.jsx("div",{className:i.infoBlock,children:s.jsxs("p",{children:["Жанры : ",s.jsx("span",{children:e.genres.map(t=>s.jsxs("span",{children:[" ",t.name]},t.id))})]})}),s.jsx("div",{className:i.infoBlock,children:s.jsxs("p",{children:["Год : ",s.jsx("span",{children:e.year})]})}),s.jsx("div",{className:i.infoBlock,children:s.jsxs("p",{children:["Сезон : ",s.jsx("span",{children:e.season.description})]})}),s.jsx("div",{className:i.infoBlock,children:s.jsxs("p",{children:["Статус : ",s.jsx("span",{children:e.is_in_production?"Выходит":"Завершен"})]})}),s.jsx("div",{className:i.infoBlock,children:s.jsxs("p",{children:["Тип : ",s.jsx("span",{children:e.type.description})]})}),s.jsx("button",{className:o?i.buttonFavorite:i.buttonUnFavorite,onClick:o?()=>x(e.id):()=>_(e.id,e),children:o?"Удалить из избранного":"Добавить в избранное"})]})]}),s.jsx("div",{className:i.description,children:s.jsx("p",{children:e.description})})]}):s.jsx(l,{}),s.jsx("section",{className:`${i.playerWrapper}`,children:s.jsx(k,{})})]})}const A=j($);export{A as default};
