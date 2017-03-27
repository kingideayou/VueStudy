<template lang="html">

  <div class="root_view">
    <ul>
      <li class="video_card" v-for="video in videoList">
        <video
            class="video"
            controls="controls"
            preload="true"
            :src="video.playUrl">
        </video>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  data () {
    return {
      videoList: [],
      openEyeApi: 'http://baobab.kaiyanapp.com/api/v1/feed'
      // openEyeApi: 'http://baobab.kaiyanapp.com/api/v2/feed?num=2&udid=26868b32e808498db32fd51fb422d00175e179df&vc=83'
    }
  },
  created () {
    this.getOpenEyeListToday()
  },
  computed: {},
  mounted () {},
  methods: {
    getOpenEyeListToday: function() {
        this.$http.options.emulateJSON = true;
        this.$http.get(this.openEyeApi)
            .then((response) => {
              console.log("VueResourceDemo getOpenEyeList run")
              emulateJSON: true
              console.log(response.data.dailyList[0].videoList)
              this.videoList = response.data.dailyList[0].videoList
              this.getResult = true
              this.message = ''

              let videoList = []
              for (let data of response.data.dailyList[0].videoList) {
                console.log('test 111 : ' + data.playUrl)
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
  .root_view {
    max-width: 1200px;
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
</style>
