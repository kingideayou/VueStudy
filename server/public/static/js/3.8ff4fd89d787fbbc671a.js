webpackJsonp([3,5],{97:function(t,e,n){e=t.exports=n(5)(),e.push([t.id,"","",{version:3,sources:[],names:[],mappings:"",file:"Vuex.vue",sourceRoot:"webpack://"}])},118:function(t,e,n){var o=n(97);"string"==typeof o&&(o=[[t.id,o,""]]);n(6)(o,{});o.locals&&(t.exports=o.locals)},172:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(184);e["default"]={computed:(0,o.updateCount)({count:function(t){return t.count},countAlias:"count",countPlusLocalState:function(t){return t.count+this.localCount}})}},184:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.updateCount=function(t){var e=t.dispatch;e("UPDATE_COUNT")}},236:function(t,e,n){var o,u;n(118),o=n(172);var c=n(259);u=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(u=o=o["default"]),"function"==typeof u&&(u=u.options),u.render=c.render,u.staticRenderFns=c.staticRenderFns,t.exports=o},259:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{on:{click:t.updateCount}},[t._v("点击")]),t._v("\n  计数："+t._s(t.count)+"\n")])},staticRenderFns:[]}}});
//# sourceMappingURL=3.8ff4fd89d787fbbc671a.js.map