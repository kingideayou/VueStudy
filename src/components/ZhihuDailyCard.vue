<template lang="html">

  <div class="daily_card">
    <router-link :to="{ path: 'DailyDetail/'+data.id}">
      <img :src="cloudSrc" />
      <div class="title">
        {{ data.title }}
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
      cloudSrc: 'http://ac-dpeFsmm4.clouddn.com/23eff7f593286f6730be.jpg'
      // cloudSrc: WAIT_IMG
    }
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
    border-radius: 10px;
    box-shadow: 0 0 .625rem .08rem rgba(0,0,0,.03);
    -webkit-box-shadow: 2px 2px 6px rgba(0,0,0,0.3);
  }
  .title {
    line-height: 1.5em;
    height: 3em;       /* height is 2x line-height, so two lines will display */
    overflow: hidden;  /* prevents extra lines from being visible */
    padding: .5em;
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
