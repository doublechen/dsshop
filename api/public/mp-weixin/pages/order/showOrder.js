(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/showOrder"],{"12ab":function(t,e,n){"use strict";n.r(e);var i=n("7c99"),r=n("bf96");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("d283");var c,a=n("f0c5"),u=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);e["default"]=u.exports},"15f9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=c(n("a34a")),r=c(n("3589")),o=n("2f62");function c(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,i,r,o,c){try{var a=t[o](c),u=a.value}catch(s){return void n(s)}a.done?e(u):Promise.resolve(u).then(i,r)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var o=t.apply(e,n);function c(t){a(o,i,r,c,u,"next",t)}function u(t){a(o,i,r,c,u,"throw",t)}c(void 0)}))}}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={data:function(){return{id:"",indentList:{},goodList:[],addressData:{},carriage:0,total:0,outPocket:0,order:[],onError:null}},onLoad:function(t){if(this.loginCheck(),!t.id)return this.$api.msg("参数有误"),!1;this.id=t.id,this.getList()},methods:f(f({},(0,o.mapMutations)(["loginCheck"])),{},{getList:function(){var t=this;return u(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return{},n=t,e.next=4,r.default.getDetails(t.id,(function(t){for(var e in t.goods_list)t.goods_list[e].good_sku&&(t.goods_list[e].good_sku.product_sku.forEach((function(n){t.goods_list[e].specification?t.goods_list[e].specification+=n.value+";":t.goods_list[e].specification=n.value+";"})),t.goods_list[e].specification=t.goods_list[e].specification.substr(0,t.goods_list[e].specification.length-1));n.indentList=t,n.calcTotal()}));case 4:case"end":return e.stop()}}),e)})))()},calcTotal:function(){var t=this.indentList.goods_list,e=0;t.forEach((function(t){e+=t.price*t.number})),this.total=Number(e.toFixed(2))},onSuccess:function(t){this.$api.msg("复制成功")},onError:function(t){this.$api.msg("复制失败")},confirmReceipt:function(t){var e=this;r.default.getReceipt(t.id,(function(t){e.getList()}))},stopPrevent:function(){}})};e.default=d},"58a2":function(t,e,n){"use strict";(function(t){n("ebeb");i(n("66fd"));var e=i(n("12ab"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"6f7b":function(t,e,n){},"7c99":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.indentList.goods_list,(function(e,n){var i=t.__get_orig(e),r=t._f("smallImage")(e.img);return{$orig:i,f0:r}}))),i=t._f("1000")(t.total),r=t.indentList.carriage>0?t._f("1000")(t.indentList.carriage):null,o=t._f("1000")(t.indentList.total);t.$mp.data=Object.assign({},{$root:{l0:n,f1:i,f2:r,f3:o}})},o=[]},bf96:function(t,e,n){"use strict";n.r(e);var i=n("15f9"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},d283:function(t,e,n){"use strict";var i=n("6f7b"),r=n.n(i);r.a}},[["58a2","common/runtime","common/vendor"]]]);