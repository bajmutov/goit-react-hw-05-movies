"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[21],{211:function(t,r,n){n.d(r,{BF:function(){return p},E3:function(){return v},SU:function(){return o},np:function(){return f},yw:function(){return l}});var e=n(861),a=n(757),c=n.n(a),u=n(243),s="https://api.themoviedb.org/3",i="fbcd27110e3ea351d2ea352461b15e7c",o=function(){var t=(0,e.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/movie/").concat(r,"?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/movie/").concat(r,"/reviews?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/movie/").concat(r,"/credits?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/search/movie?query=").concat(r,"&api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},854:function(t,r,n){n.d(r,{a:function(){return c}});var e=n(119),a=n(184),c=function(){return(0,a.jsx)(e.no,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper"})}},21:function(t,r,n){n.r(r),n.d(r,{default:function(){return w}});var e=n(861),a=n(439),c=n(757),u=n.n(c),s=n(211),i=n(854),o=n(686),p=n.n(o),f=n(791),l=n(689),v=n(87),d=n(184),h=function(){var t=(0,f.useState)([]),r=(0,a.Z)(t,2),n=r[0],c=r[1],o=(0,f.useState)(!1),h=(0,a.Z)(o,2),w=h[0],x=h[1],m=(0,l.TH)();return(0,f.useEffect)((function(){var t=function(){var t=(0,e.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,x(!0),t.next=4,(0,s.SU)();case 4:if(r=t.sent){t.next=7;break}throw new Error("No popular films today");case 7:c(r),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),p().Notify.failure(t.t0.message);case 13:return t.prev=13,x(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,d.jsxs)(d.Fragment,{children:[w&&(0,d.jsx)(i.a,{}),(0,d.jsx)("div",{children:(0,d.jsx)("ul",{children:n.map((function(t){var r=t.id,n=t.title;return(0,d.jsx)("li",{children:(0,d.jsx)(v.rU,{to:"movies/".concat(r),state:{from:m},children:n})},r)}))})})]})},w=function(){return(0,d.jsxs)("div",{children:[(0,d.jsx)("h1",{children:"Most popular films today"}),(0,d.jsx)(h,{})]})}}}]);
//# sourceMappingURL=21.beaadd31.chunk.js.map