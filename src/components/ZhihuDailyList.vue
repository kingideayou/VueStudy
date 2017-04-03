<template lang="html">

  <div class="daily_root">
    <div class="daily_container">

      <el-row :gutter="16">
        <el-col class="daily_item" v-for="story in stories" :span="6">
          <daily-card :data="story"></daily-card>
        </el-col>
      </el-row>

      <!-- <ul>
        <li class="daily_container" v-for="story in stories">
          <daily-card :data="story"></daily-card>
        </li>
      </ul> -->

      <!-- <button class="button_load_more" @click="getHomePageListByMonth(true)">查看更多</button> -->

    </div>

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
            this.stories = response.data.stories
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
  .daily_root {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .daily_container {
    max-width: 860px;
  }
  .daily_item {
    margin-top: 16px;
  }
  el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
