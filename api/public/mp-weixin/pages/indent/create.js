(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/indent/create"],{"193e":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=d(i("a34a")),n=d(i("8b89")),r=d(i("f2c2")),o=i("2921"),c=i("26cb"),s=i("ad8f"),u=i("ec12"),l=i("2146");function d(t){return t&&t.__esModule?t:{default:t}}function f(t,e,i,a,n,r,o){try{var c=t[r](o),s=c.value}catch(u){return void i(u)}c.done?e(s):Promise.resolve(s).then(a,n)}function g(t){return function(){var e=this,i=arguments;return new Promise((function(a,n){var r=t.apply(e,i);function o(t){f(r,a,n,o,c,"next",t)}function c(t){f(r,a,n,o,c,"throw",t)}o(void 0)}))}}function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function h(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(Object(i),!0).forEach((function(e){v(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var b={data:function(){return{maskState:0,desc:"",payType:1,couponList:[],couponMoney:0,couponIndex:null,goodList:[],addressData:{},carriage:0,total:0,outPocket:0,data:{indentCommodity:[],address:{},remark:"",carriage:0,user_coupon_id:"",integral:0,integral_draw_log_id:0},integralPrice:0,integral:{available:0,deductible:0,parities:0},verify:{coupon:!1,integral:!1,integralCommodity:!1}}},onLoad:function(t){this.getVerifyPlugin(t)},watch:{total:function(t){this.verify.coupon&&this.getCouponList(t)}},methods:h(h({},(0,c.mapMutations)(["loginCheck"])),{},{getVerifyPlugin:function(t){var e=this;(0,l.verifyPlugin)(["coupon","integral","integralCommodity"],(function(i){e.verify=i,e.loginCheck(),t.integral_draw_log_id?(e.data.integral_draw_log_id=t.integral_draw_log_id,e.verify.integral&&e.getIntegralDrawData()):e.loadData()}))},loadData:function(){var e=this;return g(a.default.mark((function i(){var n,r,o,c;return a.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:for(c in e.cartList=[],e.invalidGood=[],n=t.getStorageSync("dsshopOrderList")||[],r=e,o=[],n)n[c].checked=!0,n[c].loaded="loaded",n[c].good_sku&&(n[c].good_sku.skus.forEach((function(t){n[c].specification?n[c].specification+=t.v+";":n[c].specification=t.v+";"})),n[c].specification=n[c].specification.substr(0,n[c].specification.length-1),o.push({ids:n[c].good_id,price:n[c].good_sku.price,skuIds:n[c].good_sku_id})),e.verify.integralCommodity&&e.getDetailData(o),!0===n[c].invalid&&n.splice(c,1);e.goodList=n,r.data.indentCommodity=n,r.calcTotal(),r.getOne();case 10:case"end":return i.stop()}}),i)})))()},getIntegralDrawData:function(){var t=this;return g(a.default.mark((function e(){var i,n;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=[],t.cartList=[],t.invalidGood=[],n=t,e.next=6,(0,u.good)(t.data.integral_draw_log_id,(function(t){for(var e in t)t[e].checked=!0,t[e].loaded="loaded",t[e].good_sku&&(t[e].good_sku.skus.forEach((function(i){t[e].specification?t[e].specification+=i.v+";":t[e].specification=i.v+";"})),t[e].specification=t[e].specification.substr(0,t[e].specification.length-1)),i.push({ids:t[e].good_id,price:t[e].price,skuIds:t[e].good_sku_id}),n.verify.integralCommodity&&n.getDetailData(i),!0===t[e].invalid&&t.splice(e,1);n.goodList=t,n.data.indentCommodity=t,n.calcTotal(),n.getOne()}));case 6:case"end":return e.stop()}}),e)})))()},getOne:function(){var t=this;n.default.freight(0,this.goodList,(function(e){t.addressData=e.shipping?e.shipping:"",t.carriage=e.carriage?e.carriage:0,t.outPocketTotal()}))},numberChange:function(t){this.number=t.number},changePayType:function(t){this.payType=t},submit:function(){if(!this.addressData)return this.$api.msg("请选择地址"),!1;this.couponList.length>0&&(this.data.user_coupon_id=this.couponList[this.couponIndex].id),this.data.address=this.addressData,this.data.carriage=this.carriage,r.default.create(this.data,(function(e){for(var i=t.getStorageSync("dsshopCartList")||{},a=0;a<i.length;a++)i[a].checked&&i.splice(a--,1);t.setStorageSync("dsshopCartList",i),r.default.addShoppingCart(i,(function(t){})),t.removeStorageSync("dsshopOrderList"),t.redirectTo({url:"/pages/money/pay?id="+e})}))},addAddress:function(){t.navigateTo({url:"/pages/address/address?type=1"})},refreshAddress:function(t){var e=this;n.default.freight(t.id,this.goodList,(function(t){e.carriage=t.carriage?t.carriage:0,e.outPocketTotal()})),this.addressData=t},calcTotal:function(){var t=this.goodList,e=0;for(var i in t)e+=t[i].price*t[i].number;this.total=Number(e.toFixed(2))},outPocketTotal:function(){var t=0;t=t+this.total+this.carriage-this.couponMoney-this.integralPrice,this.outPocket=Number(t.toFixed(2))},stopPrevent:function(){},getCouponList:function(t){var e=this,i=[],a=0,n=null;(0,s.getUserList)({money:t,limit:100,index:1},(function(t){t.data.forEach((function(t,r){var o={id:t.id,title:t.coupon.name,explain:t.coupon.explain,endTime:t.failure_time?t.failure_time.split(" ")[0].replace(/-/g,"."):t.coupon.endtime.split(" ")[0].replace(/-/g,".")};switch(t.coupon.type){case 1:o.type="满减优惠券",o.price=t.coupon.cost/100,o.price>a&&(a=o.price,n=r);break;case 2:o.type="随机优惠券",o.price=t.coupon.cost/100,o.price>a&&(a=o.price,n=r);break;case 3:o.type="折扣优惠券",o.price=e.total*t.coupon.cost/1e4,o.price>a&&(a=o.price,n=r);break}t.coupon.sill?o.sill="满"+t.coupon.sill/100+"可用":o.sill="无门槛",i.push(o)})),e.couponList=i,e.couponMoney=a,e.couponIndex=n,e.outPocketTotal()}))},toggleMask:function(t){var e=this,i="show"===t?10:300,a="show"===t?1:0;this.maskState=2,setTimeout((function(){e.maskState=a}),i)},toggleCoupon:function(t){this.couponIndex=t,this.couponMoney=this.couponList[t].price,this.outPocketTotal(),this.toggleMask("hide")},getDetailData:function(t){var e=this;(0,o.getDetail)(t,(function(t){e.integral.available=t.available,e.integral.deductible=t.deductible,e.integral.parities=t.parities,e.integral.available>=e.integral.deductible?(e.data.integral=e.integral.deductible,e.integralPrice=e.integral.deductible*e.integral.parities*100/100):(e.data.integral=e.integral.available,e.integralPrice=e.integral.available*e.integral.parities*100/100)}))},numberIntegral:function(t){if(this.integral.deductible>this.integral.available){if(t.target.value>this.integral.available)return this.$api.msg("积分不能大于".concat(this.integral.available,"积分")),!1}else if(t.target.value>this.integral.deductible)return this.$api.msg("积分不能大于".concat(this.integral.deductible,"积分")),!1;this.integralPrice=t.target.value*this.integral.parities*100/100,this.outPocketTotal()}})};e.default=b}).call(this,i("543d")["default"])},"544a":function(t,e,i){"use strict";i.r(e);var a=i("193e"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"616d":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=(t._self._c,t.__map(t.goodList,(function(e,i){var a=t.__get_orig(e),n=t._f("smallImage")(e.img);return{$orig:a,f0:n}}))),a=t._f("1000")(t.total),n=!t.data.integral_draw_log_id&&t.addressData&&t.carriage>0?t._f("1000")(t.carriage):null,r=t.data.integral_draw_log_id?null:t._f("1000")(t.outPocket);t.$mp.data=Object.assign({},{$root:{l0:i,f1:a,f2:n,f3:r}})},r=[]},"88fe":function(t,e,i){},a756:function(t,e,i){"use strict";(function(t){i("18f9");a(i("66fd"));var e=a(i("e151"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},bb17:function(t,e,i){"use strict";var a=i("88fe"),n=i.n(a);n.a},e151:function(t,e,i){"use strict";i.r(e);var a=i("616d"),n=i("544a");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("bb17");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=s.exports}},[["a756","common/runtime","common/vendor"]]]);