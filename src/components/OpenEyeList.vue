<template lang="html">

  <div class="root_view">

    <div id="container">
      <div id="videocover"  v-on:click='playDefaultVideo'>&nbsp;</div>
        <video v-if="this.isNumber(openEyeVideoId)"
            id="video_player"
            class="video"
            controls="controls"
            preload="true"
            autoplay="auto"
            v-on:play="onVideoPlay"
            v-on:preload="playVideoFromVideoId"
            v-on:pause='showCover'
            v-on:ended='showCover'
            :src="this.openEyeBaseUrl + this.openEyeVideoId">
        </video>
        <video v-else
            id="video_player"
            class="video"
            controls="controls"
            preload="true"
            v-on:play="onVideoPlay"
            v-on:preload="playVideoFromVideoId"
            v-on:pause='showCover'
            v-on:ended='showCover'
            :src="videoList[0].playUrl">
        </video>
    </div>

    <h3 id="video_title">{{videoList[0].title}}</h3>
    <el-carousel id="view_pager" v-on:change='changeVideoTitle' :interval="4000" type="card" height="260px" arrow="never">
      <el-carousel-item v-for="video in videoList">
        <img class="img_banner" :src="video.coverForFeed" v-on:click="changeCurrentVideo(video.id)"></img>
      </el-carousel-item>
    </el-carousel>

    <p id="video_description">
      {{ videoList[0].description}}
    </p>

    <button class="button_load_more" @click="loadMore">更多视频</button>

  </div>
</template>

<script>



