<template lang="html">

  <div class="root_view">

    <div id="container">
      <div id="videocover"  v-on:click='playDefaultVideo'>&nbsp;</div>
        <video
            id="video_player"
            class="video"
            controls="controls"
            preload="true"
            v-on:pause='showCover'
            v-on:ended='showCover'
            :src="videoList[0].playUrl">
        </video>
    </div>


    <h3 id="video_title">{{videoList[0].title}}</h3>

    <el-carousel id="view_pager" v-on:change='changeVideoTitle' :interval="3000" type="card" height="260px" arrow="never">
      <el-carousel-item v-for="video in videoList">
        <img :src="video.coverForFeed" v-on:click="playVideo(video.playUrl)"></img>
      </el-carousel-item>
    </el-carousel>

  </div>
</template>

<script>



export default {
  data () {
    return {
      value: [20, 50],
      videoList: [],
      fullWidth: document.documentElement.clientWidth,
      openEyeApi: 'http://baobab.kaiyanapp.com/api/v1/feed'
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
    this.getOpenEyeListToday()
  },
  computed: {},
  mounted () {
  },
  attached () {
  },
  methods: {
    showCover() {
      var videoCover = document.getElementById("videocover")
      videoCover.style.visibility = "visible"
    },
    playDefaultVideo() {
      var vid = document.getElementById("video_player")
      vid.play()

      var videoCover = document.getElementById("videocover")
      videoCover.style.visibility = "hidden"
    },
    handleResize (event) {
      this.fullWidth = document.documentElement.clientHeight
      console.log('window width : ' + this.fullWidth);
    },
    changeVideoTitle: function(val, oldVal) {
      var videoTitle = document.getElementById("video_title")
      videoTitle.textContent = this.videoList[val].title

      //需要在合适的时机控制宽度
      if (this.fullWidth > 800) { //移动端
        var viewPager = document.getElementById("view_pager")
        var child = viewPager.children[0]
        child.style.height = "220px";
      } else {
        var viewPager = document.getElementById("view_pager")
        var child = viewPager.children[0]
        child.style.height = "100px"

      }
    },
    playVideo: function (url) {
      var vid = document.getElementById("video_player")
      vid.src = url
      vid.play()
    },
    getOpenEyeListToday: function() {
        this.$http.options.emulateJSON = true;
        this.$http.get(this.openEyeApi)
            .then((response) => {
              emulateJSON: true
              this.videoList = response.data.dailyList[0].videoList
              this.getResult = true
              this.message = ''

              let videoList = []
              for (let data of response.data.dailyList[0].videoList) {
                list.push({
                    playUrl: data.playUrl
                })
              }
              this.videoList = videoList
            })
            .catch(function(response) {
                console.log(response)
            })
          }
  },
  components: {}
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
</style>
