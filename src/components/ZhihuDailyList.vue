<template lang="html">

  <div>

    <ul>
      <li v-for="story in stories">
        <daily-card :data="story"></daily-card>
      </li>
    </ul>

    <!-- <button class="button_load_more" @click="getHomePageListByMonth(true)">查看更多</button> -->

  </div>

</template>

<script>
import DailyCard from './ZhihuDailyCard.vue'
export default {
  data () {
    return {
      stories: [],
      zhihuDailyApi: 'http://news-at.zhihu.com/api/4/news/latest'
    }
  },
  created() {
    this.getDailyList()
  },
  computed: {},
  mounted () {},
  methods: {
    getDailyList() {
      this.$http.options.emulateJSON = true;
      this.$http.get(this.$Api(this.zhihuDailyApi))
          .then((response) => {
            emulateJSON: true
            console.log(response.data);
            // var entryList = JSON.parse(response.data.data.jsonstories)
            this.stories = response.data.data.stories
            console.log(this.stories);
            // console.log(response.data.stories)
          })
          .catch(function(response) {
              console.log(response)
          })
    }
  },
  components: {
    DailyCard
  }
}
</script>

<style lang="css">
</style>
