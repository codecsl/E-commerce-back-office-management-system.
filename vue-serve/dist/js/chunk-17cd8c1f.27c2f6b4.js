(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17cd8c1f"],{"1bab":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r("cebe"),i=r.n(a),o=r("1af2"),s=r.n(o);function n(e){var t=i.a.create({baseURL:"http://127.0.0.1:8888/api/private/v1/",timeout:1e4});return t.interceptors.request.use((function(e){return e.headers.Authorization=window.sessionStorage.getItem("token"),s.a.start(),e})),t.interceptors.response.use((function(e){return s.a.done(),e})),t(e)}},"1dde":function(e,t,r){var a=r("d039"),i=r("b622"),o=r("2d00"),s=i("species");e.exports=function(e){return o>=51||!a((function(){var t=[],r=t.constructor={};return r[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"38c9":function(e,t,r){},"480f":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Use"},[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("用户管理")]),r("el-breadcrumb-item",[e._v("用户列表")])],1),r("el-card",[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:10}},[r("el-input",{attrs:{placeholder:"请输入内容",clearable:""},on:{clear:e.quer},model:{value:e.querytext,callback:function(t){e.querytext=t},expression:"querytext"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.quer},slot:"append"})],1)],1),r("el-col",{attrs:{span:5}},[r("el-button",{attrs:{type:"primary"},on:{click:e.adduser}},[e._v("添加用户")])],1)],1)],1),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pagesize,stripe:"",fit:""}},[r("el-table-column",{attrs:{type:"index",width:"100",label:"ID"}}),r("el-table-column",{attrs:{prop:"username",label:"名字",width:"180"}}),r("el-table-column",{attrs:{prop:"role_name",label:"角色",width:"180"}}),r("el-table-column",{attrs:{prop:"mobile",label:"手机号",width:"180"}}),r("el-table-column",{attrs:{prop:"email",label:"邮箱",width:"180"}}),r("el-table-column",{attrs:{label:"状态",prop:"mg_state",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(r){return e.userdatachange(t.row)}},model:{value:t.row.mg_state,callback:function(r){e.$set(t.row,"mg_state",r)},expression:"scope.row.mg_state"}})]}}])}),r("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"修改",placement:"top-start",enterable:!1}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(r){return e.showEdite(t.row.id)}}})],1),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top-start",enterable:!1}},[r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(r){return e.del(t.row.id)}}})],1),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"分配角色",placement:"top-start",enterable:!1}},[r("el-button",{attrs:{type:"warning",icon:"el-icon-setting",circle:""},on:{click:function(r){return e.fenpeirole(t.row)}}})],1)]}}])})],1),r("el-pagination",{attrs:{"current-page":e.queryinfo.pagenum,"page-sizes":e.queryinfo.tiaozhuanshu,"page-size":e.queryinfo.pagesizeshu,layout:"total, sizes, prev, pager, next, jumper",total:e.total.length},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),r("el-dialog",{staticClass:"jian",attrs:{title:"添加用户",visible:e.adddialogVisible,width:"50%"},on:{"update:visible":function(t){e.adddialogVisible=t},close:e.guanbi}},[r("el-form",{ref:"resto",attrs:{model:e.form,"label-width":"80px",rules:e.rules,"status-icon":""}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("el-form-item",{attrs:{label:"手机号",prop:"mobile"}},[r("el-input",{model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.adddialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.adduser2}},[e._v("确 定")])],1)],1),r("el-dialog",{staticClass:"jian",attrs:{title:"修改用户信息",visible:e.edddialogVisible,width:"50%"},on:{"update:visible":function(t){e.edddialogVisible=t},close:e.quxiao}},[r("el-form",{ref:"xiugai",attrs:{model:e.editForm,rules:e.rules}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{attrs:{disabled:""},model:{value:e.editForm.username,callback:function(t){e.$set(e.editForm,"username",t)},expression:"editForm.username"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.editForm.email,callback:function(t){e.$set(e.editForm,"email",t)},expression:"editForm.email"}})],1),r("el-form-item",{attrs:{label:"手机号",prop:"mobile"}},[r("el-input",{model:{value:e.editForm.mobile,callback:function(t){e.$set(e.editForm,"mobile",t)},expression:"editForm.mobile"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.edddialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.correct}},[e._v("修改")])],1)],1),r("el-dialog",{staticClass:"jian",attrs:{title:"分配角色",visible:e.feidialogVisible,width:"50%"},on:{"update:visible":function(t){e.feidialogVisible=t}}},[r("div",[r("p",[e._v("当前用户:"+e._s(e.feiroel.username))]),r("p",[e._v("当前角色:"+e._s(e.feiroel.role_name))]),r("p",[e._v("分配的角色:"),r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.selectid,callback:function(t){e.selectid=t},expression:"selectid"}},e._l(e.frole,(function(e){return r("el-option",{key:e.id,attrs:{label:e.roleName,value:e.id}})})),1)],1)]),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.feidialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.qdfrole}},[e._v("确 定")])],1)])],1)},i=[],o=(r("99af"),r("1bab"));function s(e,t,r){return Object(o["a"])({url:"users",method:"get",params:{query:e,pagenum:t,pagesize:r}})}function n(e,t){return Object(o["a"])({url:"users/".concat(e,"/state/").concat(t),method:"put"})}function l(e){var t=e.username,r=e.password,a=e.email,i=e.mobile;return Object(o["a"])({url:"users",method:"post",data:{username:t,password:r,email:a,mobile:i}})}function u(e){return Object(o["a"])({url:"users/".concat(e),method:"get"})}function c(e,t,r){return Object(o["a"])({url:"users/".concat(e,"}"),method:"put",data:{email:t,mobile:r}})}function d(e){return Object(o["a"])({url:"users/".concat(e),method:"delete"})}function f(e,t){return Object(o["a"])({url:"users/".concat(e,"/role"),method:"put",data:{role:t}})}function m(){return Object(o["a"])({url:"roles",method:"get"})}var p={name:"component_name",data:function(){var e=function(e,t,r){var a=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/g;if(a.test(t))return r();r(new Error("请输入合法的邮箱"))},t=function(e,t,r){var a=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;if(a.test(t))return r();r(new Error("请输入合法的手机号"))};return{query:"",page:1,tiao:5,queryinfo:{pagenum:1,pagesizeshu:5,tiaozhuanshu:[1,2,5,8,10]},frole:[],selectid:"",feiroel:{},feidialogVisible:!1,total:[],pagesize:[],querytext:"",adddialogVisible:!1,edddialogVisible:!1,editForm:{},mg_stat:"",form:{username:"",password:"",email:"",mobile:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],password:[{required:!0,message:"密码",trigger:"blur"},{min:6,max:8,message:"长度在 6 到 8 个字符",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:t,trigger:"blur"}]}}},created:function(){this.getdata("",1,5)},methods:{handleSizeChange:function(e){this.queryinfo.pagesizeshu=e,this.getdata("",1,this.queryinfo.pagesizeshu)},handleCurrentChange:function(e){this.queryinfo.pagenum=e,this.getdata("",this.queryinfo.pagenum,this.queryinfo.pagesizeshu)},userdatachange:function(e){var t=this;n(e.id,e.mg_state).then((function(e){if(200!=e.data.meta.status)return t.$message.error("更新失败");t.$message.success("更新状态成功")}))},quer:function(){this.getdata(this.querytext,this.queryinfo.pagenum,this.queryinfo.tiaozhuanshu)},adduser:function(){this.adddialogVisible=!0},guanbi:function(){this.$refs.resto.resetFields()},adduser2:function(){var e=this;this.adddialogVisible=!1,this.$refs.resto.validate((function(t){if(!t)return e.$message.error("请将信息填写完整");l(e.form).then((function(t){var r=t.data;if(201!=r.meta.status)return e.$message.error("添加失败");e.$message.success("添加成功")})).catch((function(e){console.log(e)}))}))},showEdite:function(e){var t=this;this.edddialogVisible=!0,u(e).then((function(e){var r=e.data;t.editForm=r.data}))},correct:function(){var e=this;this.$refs.xiugai.validate((function(t){if(e.edddialogVisible=!1,!t)return e.$message.error("请填写正确信息");c(e.editForm.id,e.editForm.email,e.editForm.mobile).then((function(t){var r=t.data;if(200!=r.meta.status)return e.$message.error("修改失败");e.$message.success("修改成功")}))}))},quxiao:function(){this.$refs.xiugai.resetFields()},del:function(e){var t=this;d(e).then((function(e){var r=e.data;if(200!=r.meta.status)return t.$message.error("删除失败");t.$message.success("删除成功")}))},fenpeirole:function(e){var t=this;this.feidialogVisible=!0,this.feiroel=e,m().then((function(e){var r=e.data;if(200!=r.meta.status)return t.$message.error("获取角色失败");t.frole=r.data}))},qdfrole:function(){var e=this;""==this.selectid&&this.$message.error("请选择相应角色"),f(this.feiroel.id,this.selectid).then((function(t){var r=t.data;if(console.log(r),200!=r.meta.status)return e.$message.error("更新失败");e.$message.success("更新成功")})),this.feidialogVisible=!1},getdata:function(e,t,r){var a=this;s(e,t,r).then((function(e){var t=e.data;if(200!=t.meta.status)return a.$message.error("获取用户列表失败");a.pagesize=t.data.users,a.total=t.data.users})).catch((function(e){console.log(e)}))}}},b=p,g=(r("b09e"),r("2877")),h=Object(g["a"])(b,a,i,!1,null,"995379dc",null);t["default"]=h.exports},"65f0":function(e,t,r){var a=r("861d"),i=r("e8b5"),o=r("b622"),s=o("species");e.exports=function(e,t){var r;return i(e)&&(r=e.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?a(r)&&(r=r[s],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},8418:function(e,t,r){"use strict";var a=r("c04e"),i=r("9bf2"),o=r("5c6c");e.exports=function(e,t,r){var s=a(t);s in e?i.f(e,s,o(0,r)):e[s]=r}},"99af":function(e,t,r){"use strict";var a=r("23e7"),i=r("d039"),o=r("e8b5"),s=r("861d"),n=r("7b0b"),l=r("50c4"),u=r("8418"),c=r("65f0"),d=r("1dde"),f=r("b622"),m=r("2d00"),p=f("isConcatSpreadable"),b=9007199254740991,g="Maximum allowed index exceeded",h=m>=51||!i((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),v=d("concat"),w=function(e){if(!s(e))return!1;var t=e[p];return void 0!==t?!!t:o(e)},y=!h||!v;a({target:"Array",proto:!0,forced:y},{concat:function(e){var t,r,a,i,o,s=n(this),d=c(s,0),f=0;for(t=-1,a=arguments.length;t<a;t++)if(o=-1===t?s:arguments[t],w(o)){if(i=l(o.length),f+i>b)throw TypeError(g);for(r=0;r<i;r++,f++)r in o&&u(d,f,o[r])}else{if(f>=b)throw TypeError(g);u(d,f++,o)}return d.length=f,d}})},b09e:function(e,t,r){"use strict";var a=r("38c9"),i=r.n(a);i.a},e8b5:function(e,t,r){var a=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==a(e)}}}]);
//# sourceMappingURL=chunk-17cd8c1f.27c2f6b4.js.map