"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{509:function(e,r,t){t.d(r,{IQ:function(){return l},Jh:function(){return d},XT:function(){return u},pm:function(){return o},s_:function(){return p}});var n=t(861),a=t(757),c=t.n(a),s=t(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="ca1e14ffb473d6a82f337d8c688837e0",u=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day?api_key=".concat(i));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?api_key=".concat(i,"&query=").concat(r));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(r,"?api_key=").concat(i));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(r,"/credits?api_key=").concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(r,"/reviews?api_key=").concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},884:function(e,r,t){t.r(r);var n=t(861),a=t(439),c=t(757),s=t.n(c),i=t(509),u=t(791),o=t(689),p=t(87),l=t(184);r.default=function(){var e,r,t,c=(0,u.useState)([]),d=(0,a.Z)(c,2),f=d[0],h=d[1],v=(0,o.UO)().movieId,x=(0,o.TH)();return(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.s_)(v);case 3:r=e.sent,h(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[v]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p.rU,{to:null!==(e=null===(r=x.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/movies",children:"Go back"}),(0,l.jsx)("img",{src:f.poster_path?"https://image.tmdb.org/t/p/w500"+f.poster_path:"https://placehold.co/600x400?font=roboto",alt:"movie"}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("h2",{children:f.title}),(0,l.jsxs)("p",{children:["User Score: ",10*Math.round(f.vote_average),"%"]})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h2",{children:"Overview"}),(0,l.jsx)("p",{children:f.overview})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h2",{children:"Genres"}),(0,l.jsx)("p",{children:null===(t=f.genres)||void 0===t?void 0:t.map((function(e){return e.name})).join(" ")})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Additional information"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(p.rU,{to:"cast",state:{from:x},children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(p.rU,{to:"reviews",state:{from:x},children:"Reviews"})})]})]}),(0,l.jsx)(u.Suspense,{fallback:(0,l.jsx)("div",{children:"Loading subpage..."}),children:(0,l.jsx)(o.j3,{})})]})}}}]);
//# sourceMappingURL=884.c14c604a.chunk.js.map