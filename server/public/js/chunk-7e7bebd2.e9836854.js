(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e7bebd2"],{"02f4":function(t,e,n){var r=n("4588"),o=n("be13");t.exports=function(t){return function(e,n){var a,i,c=String(o(e)),s=r(n),u=c.length;return s<0||s>=u?t?"":void 0:(a=c.charCodeAt(s),a<55296||a>56319||s+1===u||(i=c.charCodeAt(s+1))<56320||i>57343?t?c.charAt(s):a:t?c.slice(s,s+2):i-56320+(a-55296<<10)+65536)}}},"11e9":function(t,e,n){var r=n("52a7"),o=n("4630"),a=n("6821"),i=n("6a99"),c=n("69a8"),s=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=a(t),e=i(e,!0),s)try{return u(t,e)}catch(n){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},"1c4c":function(t,e,n){"use strict";var r=n("9b43"),o=n("5ca1"),a=n("4bf8"),i=n("1fa8"),c=n("33a4"),s=n("9def"),u=n("f1ae"),m=n("27ee");o(o.S+o.F*!n("5cc5")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,l,d=a(t),p="function"==typeof this?this:Array,f=arguments.length,h=f>1?arguments[1]:void 0,g=void 0!==h,v=0,b=m(d);if(g&&(h=r(h,f>2?arguments[2]:void 0,2)),void 0==b||p==Array&&c(b))for(e=s(d.length),n=new p(e);e>v;v++)u(n,v,g?h(d[v],v):d[v]);else for(l=b.call(d),n=new p;!(o=l.next()).done;v++)u(n,v,g?i(l,h,[o.value,v],!0):o.value);return n.length=v,n}})},"45a0":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),n("br"),n("br"),t.product.id.length>3?n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:" offset-lg-3 col-lg-5"},[n("div",{staticClass:"card mt-4"},[n("img",{staticClass:"card-img-top img-fluid",attrs:{src:t.product.img,alt:""}}),n("div",{staticClass:"card-body"},[n("h3",{staticClass:"card-title"},[t._v(t._s(t.product.title))]),n("h4",[t._v(t._s(t.product.price)+" $")]),n("p",{staticClass:"card-text"},[t._v(t._s(t.product.text))]),n("v-btn",{staticClass:"white--text",attrs:{absolute:"",color:"orange",fab:"",medium:"",right:"",middle:""},on:{click:function(e){t.addToCart(t.product)}}},[n("v-icon",[t._v("shopping_basket")])],1),n("v-rating",{attrs:{"background-color":"green lighten-3",color:"green",medium:"",value:t.avgRating,readonly:""}}),t.product.comments.length>0?n("h4",[t._v("average rating for this product: "),n("strong",[t._v(t._s(""+t.avgRating.toFixed(2)))])]):t._e(),0===t.product.comments.length?n("h4",[t._v("There is no review of this product")]):t._e()],1)]),n("h3",[t._v("Add review of our product")]),n("div",[n("div",[n("div",{staticClass:"col-sm-12"},[n("v-textarea",{attrs:{"auto-grow":"",box:"",outline:"",color:"deep-purple",label:"Comment",rows:"1"},model:{value:t.comment.text,callback:function(e){t.$set(t.comment,"text",e)},expression:"comment.text"}})],1),n("div",{staticClass:"form-group"},[n("div",{staticClass:"col-sm-12 col-md-6 col-lg-5"},[n("div",{staticClass:"input-group"},[n("v-text-field",{attrs:{color:"purple darken-2",label:"Author",required:""},model:{value:t.comment.author,callback:function(e){t.$set(t.comment,"author",e)},expression:"comment.author"}})],1)]),n("div",{staticClass:"col-sm-12 col-md-5 col-lg-5"},[n("p",[t._v("Rating:")]),n("v-rating",{attrs:{"background-color":"green lighten-3",color:"green",medium:""},model:{value:t.comment.rating,callback:function(e){t.$set(t.comment,"rating",t._n(e))},expression:"comment.rating"}})],1)]),n("div",{staticClass:"form-group"},[n("div",{staticClass:"col-sm-offset-4 col-sm-10"},[n("br"),n("br"),t.spinner?t._e():n("button",{staticClass:"btn btn-success btn-circle text-uppercase text-center",attrs:{disabled:t.disabledButton,type:"submit",id:"submitComment"},on:{click:function(e){t.addComment(),t.updateRating()}}},[n("span",{staticClass:"glyphicon glyphicon-send"}),t._v(" Add comment")]),t.spinner?n("div",{staticClass:"text-xs-center"},[n("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}})],1):t._e(),n("br"),n("br")])])])]),n("br"),n("br"),n("br"),n("div",{staticClass:"card card-outline-secondary my-4 col-sm-12"},[n("div",{staticClass:"card-header"},[t._v("\n           Product Reviews "),n("strong",{staticClass:"show--comment",on:{click:t.loadComment}},[t._v("("+t._s(t.product.comments.length)+")")])]),n("div",{staticClass:"card-body"},[n("transition-group",{attrs:{mode:"in-out","enter-active-class":"animated slideInDown","leave-active-class":"animated slideOutDown"}},t._l(t.product.comments,function(e){return t.showComment?t._e():n("all-comment",{key:e._id,attrs:{comment:e}})}))],1)])])])]):t._e()])},o=[],a=(n("c5f6"),n("5df3"),n("1c4c"),n("be94")),i=(n("96cf"),n("1da1")),c=n("283c"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("div",{staticClass:"col-sm-12"},[n("v-textarea",{attrs:{"auto-grow":"",box:"",color:"deep-purple",label:"Comment",rows:"1"},model:{value:t.comment.text,callback:function(e){t.$set(t.comment,"text",e)},expression:"comment.text"}})],1),n("div",{staticClass:"form-group"},[n("div",{staticClass:"col-sm-12 w-25"},[n("div",{staticClass:"input-group"},[n("v-text-field",{attrs:{color:"purple darken-2",label:"Author",required:""},model:{value:t.comment.author,callback:function(e){t.$set(t.comment,"author",e)},expression:"comment.author"}})],1)]),n("div",{staticClass:"col-sm-12"},[n("p",[t._v("Rating:")]),n("v-rating",{attrs:{"background-color":"green lighten-3",color:"green",medium:""},model:{value:t.comment.rating,callback:function(e){t.$set(t.comment,"rating",e)},expression:"comment.rating"}}),t._v("\r\n                            "+t._s(t.showComment)+"\r\n                            ")],1)]),n("div",{staticClass:"form-group"},[n("div",{staticClass:"col-sm-offset-4 col-sm-10"},[n("button",{staticClass:"btn btn-success btn-circle text-uppercase text-center",attrs:{type:"submit",id:"submitComment"},on:{click:function(e){t.addComment()}}},[n("span",{staticClass:"glyphicon glyphicon-send"}),t._v(" Summit comment")])])])]),n("br"),n("br")])},u=[],m={props:["showComment"],data:function(){return{comment:[{text:"",author:"",rating:""}]}},methods:{addComment:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.comment.rating>0)){t.next=8;break}return t.next=3,c["a"].addComment({id:this.$route.params.id,text:this.comment.text,author:this.comment.author,rating:this.comment.rating});case 3:this.comment.author="",this.comment.text="",this.comment.rating="",t.next=9;break;case 8:alert("add rating before");case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},l=m,d=n("2877"),p=Object(d["a"])(l,s,u,!1,null,null,null);p.options.__file="AddComment.vue";var f=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment"},[n("v-rating",{attrs:{value:t.comment.rating,"background-color":"green lighten-3",color:"green",medium:"",readonly:""}}),n("p",[t._v(t._s(t.comment.text))]),n("small",{staticClass:"text-muted"},[t._v("Posted by "+t._s(t.comment.author)+" on 3/1/17")]),n("hr")],1)},g=[],v={props:["comment"]},b=v,_=Object(d["a"])(b,h,g,!1,null,null,null);_.options.__file="AllComment.vue";var x=_.exports,C=n("2f62"),w={name:"showPost",data:function(){return{showComment:!0,spinner:!1,disabledButton:!1,comment:[{text:"",author:"",rating:0}],product:{title:"",text:"",img:"",price:"",id:"",comments:[],avgRating:0}}},components:{AllComment:x,AddComment:f},mounted:function(){this.getPost()},methods:{loadComment:function(){this.showComment=!this.showComment},getPost:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c["a"].getPost({id:this.$route.params.id});case 3:e=t.sent,this.product.title=e.data.title,this.product.text=e.data.text,this.product.img=e.data.img,this.product.price=e.data.price,this.product.id=e.data._id,this.product.comments=e.data.comments,this.product.avgRating=e.data.avgRating,t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),console.log(t.t0);case 16:case"end":return t.stop()}},t,this,[[0,13]])}));return function(){return t.apply(this,arguments)}}(),addComment:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.comment.rating>0)){t.next=5;break}return t.next=3,c["a"].addComment({id:this.$route.params.id,text:this.comment.text,author:this.comment.author,rating:this.comment.rating},this.comment.author="",this.comment.text="",this.comment.rating=0,this.spinner=!0,this.disabledButton=!0,setTimeout(function(){e.getPost(),e.spinner=!1,e.disabledButton=!1},3e3),this.showComment=!1);case 3:t.next=6;break;case 5:alert("Please rate this product");case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),addToCart:function(){this.$store.commit({type:"addToCart",id:this.product.id,title:this.product.title,img:this.product.img,price:this.product.price,quantity:1})},updateRating:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].updatePost({id:this.$route.params.id,avgRating:this.avgRating});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},computed:Object(a["a"])({},Object(C["d"])(["comments"]),{avgRating:function(){var t=this.product.comments.map(function(t){return t.rating}),e=Array.from(t),n=e.reduce(function(t,e){return t+e},0),r=n/this.product.comments.length;return Number(r)}})},y=w,k=(n("c1b4"),Object(d["a"])(y,r,o,!1,null,null,null));k.options.__file="showPost.vue";e["default"]=k.exports},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"5dbc":function(t,e,n){var r=n("d3f4"),o=n("8b97").set;t.exports=function(t,e,n){var a,i=e.constructor;return i!==n&&"function"==typeof i&&(a=i.prototype)!==n.prototype&&r(a)&&o&&o(t,a),t}},"5df3":function(t,e,n){"use strict";var r=n("02f4")(!0);n("01f9")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},"8b97":function(t,e,n){var r=n("d3f4"),o=n("cb7c"),a=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return a(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:a}},9093:function(t,e,n){var r=n("ce10"),o=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},aa77:function(t,e,n){var r=n("5ca1"),o=n("be13"),a=n("79e5"),i=n("fdef"),c="["+i+"]",s="​",u=RegExp("^"+c+c+"*"),m=RegExp(c+c+"*$"),l=function(t,e,n){var o={},c=a(function(){return!!i[t]()||s[t]()!=s}),u=o[t]=c?e(d):i[t];n&&(o[n]=u),r(r.P+r.F*c,"String",o)},d=l.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(m,"")),t};t.exports=l},c1b4:function(t,e,n){"use strict";var r=n("ec7d"),o=n.n(r);o.a},c5f6:function(t,e,n){"use strict";var r=n("7726"),o=n("69a8"),a=n("2d95"),i=n("5dbc"),c=n("6a99"),s=n("79e5"),u=n("9093").f,m=n("11e9").f,l=n("86cc").f,d=n("aa77").trim,p="Number",f=r[p],h=f,g=f.prototype,v=a(n("2aeb")(g))==p,b="trim"in String.prototype,_=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():d(e,3);var n,r,o,a=e.charCodeAt(0);if(43===a||45===a){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var i,s=e.slice(2),u=0,m=s.length;u<m;u++)if(i=s.charCodeAt(u),i<48||i>o)return NaN;return parseInt(s,r)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof f&&(v?s(function(){g.valueOf.call(n)}):a(n)!=p)?i(new h(_(e)),n,f):_(e)};for(var x,C=n("9e1e")?u(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;C.length>w;w++)o(h,x=C[w])&&!o(f,x)&&l(f,x,m(h,x));f.prototype=g,g.constructor=f,n("2aba")(r,p,f)}},ec7d:function(t,e,n){},f1ae:function(t,e,n){"use strict";var r=n("86cc"),o=n("4630");t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-7e7bebd2.e9836854.js.map