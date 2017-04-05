<template lang="html">

  <div class="daily_card">
    <router-link :to="{ path: 'DailyDetail/'+data.id}">
      <div class="image">
        <img  class="img_daily_card" :src="cloudSrc" alt="" />
        <h4>
          <div class="title">
            {{ data.title }}
          </div>
        </h4>
      </div>
      <!-- <span>
        ga_prefix:{{ data.ga_prefix }}
      </span><br>
      <span>
        id:{{ data.id }}
      </span> -->
    </router-link>

  </div>

</template>

<script>
import { WAIT_IMG } from '../constants'
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      cloudSrc: 'http://a1418.phobos.apple.com/us/r1000/060/Purple/v4/fc/5f/b4/fc5fb47c-9948-f15e-93f8-8d7886fccb02/mzl.iytuxepq.png'
      // cloudSrc: WAIT_IMG
    }
  },
  created () {
    this.$covImg(this, this.data.images[0], cloudSrc => {
                this.cloudSrc = cloudSrc
            })
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
  .daily_card {
    background: #666;
    /*border-radius: 10px;*/
    box-shadow: 0 0 .625rem .08rem rgba(0,0,0,.03);
    -webkit-box-shadow: 2px 2px 6px rgba(0,0,0,0.12);
  }
  .img_daily_card {
    width: 100%;
    height: auto;
    margin: 0 auto;
  }
  .image {
    position: relative;
    width: 100%;
    height: 12em;
  }
  h4 {
    position: absolute;
    background: rgb(0, 0, 0); /* fallback color */
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    margin: 0;
    padding: 0, 5px;
    top: 145px;
  }
  .title {
    line-height: 1.5em;
    height: 3em;       /* height is 2x line-height, so two lines will display */
    overflow: hidden;  /* prevents extra lines from being visible */
    padding: .3em;
    display: block;
  }

  /*
  @media (-webkit-min-device-pixel-ratio: 0) {
    .title {
        /*display: -webkit-box;*/
        /*-webkit-line-clamp: 2; /* number of lines to show */
        /*-webkit-box-orient: vertical;
    }
}*/
</style>
