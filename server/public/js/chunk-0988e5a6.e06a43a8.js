(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0988e5a6"],{"00cc":function(e,a,n){"use strict";var t=n("6a74"),s=n.n(t);s.a},"5d0e":function(e,a,n){"use strict";n.r(a);var t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("v-container",[n("v-layout",{staticClass:"text-xs-center",attrs:{row:""}},[n("v-flex",{staticClass:"grey lighten-4 center--login",attrs:{xs12:"",md4:"",lg4:""}},[n("v-container",{staticClass:"text-xs-center"},[n("v-card",{attrs:{flat:""}},[n("v-card-title",{attrs:{"primary-title":""}},[n("h4",[e._v("Login page for admin")])]),n("v-form",[n("v-text-field",{attrs:{"prepend-icon":"person",name:"Username",label:"Username"},model:{value:e.admin.user,callback:function(a){e.$set(e.admin,"user",a)},expression:"admin.user"}}),n("v-text-field",{attrs:{"prepend-icon":"lock",name:"Password",label:"Password",type:"password"},model:{value:e.admin.password,callback:function(a){e.$set(e.admin,"password",a)},expression:"admin.password"}}),n("v-card-actions",[n("v-btn",{attrs:{primary:"",large:"",block:""},on:{click:function(a){e.checkAdmin(),e.newOrders()}}},[e._v("Login")])],1)],1)],1)],1)],1)],1)],1)},s=[],i=n("be94"),r=n("2f62"),c={name:"admin",computed:Object(i["a"])({},Object(r["c"])(["admin"])),methods:Object(i["a"])({},Object(r["b"])(["newOrders"]),{checkAdmin:function(){"admin"===this.admin.password&&"admin"===this.admin.user?(this.admin.isAdmin=!0,this.admin.password="admin",this.admin.user="admin",this.$router.push({name:"dashboard"})):alert("wrong password or username")}})},d=c,o=(n("00cc"),n("2877")),l=Object(o["a"])(d,t,s,!1,null,null,null);l.options.__file="AdminLogin.vue";a["default"]=l.exports},"6a74":function(e,a,n){}}]);
//# sourceMappingURL=chunk-0988e5a6.e06a43a8.js.map