export default {
  data () {
    return {
      value: [20, 50],
      videoList: [],
      fullWidth: document.documentElement.clientWidth,
      openEyeVideoId: '',
      openEyeApi: 'http://baobab.kaiyanapp.com/api/v1/feed',
      nextPageUrl: '',
      currentVideoUrl: '',
      openEyeBaseUrl: 'http://baobab.kaiyanapp.com/api/v1/playUrl?editionType=default&source=ucloud&vid='
      // openEyeApi: 'http://baobab.kaiyanapp.com/api/v2/feed?num=2&udid=26868b32e808498db32fd51fb422d00175e179df&vc=83'
    }
  },
  ready: function () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  },
  created () {
    // console.log('LifeCircle : created');
    // console.log('LifeCircle created : ' + this.openEyeUrl);
    // console.log('LifeCircle created url : ' + this.$route.params.url);
    this.openEyeVideoId = this.$route.params.videoId
    console.log('openEyeVideoId : ' + this.openEyeVideoId);
    this.getOpenEyeList()

    navigator.userAgent
  },
  computed: {},
  mounted () {
  },
  attached () {
  },
  methods: {
    onVideoPlay() {
      var videoCover = document.getElementById("videocover")
      videoCover.style.visibility = "hidden"

      if (typeof(this.openEyeVideoId) == "undefined") {
        this.openEyeVideoId = this.videoList[0].id;
      }
      this.$router.replace({ path: '/home/' + this.openEyeVideoId })
    },
    changeCurrentVideo(selectedVideoId) {
      this.openEyeVideoId = selectedVideoId
      this.$router.replace({ path: '/home/' + selectedVideoId })
    },
    playVideoFromVideoId() {

      this.$nextTick(function () {
        if (this.isNumber(this.openEyeVideoId)) {
          console.log('isNumber : true');
          console.log('currentVideoUrl : ' + this.openEyeBaseUrl + this.openEyeVideoId);
          this.playVideo(this.openEyeBaseUrl + this.openEyeVideoId)
        } else {
          console.log('isNumber : false');
        }
      })
    },
    isNumber(numberStr) {
      if (numberStr!=null && numberStr!="") {
       return !isNaN(numberStr);
      }
   return false;
    },
    loadMore() {
      this.openEyeApi = this.nextPageUrl
      this.getOpenEyeList()
    },
    showCover() {
      var videoCover = document.getElementById("videocover")
      videoCover.style.visibility = "visible"
    },
    playDefaultVideo() {
      var vid = document.getElementById("video_player")
      vid.play()
    },
    handleResize (event) {
      this.fullWidth = document.documentElement.clientHeight
    },
    changeVideoTitle: function(val, oldVal) {
      var videoTitle = document.getElementById("video_title")
      videoTitle.textContent = this.videoList[val].title

      var videoDescription = document.getElementById("video_description")
      videoDescription.textContent = this.videoList[val].description


      //需要在合适的时机控制宽度
      if (this.fullWidth > 800) { //移动端
        var viewPager = document.getElementById("view_pager")
        var child = viewPager.children[0]
        child.style.height = "220px";
      } else if (this.fullWidth > 600) {
        var viewPager = document.getElementById("view_pager")
        var child = viewPager.children[0]
        child.style.height = "160px";
      } else {
        var viewPager = document.getElementById("view_pager")
        var child = viewPager.children[0]
        child.style.height = "100px"

      }
    },
    isToday: function (date){
        var todaysDate = new Date();
        if(date.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)){
            return true;
        } else {
            return false;
        }
    },
    playVideo: function (url) {
      var vid = document.getElementById("video_player")
      vid.src = url
      vid.play()
    },
    getOpenEyeList: function() {
        this.$http.options.emulateJSON = true;
        this.$http.get(this.openEyeApi)
            .then((response) => {
              emulateJSON: true

              var tempVideoList = [];
              this.getResult = true
              this.message = ''
              this.nextPageUrl = response.data.nextPageUrl

              var currentDate = new Date()
              let currentHour = currentDate.getHours()

              var videoListDate = new Date(response.data.dailyList[0].date)
              if (this.isToday(videoListDate)) {
                for (let data of response.data.dailyList[0].videoList) {
                  if (currentHour >= 23 || currentHour < 9) {//显示晚间视频
                    var videoDate = new Date(data.date)
                    let videoHour = videoDate.getHours()

                    if (videoHour == 21) {//显示晚间视频
                      tempVideoList = tempVideoList.concat(data);
                    }
                  } else {//显示日间视频
                    var videoDate = new Date(data.date)
                    let videoHour = videoDate.getHours()
                    if (videoHour == 9) {
                      tempVideoList = tempVideoList.concat(data);
                    }
                  }
                }
                this.videoList = tempVideoList
              } else {
                this.videoList = response.data.dailyList[0].videoList
              }

              // let videoList = []
              // for (let data of response.data.dailyList[0].videoList) {
              //   list.push({
              //       playUrl: data.playUrl
              //   })
              // }
              // this.videoList = videoList
            })
            .catch(function(response) {
                console.log(response)
            })
          }
  },
  components: {},
  beforeRouteEnter (to, from, next) {
    console.log('LifeCircle : beforeRouteEnter');
    console.log(from);
    console.log(to);
    console.log('to param url : ' + to.params.videoId)
    next(vm => {
      vm.openEyeVideoId = to.params.videoId
      // console.log('route next : ' + vm.openEyeVideoId)
      // vm.playVideo(vm.openEyeUrl)
    })
  },
  watch: {
    '$route' (to, from) {
      console.log(from);
      console.log(to.params.videoId);
    },
    $route () {
      console.log('param url : ' + this.$route.params.videoId);
    }
  }
}
</script>

<style lang="css">
  ul {
    list-style:none;
    padding-left:0;
    float: left;
  }
  #container {
    position: relative;
  }
  #videocover {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

  .root_view {
    max-width: 1000px;
    margin: 0 auto;
  }
  .video_card {
    width: 100%;
    margin: auto;
  }
  .video-list .video {
    background-position: 50%;
    background-size: cover;
    color: #000000;
    cursor: pointer;
    height: 450px;
    position: relative;
  }
  .video {
    width: 100%;
  }

  .el-carousel {
    max-width: 960px;
    width: 100%;
    margin: auto;
  }
  .el-carousel__indicators {
    float: none;
  }
  .el-carousel__container {
    height: 200px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 220px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .img_banner {
    width: 100%;
  }
  .button_load_more {
    background: #333333;
    font-style: normal;
    border: none;
    color: #eee;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 6px;
    padding-bottom: 6px;
    margin-bottom: 26px;
    margin-top: 20px;
  }
</style>
