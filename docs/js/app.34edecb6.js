(function(e){function t(t){for(var a,o,s=t[0],i=t[1],b=t[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,b||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var i=n[s];0!==c[i]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},c={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="https://trainingsplan.shintaikan.de/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var b=0;b<s.length;b++)t(s[b]);var l=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4af2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),c={style:{width:"100%"}},r={key:0},o=Object(a["f"])("tr",null,[Object(a["f"])("td",null,[Object(a["f"])("p",null,[Object(a["f"])("em",null," Montag ")])]),Object(a["f"])("td",null,[Object(a["f"])("p",null,[Object(a["f"])("em",null," Dienstag ")])]),Object(a["f"])("td",null,[Object(a["f"])("p",null,[Object(a["f"])("em",null," Mittwoch ")])]),Object(a["f"])("td",null,[Object(a["f"])("p",null,[Object(a["f"])("em",null," Donnerstag ")])]),Object(a["f"])("td",null,[Object(a["f"])("p",null,[Object(a["f"])("em",null," Freitag ")])])],-1);function s(e,t,n,s,i,b){var l=Object(a["l"])("HelloWorld");return Object(a["h"])(),Object(a["e"])("table",c,[i.response?(Object(a["h"])(),Object(a["e"])("tbody",r,[o,(Object(a["h"])(),Object(a["e"])(a["a"],null,Object(a["k"])(5,(function(t){return Object(a["f"])("tr",{key:t},[(Object(a["h"])(),Object(a["e"])(a["a"],null,Object(a["k"])(5,(function(n){return Object(a["f"])("td",{key:n},[i.response["".concat(n)+"".concat(t)]?(Object(a["h"])(),Object(a["c"])(l,{key:0,db:e.db,day:n,session:t,data:i.response["".concat(n)+"".concat(t)]},null,8,["db","day","session","data"])):(Object(a["h"])(),Object(a["c"])(l,{key:1,db:e.db,day:n,session:t,data:{}},null,8,["db","day","session"]))])})),64))])})),64))])):Object(a["d"])("",!0)])}var i=n("1da1"),b=(n("96cf"),n("159b"),n("99af"),{key:0}),l={key:1};function u(e,t,n,c,r,o){return r.time?(Object(a["h"])(),Object(a["e"])("div",{key:0,style:Object(a["g"])({color:r.color}),class:"hello"},[Object(a["f"])("span",null,Object(a["m"])(r.time)+" - "+Object(a["m"])(r.end),1),"Benutzerdefiniert"!=r.selected?(Object(a["h"])(),Object(a["e"])("span",b,Object(a["m"])(r.selected),1)):(Object(a["h"])(),Object(a["e"])("span",l,Object(a["m"])(r.customText),1))],4)):Object(a["d"])("",!0)}n("a9e3");var d=n("e71f"),p=n("5606");Object(p["f"])({apiKey:"AIzaSyAd5SQiFe5RRm954rTLRnEPPGEYznSMSBo",authDomain:"shintaikan-6b670.firebaseapp.com",databaseURL:"https://shintaikan-6b670.firebaseio.com",projectId:"shintaikan-6b670",storageBucket:"shintaikan-6b670.appspot.com",messagingSenderId:"929946590509",appId:"1:929946590509:web:7107bf53389ab56dc507a4"}),Object(d["c"])();var f={name:"HelloWorld",props:{day:Number,session:Number,data:Object},data:function(){return{selected:this.data.group,time:this.data.start,end:this.data.end,customText:this.data.customText,color:this.data.color}}},O=(n("bdc4"),n("6b0d")),j=n.n(O);const h=j()(f,[["render",u],["__scopeId","data-v-7dd7863a"]]);var m=h,y=n("260b"),g={apiKey:"AIzaSyAd5SQiFe5RRm954rTLRnEPPGEYznSMSBo",authDomain:"shintaikan-6b670.firebaseapp.com",databaseURL:"https://shintaikan-6b670.firebaseio.com",projectId:"shintaikan-6b670",storageBucket:"shintaikan-6b670.appspot.com",messagingSenderId:"929946590509",appId:"1:929946590509:web:7107bf53389ab56dc507a4"};Object(y["a"])(g);var v=1,k=1,S=Object(d["c"])(),w={name:"App",components:{HelloWorld:m},data:function(){return{docdata:null,response:{},user:""}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(d["b"])(Object(d["a"])(S,"times"));case 2:n=t.sent,n.forEach((function(t){e.response["".concat(t.id)]=t.data(),console.log("".concat(t.id," => ").concat(t.data()))})),console.log(JSON.parse(JSON.stringify(e.$data.response))),console.log(JSON.parse(JSON.stringify(e.$data.response["".concat(v)+"".concat(k)])));case 6:case"end":return t.stop()}}),t)})))()}};n("eb7f");const x=j()(w,[["render",s]]);var P=x;Object(a["b"])(P).mount("#app")},ab8b:function(e,t,n){},bdc4:function(e,t,n){"use strict";n("ab8b")},eb7f:function(e,t,n){"use strict";n("4af2")}});
//# sourceMappingURL=app.34edecb6.js.map