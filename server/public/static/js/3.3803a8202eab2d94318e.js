webpackJsonp([3,5],{80:function(t,e,n){e=t.exports=n(7)(),e.push([t.id,"","",{version:3,sources:[],names:[],mappings:"",file:"Vuex.vue",sourceRoot:"webpack://"}])},99:function(t,e,n){var o=n(80);"string"==typeof o&&(o=[[t.id,o,""]]);n(8)(o,{});o.locals&&(t.exports=o.locals)},155:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(167);e["default"]={computed:(0,o.updateCount)({count:function(t){return t.count},countAlias:"count",countPlusLocalState:function(t){return t.count+this.localCount}})}},167:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.updateCount=function(t){var e=t.dispatch;e("UPDATE_COUNT")}},219:function(t,e,n){var o,u;n(99),o=n(155);var c=n(242);u=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(u=o=o["default"]),"function"==typeof u&&(u=u.options),u.render=c.render,u.staticRenderFns=c.staticRenderFns,t.exports=o},242:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{on:{click:t.updateCount}},[t._v("点击")]),t._v("\n  计数："+t._s(t.count)+"\n")])},staticRenderFns:[]}}});
//# sourceMappingURL=3.3803a8202eab2d94318e.js.map