(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-338bd100"],{"029a":function(e,t,r){},"0eeb":function(e,t,r){"use strict";var s=r("029a"),a=r.n(s);a.a},"456d":function(e,t,r){var s=r("4bf8"),a=r("0d58");r("5eda")("keys",function(){return function(e){return a(s(e))}})},"5eda":function(e,t,r){var s=r("5ca1"),a=r("8378"),i=r("79e5");e.exports=function(e,t){var r=(a.Object||{})[e]||Object[e],n={};n[e]=t(r),s(s.S+s.F*i(function(){r(1)}),"Object",n)}},"7f7f":function(e,t,r){var s=r("86cc").f,a=Function.prototype,i=/^\s*function ([^ (]*)/,n="name";n in a||r("9e1e")&&s(a,n,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},"92b7":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.cart.length>0?r("div",[r("br"),r("br"),r("br"),r("br"),r("div",{staticClass:"alert alert-info text-center",attrs:{role:"alert"}},[e._v("\r\n  You ordered "+e._s(e.cart.length)+" item for "+e._s(e.summary)+" $\r\n")]),r("div",{attrs:{id:"order--table"}},[r("v-data-table",{staticClass:"elevation-10",attrs:{headers:e.headers,items:e.cart,color:"indigo"},scopedSlots:e._u([{key:"items",fn:function(t){return[r("td",{staticClass:"text-sm"},[e._v(e._s(t.item.title))]),r("td",{staticClass:"text-sm"},[e._v(e._s(t.item.price)+" $")]),r("td",{staticClass:"text-sm"},[e._v(e._s(t.item.quantity))]),r("td",{staticClass:"text-sm"},[r("v-btn",{attrs:{color:"red",dark:""},on:{click:function(r){e.deleteItem(t.item)}}},[e._v("Delete\r\n        ")])],1)]}}])}),r("br"),r("br"),r("v-layout",{attrs:{"justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm10:"",md8:"",lg6:""}},[r("v-card",{ref:"form"},[r("v-card-text",[r("v-text-field",{ref:"name",attrs:{rules:[function(){return!!e.name||"This field is required"}],"error-messages":e.errorMessages,label:"Full Name",placeholder:"",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),r("v-text-field",{ref:"address",attrs:{rules:[function(){return!!e.address||"This field is required"},function(){return!!e.address&&e.address.length<=25||"Address must be less than 25 characters"},e.addressCheck],label:"Address Line",placeholder:"",counter:"25",required:""},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}}),r("v-text-field",{ref:"city",attrs:{rules:[function(){return!!e.city||"This field is required"},e.addressCheck],label:"City",placeholder:"",required:""},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}}),r("v-text-field",{ref:"state",attrs:{label:"State/Province/Region*",placeholder:""},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}),r("v-text-field",{ref:"zip",attrs:{label:"ZIP / Postal Code",required:"",placeholder:""},model:{value:e.zip,callback:function(t){e.zip=e._n(t)},expression:"zip"}}),e._v("\r\n            "+e._s(e.zip)+"\r\n            "),r("v-autocomplete",{ref:"country",attrs:{rules:[function(){return!!e.country||"This field is required"}],items:e.countries,label:"Country",placeholder:"Select...",required:""},model:{value:e.country,callback:function(t){e.country=t},expression:"country"}})],1),r("v-divider",{staticClass:"mt-5"}),r("p",[e._v("*this field is not required")]),r("v-card-actions",[r("v-btn",{attrs:{flat:""}},[e._v("Cancel")]),r("v-spacer"),r("v-slide-x-reverse-transition",[e.formHasErrors?r("v-tooltip",{attrs:{left:""}},[r("v-btn",{staticClass:"my-0",attrs:{slot:"activator",icon:""},on:{click:e.resetForm},slot:"activator"},[r("v-icon",[e._v("refresh")])],1),r("span",[e._v("Refresh form")])],1):e._e()],1),r("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(t){e.addOrder()}}},[e._v("Submit")])],1)],1)],1)],1)],1)]):e._e()])},a=[],i=(r("96cf"),r("1da1")),n=(r("456d"),r("ac6a"),r("7f7f"),r("be94")),c=(r("cadf"),r("551c"),r("097d"),r("2f62")),o=r("283c"),l={data:function(){return{headers:[{text:"Title",value:"title"},{text:"Price",value:"price"},{text:"Quantity",value:"quantity"},{text:"Delete"}],errorMessages:"",name:"",address:"",city:"",state:"",zip:"",country:"",formHasErrors:!1,countries:["Poland","USA","France"]}},computed:Object(n["a"])({},Object(c["c"])(["cart","summary"])),methods:Object(n["a"])({},Object(c["b"])(["deleteItem"]),{addressCheck:function(){return this.errorMessages=this.address&&!this.name?"Hey! I'm required":"",!0},resetForm:function(){var e=this;this.errorMessages=[],this.formHasErrors=!1,Object.keys(this.form).forEach(function(t){e.$refs[t].reset()})},addOrder:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!(this.name.length>0&&this.address.length>4&&this.city.length>3)){e.next=6;break}return e.next=3,o["a"].addOrder({order:this.cart,name:this.name,address:this.address,city:this.city,zip:this.zip,country:this.countries,summary:this.summary});case 3:this.$router.push({name:"Posts"}),e.next=7;break;case 6:alert("Fill the form");case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()})},u=l,d=(r("0eeb"),r("2877")),f=Object(d["a"])(u,s,a,!1,null,null,null);f.options.__file="Payment.vue";t["default"]=f.exports},ac6a:function(e,t,r){for(var s=r("cadf"),a=r("0d58"),i=r("2aba"),n=r("7726"),c=r("32e9"),o=r("84f2"),l=r("2b4c"),u=l("iterator"),d=l("toStringTag"),f=o.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=a(m),v=0;v<h.length;v++){var b,p=h[v],y=m[p],x=n[p],L=x&&x.prototype;if(L&&(L[u]||c(L,u,f),L[d]||c(L,d,p),o[p]=f,y))for(b in s)L[b]||i(L,b,s[b],!0)}}}]);
//# sourceMappingURL=chunk-338bd100.473f6113.js.map