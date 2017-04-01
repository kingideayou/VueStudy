<template lang="html">

  <div>
    <router-link :to="{ path: 'DailyDetail/'+data.id}">
      <img :src="cloudSrc" />
      <span>
        {{ data.title }}
      </span><br>
      <span>
        ga_prefix:{{ data.ga_prefix }}
      </span><br>
      <span>
        id:{{ data.id }}
      </span>
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
</style>
