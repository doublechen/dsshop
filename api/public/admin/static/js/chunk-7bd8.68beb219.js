(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7bd8"],{"4HID":function(t,e,n){"use strict";var i=n("Fb07");n.n(i).a},"6g3Z":function(t,e,n){"use strict";n.r(e);var i=n("M3qR"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=a.a},Bpf9:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.listQuery.activeIndex,mode:"horizontal",clearable:""},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:"0"}},[t._v("全部订单")]),t._v(" "),n("el-menu-item",{attrs:{index:"1"}},[t._v("待付款")]),t._v(" "),n("el-menu-item",{attrs:{index:"2"}},[t._v("待发货")]),t._v(" "),n("el-menu-item",{attrs:{index:"3"}},[t._v("待收货")]),t._v(" "),n("el-menu-item",{attrs:{index:"5"}},[t._v("已完成")]),t._v(" "),n("el-menu-item",{attrs:{index:"6"}},[t._v("已取消")]),t._v(" "),n("el-menu-item",{attrs:{index:"7"}},[t._v("已退款")])],1),t._v(" "),n("br"),t._v(" "),n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.listQuery}},[n("el-form-item",{attrs:{label:"订单信息"}},[n("el-input",{attrs:{placeholder:"订单号、收货人等",clearable:""},model:{value:t.listQuery.title,callback:function(e){t.$set(t.listQuery,"title",e)},expression:"listQuery.title"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.handleFilter}},[t._v("搜索")])],1)],1)],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.list}},[n("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-table",{ref:"orderGoodsTable",staticStyle:{width:"100%"},attrs:{data:e.row.goods_list}},[n("el-table-column",{attrs:{label:"商品"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"drawing"},[n("img",{staticStyle:{width:"45px",height:"45px"},attrs:{src:e.row.img}}),t._v(" "),n("div",{staticClass:"right"},[n("div",{staticStyle:{width:"300px"}},[t._v(t._s(e.row.name))])])])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"单价（元）"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[t._v(t._s(e.row.price))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"数量"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[t._v(t._s(e.row.number)+"件")])]}}])})],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"编号",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"订单编号"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.identification))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"订单状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.state_show))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"订单总额"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("1000")(e.row.total?e.row.total:0)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"运费"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.carriage?n("span",[t._v(t._s(t._f("1000")(e.row.carriage)))]):n("span",[t._v("免运费")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"收货人"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.good_location?e.row.good_location.name:""))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"手机号"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.good_location?e.row.good_location.cellphone:""))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"地址"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.good_location?e.row.good_location.location:""))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"快递公司"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.dhl?e.row.dhl.name:""))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"运单号"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.odd))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"备注"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.remark))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"订单时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.created_at))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作","class-name":"small-padding fixed-width",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{directives:[{name:"permission",rawName:"v-permission",value:t.$store.jurisdiction.EditProduct,expression:"$store.jurisdiction.EditProduct"}],attrs:{to:{path:"/Indent/shipment",query:{id:e.row.id}}}},[n("el-button",{staticStyle:{width:"80px"},attrs:{type:"warning",size:"mini"}},[t._v("订单详情")])],1),t._v(" "),2===e.row.state?n("router-link",{directives:[{name:"permission",rawName:"v-permission",value:t.$store.jurisdiction.EditProduct,expression:"$store.jurisdiction.EditProduct"}],attrs:{to:{path:"shipment",query:{id:e.row.id}}}},[n("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("发货")])],1):t._e()]}}])})],1),t._v(" "),n("div",{staticClass:"pagination-operation"},[n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],staticClass:"pagination",attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){t.$set(t.listQuery,"page",e)},"update:limit":function(e){t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},Fb07:function(t,e,n){},Lcw6:function(t,e,n){"use strict";var i=n("qULk");n.n(i).a},M3qR:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Y5bG");e.default={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&(0,i.scrollTo)(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&(0,i.scrollTo)(0,800)}}}},Mz3J:function(t,e,n){"use strict";n.r(e);var i=n("cJ0Q"),a=n("6g3Z");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("Lcw6");var o=n("KHd+"),s=Object(o.a)(a.default,i.a,i.b,!1,null,"331ed7d4",null);s.options.__file="index.vue",e.default=s.exports},NoXQ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("RQhk"),a=n("X4fA"),r=function(t){return t&&t.__esModule?t:{default:t}}(n("Mz3J"));e.default={name:"IndentList",components:{Pagination:r.default},data:function(){return{actionurl:"http://dsshop.test/api/v1/admin/uploadPictures",imgHeaders:{Authorization:(0,a.getToken)("token_type")+" "+(0,a.getToken)("access_token")},dialogVisible:!1,ruleForm:[],checkAll:!1,tableKey:0,list:null,total:0,textMap:{update:"修改",create:"添加"},imgData:{type:1,size:512e3},imgProgressPercent:0,loading:!1,listLoading:!1,imgProgress:!1,dialogStatus:"",dialogFormVisible:!1,listQuery:{page:1,limit:10,sort:"+id",activeIndex:"0"},temp:{},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],type:[{required:!0,message:"请选择类型",trigger:"change"}],price:[{required:!0,message:"请填写价格",trigger:"change"}],img:[{required:!0,message:"请上传图片",trigger:"change"}],state:[{required:!0,message:"请选择状态",trigger:"change"}],sort:[{required:!0,message:"请填写排序",trigger:"blur"}]}}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,(0,i.getList)(this.listQuery).then(function(e){t.list=e.data.data,t.total=e.data.total,t.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getList()},sortChange:function(t){var e=t.prop,n=t.order;"id"===e?this.sortByID(n):"time"===e&&this.sortByTIME(n)},sortByID:function(t){this.listQuery.sort="ascending"===t?"+id":"-id",this.handleFilter()},handleSelect:function(t,e){this.listQuery.activeIndex=t,this.handleFilter()},resetTemp:function(){this.temp={state:0,sort:"5",img:""}},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},handleUpdate:function(t){var e=this;this.temp=null,this.temp=t,this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},handleCheckAllChange:function(){this.$refs.multipleTable.toggleAllSelection()},handleSelectionChange:function(t){this.multipleSelection=t},handleState:function(t,e){var n="是否确认立即上架商品?";1===e&&(n="是否确认将商品加入仓库？"),this.$confirm(n,this.$t("hint.hint"),{confirmButtonText:this.$t("usuel.confirm"),cancelButtonText:this.$t("usuel.cancel"),type:"warning"}).then(function(){}).catch(function(){})},handleDelete:function(t){this.$confirm("是否确认删除该商品?",this.$t("hint.hint"),{confirmButtonText:this.$t("usuel.confirm"),cancelButtonText:this.$t("usuel.cancel"),type:"warning"}).then(function(){}).catch(function(){})},createSubmit:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&(0,i.createSubmit)(t.temp).then(function(){t.getList(),t.dialogFormVisible=!1,t.$notify({title:t.$t("hint.succeed"),message:t.$t("hint.creatingSuccessful"),type:"success",duration:2e3})})})},updateSubmit:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&(0,i.updateSubmit)(t.temp.id,t.temp).then(function(){t.getList(),t.dialogFormVisible=!1,t.$notify({title:t.$t("hint.succeed"),message:t.$t("hint.updateSuccessful"),type:"success",duration:2e3})})})},handleAvatarSuccess:function(t,e){this.temp.img=e.response,this.imgProgress=!1,this.imgProgressPercent=0},handleProgress:function(t,e){this.imgProgressPercent=t.percent},beforeAvatarUpload:function(t){var e=t.size/1024<500;return-1===["image/jpeg","image/gif","image/png","image/bmp"].indexOf(t.type)?(this.$message.error("请上传正确的图片格式"),!1):(e||this.$message.error("上传头像图片大小不能超过 500KB!"),this.imgProgress=!0,e)}}}},RQhk:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getList=function(t){return(0,i.default)({url:"indent",method:"get",params:t})},e.createSubmit=function(t){return t=(t=a.default.parse({data:t})).data,(0,i.default)({url:"indentShipments",method:"POST",data:t})},e.updateSubmit=function(t,e){return e=(e=a.default.parse({data:e})).data,(0,i.default)({url:"indentRefund/"+t,method:"PUT",data:e})},e.getDetails=function(t){return(0,i.default)({url:"indent/"+t,method:"get"})},e.query=function(t){return(0,i.default)({url:"query",method:"get",params:t})};var i=r(n("t3Un")),a=r(n("Qyje"));function r(t){return t&&t.__esModule?t:{default:t}}},VXNT:function(t,e,n){"use strict";n.r(e);var i=n("NoXQ"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=a.a},Y5bG:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.scrollTo=function(t,e,n){var a=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,r=t-a,o=0;e=void 0===e?500:e,function t(){o+=20;var s=Math.easeInOutQuad(o,a,r,e);!function(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}(s),o<e?i(t):n&&"function"==typeof n&&n()}()},Math.easeInOutQuad=function(t,e,n,i){return(t/=i/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e};var i=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}},cJ0Q:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},oaAR:function(t,e,n){"use strict";n.r(e);var i=n("Bpf9"),a=n("VXNT");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("4HID");var o=n("KHd+"),s=Object(o.a)(a.default,i.a,i.b,!1,null,null,null);s.options.__file="list.vue",e.default=s.exports},qULk:function(t,e,n){}}]);