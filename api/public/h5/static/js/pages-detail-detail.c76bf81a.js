(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-detail"],{"1da1":function(t,e,i){"use strict";function n(t,e,i,n,a,r,o){try{var s=t[r](o),c=s.value}catch(l){return void i(l)}s.done?e(c):Promise.resolve(c).then(n,a)}function a(t){return function(){var e=this,i=arguments;return new Promise((function(a,r){var o=t.apply(e,i);function s(t){n(o,a,r,s,c,"next",t)}function c(t){n(o,a,r,s,c,"throw",t)}s(void 0)}))}}i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},"235e":function(t,e,i){var n=i("f137");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("df609dae",n,!0,{sourceMap:!1,shadowMode:!1})},"258a":function(t,e,i){"use strict";i.r(e);var n=i("6d83"),a=i("9409");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);e["default"]=c.exports},"504a":function(t,e,i){"use strict";var n=i("235e"),a=i.n(n);a.a},"6d83":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"mask",style:{backgroundColor:t.backgroundColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleMask.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"mask-content",style:[{height:t.config.height,transform:t.transform}],on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[i("v-uni-scroll-view",{staticClass:"view-content",attrs:{"scroll-y":!0}},[i("v-uni-view",{staticClass:"share-header"},[t._v("分享到")]),i("v-uni-view",{staticClass:"share-list"},t._l(t.shareList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"share-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.shareToFriend(e.text)}}},[i("v-uni-image",{attrs:{src:e.icon,mode:""}}),i("v-uni-text",[t._v(t._s(e.text))])],1)})),1)],1),i("v-uni-view",{staticClass:"bottom b-t",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleMask.apply(void 0,arguments)}}},[t._v("取消")])],1)],1):t._e()},r=[]},"777d":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("1da1")),r=n(i("258a")),o={components:{share:r.default},data:function(){return{loaded:!1,currentEpd:1,data:{guessList:[{},{},{},{}]},shareList:[]}},onLoad:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.json("detailData");case 2:return i=e.sent,e.next=5,t.$api.json("shareList");case 5:n=e.sent,t.loaded=!0,t.data=i,t.shareList=n,uni.setNavigationBarTitle({title:i.title});case 10:case"end":return e.stop()}}),e)})))()},methods:{imageOnLoad:function(t,e){this.$set(this.data[t][e],"loaded","loaded")},changeEpd:function(t){var e=this.data.episodeList,i=e[t];this.$api.msg("切换到第".concat(i,"项")),this.currentEpd=i},share:function(){this.$refs.share.toggleMask()},favorite:function(){this.data.favorite=!this.data.favorite}},onBackPress:function(){if(this.$refs.share.show)return this.$refs.share.toggleMask(),!0}};e.default=o},9409:function(t,e,i){"use strict";i.r(e);var n=i("bd4a"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"96cf":function(t,e){!function(e){"use strict";var i,n=Object.prototype,a=n.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag",l="object"===typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{u=e.regeneratorRuntime=l?t.exports:{},u.wrap=y;var f="suspendedStart",d="suspendedYield",v="executing",h="completed",p={},g={};g[o]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(z([])));b&&b!==n&&a.call(b,o)&&(g=b);var m=L.prototype=k.prototype=Object.create(g);_.prototype=m.constructor=L,L.constructor=_,L[c]=_.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},u.awrap=function(t){return{__await:t}},C(E.prototype),E.prototype[s]=function(){return this},u.AsyncIterator=E,u.async=function(t,e,i,n){var a=new E(y(t,e,i,n));return u.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},C(m),m[c]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){while(e.length){var n=e.pop();if(n in t)return i.value=n,i.done=!1,i}return i.done=!0,i}},u.values=z,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=i)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,a){return s.type="throw",s.arg=t,e.next=n,a&&(e.method="next",e.arg=i),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],s=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var r=n;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=t,o.arg=e,r?(this.method="next",this.next=r.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),P(i),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var n=i.completion;if("throw"===n.type){var a=n.arg;P(i)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:z(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=i),p}}}function y(t,e,i,n){var a=e&&e.prototype instanceof k?e:k,r=Object.create(a.prototype),o=new T(n||[]);return r._invoke=j(t,i,o),r}function x(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(n){return{type:"throw",arg:n}}}function k(){}function _(){}function L(){}function C(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t){function e(i,n,r,o){var s=x(t[i],t,n);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"===typeof l&&a.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,r,o)}),(function(t){e("throw",t,r,o)})):Promise.resolve(l).then((function(t){c.value=t,r(c)}),(function(t){return e("throw",t,r,o)}))}o(s.arg)}var i;function n(t,n){function a(){return new Promise((function(i,a){e(t,n,i,a)}))}return i=i?i.then(a,a):a()}this._invoke=n}function j(t,e,i){var n=f;return function(a,r){if(n===v)throw new Error("Generator is already running");if(n===h){if("throw"===a)throw r;return S()}i.method=a,i.arg=r;while(1){var o=i.delegate;if(o){var s=$(o,i);if(s){if(s===p)continue;return s}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(n===f)throw n=h,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);n=v;var c=x(t,e,i);if("normal"===c.type){if(n=i.done?h:d,c.arg===p)continue;return{value:c.arg,done:i.done}}"throw"===c.type&&(n=h,i.method="throw",i.arg=c.arg)}}}function $(t,e){var n=t.iterator[e.method];if(n===i){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=i,$(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=x(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,p;var r=a.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=i),e.delegate=null,p):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function z(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){while(++n<t.length)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=i,e.done=!0,e};return r.next=r}}return{next:S}}function S(){return{value:i,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},bd4a:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{transform:"translateY(50vh)",timer:0,backgroundColor:"rgba(0,0,0,0)",show:!1,config:{}}},props:{contentHeight:{type:Number,default:0},hasTabbar:{type:Boolean,default:!1},shareList:{type:Array,default:function(){return[]}}},created:function(){var t=uni.upx2px(this.contentHeight)+"px";this.config={height:t,transform:"translateY(".concat(t,")"),backgroundColor:"rgba(0,0,0,.4)"},this.transform=this.config.transform},methods:{toggleMask:function(){var t=this;if(1!=this.timer){if(this.timer=1,setTimeout((function(){t.timer=0}),500),this.show)return this.transform=this.config.transform,this.backgroundColor="rgba(0,0,0,0)",void setTimeout((function(){t.show=!1,t.hasTabbar&&uni.showTabBar()}),200);this.show=!0,this.hasTabbar?uni.hideTabBar({success:function(){setTimeout((function(){t.backgroundColor=t.config.backgroundColor,t.transform="translateY(0px)"}),10)}}):setTimeout((function(){t.backgroundColor=t.config.backgroundColor,t.transform="translateY(0px)"}),10)}},stopPrevent:function(){},shareToFriend:function(t){this.$api.msg("分享给".concat(t)),this.toggleMask()}}};e.default=n},c072:function(t,e,i){"use strict";i.r(e);var n=i("777d"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},e90e:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-swiper",{staticClass:"carousel",attrs:{"indicator-dots":"true",circular:"true",interval:"3000",duration:"700"}},t._l(t.data.imgList,(function(e,n){return i("v-uni-swiper-item",{key:n},[i("v-uni-view",{staticClass:"image-wrapper"},[i("v-uni-image",{class:e.loaded,attrs:{src:e.src,mode:"aspectFill"},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.imageOnLoad("imgList",n)}}})],1)],1)})),1),i("v-uni-view",{staticClass:"scroll-view-wrapper"},[i("v-uni-scroll-view",{staticClass:"episode-panel",class:{Skeleton:!t.loaded},attrs:{"scroll-x":!0}},t._l(t.data.episodeList,(function(e,n){return i("v-uni-view",{key:n,class:{current:t.currentEpd===e},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeEpd(n)}}},[t._v(t._s(e))])})),1)],1),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",{class:{Skeleton:!t.loaded}},[t._v(t._s(t.data.title))]),i("v-uni-text",{class:{Skeleton:!t.loaded}},[t._v(t._s(t.data.title2))])],1),i("v-uni-text",{staticClass:"yticon icon-xia"})],1),i("v-uni-view",{staticClass:"actions"},[i("v-uni-text",{staticClass:"yticon icon-fenxiang2",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.share.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"yticon icon-Group-"}),i("v-uni-text",{staticClass:"yticon icon-shoucang",class:{active:t.data.favorite},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.favorite.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"guess"},[i("v-uni-view",{staticClass:"section-tit"},[t._v("猜你喜欢")]),i("v-uni-view",{staticClass:"guess-list"},t._l(t.data.guessList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"guess-item"},[i("v-uni-view",{staticClass:"image-wrapper"},[i("v-uni-image",{class:e.loaded,attrs:{src:e.src,mode:"aspectFill"},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.imageOnLoad("guessList",n)}}})],1),i("v-uni-text",{staticClass:"title clamp",class:{Skeleton:!t.loaded}},[t._v(t._s(e.title))]),i("v-uni-text",{staticClass:"clamp",class:{Skeleton:!t.loaded}},[t._v(t._s(e.title2))])],1)})),1)],1),i("v-uni-view",{staticClass:"evalution"},[i("v-uni-view",{staticClass:"section-tit"},[t._v("评论")]),i("v-uni-view",{staticClass:"eva-list",class:{Skeleton:!t.loaded}},t._l(t.data.evaList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"eva-item"},[i("v-uni-image",{attrs:{src:e.src,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"eva-right"},[i("v-uni-text",[t._v(t._s(e.nickname))]),i("v-uni-text",[t._v(t._s(e.time))]),i("v-uni-view",{staticClass:"zan-box"},[i("v-uni-text",[t._v(t._s(e.zan))]),i("v-uni-text",{staticClass:"yticon icon-shoucang"})],1),i("v-uni-text",{staticClass:"content"},[t._v(t._s(e.content))])],1)],1)})),1)],1),i("share",{ref:"share",attrs:{contentHeight:580,shareList:t.shareList}})],1)},r=[]},f137:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文章场景相关 */uni-page-body[data-v-a9842764]{background:#f8f8f8}.carousel[data-v-a9842764]{height:200px}.carousel .image-wrapper[data-v-a9842764]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-align-content:center;align-content:center;width:100%;height:100%;overflow:hidden}.carousel .image-wrapper uni-image[data-v-a9842764]{width:100%;height:100%}.scroll-view-wrapper[data-v-a9842764]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?90?%;padding:%?20?% 0 %?20?% %?40?%;background:#fff}.episode-panel[data-v-a9842764]{white-space:nowrap;width:100%}.episode-panel uni-view[data-v-a9842764]{display:inline-block;margin-right:%?30?%;width:%?56?%;font-size:%?32?%;color:#606266}.episode-panel uni-view.current[data-v-a9842764]{color:#07a7a7}.info[data-v-a9842764]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?% %?40?%;background:#fff}.info .title[data-v-a9842764]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;font-size:%?36?%;color:#303133}.info .title uni-text[data-v-a9842764]:last-child{font-size:%?24?%;color:#909399;margin-top:%?4?%}.info .title uni-text:last-child.Skeleton[data-v-a9842764]{width:%?220?%}.info .yticon[data-v-a9842764]{font-size:%?44?%;color:#606266;margin:0 %?10?% 0 %?30?%}.actions[data-v-a9842764]{padding:%?10?% %?28?%;background:#fff}.actions .yticon[data-v-a9842764]{font-size:%?46?%;color:#606266;padding:%?10?% %?12?%}.actions .yticon.active[data-v-a9842764]{color:#ff4443}.actions .yticon[data-v-a9842764]:nth-child(2){font-size:%?50?%}.section-tit[data-v-a9842764]{font-size:%?30?%;color:#303133;margin-bottom:%?30?%;text-align:center}.guess[data-v-a9842764]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?30?% %?40?% %?10?%;margin-top:%?16?%;background:#fff}.guess-list[data-v-a9842764]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;width:100%}.guess-item[data-v-a9842764]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;min-width:40%;margin-right:%?26?%;padding-bottom:%?40?%}.guess-item[data-v-a9842764]:nth-child(2n){margin-right:0}.guess-item uni-image[data-v-a9842764]{width:100%;height:%?200?%;-webkit-border-radius:%?10?%;border-radius:%?10?%}.guess-item uni-text[data-v-a9842764]{font-size:%?24?%;color:#909399}.guess-item uni-text.Skeleton[data-v-a9842764]{width:%?180?%}.guess-item uni-text.Skeleton.title[data-v-a9842764]{width:%?140?%}.guess-item uni-text.title[data-v-a9842764]{font-size:%?30?%;color:#303133;margin-top:%?16?%;margin-bottom:%?8?%}.evalution[data-v-a9842764]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background:#fff;margin-top:%?16?%;padding:%?40?% 0}.eva-item[data-v-a9842764]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?% %?40?%}.eva-item uni-image[data-v-a9842764]{width:%?60?%;height:%?60?%;-webkit-border-radius:50px;border-radius:50px;-webkit-flex-shrink:0;flex-shrink:0;margin-right:%?24?%}.eva-right[data-v-a9842764]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?26?%;color:#909399;position:relative}.eva-right .zan-box[data-v-a9842764]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:base-line;-webkit-align-items:base-line;align-items:base-line;position:absolute;top:%?10?%;right:%?10?%}.eva-right .zan-box .yticon[data-v-a9842764]{margin-left:%?8?%}.eva-right .content[data-v-a9842764]{font-size:%?28?%;color:#333;padding-top:%?20?%}body.?%PAGE?%[data-v-a9842764]{background:#f8f8f8}',""]),t.exports=e},f616:function(t,e,i){"use strict";i.r(e);var n=i("e90e"),a=i("c072");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("504a");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"a9842764",null,!1,n["a"],o);e["default"]=c.exports}}]);