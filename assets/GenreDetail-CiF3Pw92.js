import{_ as S,x as B,i as C,v as I,r as o,j as N,z as A,c as p,d as g,w as n,A as x,u as r,s as y,o as i,F as D,n as R,m as T,a as m}from"./index-BZNf6Ntn.js";import{_ as j}from"./empty_popcorn_box2-DXq9_Pa-.js";import{C as _,S as v,N as f}from"./carousel-oPT_N-YE.js";const F={class:"carousel__item img-handler"},L=["src","onClick"],P=y({name:"Breakpoints",components:{Carousel:_,Slide:v,Navigation:f},data:()=>({settings:{itemsToShow:1,snapAlign:"center"},breakpoints:{700:{itemsToShow:3.5,snapAlign:"center"},1024:{itemsToShow:4,snapAlign:"start"}}})}),V=Object.assign(P,{setup(z){const h="https://image.tmdb.org/t/p/w500",s=B(),c=C(),k=I(),a=o("12"),l=o([]),M=o(0),u=async e=>{await s.getDatabaseMovie(),await s.getMovies(),await s.getWeeklyMovies(),s.Movies&&s.Movies.length>0?l.value=s.Movies.filter(d=>d.genre_ids.map(String).includes(e)):console.log("No movies found")},w=e=>e.poster_path?h+e.poster_path:j;N(()=>{M.value=0,a.value=c.params.genreId||"12",u(a.value)}),A(()=>c.params.genreId,e=>{a.value=e,u(e)});const b=function(e){console.log("클릭"),k.push({name:"moviedetail",params:{movieId:e}})};return(e,d)=>(i(),p("div",null,[g(r(_),x(e.settings,{breakpoints:e.breakpoints}),{addons:n(()=>[g(r(f))]),default:n(()=>[(i(!0),p(D,null,R(l.value,t=>(i(),T(r(v),{key:t.id},{default:n(()=>[m("div",F,[m("img",{class:"first-img",src:w(t),alt:"#",onClick:E=>b(t.movie_id)},null,8,L)])]),_:2},1024))),128))]),_:1},16,["breakpoints"])]))}}),$=S(V,[["__scopeId","data-v-a48b8837"]]);export{$ as default};
