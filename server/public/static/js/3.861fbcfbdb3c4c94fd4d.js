webpackJsonp([3,4],{68:function(t,e,n){e=t.exports=n(18)(),e.push([t.id,"","",{version:3,sources:[],names:[],mappings:"",file:"ZhihuDailyList.vue",sourceRoot:"webpack://"}])},74:function(t,e,n){var o=n(68);"string"==typeof o&&(o=[[t.id,o,""]]);n(19)(o,{});o.locals&&(t.exports=o.locals)},149:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{zhihuDailyApi:"http://news-at.zhihu.com/api/4/news/latest"}},created:function(){this.getDailyList()},computed:{},mounted:function(){},methods:{getDailyList:function(){this.$http.options.emulateJSON=!0,this.$http.get(this.zhihuDailyApi).then(function(t){console.log(t.data)})["catch"](function(t){console.log(t)})}},components:{}}},209:function(t,e,n){var o,i;n(74),o=n(149);var s=n(212);i=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(i=o=o["default"]),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=o},212:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},staticRenderFns:[]}}});
//# sourceMappingURL=3.861fbcfbdb3c4c94fd4d.js.map