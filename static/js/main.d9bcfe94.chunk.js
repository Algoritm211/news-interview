(this["webpackJsonpnews-interview"]=this["webpackJsonpnews-interview"]||[]).push([[0],{103:function(e,t,n){e.exports={reloadBtn:"NewsContainer_reloadBtn__rxxZ_"}},106:function(e,t,n){e.exports={container:"JobsContainer_container__CYRwR",buttons:"JobsContainer_buttons__3Mzsg"}},107:function(e,t,n){e.exports={container:"InfoPage_container__3OL6b"}},128:function(e,t,n){e.exports={author:"MainLayout_author__e9lCA"}},144:function(e,t,n){},169:function(e,t,n){},172:function(e,t,n){},174:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(33),r=n.n(s),i=(n(144),n(35)),o=n(10),d=n(191),l=n(194),u=n(99),j=n.n(u),b=n(34),m=n.n(b),h=n(27);var O=n(1),f=function(e){var t,n,c,a=e.news;return Object(O.jsxs)("div",{className:m()("ui","card",j.a.contentContainer),children:[Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)("div",{className:"header",children:Object(O.jsx)(h.b,{to:"/news/".concat(a.id),children:a.title})}),Object(O.jsxs)("div",{className:j.a.metaContainer,children:[Object(O.jsxs)("div",{className:"meta",children:[new Date(1e3*a.time).toString().slice(4,21)," |"]}),Object(O.jsxs)("div",{className:"meta",children:["by ",(n=a.by,c=7,n.length>c?"".concat(n.slice(0,c),"..."):n)," |"]}),Object(O.jsxs)("div",{className:"meta",children:["Rating: ",a.descendants]})]}),Object(O.jsx)("div",{className:"description"})]}),Object(O.jsxs)("div",{className:"extra content",children:[Object(O.jsx)("i",{className:"check icon"}),"Comments: ",(null===(t=a.kids)||void 0===t?void 0:t.length)||0]})]})},x=n(17),p=n(129),v=n(14),w=n.n(v),N=n(31),g=n(48),k=n(124),y=n.n(k).a.create({baseURL:"https://hacker-news.firebaseio.com/v0/"}),_=function(){return y.get("newstories.json?print=pretty?").then((function(e){return e.data}))},C=function(e){return y.get("/item/".concat(e,".json?print=pretty")).then((function(e){return e.data}))},R=function(e){return y.get("/item/".concat(e,".json?print=pretty")).then((function(e){return e.data}))};var I=Object(g.b)("newsReducer/loadNews",function(){var e=Object(N.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),L=Object(g.b)("newsReducer/loadPageNews",function(){var e=Object(N.a)(w.a.mark((function e(t,n){var c,a,s,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=n.getState().newsReducer.newsArray[t.page-1],"reload"===t.loadingType&&n.dispatch(H()),n.dispatch(T(!0)),n.dispatch(D(!1)),a=[],s=0;case 6:if(!(s<c.length)){e.next=14;break}return e.next=9,C(c[s]);case 9:r=e.sent,a.push(r);case 11:s++,e.next=6;break;case 14:return n.dispatch(T(!1)),e.abrupt("return",{allData:a,loadingType:t.loadingType});case 16:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),S=Object(g.b)("newsReducer/checkNewNews",function(){var e=Object(N.a)(w.a.mark((function e(t,n){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=+n.getState().newsReducer.newsArray[0][0],e.next=3,_();case 3:e.sent[0]!==c&&n.dispatch(D(!0));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),P=Object(g.b)("newsReducer/checkNewNews",function(){var e=Object(N.a)(w.a.mark((function e(t,n){var c,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(T(!0)),e.next=3,C(t);case 3:if(!(c=e.sent).kids){e.next=9;break}return e.next=7,U(c.kids);case 7:a=e.sent,c.kids=a;case 9:return n.dispatch(T(!1)),e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),A=Object(g.c)({name:"newsReducer",initialState:{news:[],newsArray:[],currentNews:{},isLoading:!0,page:1,isNeedUpdate:!1},reducers:{setComments:function(e,t){e.currentNews.kids=t.payload.comments},setLoading:function(e,t){e.isLoading=t.payload},setIsNeedUpdate:function(e,t){e.isNeedUpdate=t.payload},setPage:function(e,t){e.page=t.payload.page},deleteOldNews:function(e){e.news=[]}},extraReducers:function(e){e.addCase(I.fulfilled,(function(e,t){var n=function(e,t){for(var n=[],c=0;c<e.length;c+=t)n.push(e.slice(c,c+t));return n}(t.payload,20);e.newsArray=n})),e.addCase(L.fulfilled,(function(e,t){var n;(console.log("All news loaded"),"reload"===t.payload.loadingType)?e.news=t.payload.allData:(n=e.news).push.apply(n,Object(p.a)(t.payload.allData))})),e.addCase(P.fulfilled,(function(e,t){e.currentNews=t.payload}))}}),B=A.actions,E=B.setComments,T=B.setLoading,D=B.setIsNeedUpdate,F=B.setPage,H=B.deleteOldNews,J=A.reducer;function U(e){return G.apply(this,arguments)}function G(){return(G=Object(N.a)(w.a.mark((function e(t){var n,c,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=[],c=0;c<t.length;c++)n.push(R(+t[c]));return e.next=4,Promise.all(n);case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=function(e){return e.newsReducer.news},Y=function(e){return e.newsReducer.newsArray},q=function(e){return e.newsReducer.currentNews},z=function(e){return e.newsReducer.page},Z=function(e){return e.newsReducer.isLoading},K=function(e){return e.newsReducer.isNeedUpdate},Q=n(103),V=n.n(Q),W=n(190),X=(n(169),function(){return Object(O.jsx)("div",{className:"loader",children:Object(O.jsx)("div",{className:"loadingio-spinner-double-ring-e4ki0hot83h",children:Object(O.jsxs)("div",{className:"ldio-83g0wwbv7q7",children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{children:Object(O.jsx)("div",{})}),Object(O.jsx)("div",{children:Object(O.jsx)("div",{})})]})})})}),$=function(){var e=Object(x.b)(),t=Object(x.c)(Y),n=Object(x.c)(M),a=Object(x.c)(z),s=Object(x.c)(Z),r=Object(x.c)(K),o=Object(c.useState)(!1),d=Object(i.a)(o,2),l=d[0],u=d[1],j=Object(c.useRef)(null);Object(c.useEffect)((function(){0===t.length&&e(I())}),[e]),Object(c.useEffect)((function(){0===n.length&&e(L({page:a,loadingType:"reload"}))}),[t]),Object(c.useEffect)((function(){l&&(e(L({page:a+1,loadingType:"addNew"})),e(F({page:a+1})),u(!1))}),[e,l]),Object(c.useEffect)((function(){var t=setInterval((function(){e(S("check"))}),6e4);return function(){clearInterval(t)}}),[e]);var b=n.map((function(e){if(e)return Object(O.jsx)(f,{news:e},e.id)}));Object(c.useEffect)((function(){return document.addEventListener("scroll",h),function(){document.removeEventListener("scroll",h)}}),[s]);var h=function(e){null!==j.current&&e.target.documentElement.scrollTop+window.innerHeight-83>j.current.scrollHeight&&!l&&!s&&u(!0)},p=Object(O.jsx)("button",{className:m()("ui","secondary","button",V.a.reloadBtn),onClick:function(){return e(I())},children:s?"Loading...":"Reload page"});return Object(O.jsxs)("div",{className:V.a.container,ref:j,children:[b,s&&Object(O.jsx)(X,{}),Object(O.jsx)(W.a,{content:"Check new content, refresh page)",open:r,trigger:p})]})},ee=n(64),te=n.n(ee),ne=function(){return Object(O.jsx)("div",{className:"ui active inverted dimmer",style:{height:"100vh"},children:Object(O.jsx)("div",{className:"ui large text loader",children:"Loading"})})},ce=n.p+"static/media/user.73a0bc1f.png",ae=n(192),se=function e(t){var n=t.comment,a=Object(c.useState)([]),s=Object(i.a)(a,2),r=s[0],o=s[1],d=Object(c.useState)(!1),l=Object(i.a)(d,2),u=l[0],j=l[1],b=function(){var e=Object(N.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.kids){e.next=7;break}return j(!0),e.next=4,U(n.kids);case 4:t=e.sent,j(!1),o(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=r.map((function(t){if("number"!==typeof t)return Object(O.jsx)(e,{comment:t},t.id)}));return Object(O.jsxs)("div",{className:"comment",children:[Object(O.jsx)("a",{className:"avatar",children:Object(O.jsx)("img",{src:ce,width:45,height:45})}),Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)("a",{className:"author",children:n.by}),Object(O.jsx)("div",{className:"metadata",children:Object(O.jsx)("span",{className:"date",children:new Date(1e3*n.time).toString().slice(4,21)})}),Object(O.jsx)("div",{className:"text",dangerouslySetInnerHTML:{__html:n.text}}),Object(O.jsxs)("div",{className:"actions",children:[Object(O.jsx)("a",{className:"reply",onClick:function(){return alert("function in development")},children:"Reply"}),n.kids&&Object(O.jsx)(ae.a,{onClick:b,loading:u,children:"Load Replies"}),Object(O.jsx)("div",{className:"ui comments",children:m})]})]})]})},re=function(){var e,t=Object(x.b)(),n=Object(o.h)().id,a=Object(x.c)(q),s=Object(x.c)(Z),r=Object(c.useState)(!1),d=Object(i.a)(r,2),l=d[0],u=d[1];Object(c.useEffect)((function(){t(P(+n))}),[t,n]);var j,b=function(){var e=Object(N.a)(w.a.mark((function e(){var n,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u(!0),!a.kids){e.next=9;break}return e.next=4,C(a.id);case 4:return n=e.sent,e.next=7,U(n.kids);case 7:c=e.sent,t(E({id:a.id,comments:c}));case 9:u(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e=setInterval((function(){b()}),6e4);return function(){clearInterval(e)}}),[]),s||!a?Object(O.jsx)(ne,{}):((null===a||void 0===a?void 0:a.kids)&&(j=a.kids.map((function(e){if("number"!==typeof e)return Object(O.jsx)(se,{comment:e},e.id)}))),Object(O.jsxs)("div",{className:te.a.container,children:[Object(O.jsxs)("div",{className:"ui two item menu",children:[Object(O.jsxs)(h.b,{to:"/news",className:"item",children:[Object(O.jsx)("i",{className:"arrow alternate circle left icon"})," Go back"]}),Object(O.jsxs)("a",{className:"item",onClick:function(){return t(P(+n))},children:["Reload \xa0",Object(O.jsx)("i",{className:"undo alternate icon"})]})]}),Object(O.jsx)("h1",{className:"ui header",children:a.title}),Object(O.jsxs)("div",{className:te.a.newsInfo,children:[Object(O.jsxs)("div",{className:"sub header",children:[new Date(1e3*a.time).toString().slice(4,21)," | \xa0"]}),Object(O.jsxs)("div",{className:"sub header",children:["by ",a.by," | "]})]}),Object(O.jsx)("div",{className:"ui divider"}),Object(O.jsxs)("div",{className:te.a.mainLink,children:[Object(O.jsx)("h3",{className:"ui header",children:"You can go to original news link: "}),Object(O.jsx)("a",{href:(null===a||void 0===a?void 0:a.url)||"#",target:"_blank",children:"Click here"})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("h2",{className:"ui dividing header",children:["Comments (",(null===(e=a.kids)||void 0===e?void 0:e.length)||0,")",Object(O.jsx)(ae.a,{className:m()("ui","secondary","button",te.a.reloadBtn),onClick:b,loading:l,children:"Reload Comments"})]}),Object(O.jsx)("div",{className:te.a.commentsBlock,children:Object(O.jsx)("div",{className:"ui comments",children:!l&&j})})]})]}))},ie=n(106),oe=n.n(ie),de=function(){return Object(O.jsx)("div",{className:oe.a.container,children:Object(O.jsxs)("div",{className:"card",children:[Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)("div",{className:"header"}),Object(O.jsx)("div",{className:"meta",children:"This page now is in development"}),Object(O.jsx)("div",{className:"description",children:"Please, go to News or Info page)"})]}),Object(O.jsx)("div",{className:"extra content",children:Object(O.jsxs)("div",{className:oe.a.buttons,children:[Object(O.jsx)(h.b,{to:"/news",children:Object(O.jsx)("div",{className:"ui basic green button",children:"News"})}),Object(O.jsx)(h.b,{to:"/info",children:Object(O.jsx)("div",{className:"ui basic blue button",children:"Info"})})]})})]})})},le=n(107),ue=n.n(le),je=function(){return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)("div",{className:m()("ui","link","cards",ue.a.container)}),Object(O.jsx)("div",{className:m()("ui","items",ue.a.container),children:Object(O.jsxs)("div",{className:"item",children:[Object(O.jsx)("div",{className:"image",children:Object(O.jsx)("img",{src:"https://avatars.githubusercontent.com/u/60394886?s=460&u=0351face4ac5348d3f5af6dee57c6822b5447380&v=4"})}),Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)("a",{className:"header",children:"Alexey Horbunov"}),Object(O.jsx)("div",{className:"meta",children:Object(O.jsx)("span",{children:"Frontend Developer"})}),Object(O.jsxs)("div",{className:"description",children:["Hello, I`m Alex, JavaScript(ReactJS) developer. Also can write awesome apps on TypeScript(like this)",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Check my Github account and see more interesting projects :)"]}),Object(O.jsxs)("div",{className:"extra",children:[Object(O.jsx)("div",{className:"ui red ribbon label",tabIndex:0,children:"You can check my projects on GitHub:"}),Object(O.jsxs)("a",{className:"ui animated fade black button",href:"https://github.com/Algoritm211",target:"_blank",children:[Object(O.jsx)("div",{className:"hidden content",children:Object(O.jsx)("i",{className:"github square icon normal"})}),Object(O.jsx)("div",{className:"visible content",children:"Go to My Git"})]})]})]})]})})]})},be=n(128),me=n.n(be),he=function(){var e=Object(o.g)(),t=e.location.pathname.slice(1),n=Object(c.useState)(t),s=Object(i.a)(n,2),r=s[0],u=s[1],j=function(t,n){var c=n.name;c&&(u(c),e.push("/".concat(c)))};return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsxs)(d.a,{pointing:!0,children:[Object(O.jsx)(d.a.Item,{name:"news",active:"news"===r,onClick:j}),Object(O.jsx)(d.a.Item,{name:"jobs",active:"jobs"===r,onClick:j}),Object(O.jsx)(d.a.Item,{name:"info",active:"info"===r,onClick:j}),Object(O.jsx)(d.a.Menu,{position:"right",children:Object(O.jsx)(d.a.Item,{children:Object(O.jsx)("span",{className:me.a.author,children:" By Alexey Horbunov"})})})]}),Object(O.jsx)(l.a,{children:Object(O.jsxs)(o.d,{children:[Object(O.jsx)(o.b,{path:"/news",exact:!0,component:$}),Object(O.jsx)(o.b,{path:"/news/:id",component:re}),Object(O.jsx)(o.b,{path:"/jobs",component:de}),Object(O.jsx)(o.b,{path:"/info",component:je}),Object(O.jsx)(o.a,{to:"/news"})]})})]})};n(172);var Oe=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(he,{})})},fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,196)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))},xe=(n(173),n(26)),pe=Object(xe.c)({newsReducer:J}),ve=Object(g.a)({reducer:pe});window.__store__=ve;var we=ve;r.a.render(Object(O.jsx)(x.a,{store:we,children:Object(O.jsx)(h.a,{children:Object(O.jsx)(Oe,{})})}),document.getElementById("root")),fe()},64:function(e,t,n){e.exports={container:"NewsPage_container__3OkLO",mainLink:"NewsPage_mainLink__2J1sE",reloadBtn:"NewsPage_reloadBtn__1C_e0",commentsBlock:"NewsPage_commentsBlock__18mP5",newsInfo:"NewsPage_newsInfo__I0Bio"}},99:function(e,t,n){e.exports={contentContainer:"NewsItem_contentContainer__2goDd",metaContainer:"NewsItem_metaContainer__2FlrN"}}},[[174,1,2]]]);
//# sourceMappingURL=main.d9bcfe94.chunk.js.map