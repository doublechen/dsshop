(window.webpackJsonp=window.webpackJsonp||[]).push([[41,51],{497:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return v}));var c=n(8),o=n(18),d=n.n(o);function r(){return Object(c.a)({url:"user",method:"GET"})}function l(data){return data=d.a.parse(data),Object(c.a)({url:"user",method:"POST",data:data})}function v(data){return data=d.a.parse(data),Object(c.a)({url:"cancel",method:"POST",data:data})}},550:function(t,e,n){"use strict";n.r(e);n(24),n(50);var c=n(497);e.default={layout:"user",head:function(){return{title:"注销账户-个人中心"}},data:function(){return{loading:!1,checked:!1,disabled:!0}},mounted:function(){},methods:{cancel:function(){var t=this;Object(c.a)(this.ruleForm).then((function(e){t.loading=!1,$nuxt.$store.commit("logout"),t.$message({message:"注销成功",type:"success"}),t.$router.replace("/")})).catch((function(){t.loading=!1}))},agree:function(){this.checked?this.disabled=!1:this.disabled=!0}}}},551:function(t,e,n){var content=n(608);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("5f0663a0",content,!0,{sourceMap:!1})},607:function(t,e,n){"use strict";n(551)},608:function(t,e,n){var c=n(11)(!1);c.push([t.i,".card[data-v-e1460bb4]{margin:30px auto 0;width:600px}.card .title[data-v-e1460bb4]{text-align:center;font-size:20px;margin-bottom:30px;margin-top:20px}.card .condition .name[data-v-e1460bb4]{font-size:16px;margin-bottom:5px}.card .condition .explain[data-v-e1460bb4]{font-size:12px}.card .notice[data-v-e1460bb4]{margin:20px 0;text-align:center}.card .notice .text-red[data-v-e1460bb4]{color:#fa524c}.card .button[data-v-e1460bb4]{text-align:center}.user-title[data-v-e1460bb4]{color:#757575;font-weight:400;font-size:18px;margin-bottom:20px}",""]),t.exports=c},670:function(t,e,n){"use strict";n.r(e);var c=n(550).default,o=(n(607),n(6)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("div",{staticClass:"user-title"},[t._v("注销申请")]),t._v(" "),n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[n("el-card",{staticClass:"card"},[n("div",{staticClass:"title"},[t._v("请确认您的账号是否满足以下注销条件")]),t._v(" "),n("div",{staticClass:"condition"},[n("div",{staticClass:"name"},[t._v("账号处于安全状态")]),t._v(" "),n("div",{staticClass:"explain"},[t._v("账号处于正常状态，没有被封号等账户限制。")])]),t._v(" "),n("el-divider"),t._v(" "),n("div",{staticClass:"condition"},[n("div",{staticClass:"name"},[t._v("账号无进行中的任何纠纷")]),t._v(" "),n("div",{staticClass:"explain"},[t._v("本账号无任何账号纠纷，包括投诉、举报或被投诉、被举报等。")])]),t._v(" "),n("el-divider"),t._v(" "),n("div",{staticClass:"condition"},[n("div",{staticClass:"name"},[t._v("账号无未完成的业务")]),t._v(" "),n("div",{staticClass:"explain"},[t._v("没有正在进行中，或者尚未确认完成的交易。")])]),t._v(" "),n("div",{staticClass:"notice"},[n("el-checkbox",{on:{change:t.agree},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("我已阅读并知晓了"),n("span",{staticClass:"text-red"},[t._v("《账号注册须知》")])])],1),t._v(" "),n("div",{staticClass:"button"},[n("el-button",{attrs:{disabled:t.disabled,type:"danger"},on:{click:function(e){return t.cancel()}}},[t._v("确认申请")])],1)],1)],1)])}),[],!1,null,"e1460bb4",null);e.default=component.exports}}]);