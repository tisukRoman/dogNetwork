(this.webpackJsonpdogs=this.webpackJsonpdogs||[]).push([[6],{104:function(e,r,t){e.exports={img:"PhotosSlider_img__prIXe",scroll:"PhotosSlider_scroll__2TJDy",slide:"PhotosSlider_slide__vEiu3",scroll_title:"PhotosSlider_scroll_title__25j5K",thumbs:"PhotosSlider_thumbs__3mBXQ",thumbUp:"PhotosSlider_thumbUp__2mzPb",thumbDown:"PhotosSlider_thumbDown__2HMLE",thumbUpActive:"PhotosSlider_thumbUpActive__26RKc",thumbDownActive:"PhotosSlider_thumbDownActive__3vQWE",label:"PhotosSlider_label__1Q8Gb",fetch_button:"PhotosSlider_fetch_button__1yi5O"}},105:function(e,r,t){"use strict";t.d(r,"a",(function(){return u}));var s=t(6),o=(t(2),t(24)),c=t(7),i=t(3),n=function(e){return{isLoged:e.authReducer.isLoged}},u=function(e){return Object(o.b)(n)((function(r){return r.isLoged?Object(i.jsx)(e,Object(s.a)({},r)):Object(i.jsx)(c.a,{to:"/login"})}))}},106:function(e,r,t){e.exports={errorBlock:"Error_errorBlock__1P0ll",errorImg:"Error_errorImg__1pBD6",errorOk:"Error_errorOk__1ryo-"}},107:function(e,r,t){"use strict";t.d(r,"a",(function(){return a}));t(2);var s=t(24),o=t(21),c=t.p+"static/media/error.5ab9c481.gif",i=t(106),n=t.n(i),u=t(3),l=function(e){return{currentError:e.photosReducer.currentError}},a=function(e){return Object(s.b)(l,{clearErrorThunk:o.c})((function(r){return r.currentError?Object(u.jsx)(d,{clearErrorThunk:r.clearErrorThunk,currentError:r.currentError}):Object(u.jsx)(e,{props:r})}))},d=function(e){var r=e.currentError,t=e.clearErrorThunk;return Object(u.jsxs)("div",{className:n.a.errorBlock,children:[Object(u.jsxs)("h3",{children:[r," \u26a0\ufe0f"]}),Object(u.jsx)("div",{className:n.a.errorImg,children:Object(u.jsx)("img",{src:c,alt:"error"})}),Object(u.jsx)("div",{className:n.a.errorOk,onClick:t,children:"OK"})]})}},113:function(e,r,t){e.exports={empty_img:"NoItems_empty_img__3dmc1",empty_header:"NoItems_empty_header__3gpbf"}},114:function(e,r,t){"use strict";t(2);var s=t(113),o=t.n(s),c=t.p+"static/media/empty.002bb8b3.gif",i=t(3);r.a=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{className:o.a.empty_header,children:"You have no items here at the moment"}),Object(i.jsx)("div",{className:o.a.empty_img,children:Object(i.jsx)("img",{src:c,alt:"no Items"})})]})}},274:function(e,r,t){"use strict";t.r(r);var s=t(102),o=t(2),c=t.n(o),i=t(25),n=t(277),u=t(273),l=(t(122),t(123),t(24)),a=t(276),d=t(272),h=t(104),b=t.n(h),m=t(21),_=t(105),j=t(46),f=t(114),g=t(107),O=t(3);a.a.use([d.a]);r.default=Object(i.d)(_.a,g.a,Object(l.b)((function(e){return{dogs:e.photosReducer.dogs,dislikedDogsId:e.photosReducer.dislikedDogsId.filter((function(e,r,t){return t.indexOf(e)==r})),uid:e.authReducer.userId}}),{clearDogsThunk:m.b,createVoteThunk:m.d,setDislikedDogsThunk:m.k,setAllVotesIdThunk:m.j}))((function(e){var r=c.a.useState(0),t=Object(s.a)(r,2),o=t[0],i=t[1];return c.a.useEffect((function(){return e.setDislikedDogsThunk(e.dislikedDogsId),setTimeout((function(){i(1)}),2e3),function(){e.clearDogsThunk()}}),[]),Object(O.jsxs)("div",{"\u0441lassName":b.a.wrapper,children:[Object(O.jsx)("h3",{className:b.a.scroll_title,children:"Here you have all your Disliked items \ud83d\udc4e "}),e.dogs.length?Object(O.jsx)("div",{className:b.a.scroll,children:Object(O.jsx)(n.a,{spaceBetween:20,slidesPerView:1,navigation:!0,observer:!0,children:e.dogs.map((function(r){return Object(O.jsx)(u.a,{children:Object(O.jsxs)("div",{className:b.a.slide,children:[0===o?Object(O.jsx)(j.a,{}):null,Object(O.jsx)("div",{className:b.a.label,children:r.breeds?r.breeds.map((function(e){return e.name})):null}),Object(O.jsx)("img",{src:r.url,className:b.a.img,alt:"ever"}),Object(O.jsx)("div",{className:b.a.thumbs,children:Object(O.jsx)("button",{className:b.a.thumbDown+" "+(e.dislikedDogsId.some((function(e){return e===r.id}))?b.a.thumbDownActive:""),onClick:function(){e.dislikedDogsId.some((function(e){return e===r.id}))?console.log("you disliked it"):e.createVoteThunk(r.id,0,e.uid)},children:"\ud83d\udc4e"})})]})},r.id)}))})}):Object(O.jsx)(f.a,{})]})}))}}]);
//# sourceMappingURL=6.0e749d7e.chunk.js.map