import{r as n}from"./index-CFvUuHqS.js";var w=new Map,b=new WeakMap,A=0,x=void 0;function I(e){return e?(b.has(e)||(A+=1,b.set(e,A.toString())),b.get(e)):"0"}function M(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?I(e.root):e[t]}`).toString()}function C(e){const t=M(e);let i=w.get(t);if(!i){const a=new Map;let u;const o=new IntersectionObserver(s=>{s.forEach(r=>{var c;const v=r.isIntersecting&&u.some(l=>r.intersectionRatio>=l);e.trackVisibility&&typeof r.isVisible>"u"&&(r.isVisible=v),(c=a.get(r.target))==null||c.forEach(l=>{l(v,r)})})},e);u=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:o,elements:a},w.set(t,i)}return i}function k(e,t,i={},a=x){if(typeof window.IntersectionObserver>"u"&&a!==void 0){const c=e.getBoundingClientRect();return t(a,{isIntersecting:a,target:e,intersectionRatio:typeof i.threshold=="number"?i.threshold:0,time:0,boundingClientRect:c,intersectionRect:c,rootBounds:c}),()=>{}}const{id:u,observer:o,elements:s}=C(i),r=s.get(e)||[];return s.has(e)||s.set(e,r),r.push(t),o.observe(e),function(){r.splice(r.indexOf(t),1),r.length===0&&(s.delete(e),o.unobserve(e)),s.size===0&&(o.disconnect(),w.delete(u))}}function W({threshold:e,delay:t,trackVisibility:i,rootMargin:a,root:u,triggerOnce:o,skip:s,initialInView:r,fallbackInView:c,onChange:v}={}){var l;const[g,R]=n.useState(null),h=n.useRef(),[p,E]=n.useState({inView:!!r,entry:void 0});h.current=v,n.useEffect(()=>{if(s||!g)return;let f;return f=k(g,(S,y)=>{E({inView:S,entry:y}),h.current&&h.current(S,y),y.isIntersecting&&o&&f&&(f(),f=void 0)},{root:u,rootMargin:a,threshold:e,trackVisibility:i,delay:t},c),()=>{f&&f()}},[Array.isArray(e)?e.toString():e,g,u,a,o,s,i,c,t]);const m=(l=p.entry)==null?void 0:l.target,F=n.useRef();!g&&m&&!o&&!s&&F.current!==m&&(F.current=m,E({inView:!!r,entry:void 0}));const d=[R,p.inView,p.entry];return d.ref=d[0],d.inView=d[1],d.entry=d[2],d}const B=e=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 200",...e},n.createElement("circle",{fill:"#F3AF34",stroke:"#F3AF34",strokeWidth:15,r:15,cx:40,cy:100},n.createElement("animate",{attributeName:"opacity",calcMode:"spline",dur:2,values:"1;0;1;",keySplines:".5 0 .5 1;.5 0 .5 1",repeatCount:"indefinite",begin:-.4})),n.createElement("circle",{fill:"#F3AF34",stroke:"#F3AF34",strokeWidth:15,r:15,cx:100,cy:100},n.createElement("animate",{attributeName:"opacity",calcMode:"spline",dur:2,values:"1;0;1;",keySplines:".5 0 .5 1;.5 0 .5 1",repeatCount:"indefinite",begin:-.2})),n.createElement("circle",{fill:"#F3AF34",stroke:"#F3AF34",strokeWidth:15,r:15,cx:160,cy:100},n.createElement("animate",{attributeName:"opacity",calcMode:"spline",dur:2,values:"1;0;1;",keySplines:".5 0 .5 1;.5 0 .5 1",repeatCount:"indefinite",begin:0})));export{B as S,W as u};
