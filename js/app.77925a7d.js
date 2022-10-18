(function(){"use strict";var t={6652:function(t,e,a){var r=a(144),i=a(998),n=function(){var t=this,e=t._self._c;return e(i.Z,[e("app-header"),e("router-view")],1)},s=[],o=a(4843),u=a(3201),l=a(3687),c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e(u.Z,{attrs:{"align-center":""}},[e("div",{staticClass:"logo"},[t._v("김다빈의 포트폴리오")]),e(l.Z),e(o.Z,{attrs:{text:""}},[t._v("프로젝트1")]),e(o.Z,{attrs:{text:""}},[t._v("프로젝트2")]),e(o.Z,{attrs:{text:""}},[t._v("프로젝트3")])],1)],1)},p=[],d=a(1001),f={},g=(0,d.Z)(f,c,p,!1,null,"3a43f422",null),m=g.exports,v={name:"App",components:{AppHeader:m},data:()=>({})},h=v,b=(0,d.Z)(h,n,s,!1,null,null,null),y=b.exports,w=a(8345),C=a(1267),Z=a(9422),j=function(){var t=this,e=t._self._c;return e("div",[e("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption}},[e("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/top1.jpg)"},attrs:{"data-aos":"fade-in","data-aos-duration":"1000"}},[e(u.Z,{attrs:{"data-aos":"fade-up","fill-height":"","align-center":"","justify-center":""}},[e("div",{staticClass:"slog"},[t._v("열심히하겠습니다")])])],1),e("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/top2.jpg)"}},[e(u.Z,{attrs:{"fill-height":"","align-center":"","justify-center":""}},[e("div",{staticClass:"slog"},[t._v("열심히하겠습니다")])])],1),e("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/top3.jpg)"}},[e(u.Z,{attrs:{"fill-height":"","align-center":"","justify-center":""}},[e("div",{staticClass:"slog"},[t._v("열심히하겠습니다")])])],1)],1),e("div",{staticClass:"section"},[e("div",{staticClass:"header"},[t._v("프로젝트 목록")]),e(u.Z,{attrs:{wrap:""}},[e(C.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"fade-right"}},[e(Z.Z,{attrs:{"aspect-ratio":1}},[e("img",{staticClass:"image",attrs:{src:"/image/top1.jpg"}})])],1),e(C.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"fade-down","data-aos-delay":"100"}},[e(Z.Z,{attrs:{"aspect-ratio":1}},[e("img",{staticClass:"image",attrs:{src:"/image/top2.jpg"}})])],1),e(C.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"fade-left","data-aos-delay":"200"}},[e(Z.Z,{attrs:{"aspect-ratio":1}},[e("img",{staticClass:"image",attrs:{src:"/image/top3.jpg"}})])],1),e(C.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"fade-right"}},[e(Z.Z,{attrs:{"aspect-ratio":1}},[e("img",{staticClass:"image",attrs:{src:"/image/top1.jpg"}})])],1),e(C.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"fade-up","data-aos-delay":"100"}},[e(Z.Z,{attrs:{"aspect-ratio":1}},[e("img",{staticClass:"image",attrs:{src:"/image/top2.jpg"}})])],1),e(C.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"fade-left","data-aos-delay":"200"}},[e(Z.Z,{attrs:{"aspect-ratio":1}},[e("img",{staticClass:"image",attrs:{src:"/image/top3.jpg"}})])],1)],1)],1)],1)},_=[],x=a(697),O=(a(2633),a(2711)),k=a.n(O),S={name:"Home",data(){return{swiperOption:{loop:!0,autoplay:{delay:3e3}}}},mounted(){k().init()},components:{Swiper:x.Swiper,SwiperSlide:x.SwiperSlide}},P=S,T=(0,d.Z)(P,j,_,!1,null,"71068440",null),A=T.exports;r["default"].use(w.ZP);const E=[{path:"/",name:"home",component:A},{path:"/about",name:"about",component:()=>a.e(443).then(a.bind(a,1272))}],M=new w.ZP({mode:"history",base:"/portpolio/",routes:E});var N=M,F=a(8864);r["default"].use(F.Z);var H=new F.Z({});r["default"].config.productionTip=!1,new r["default"]({router:N,vuetify:H,render:t=>t(y)}).$mount("#app")}},e={};function a(r){var i=e[r];if(void 0!==i)return i.exports;var n=e[r]={exports:{}};return t[r].call(n.exports,n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,r,i,n){if(!r){var s=1/0;for(c=0;c<t.length;c++){r=t[c][0],i=t[c][1],n=t[c][2];for(var o=!0,u=0;u<r.length;u++)(!1&n||s>=n)&&Object.keys(a.O).every((function(t){return a.O[t](r[u])}))?r.splice(u--,1):(o=!1,n<s&&(s=n));if(o){t.splice(c--,1);var l=i();void 0!==l&&(e=l)}}return e}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[r,i,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,r){return a.f[r](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/about.cde185be.js"}}(),function(){a.miniCssF=function(t){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="portpolio:";a.l=function(r,i,n,s){if(t[r])t[r].push(i);else{var o,u;if(void 0!==n)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var p=l[c];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==e+n){o=p;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",e+n),o.src=r),t[r]=[i];var d=function(e,a){o.onerror=o.onload=null,clearTimeout(f);var i=t[r];if(delete t[r],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(t){return t(a)})),e)return e(a)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/portpolio/"}(),function(){var t={143:0};a.f.j=function(e,r){var i=a.o(t,e)?t[e]:void 0;if(0!==i)if(i)r.push(i[2]);else{var n=new Promise((function(a,r){i=t[e]=[a,r]}));r.push(i[2]=n);var s=a.p+a.u(e),o=new Error,u=function(r){if(a.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var n=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;o.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",o.name="ChunkLoadError",o.type=n,o.request=s,i[1](o)}};a.l(s,u,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,n,s=r[0],o=r[1],u=r[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(u)var c=u(a)}for(e&&e(r);l<s.length;l++)n=s[l],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(c)},r=self["webpackChunkportpolio"]=self["webpackChunkportpolio"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(6652)}));r=a.O(r)})();
//# sourceMappingURL=app.77925a7d.js.map