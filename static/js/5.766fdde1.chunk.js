(this.webpackJsonpdogs=this.webpackJsonpdogs||[]).push([[5],{109:function(e,t,s){e.exports={img:"PhotosSlider_img__prIXe",scroll:"PhotosSlider_scroll__2TJDy",slide:"PhotosSlider_slide__vEiu3",scroll_title:"PhotosSlider_scroll_title__25j5K",thumbs:"PhotosSlider_thumbs__3mBXQ",thumbUp:"PhotosSlider_thumbUp__2mzPb",thumbDown:"PhotosSlider_thumbDown__2HMLE",thumbUpActive:"PhotosSlider_thumbUpActive__26RKc",thumbDownActive:"PhotosSlider_thumbDownActive__3vQWE",label:"PhotosSlider_label__1Q8Gb",fetch_button:"PhotosSlider_fetch_button__1yi5O"}},110:function(e,t,s){"use strict";s.d(t,"a",(function(){return m}));var i=s(6),n=s(96),o=s(97),c=s(100),r=s(101),a=s(2),l=s.n(a),u=s(24),d=s(7),h=s(3),b=function(e){return{isLoged:e.authReducer.isLoged}},m=function(e){var t=function(t){Object(c.a)(a,t);var s=Object(r.a)(a);function a(){return Object(n.a)(this,a),s.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return this.props.isLoged?Object(h.jsx)(e,Object(i.a)({},this.props)):Object(h.jsx)(d.a,{to:"/login"})}}]),a}(l.a.Component);return Object(u.b)(b)(t)}},117:function(e,t,s){e.exports={empty_img:"NoItems_empty_img__3dmc1",empty_header:"NoItems_empty_header__3gpbf"}},118:function(e,t,s){"use strict";s(2);var i=s(117),n=s.n(i),o=s.p+"static/media/empty.002bb8b3.gif",c=s(3);t.a=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{className:n.a.empty_header,children:"You have no items here at the moment"}),Object(c.jsx)("div",{className:n.a.empty_img,children:Object(c.jsx)("img",{src:o,alt:"no Items"})})]})}},279:function(e,t,s){"use strict";s.r(t);var i=s(107),n=s(2),o=s.n(n),c=s(25),r=s(283),a=s(278),l=(s(128),s(129),s(24)),u=s(282),d=s(277),h=s(109),b=s.n(h),m=s(22),_=s(110),j=s(46),p=s(118),g=s(3);u.a.use([d.a]);t.default=Object(c.d)(_.a,Object(l.b)((function(e){return{dogs:e.photosReducer.dogs,dislikedDogsId:e.photosReducer.dislikedDogsId.filter((function(e,t,s){return s.indexOf(e)==t})),uid:e.authReducer.userId}}),{clearDogsThunk:m.b,createVoteThunk:m.c,setDislikedDogsThunk:m.j,setAllVotesIdThunk:m.i}))((function(e){var t=o.a.useState(0),s=Object(i.a)(t,2),n=s[0],c=s[1];return o.a.useEffect((function(){return e.setDislikedDogsThunk(e.dislikedDogsId),setTimeout((function(){c(1)}),2e3),function(){e.clearDogsThunk()}}),[]),Object(g.jsxs)("div",{"\u0441lassName":b.a.wrapper,children:[Object(g.jsx)("h3",{className:b.a.scroll_title,children:"Here you have all your Disliked items \ud83d\udc4e "}),e.dogs.length?Object(g.jsx)("div",{className:b.a.scroll,children:Object(g.jsx)(r.a,{spaceBetween:20,slidesPerView:1,navigation:!0,observer:!0,children:e.dogs.map((function(t){return Object(g.jsx)(a.a,{children:Object(g.jsxs)("div",{className:b.a.slide,children:[0===n?Object(g.jsx)(j.a,{}):null,Object(g.jsx)("div",{className:b.a.label,children:t.breeds?t.breeds.map((function(e){return e.name})):null}),Object(g.jsx)("img",{src:t.url,className:b.a.img,alt:"ever"}),Object(g.jsx)("div",{className:b.a.thumbs,children:Object(g.jsx)("button",{className:b.a.thumbDown+" "+(e.dislikedDogsId.some((function(e){return e===t.id}))?b.a.thumbDownActive:""),onClick:function(){e.dislikedDogsId.some((function(e){return e===t.id}))?console.log("you disliked it"):e.createVoteThunk(t.id,0,e.uid)},children:"\ud83d\udc4e"})})]})},t.id)}))})}):Object(g.jsx)(p.a,{})]})}))}}]);
//# sourceMappingURL=5.766fdde1.chunk.js.map