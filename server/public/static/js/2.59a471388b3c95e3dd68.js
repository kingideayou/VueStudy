webpackJsonp([2,3],{49:function(t,e,o){e=t.exports=o(17)(),e.push([t.id,"ul{list-style:none;padding-left:0;float:left}.root_view{max-width:1200px;margin:0 auto}.video_card{width:100%;margin:auto}.video-list .video{background-position:50%;background-size:cover;color:#000;cursor:pointer;height:450px;position:relative}.video{width:100%}","",{version:3,sources:["/./src/components/OpenEyeList.vue"],names:[],mappings:"AACA,GACE,gBAAgB,AAChB,eAAe,AACf,UAAY,CACb,AACD,WACE,iBAAkB,AAClB,aAAe,CAChB,AACD,YACE,WAAY,AACZ,WAAa,CACd,AACD,mBACE,wBAAyB,AACzB,sBAAuB,AACvB,WAAe,AACf,eAAgB,AAChB,aAAc,AACd,iBAAmB,CACpB,AACD,OACE,UAAY,CACb",file:"OpenEyeList.vue",sourcesContent:["\nul {\n  list-style:none;\n  padding-left:0;\n  float: left;\n}\n.root_view {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.video_card {\n  width: 100%;\n  margin: auto;\n}\n.video-list .video {\n  background-position: 50%;\n  background-size: cover;\n  color: #000000;\n  cursor: pointer;\n  height: 450px;\n  position: relative;\n}\n.video {\n  width: 100%;\n}\n"],sourceRoot:"webpack://"}])},57:function(t,e,o){var n=o(49);"string"==typeof n&&(n=[[t.id,n,""]]);o(18)(n,{});n.locals&&(t.exports=n.locals)},110:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(43),s=n(i);e["default"]={data:function(){return{videoList:[],openEyeApi:"http://baobab.kaiyanapp.com/api/v1/feed"}},created:function(){this.getOpenEyeListToday()},computed:{},mounted:function(){},methods:{getOpenEyeListToday:function(){var t=this;this.$http.options.emulateJSON=!0,this.$http.get(this.openEyeApi).then(function(e){console.log("VueResourceDemo getOpenEyeList run"),console.log(e.data.dailyList[0].videoList),t.videoList=e.data.dailyList[0].videoList,t.getResult=!0,t.message="";var o=[],n=!0,i=!1,a=void 0;try{for(var r,d=(0,s["default"])(e.data.dailyList[0].videoList);!(n=(r=d.next()).done);n=!0){var l=r.value;console.log("test 111 : "+l.playUrl),list.push({playUrl:l.playUrl})}}catch(A){i=!0,a=A}finally{try{!n&&d["return"]&&d["return"]()}finally{if(i)throw a}}t.videoList=o})["catch"](function(t){console.log(t)})}},components:{}}},129:function(t,e,o){var n,i;o(57),n=o(110);var s=o(148);i=n=n||{},"object"!=typeof n["default"]&&"function"!=typeof n["default"]||(i=n=n["default"]),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=n},148:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"root_view"},[_h("ul",[_l(videoList,function(t){return _h("li",{staticClass:"video_card"},[_h("video",{staticClass:"video",attrs:{controls:"controls",preload:"true",src:t.playUrl}})])})])])},staticRenderFns:[]}}});
//# sourceMappingURL=2.59a471388b3c95e3dd68.js.map