webpackJsonp([1,5],{27:function(e,t,o){o(45),o(44),e.exports=o(43)},28:function(e,t,o){var n=o(22),i=o(5)("toStringTag"),r="Arguments"==n(function(){return arguments}()),a=function(e,t){try{return e[t]}catch(o){}};e.exports=function(e){var t,o,d;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(o=a(t=Object(e),i))?o:r?n(t):"Object"==(d=n(t))&&"function"==typeof t.callee?"Arguments":d}},42:function(e,t,o){var n=o(28),i=o(5)("iterator"),r=o(20);e.exports=o(3).getIteratorMethod=function(e){if(void 0!=e)return e[i]||e["@@iterator"]||r[n(e)]}},43:function(e,t,o){var n=o(9),i=o(42);e.exports=o(3).getIterator=function(e){var t=i(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return n(t.call(e))}},46:function(e,t,o){e.exports={"default":o(27),__esModule:!0}},85:function(e,t,o){t=e.exports=o(7)(),t.push([e.id,"ul{list-style:none;padding-left:0;float:left}#container{position:relative}#videocover{position:absolute;z-index:1;top:0;right:0;bottom:0;left:0}.root_view{max-width:1000px;margin:0 auto}.video_card{width:100%;margin:auto}.video-list .video{background-position:50%;background-size:cover;color:#000;cursor:pointer;height:450px;position:relative}.video{width:100%}.el-carousel{max-width:960px;width:100%;margin:auto}.el-carousel__indicators{float:none}.el-carousel__container{height:200px}.el-carousel__item h3{color:#475669;font-size:14px;opacity:.75;line-height:220px;margin:0}.el-carousel__item:nth-child(2n){background-color:#99a9bf}.el-carousel__item:nth-child(2n+1){background-color:#d3dce6}.img_banner{width:100%}.button_load_more{background:#333;font-style:normal;border:none;color:#eee;padding:6px 12px;margin-bottom:26px;margin-top:20px}","",{version:3,sources:["/./src/components/OpenEyeList.vue"],names:[],mappings:"AACA,GACI,gBAAgB,AAChB,eAAe,AACf,UAAY,CACf,AACD,WACI,iBAAmB,CACtB,AACD,YACI,kBAAmB,AACnB,UAAW,AACX,MAAO,AACP,QAAS,AACT,SAAU,AACV,MAAQ,CACX,AACD,WACI,iBAAkB,AAClB,aAAe,CAClB,AACD,YACI,WAAY,AACZ,WAAa,CAChB,AACD,mBACI,wBAAyB,AACzB,sBAAuB,AACvB,WAAe,AACf,eAAgB,AAChB,aAAc,AACd,iBAAmB,CACtB,AACD,OACI,UAAY,CACf,AACD,aACI,gBAAiB,AACjB,WAAY,AACZ,WAAa,CAChB,AACD,yBACI,UAAY,CACf,AACD,wBACI,YAAc,CACjB,AACD,sBACI,cAAe,AACf,eAAgB,AAChB,YAAc,AACd,kBAAmB,AACnB,QAAU,CACb,AACD,iCACI,wBAA0B,CAC7B,AACD,mCACI,wBAA0B,CAC7B,AACD,YACI,UAAY,CACf,AACD,kBACI,gBAAoB,AACpB,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,iBAAmB,AAInB,mBAAoB,AACpB,eAAiB,CACpB",file:"OpenEyeList.vue",sourcesContent:["\nul {\n    list-style:none;\n    padding-left:0;\n    float: left;\n}\n#container {\n    position: relative;\n}\n#videocover {\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n.root_view {\n    max-width: 1000px;\n    margin: 0 auto;\n}\n.video_card {\n    width: 100%;\n    margin: auto;\n}\n.video-list .video {\n    background-position: 50%;\n    background-size: cover;\n    color: #000000;\n    cursor: pointer;\n    height: 450px;\n    position: relative;\n}\n.video {\n    width: 100%;\n}\n.el-carousel {\n    max-width: 960px;\n    width: 100%;\n    margin: auto;\n}\n.el-carousel__indicators {\n    float: none;\n}\n.el-carousel__container {\n    height: 200px;\n}\n.el-carousel__item h3 {\n    color: #475669;\n    font-size: 14px;\n    opacity: 0.75;\n    line-height: 220px;\n    margin: 0;\n}\n.el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n}\n.el-carousel__item:nth-child(2n+1) {\n    background-color: #d3dce6;\n}\n.img_banner {\n    width: 100%;\n}\n.button_load_more {\n    background: #333333;\n    font-style: normal;\n    border: none;\n    color: #eee;\n    padding-left: 12px;\n    padding-right: 12px;\n    padding-top: 6px;\n    padding-bottom: 6px;\n    margin-bottom: 26px;\n    margin-top: 20px;\n}\n"],sourceRoot:"webpack://"}])},98:function(e,t,o){var n=o(85);"string"==typeof n&&(n=[[e.id,n,""]]);o(8)(n,{});n.locals&&(e.exports=n.locals)},149:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var i=o(48),r=n(i);t["default"]=function(e,t,o){return t in e?(0,r["default"])(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}},153:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(149),r=n(i),a=o(46),d=n(a);t["default"]={data:function(){return{value:[20,50],videoList:[],fullWidth:document.documentElement.clientWidth,openEyeVideoId:"",openEyeApi:"http://baobab.kaiyanapp.com/api/v1/feed",nextPageUrl:"",currentVideoUrl:"",openEyeBaseUrl:"http://baobab.kaiyanapp.com/api/v1/playUrl?editionType=default&source=ucloud&vid="}},ready:function(){window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},created:function(){this.openEyeVideoId=this.$route.params.videoId,console.log("openEyeVideoId : "+this.openEyeVideoId),this.getOpenEyeList(),navigator.userAgent,document.title="开眼 - 一个就够了"},computed:{},mounted:function(){},attached:function(){},methods:{onVideoPlay:function(){var e=document.getElementById("videocover");e.style.visibility="hidden","undefined"==typeof this.openEyeVideoId&&(this.openEyeVideoId=this.videoList[0].id),this.$router.replace({path:"/home/"+this.openEyeVideoId})},changeCurrentVideo:function(e){this.openEyeVideoId=e,this.$router.replace({path:"/home/"+e})},playVideoFromVideoId:function(){this.$nextTick(function(){this.isNumber(this.openEyeVideoId)?(console.log("isNumber : true"),console.log("currentVideoUrl : "+this.openEyeBaseUrl+this.openEyeVideoId),this.playVideo(this.openEyeBaseUrl+this.openEyeVideoId)):console.log("isNumber : false")})},isNumber:function(e){return null!=e&&""!=e&&!isNaN(e)},loadMore:function(){this.openEyeApi=this.nextPageUrl,this.getOpenEyeList()},showCover:function(){var e=document.getElementById("videocover");e.style.visibility="visible"},playDefaultVideo:function(){var e=document.getElementById("video_player");e.play()},handleResize:function(e){this.fullWidth=document.documentElement.clientHeight},changeVideoTitle:function(e,t){var o=document.getElementById("video_title");o.textContent=this.videoList[e].title;var n=document.getElementById("video_description");if(n.textContent=this.videoList[e].description,this.fullWidth>800){var i=document.getElementById("view_pager"),r=i.children[0];r.style.height="220px"}else if(this.fullWidth>600){var i=document.getElementById("view_pager"),r=i.children[0];r.style.height="160px"}else{var i=document.getElementById("view_pager"),r=i.children[0];r.style.height="100px"}},isToday:function(e){var t=new Date;return e.setHours(0,0,0,0)==t.setHours(0,0,0,0)},playVideo:function(e){var t=document.getElementById("video_player");t.src=e,t.play()},getOpenEyeList:function(){var e=this;this.$http.options.emulateJSON=!0,this.$http.get(this.openEyeApi).then(function(t){var o=[];e.getResult=!0,e.message="",e.nextPageUrl=t.data.nextPageUrl;var n=new Date,i=n.getHours(),r=new Date(t.data.dailyList[0].date);if(e.isToday(r)){var a=!0,l=!1,s=void 0;try{for(var c,u=(0,d["default"])(t.data.dailyList[0].videoList);!(a=(c=u.next()).done);a=!0){var A=c.value;if(i>=23||i<9){var p=new Date(A.date),h=p.getHours();21==h&&(o=o.concat(A))}else{var p=new Date(A.date),v=p.getHours();9==v&&(o=o.concat(A))}}}catch(f){l=!0,s=f}finally{try{!a&&u["return"]&&u["return"]()}finally{if(l)throw s}}e.videoList=o}else e.videoList=t.data.dailyList[0].videoList})["catch"](function(e){console.log(e)})}},components:{},beforeRouteEnter:function(e,t,o){console.log("LifeCircle : beforeRouteEnter"),console.log(t),console.log(e),console.log("to param url : "+e.params.videoId),o(function(t){t.openEyeVideoId=e.params.videoId})},watch:(0,r["default"])({$route:function(e,t){console.log(t),console.log(e.params.videoId)}},"$route",function(){console.log("param url : "+this.$route.params.videoId)})}},218:function(e,t,o){var n,i;o(98),n=o(153);var r=o(242);i=n=n||{},"object"!=typeof n["default"]&&"function"!=typeof n["default"]||(i=n=n["default"]),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,e.exports=n},242:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"root_view"},[o("div",{attrs:{id:"container"}},[o("div",{attrs:{id:"videocover"},on:{click:e.playDefaultVideo}},[e._v(" ")]),e._v(" "),this.isNumber(e.openEyeVideoId)?o("video",{staticClass:"video",attrs:{id:"video_player",controls:"controls",preload:"true",autoplay:"auto",src:this.openEyeBaseUrl+this.openEyeVideoId},on:{play:e.onVideoPlay,preload:e.playVideoFromVideoId,pause:e.showCover,ended:e.showCover}}):o("video",{staticClass:"video",attrs:{id:"video_player",controls:"controls",preload:"true",src:e.videoList[0].playUrl},on:{play:e.onVideoPlay,preload:e.playVideoFromVideoId,pause:e.showCover,ended:e.showCover}})]),e._v(" "),o("h3",{attrs:{id:"video_title"}},[e._v(e._s(e.videoList[0].title))]),e._v(" "),o("el-carousel",{attrs:{id:"view_pager",interval:4e3,type:"card",height:"260px",arrow:"never"},on:{change:e.changeVideoTitle}},e._l(e.videoList,function(t){return o("el-carousel-item",[o("img",{staticClass:"img_banner",attrs:{src:t.coverForFeed},on:{click:function(o){e.changeCurrentVideo(t.id)}}})])})),e._v(" "),o("p",{attrs:{id:"video_description"}},[e._v("\n    "+e._s(e.videoList[0].description)+"\n  ")]),e._v(" "),o("button",{staticClass:"button_load_more",on:{click:e.loadMore}},[e._v("更多视频")])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=1.29fb4c234f567ef16e09.js.map