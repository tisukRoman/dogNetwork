(this.webpackJsonpdogs=this.webpackJsonpdogs||[]).push([[8],{104:function(e,r,t){e.exports={img:"PhotosSlider_img__prIXe",scroll:"PhotosSlider_scroll__2TJDy",slide:"PhotosSlider_slide__vEiu3",scroll_title:"PhotosSlider_scroll_title__25j5K",thumbs:"PhotosSlider_thumbs__3mBXQ",thumbUp:"PhotosSlider_thumbUp__2mzPb",thumbDown:"PhotosSlider_thumbDown__2HMLE",thumbUpActive:"PhotosSlider_thumbUpActive__26RKc",thumbDownActive:"PhotosSlider_thumbDownActive__3vQWE",label:"PhotosSlider_label__1Q8Gb",fetch_button:"PhotosSlider_fetch_button__1yi5O"}},105:function(e,r,t){"use strict";t.d(r,"a",(function(){return u}));var o=t(6),c=(t(2),t(24)),n=t(7),s=t(3),i=function(e){return{isLoged:e.authReducer.isLoged}},u=function(e){return Object(c.b)(i)((function(r){return r.isLoged?Object(s.jsx)(e,Object(o.a)({},r)):Object(s.jsx)(n.a,{to:"/login"})}))}},106:function(e,r,t){e.exports={errorBlock:"Error_errorBlock__1P0ll",errorImg:"Error_errorImg__1pBD6",errorOk:"Error_errorOk__1ryo-"}},107:function(e,r,t){"use strict";t.d(r,"a",(function(){return d}));t(2);var o=t(24),c=t(21),n=t.p+"static/media/error.5ab9c481.gif",s=t(106),i=t.n(s),u=t(3),l=function(e){return{currentError:e.photosReducer.currentError}},d=function(e){return Object(o.b)(l,{clearErrorThunk:c.c})((function(r){return r.currentError?Object(u.jsx)(a,{clearErrorThunk:r.clearErrorThunk,currentError:r.currentError}):Object(u.jsx)(e,{props:r})}))},a=function(e){var r=e.currentError,t=e.clearErrorThunk;return Object(u.jsxs)("div",{className:i.a.errorBlock,children:[Object(u.jsxs)("h3",{children:[r," \u26a0\ufe0f"]}),Object(u.jsx)("div",{className:i.a.errorImg,children:Object(u.jsx)("img",{src:n,alt:"error"})}),Object(u.jsx)("div",{className:i.a.errorOk,onClick:t,children:"OK"})]})}},266:function(e,r,t){},279:function(e,r,t){"use strict";t.r(r);var o=t(2),c=t.n(o),n=t(266),s=t.n(n),i=t(102),u=t(25),l=t(277),d=t(273),a=(t(122),t(123),t(24)),h=t(276),b=t(272),j=t(104),_=t.n(j),m=t(21),f=t(105),g=t(46),O=t(107),k=t(3);h.a.use([b.a]);var p=Object(u.d)(f.a,O.a,Object(a.b)((function(e){return{dogs:e.photosReducer.dogs,likedDogsId:e.photosReducer.likedDogsId.filter((function(e,r,t){return t.indexOf(e)==r})),dislikedDogsId:e.photosReducer.dislikedDogsId.filter((function(e,r,t){return t.indexOf(e)==r})),uid:e.authReducer.userId,votesId:e.photosReducer.votesId}}),{getDogsThunk:m.g,clearDogsThunk:m.b,createVoteThunk:m.d}))((function(e){var r=c.a.useState(0),t=Object(i.a)(r,2),o=t[0],n=t[1];return c.a.useEffect((function(){return e.getDogsThunk(),setTimeout((function(){n(1)}),2e3),function(){e.clearDogsThunk()}}),[]),Object(k.jsxs)("div",{"\u0441lassName":_.a.wrapper,children:[Object(k.jsx)("h3",{className:_.a.scroll_title,children:"Enjoy cool pictures of our doggies "}),Object(k.jsx)("div",{className:_.a.scroll,children:Object(k.jsx)(l.a,{spaceBetween:20,slidesPerView:1,navigation:!0,observer:!0,children:e.dogs.map((function(r){return Object(k.jsx)(d.a,{children:Object(k.jsxs)("div",{className:_.a.slide,children:[0===o?Object(k.jsx)(g.a,{}):null,Object(k.jsx)("div",{className:_.a.label,children:r.breeds.map((function(e){return e.name}))}),Object(k.jsx)("img",{src:r.url,className:_.a.img,alt:"ever"}),Object(k.jsxs)("div",{className:_.a.thumbs,children:[Object(k.jsx)("button",{className:_.a.thumbDown+" "+(e.dislikedDogsId.some((function(e){return e===r.id}))?_.a.thumbDownActive:""),onClick:function(){e.dislikedDogsId.some((function(e){return e===r.id}))?console.log("you disliked it"):e.createVoteThunk(r.id,0,e.uid)},children:"\ud83d\udc4e"}),Object(k.jsx)("button",{className:_.a.thumbUp+" "+(e.likedDogsId.some((function(e){return e===r.id}))?_.a.thumbUpActive:""),onClick:function(){e.likedDogsId.some((function(e){return e===r.id}))?console.log("you liked it"):e.createVoteThunk(r.id,1,e.uid)},children:"\ud83d\udc4d"})]})]})},r.id)}))})}),Object(k.jsx)("div",{className:_.a.fetch_button,onClick:function(){e.getDogsThunk()},children:Object(k.jsx)("p",{children:"LOAD MORE"})})]})}));r.default=function(){return Object(k.jsx)("div",{className:s.a.photo_page,children:Object(k.jsx)(p,{})})}}}]);
//# sourceMappingURL=8.e6e98be2.chunk.js.map