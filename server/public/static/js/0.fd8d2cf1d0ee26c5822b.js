webpackJsonp([0,3],{69:function(e,t,n){t=e.exports=n(24)(),t.push([e.id,"ul{list-style:none;padding-left:0;float:left}#container{position:relative}#videocover{position:absolute;z-index:1;top:0;right:0;bottom:0;left:0}.root_view{max-width:1000px;margin:0 auto}.video_card{width:100%;margin:auto}.video-list .video{background-position:50%;background-size:cover;color:#000;cursor:pointer;height:450px;position:relative}.video{width:100%}.el-carousel{max-width:960px;width:100%;margin:auto}.el-carousel__indicators{float:none}.el-carousel__container{height:200px}.el-carousel__item h3{color:#475669;font-size:14px;opacity:.75;line-height:220px;margin:0}.el-carousel__item:nth-child(2n){background-color:#99a9bf}.el-carousel__item:nth-child(2n+1){background-color:#d3dce6}.button_load_more{background:#333;font-style:normal;border:none;color:#eee;padding:6px 12px;margin-bottom:26px;margin-top:20px}","",{version:3,sources:["/./src/components/OpenEyeList.vue"],names:[],mappings:"AACA,GACI,gBAAgB,AAChB,eAAe,AACf,UAAY,CACf,AACD,WACI,iBAAmB,CACtB,AACD,YACI,kBAAmB,AACnB,UAAW,AACX,MAAO,AACP,QAAS,AACT,SAAU,AACV,MAAQ,CACX,AACD,WACI,iBAAkB,AAClB,aAAe,CAClB,AACD,YACI,WAAY,AACZ,WAAa,CAChB,AACD,mBACI,wBAAyB,AACzB,sBAAuB,AACvB,WAAe,AACf,eAAgB,AAChB,aAAc,AACd,iBAAmB,CACtB,AACD,OACI,UAAY,CACf,AACD,aACI,gBAAiB,AACjB,WAAY,AACZ,WAAa,CAChB,AACD,yBACI,UAAY,CACf,AACD,wBACI,YAAc,CACjB,AACD,sBACI,cAAe,AACf,eAAgB,AAChB,YAAc,AACd,kBAAmB,AACnB,QAAU,CACb,AACD,iCACI,wBAA0B,CAC7B,AACD,mCACI,wBAA0B,CAC7B,AACD,kBACI,gBAAoB,AACpB,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,iBAAmB,AAInB,mBAAoB,AACpB,eAAiB,CACpB",file:"OpenEyeList.vue",sourcesContent:["\nul {\n    list-style:none;\n    padding-left:0;\n    float: left;\n}\n#container {\n    position: relative;\n}\n#videocover {\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n.root_view {\n    max-width: 1000px;\n    margin: 0 auto;\n}\n.video_card {\n    width: 100%;\n    margin: auto;\n}\n.video-list .video {\n    background-position: 50%;\n    background-size: cover;\n    color: #000000;\n    cursor: pointer;\n    height: 450px;\n    position: relative;\n}\n.video {\n    width: 100%;\n}\n.el-carousel {\n    max-width: 960px;\n    width: 100%;\n    margin: auto;\n}\n.el-carousel__indicators {\n    float: none;\n}\n.el-carousel__container {\n    height: 200px;\n}\n.el-carousel__item h3 {\n    color: #475669;\n    font-size: 14px;\n    opacity: 0.75;\n    line-height: 220px;\n    margin: 0;\n}\n.el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n}\n.el-carousel__item:nth-child(2n+1) {\n    background-color: #d3dce6;\n}\n.button_load_more {\n    background: #333333;\n    font-style: normal;\n    border: none;\n    color: #eee;\n    padding-left: 12px;\n    padding-right: 12px;\n    padding-top: 6px;\n    padding-bottom: 6px;\n    margin-bottom: 26px;\n    margin-top: 20px;\n}\n"],sourceRoot:"webpack://"}])},78:function(e,t,n){var o=n(69);"string"==typeof o&&(o=[[e.id,o,""]]);n(25)(o,{});o.locals&&(e.exports=o.locals)},88:function(e,t,n){n(55),n(54),e.exports=n(116)},97:function(e,t,n){var o=n(26),i=n(6)("toStringTag"),r="Arguments"==o(function(){return arguments}()),a=function(e,t){try{return e[t]}catch(n){}};e.exports=function(e){var t,n,d;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=a(t=Object(e),i))?n:r?o(t):"Object"==(d=o(t))&&"function"==typeof t.callee?"Arguments":d}},115:function(e,t,n){var o=n(97),i=n(6)("iterator"),r=n(19);e.exports=n(4).getIteratorMethod=function(e){if(void 0!=e)return e[i]||e["@@iterator"]||r[o(e)]}},116:function(e,t,n){var o=n(14),i=n(115);e.exports=n(4).getIterator=function(e){var t=i(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return o(t.call(e))}},124:function(e,t,n){e.exports={"default":n(88),__esModule:!0}},132:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(124),r=o(i);t["default"]={data:function(){return{value:[20,50],videoList:[],fullWidth:document.documentElement.clientWidth,openEyeApi:"http://baobab.kaiyanapp.com/api/v1/feed",nextPageUrl:""}},ready:function(){window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},created:function(){this.getOpenEyeList()},computed:{},mounted:function(){},attached:function(){},methods:{loadMore:function(){this.openEyeApi=this.nextPageUrl,this.getOpenEyeList()},showCover:function(){var e=document.getElementById("videocover");e.style.visibility="visible"},playDefaultVideo:function(){var e=document.getElementById("video_player");e.play();var t=document.getElementById("videocover");t.style.visibility="hidden"},handleResize:function(e){this.fullWidth=document.documentElement.clientHeight},changeVideoTitle:function(e,t){var n=document.getElementById("video_title");n.textContent=this.videoList[e].title;var o=document.getElementById("video_description");if(o.textContent=this.videoList[e].description,this.fullWidth>800){var i=document.getElementById("view_pager"),r=i.children[0];r.style.height="220px"}else if(this.fullWidth>600){var i=document.getElementById("view_pager"),r=i.children[0];r.style.height="160px"}else{var i=document.getElementById("view_pager"),r=i.children[0];r.style.height="100px"}},isToday:function(e){var t=new Date;return e.setHours(0,0,0,0)==t.setHours(0,0,0,0)},playVideo:function(e){var t=document.getElementById("video_player");t.src=e,t.play()},getOpenEyeList:function(){var e=this;this.$http.options.emulateJSON=!0,this.$http.get(this.openEyeApi).then(function(t){var n=[];e.getResult=!0,e.message="",e.nextPageUrl=t.data.nextPageUrl;var o=new Date,i=o.getHours(),a=new Date(t.data.dailyList[0].date);if(e.isToday(a)){var d=!0,l=!1,A=void 0;try{for(var s,c=(0,r["default"])(t.data.dailyList[0].videoList);!(d=(s=c.next()).done);d=!0){var u=s.value;if(i>=23||i<9){var p=new Date(u.date),v=p.getHours();21==v&&(n=n.concat(u))}else{var p=new Date(u.date),f=p.getHours();9==f&&(n=n.concat(u))}}}catch(h){l=!0,A=h}finally{try{!d&&c["return"]&&c["return"]()}finally{if(l)throw A}}e.videoList=n}else e.videoList=t.data.dailyList[0].videoList})["catch"](function(e){console.log(e)})}},components:{}}},191:function(e,t,n){var o,i;n(78),o=n(132);var r=n(210);i=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(i=o=o["default"]),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,e.exports=o},210:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"root_view"},[n("div",{attrs:{id:"container"}},[n("div",{attrs:{id:"videocover"},on:{click:e.playDefaultVideo}},[e._v(" ")]),e._v(" "),n("video",{staticClass:"video",attrs:{id:"video_player",controls:"controls",preload:"true",src:e.videoList[0].playUrl},on:{pause:e.showCover,ended:e.showCover}})]),e._v(" "),n("h3",{attrs:{id:"video_title"}},[e._v(e._s(e.videoList[0].title))]),e._v(" "),n("el-carousel",{attrs:{id:"view_pager",interval:4e3,type:"card",height:"260px",arrow:"never"},on:{change:e.changeVideoTitle}},e._l(e.videoList,function(t){return n("el-carousel-item",[n("img",{attrs:{src:t.coverForFeed},on:{click:function(n){e.playVideo(t.playUrl)}}})])})),e._v(" "),n("p",{attrs:{id:"video_description"}},[e._v("\n    "+e._s(e.videoList[0].description)+"\n  ")]),e._v(" "),n("button",{staticClass:"button_load_more",on:{click:e.loadMore}},[e._v("更多视频")])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=0.fd8d2cf1d0ee26c5822b.js.map