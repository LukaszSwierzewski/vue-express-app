(function(t){function e(e){for(var a,r,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)r=s[u],i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},i={app:0},o=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-05044362":"68437492","chunk-0988e5a6":"e06a43a8","chunk-136f59ee":"a7bdba1f","chunk-13bfec6c":"02bb6745","chunk-2917da0e":"76ed6d00","chunk-2d0cf8c1":"0eb5176d","chunk-2d21eb0b":"999c2219","chunk-756cd427":"b837e9f3","chunk-7e7bebd2":"e9836854","chunk-85fc8970":"edf0bd0d","chunk-9e99bbf6":"12b65807","chunk-ff2808c8":"982b74ee"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-05044362":1,"chunk-0988e5a6":1,"chunk-136f59ee":1,"chunk-13bfec6c":1,"chunk-756cd427":1,"chunk-7e7bebd2":1,"chunk-85fc8970":1,"chunk-ff2808c8":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-05044362":"586c2080","chunk-0988e5a6":"86c96745","chunk-136f59ee":"bf25dc94","chunk-13bfec6c":"6d419406","chunk-2917da0e":"31d6cfe0","chunk-2d0cf8c1":"31d6cfe0","chunk-2d21eb0b":"31d6cfe0","chunk-756cd427":"51ebbcc4","chunk-7e7bebd2":"32b6d6c9","chunk-85fc8970":"b0940cbe","chunk-9e99bbf6":"31d6cfe0","chunk-ff2808c8":"0a353dea"}[t]+".css",i=c.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.request=a,delete r[t],f.parentNode.removeChild(f),n(o)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){r[t]=0}));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise(function(e,n){a=i[t]=[e,n]});e.push(a[2]=o);var l,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(t),l=function(e){d.onerror=d.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");o.type=a,o.request=r,n[1](o)}i[t]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,u.appendChild(d)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00bd":function(t,e,n){},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"283c":function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var a=n("bc3a"),r=n.n(a),i=function(){return r.a.create({baseURL:"/api",headers:{"Content-Type":"application/json"}})};e["a"]={fetchPosts:function(){return i().get("/posts")},getOrder:function(){return i().get("/order")},addPost:function(t){return i().post("/posts",t)},addComment:function(t){return i().post("/posts/"+t.id+"/comment",t)},fetchComment:function(){return i().get("/posts/all/comment")},addOrder:function(t){return i().post("/order",t)},getPost:function(t){return i().get("/posts/"+t.id)},deletePost:function(t){return i().delete("/posts/delete/"+t)},oneOrder:function(t){return i().get("/order/"+t.id)},updateOrder:function(t){return i().put("/order/update/"+t.id,t)},updatePost:function(t){return i().put("/posts/update/"+t.id,t)}}},4951:function(t,e,n){"use strict";var a=n("c040"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("div",{attrs:{id:"app"}},[n("v-app",[n("app-header"),n("transition",{attrs:{mode:"out-in",appear:"","enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutDown"}},[n("router-view")],1)],1)],1)])},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("v-navigation-drawer",{staticClass:"elevation-20",attrs:{"enable-resize-watcher":"",fixed:"",clipped:t.clipped,app:"",id:"drawer--z",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[t._v("\r\n    "+t._s(t.checkOrder)+"\r\n    "),n("br"),n("br"),n("v-list",{attrs:{dense:""}},[n("v-list-tile",{on:{click:function(e){t.drawer=!1}}},[n("v-list-tile-action",{staticClass:"text-center"},[n("v-icon",{attrs:{large:""}},[t._v("close")])],1),n("v-list-tile-content")],1),n("v-list-tile",{attrs:{to:"/"}},[n("v-list-tile-action",[n("v-icon",[t._v("home")])],1),n("v-list-tile-content",[n("strong",[t._v("HOME")])])],1),n("v-list-tile",{attrs:{to:"/posts"}},[n("v-list-tile-action",[n("v-icon",[t._v("contact_mail")])],1),n("v-list-tile-content",[n("strong",[t._v("SHOP")])])],1),n("v-list-tile",{attrs:{to:"/shop"}},[n("v-list-tile-action",[n("v-icon",[t._v(" shopping_basket")])],1),n("v-list-tile-content",[0===t.cart.length?n("div",[n("strong",[t._v("YOUR ORDER ("+t._s(t.cart.length)+")")])]):t._e(),t.cart.length>0?n("div",{attrs:{flat:""}},[n("v-badge",{attrs:{color:"cyan",right:""}},[n("strong",[t._v("ORDER")]),n("span",{attrs:{slot:"badge"},slot:"badge"},[t._v(" "+t._s(t.cart.length))])])],1):t._e()])],1),n("v-list-tile",{attrs:{to:"/checkorder"}},[n("v-list-tile-action",[n("v-icon",[t._v("shopping_basket")])],1),n("v-list-tile-content",[n("strong",[t._v("CHECK STATUS")])])],1),t.admin.isAdmin?t._e():n("v-list-tile",{attrs:{to:"/admin"}},[n("v-list-tile-action",[n("v-icon",[t._v("shopping_basket")])],1),n("v-list-tile-content",[n("strong",[t._v("LOGIN")])])],1),t.admin.isAdmin?n("div",[n("br"),n("h3",[t._v("Admin dashboard")])]):t._e(),t.admin.isAdmin?n("v-list-tile",{attrs:{to:"/dashboard"}},[n("v-list-tile-action",[n("v-icon",[t._v("dashboard")])],1),n("div",{attrs:{flat:""}},[n("v-badge",{attrs:{color:"cyan",right:""}},[n("strong",[t._v("USER ORDERS")]),n("span",{attrs:{slot:"badge"},slot:"badge"},[t._v(" "+t._s(t.newOrder))])])],1)],1):t._e(),t.admin.isAdmin?n("v-list-tile",{attrs:{to:"/new"}},[n("v-list-tile-action",[n("v-icon",[t._v("create_new_folder")])],1),n("v-list-tile-content",[n("strong",[t._v("NEW ITEM")])])],1):t._e(),t.admin.isAdmin?n("v-list-tile",{attrs:{to:"/adminpost"}},[n("v-list-tile-action",[n("v-icon",[t._v("create_new_folder")])],1),n("v-list-tile-content",[n("strong",[t._v("Product list")])])],1):t._e(),t.admin.isAdmin?n("v-list-tile",{on:{click:t.logout}},[n("v-list-tile-action",[n("v-icon",[t._v("offline_bolt")])],1),n("v-list-tile-content",[n("strong",[t._v("LOGOUT")])])],1):t._e()],1)],1),n("v-toolbar",{attrs:{color:"blue-grey lighten-1","clipped-left":t.clipped,dark:"",fixed:"",app:"",id:"toolbar-zIndex"}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v("Application")]),n("v-spacer"),n("v-menu",{staticClass:"hidden-md-and-up",attrs:{"nudge-width":100}})],1)],1)])},s=[],c=n("be94"),l=n("2f62"),u={data:function(){return{drawer:!1,adminPassword:"",adminUser:"",clipped:!1}},computed:Object(c["a"])({},Object(l["c"])(["cart","admin","newOrder"]),{checkOrder:function(){if(this.cart.length>0)return this.drawer=!0}}),methods:Object(c["a"])({},Object(l["b"])(["newOrders"]),{logout:function(){this.admin.password="",this.admin.user="",this.admin.isAdmin=!1,this.$router.push({name:"Posts"})}})},d=u,f=(n("654a"),n("2877")),p=Object(f["a"])(d,o,s,!1,null,"714f3104",null);p.options.__file="Header.vue";var v=p.exports,h={name:"App",components:{appHeader:v}},m=h,b=(n("034f"),Object(f["a"])(m,r,i,!1,null,null,null));b.options.__file="App.vue";var g=b.exports,_=n("8c4f"),k=(n("96cf"),n("1da1")),w=n("283c"),x={getPosts:function(){var t=Object(k["a"])(regeneratorRuntime.mark(function t(e){var n,a,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,w["a"].fetchPosts();case 3:a=t.sent,r=a.data,n("SET_POSTS",r);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),deletePost:function(){var t=Object(k["a"])(regeneratorRuntime.mark(function t(e,n){var a,r,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.next=3,w["a"].deletePost(n);case 3:return t.next=5,w["a"].fetchPosts();case 5:r=t.sent,i=r.data,a("DELETE_POST",i);case 8:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},y={actions:x},C={orders:[],newOrder:0,anotherOrders:[]},O={getOrders:function(){var t=Object(k["a"])(regeneratorRuntime.mark(function t(e){var n,a,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,w["a"].getOrder();case 3:a=t.sent,r=a.data,n("GET_ORDERS",r);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),newOrders:function(){var t=Object(k["a"])(regeneratorRuntime.mark(function t(e){var n,a,r,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,w["a"].getOrder();case 3:a=t.sent,C.anotherOrders=a.data,r=C.anotherOrders.filter(function(t){if("New order"===t.status)return t.status}),i=r.length,n("GET_NEW_ORDER",i);case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},E={GET_ORDERS:function(t,e){t.orders=e},GET_NEW_ORDER:function(t,e){t.newOrder=e}},j={orders:function(t){return t.orders},newOrder:function(t){return t.newOrder}},T={state:C,actions:O,mutations:E,getters:j},P=(n("7514"),{cart:[],summary:0}),S={deleteItem:function(t,e){var n=t.commit;n("DELETE_CART",e)},priceSum:function(t){var e=t.commit;e("PRICE_SUM")},cleanCart:function(t){var e=t.commit;e("CLEAN_CART")}},A={addToCart:function(t,e){var n=t.cart.find(function(t){return t.id==e.id});if(!n)return t.cart.push(e);alert("Already in the basket")},DELETE_CART:function(t,e){var n=t.cart.find(function(t){return t.id==e.id});return t.cart.splice(t.cart.indexOf(n),1)},CLEAN_CART:function(t,e){t.cart=[]},PRICE_SUM:function(t){t.cart.reduce(function(e,n){var a=e+n.price;return t.summary=a},0)}},R={cart:function(t){return t.cart},summary:function(t){return t.summary}},N={state:P,actions:S,mutations:A,getters:R},M={admin:{password:"",user:"",isAdmin:!1}},D={ADMIN_ROLE:function(t,e){t.password===e.password&&t.user===e.user&&(t.isAdmin=!0)}},L={admin:function(t){return t.admin}},U={state:M,mutations:D,getters:L};a["default"].use(l["a"]);var $=new l["a"].Store({state:{posts:[],comments:0},actions:{getComment:function(){var t=Object(k["a"])(regeneratorRuntime.mark(function t(e){var n,a,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,w["a"].fetchComment();case 3:a=t.sent,r=a.data,n("FETCH_COMMENT",r);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},mutations:{SET_POSTS:function(t,e){t.posts=e},DELETE_POST:function(t,e){t.posts=e},FETCH_COMMENT:function(t,e){t.comments=e}},modules:{postModule:y,orderModule:T,cartModule:N,adminModule:U}}),q=$,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",[n("v-parallax",{attrs:{dark:"",height:"600",src:"https://images.pexels.com/photos/414586/pexels-photo-414586.jpeg?cs=srgb&dl=background-image-beautiful-blur-414586.jpg&fm=jpg"}},[n("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[n("h1",{staticClass:"display-2 font-weight-black font-italic"},[t._v("Nature shop")]),n("h4",{staticClass:"subheading"},[t._v("Build your application today!")]),n("div",{},[n("v-btn",{staticClass:"elevation-20 hover--button",attrs:{large:"",color:"transparent"},on:{click:function(e){t.$vuetify.goTo("#first",t.options)}}},[t._v("Our product")])],1)])],1)],1),n("div",{attrs:{id:"first"}},[n("after-paralex",[n("div",{attrs:{"align-center":""}},[n("v-btn",{attrs:{dark:"",large:""},on:{click:function(e){t.$vuetify.goTo("#four",t.options)}}},[t._v("Contact Us!")]),n("router-link",{attrs:{to:"/posts"}},[n("v-btn",{attrs:{dark:"",large:""}},[t._v("Visit our online shop")])],1)],1)])],1),n("div",{attrs:{id:"second"}},[n("app-product")],1),n("div",{attrs:{id:"third"}},[n("app-parallax")],1),n("div",{attrs:{id:"four"}},[n("company-info")],1),n("div",{attrs:{id:"five"}},[n("app-footer")],1)])},I=[],B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-layout",{staticClass:"my-5",attrs:{column:"",wrap:"","align-center":""}},[n("v-flex",{staticClass:"my-3",attrs:{xs12:"",sm4:""}},[n("div",{staticClass:"text-xs-center"},[t._l(t.items,function(e){return n("v-icon",{key:e,staticClass:"green--text text--lighten-2",attrs:{"x-large":""}},[t._v("local_florist")])}),n("h1",{staticClass:"headline font-weight-black"},[t._v("Nature shop")]),n("span",{staticClass:"subheading"},[t._t("default")],2)],2)]),n("v-flex",{attrs:{xs12:""}},[n("v-container",{attrs:{"grid-list-xl":""}},[n("v-layout",{attrs:{row:"",wrap:"","align-center":""}},t._l(t.items,function(e){return n("v-flex",{key:e,attrs:{xs12:"",md4:""}},[n("v-card",{staticClass:"elevation-15 transparent"},[n("v-card-text",{staticClass:"text-xs-center"},[n("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v(t._s(e))])],1),n("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[n("div",{staticClass:"headline text-xs-center"},[t._v("Nature shop")])]),n("v-card-text",[t._v("\n                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. \n                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \n                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. \n                ")])],1)],1)}))],1)],1)],1)],1)},G=[],F={data:function(){return{items:["favorite","flash_on","build"]}}},z=F,W=(n("8688"),Object(f["a"])(z,B,G,!1,null,null,null));W.options.__file="AfterParalex.vue";var J=W.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.arrs,function(e){return n("v-flex",{key:e,staticClass:"my-3",attrs:{xs12:"",sm4:""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var r=a.hover;return n("v-card",{staticClass:"mx-auto",attrs:{color:"grey lighten-4","max-width":"500"}},[n("v-img",{attrs:{"aspect-ratio":16/9,src:e}},[n("v-expand-transition",[r?n("div",{staticClass:"d-flex transition-fast-in-fast-out indigo darken-2 v-card--reveal display-3 white--text",staticStyle:{height:"100%"}},[t._v("\r\n            $14.99\r\n          ")]):t._e()])],1),n("v-card-text",{staticClass:"pt-4",staticStyle:{position:"relative"}},[n("v-btn",{staticClass:"white--text",attrs:{absolute:"",color:"orange",fab:"",medium:"",right:"",top:""}},[n("v-icon",[t._v("shopping_basket")])],1),n("div",{staticClass:"font-weight-light grey--text title mb-2"},[t._v("For the perfect meal")]),n("div",{staticClass:"font-weight-light title mb-2"})],1)],1)}}])})],1)}))],1)],1)},Y=[],K={data:function(){return{arrs:["https://i.wpimg.pl/O/644x428/d.wpimg.pl/204634975-1593965418/bazylia.jpg","https://ogrod.smcloud.net/s/photos/t/11189/chmiel_1004241.jpg","https://7.allegroimg.com/s512/0144c4/3f9bc396465f881d892521432af7"]}}},Q=K,X=Object(f["a"])(Q,V,Y,!1,null,null,null);X.options.__file="AppProduct.vue";var Z=X.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-parallax",{attrs:{id:"parallax",dark:"",height:"450",src:"https://images.pexels.com/photos/707915/pexels-photo-707915.jpeg?cs=srgb&dl=background-background-image-creek-707915.jpg&fm=jpg"}},[n("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[n("h1",{staticClass:"display-2 font-weight-thin mb-3"},[t._v("Vuetify.js")]),n("h4",{staticClass:"subheading"},[t._v("Build your application today!")])]),n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return n("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"indigo"},on:{click:t.toTop}},[n("v-expand-transition",[a?n("div",{staticClass:"d-flex transition-fast-in-fast-out indigo darken-2"},[t._v("\r\n            Go to top\r\n          ")]):t._e()]),n("v-icon",[t._v("keyboard_arrow_up")])],1)}}])})],1)},et=[],nt={data:function(){return{fab:!1}},methods:{onScroll:function(t){if("undefined"!==typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>20}},toTop:function(){this.$vuetify.goTo(0)}}},at=nt,rt=(n("4951"),Object(f["a"])(at,tt,et,!1,null,null,null));rt.options.__file="LastParallax.vue";var it=rt.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{height:"auto",color:"blue lighten-1"}},[n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},t._l(t.links,function(e){return n("v-btn",{key:e,staticClass:"font-weight-black font-italic",attrs:{color:"white",flat:"",round:""}},[t._v("\n        "+t._s(e)+"\n      ")])}))],1)},st=[],ct={data:function(){return{links:["Home","About Us","Team","Services","Blog","Contact Us"]}}},lt=ct,ut=Object(f["a"])(lt,ot,st,!1,null,null,null);ut.options.__file="Footer.vue";var dt=ut.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-container",{attrs:{"grid-list-xl":""}},[n("v-layout",{staticClass:"my-5",attrs:{row:"",wrap:"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm4:""}},[n("v-card",{staticClass:"elevation-0 transparent"},[n("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[n("div",{staticClass:"headline"},[t._v("Company info")])]),n("v-card-text",[t._v("\n              Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. \n              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \n              Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. \n            ")])],1)],1),n("v-flex",{attrs:{xs12:"",sm4:"","offset-sm1":""}},[n("v-card",{staticClass:"elevation-0 transparent"},[n("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[n("div",{staticClass:"headline"},[t._v("Contact us")])]),n("v-card-text",[t._v("\n              Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.\n            ")]),n("v-list",{staticClass:"transparent"},[n("v-list-tile",[n("v-list-tile-action",[n("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("phone")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("777-867-5309")])],1)],1),n("v-list-tile",[n("v-list-tile-action",[n("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("place")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Chicago, US")])],1)],1),n("v-list-tile",[n("v-list-tile-action",[n("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("email")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("john@vuetifyjs.com")])],1)],1)],1)],1)],1)],1)],1)],1)},pt=[],vt={},ht=Object(f["a"])(vt,ft,pt,!1,null,null,null);ht.options.__file="CompanyInfo.vue";var mt=ht.exports,bt={name:"posts",components:{AfterParalex:J,AppProduct:Z,AppParallax:it,AppFooter:dt,CompanyInfo:mt},data:function(){return{}},computed:{options:function(){return{duration:500}}}},gt=bt,_t=(n("d442"),Object(f["a"])(gt,H,I,!1,null,"5b0a91d7",null));_t.options.__file="Hello.vue";var kt=_t.exports;a["default"].use(_["a"]);var wt=function(t){n.e("chunk-9e99bbf6").then(function(){t(n("c8d1"))}.bind(null,n)).catch(n.oe)},xt=function(t){n.e("chunk-2917da0e").then(function(){t(n("f2bd"))}.bind(null,n)).catch(n.oe)},yt=function(t){n.e("chunk-2d21eb0b").then(function(){t(n("d746"))}.bind(null,n)).catch(n.oe)},Ct=function(t){n.e("chunk-756cd427").then(function(){t(n("71b8"))}.bind(null,n)).catch(n.oe)},Ot=function(t){n.e("chunk-0988e5a6").then(function(){t(n("5d0e"))}.bind(null,n)).catch(n.oe)},Et=function(t){n.e("chunk-ff2808c8").then(function(){t(n("7c2a"))}.bind(null,n)).catch(n.oe)},jt=function(t){n.e("chunk-13bfec6c").then(function(){t(n("f059"))}.bind(null,n)).catch(n.oe)},Tt=function(t){n.e("chunk-7e7bebd2").then(function(){t(n("45a0"))}.bind(null,n)).catch(n.oe)},Pt=function(t){n.e("chunk-2d0cf8c1").then(function(){t(n("63d2"))}.bind(null,n)).catch(n.oe)},St=function(t){n.e("chunk-136f59ee").then(function(){t(n("6527"))}.bind(null,n)).catch(n.oe)},At=function(t){n.e("chunk-85fc8970").then(function(){t(n("0c7c"))}.bind(null,n)).catch(n.oe)},Rt=function(t){n.e("chunk-05044362").then(function(){t(n("f339"))}.bind(null,n)).catch(n.oe)},Nt=new _["a"]({mode:"history",routes:[{path:"/",name:"Hello",component:kt},{path:"/posts",name:"Posts",component:Et},{path:"/new",name:"NewPost",component:jt,beforeEnter:Mt},{path:"/posts/:id",name:"showPost",component:Tt},{path:"/shop",name:"shop",component:Pt},{path:"/payment",name:"order",component:St},{path:"/dashboard",name:"dashboard",component:At,beforeEnter:Mt},{path:"/dashboard/:id",name:"EachOrder",component:wt,beforeEnter:Mt},{path:"/payment/:id",name:"UserOrder",component:xt},{path:"/checkorder",name:"CheckOrder",component:yt},{path:"/admin",name:"admin",component:Ot},{path:"/adminpost",name:"adminPost",component:Rt,beforeEnter:Mt},{path:"*",component:Ct},{path:"/*/*",component:Ct}]});function Mt(t,e,n){q.getters.admin.isAdmin?n():n("*")}var Dt=n("ce5b"),Lt=n.n(Dt),Ut=n("cb43");n("bf40");a["default"].use(Ut["default"]),a["default"].use(l["a"]),a["default"].use(Lt.a),new a["default"]({el:"#app",router:Nt,store:q,render:function(t){return t(g)}})},"64a9":function(t,e,n){},"654a":function(t,e,n){"use strict";var a=n("edd0"),r=n.n(a);r.a},8688:function(t,e,n){"use strict";var a=n("00bd"),r=n.n(a);r.a},bc12:function(t,e,n){},c040:function(t,e){},d442:function(t,e,n){"use strict";var a=n("bc12"),r=n.n(a);r.a},edd0:function(t,e,n){}});
//# sourceMappingURL=app.1933f941.js.map