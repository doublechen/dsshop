(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{577:function(t,e,n){"use strict";n.r(e);n(46),n(38),n(72),n(73);var r=n(34),c=n(7),o=(n(36),n(18),n(291),n(192),n(193),n(294),n(45),n(124));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.default={layout:"cart",head:function(){return{title:"我的购物车-DSSHOP商城-跨终端商城解决方案"}},data:function(){return{loading:!0,cartList:[],cartOriginalList:[],invalidGood:[],total:0,allChecked:!0,empty:!0,multipleSelection:[]}},mounted:function(){$nuxt.$store.commit("setCartTitle","我的购物车"),$nuxt.$store.state.hasLogin&&this.getList()},methods:{getList:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.cartList=[],t.invalidGood=[],e.next=5,Object(o.j)().then((function(e){t.store.set("DSSHOP-PC-CartList",e),t.cartOriginalList=e,e.length>0?t.empty=!1:t.empty=!0;var n=function(n){e[n].good_sku&&(e[n].specification="",e[n].good_sku.skus.forEach((function(t){e[n].specification?e[n].specification+=t.v+";":e[n].specification=t.v+";"})),e[n].specification=e[n].specification.substr(0,e[n].specification.length-1)),1!==e[n].good.is_delete&&1===e[n].good.is_show||(e[n].invalid=!0),!0===e[n].invalid?t.invalidGood.push(h(h({},e[n]),{},{index:n})):t.cartList.push(h(h({},e[n]),{},{index:n}))};for(var r in e)n(r);t.$nextTick((function(){!1===t.empty&&t.handleCheckAllChange()})),t.loading=!1})).catch((function(){t.loading=!1}));case 5:case"end":return e.stop()}}),e)})))()},calcTotal:function(){var t=this.multipleSelection,e=0;t.forEach((function(t){e+=t.price*t.number})),this.total=Number(e.toFixed(2))},handleSelectionChange:function(t){this.multipleSelection=t,this.calcTotal()},handleCheckAllChange:function(){this.$refs.table.toggleAllSelection(),this.calcTotal()},createOrder:function(){this.multipleSelection.length<=0?this.$message({message:"请选择商品",type:"error"}):(this.store.set("DSSHOP-PC-OrderList",this.multipleSelection),$nuxt.$router.push("/indent/create"))},numberChange:function(t){this.cartOriginalList[t].number=this.cartList[t].number,this.store.set("DSSHOP-PC-CartList",this.cartOriginalList),Object(o.a)(this.cartOriginalList),this.calcTotal()},deleteInvalidGood:function(t){var e=this;this.$confirm("是否移除该商品？","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((function(){e.cartOriginalList.splice(e.invalidGood[t].index,1),Object.values(e.cartOriginalList).length>0?e.store.set("DSSHOP-PC-CartList",e.cartOriginalList):e.store.remove("DSSHOP-PC-CartList"),Object(o.a)(e.cartOriginalList).then((function(){e.getList()})),e.invalidGood.splice(t,1)})).catch((function(){}))},deleteCartItem:function(t){var e=this;this.$confirm("是否移除该商品？","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((function(){e.cartOriginalList.splice(e.cartList[t].index,1),Object.values(e.cartOriginalList).length>0?e.store.set("DSSHOP-PC-CartList",e.cartOriginalList):e.store.remove("DSSHOP-PC-CartList"),Object(o.a)(e.cartOriginalList).then((function(){e.getList()})),e.cartList.splice(t,1)})).catch((function(){}))},clearCart:function(){var t=this;this.$confirm("是否移除所选商品？","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((function(){t.multipleSelection.forEach((function(e){t.cartList.forEach((function(n,r){e.good_sku_id?e.good_sku_id===n.good_sku_id&&(delete t.cartOriginalList[n.index],t.cartList.splice(r,1)):e.good_id===n.good_id&&(delete t.cartOriginalList[n.index],t.cartList.splice(r,1))}))})),t.cartOriginalList=t.cartOriginalList.filter((function(t){return t})),Object.values(t.cartOriginalList).length>0?t.store.set("DSSHOP-PC-CartList",t.cartOriginalList):t.store.remove("DSSHOP-PC-CartList"),Object(o.a)(t.cartOriginalList).then((function(){t.getList()}))})).catch((function(){}))}}}}}]);