webpackJsonp([5,6],{89:function(t,e,n){e=t.exports=n(5)(),e.push([t.id,".read_desc{margin-top:10px;color:#565656;padding-left:16px;padding-right:16px}.read_title{font-size:1.2rem;font-weight:500;line-height:1.26em;padding-left:26px;padding-right:26px}.card_item{color:#333;padding:20px}.read_card{width:100%;margin-right:10px;background:#fff;border-radius:0;margin-bottom:38px;box-shadow:0 0 .455rem .08rem rgba(0,0,0,.05)}.button_load_more{margin-top:0;margin-bottom:38px}","",{version:3,sources:["/./src/components/Readhub.vue"],names:[],mappings:"AACA,WACE,gBAAiB,AACjB,cAAe,AACf,kBAAmB,AACnB,kBAAoB,CACrB,AACD,YACE,iBAAkB,AAClB,gBAAiB,AACjB,mBAAoB,AACpB,kBAAmB,AACnB,kBAAoB,CACrB,AACD,WACE,WAAY,AACZ,YAAc,CACf,AACD,WACE,WAAY,AACZ,kBAAmB,AACnB,gBAAoB,AACpB,gBAAmB,AACnB,mBAAoB,AACpB,6CAA+C,CAChD,AACD,kBACE,aAAgB,AAChB,kBAAoB,CACrB",file:"Readhub.vue",sourcesContent:["\n.read_desc {\n  margin-top: 10px;\n  color: #565656;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.read_title {\n  font-size: 1.2rem;\n  font-weight: 500;\n  line-height: 1.26em;\n  padding-left: 26px;\n  padding-right: 26px;\n}\n.card_item {\n  color: #333;\n  padding: 20px;\n}\n.read_card {\n  width: 100%;\n  margin-right: 10px;\n  background: #ffffff;\n  border-radius: 0px;\n  margin-bottom: 38px;\n  box-shadow: 0 0 .455rem .08rem rgba(0,0,0,.05);\n}\n.button_load_more {\n  margin-top: 0px;\n  margin-bottom: 38px;\n}\n"],sourceRoot:"webpack://"}])},100:function(t,e,n){var a=n(89);"string"==typeof a&&(a=[[t.id,a,""]]);n(6)(a,{});a.locals&&(t.exports=a.locals)},167:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{apiUrl:"https://api.readhub.me/topic?pageSize=20",readList:[]}},created:function(){this.getReadList(),document.title="科技资讯 - 一个就够了"},computed:{},mounted:function(){},methods:{getReadList:function(t,e){var n=this;this.$http.options.emulateJSON=!0,t||(t=this.apiUrl,console.log("url : "+this.apiUrl)),this.$http.get(this.$Api(t)).then(function(t){console.log(t.data.data),e?n.readList=n.uniquel(n.readList.concat(t.data.data)):n.readList=t.data.data})["catch"](function(t){console.log(t)})},loadMore:function(){var t=this.readList[this.readList.length-1].id,e="https://api.readhub.me/topic?lastCursor="+t+"&pageSize=20";this.getReadList(e,!0)},uniquel:function(t){var e,n=[],a=[],i=t.length;for(e=0;e<i;e++)n[t[e].id]||(n[t[e].id]=!0,a.push(t[e]));return a}},components:{}}},232:function(t,e,n){var a,i;n(100),a=n(167);var r=n(247);i=a=a||{},"object"!=typeof a["default"]&&"function"!=typeof a["default"]||(i=a=a["default"]),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=a},247:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root_content"},[n("ul",t._l(t.readList,function(e){return n("li",{staticClass:"read_card"},[n("a",{staticClass:"card_item",attrs:{target:"_blank",href:e.newsArray[0].url}},[n("div",{staticClass:"read_title"},[t._v(t._s(e.title))]),t._v(" "),e.summary?n("div",{staticClass:"read_desc"},[t._v("\n          "+t._s(e.summary)+"\n        ")]):t._e()])])})),t._v(" "),0!=t.readList.length?n("div",[n("button",{staticClass:"button_load_more",on:{click:t.loadMore}},[t._v("更多资讯")])]):t._e()])},staticRenderFns:[]}}});
//# sourceMappingURL=5.eca449296dcb7ac27895.js.map