"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{955:function(t,r,n){n.d(r,{IQ:function(){return f},Jh:function(){return v},XT:function(){return o},pm:function(){return i},s_:function(){return p}});var e=n(861),a=n(757),c=n.n(a),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="ca1e14ffb473d6a82f337d8c688837e0",o=function(){var t=(0,e.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(s,"&query=").concat(r));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(r,"?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(r,"/credits?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(r,"/reviews?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},415:function(t,r,n){n.r(r);var e=n(861),a=n(439),c=n(757),u=n.n(c),s=n(955),o=n(791),i=n(689),p=n(87),f=n(184);r.default=function(){var t=(0,o.useState)([]),r=(0,a.Z)(t,2),n=r[0],c=r[1],v=(0,i.TH)();return(0,o.useEffect)((function(){var t=function(){var t=(0,e.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.XT)();case 3:r=t.sent,c(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{children:"Trending today"}),(0,f.jsx)("ul",{children:n.map((function(t){var r=t.original_title,n=t.id;return(0,f.jsx)("li",{children:(0,f.jsx)(p.rU,{to:"/movies/".concat(n),state:{from:v},children:r})},n)}))})]})}}}]);
//# sourceMappingURL=415.d6b61a4b.chunk.js.map