webpackJsonp([3,5],{74:function(t,e,n){e=t.exports=n(7)(),e.push([t.id,"","",{version:3,sources:[],names:[],mappings:"",file:"Vuex.vue",sourceRoot:"webpack://"}])},93:function(t,e,n){var o=n(74);"string"==typeof o&&(o=[[t.id,o,""]]);n(8)(o,{});o.locals&&(t.exports=o.locals)},153:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(164);e["default"]={computed:(0,o.updateCount)({count:function(t){return t.count},countAlias:"count",countPlusLocalState:function(t){return t.count+this.localCount}})}},164:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.updateCount=function(t){var e=t.dispatch;e("UPDATE_COUNT")}},216:function(t,e,n){var o,u;n(93),o=n(153);var c=n(239);u=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(u=o=o["default"]),"function"==typeof u&&(u=u.options),u.render=c.render,u.staticRenderFns=c.staticRenderFns,t.exports=o},239:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{on:{click:t.updateCount}},[t._v("点击")]),t._v("\n  计数："+t._s(t.count)+"\n")])},staticRenderFns:[]}}});
//# sourceMappingURL=3.0fe79d66ace7b704da3e.js.map