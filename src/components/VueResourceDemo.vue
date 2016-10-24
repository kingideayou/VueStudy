<template lang="html">
  <div class="root_content">
    <!--
    <button @click="getEntryIdList">网络请求</button>
    <p v-if="getResult && gridData.length > 0">
      {{ gridData }}
    </p>
    <p v-else>
      {{ message }}
    </p>
    <br><br>
    -->
    <button @click="getHomePageListByMonth">获取本月文章</button>
    <ul>
      <li class="card" v-for="entry in entryList">
        <a target="_blank" :href="entry.hp_img_url"><img :src="entry.hp_img_url"></img></a>
        <div class="hp_content">
          <span>{{ entry.hp_content}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      getResult: true,
      entryList: [],
      gridData: [],
      message: '点击网络请求获取数据',
      apiUrl: 'http://v3.wufazhuce.com:8000/api/hp/idlist/0?',
      apiArticleByMonthUrl: 'http://v3.wufazhuce.com:8000/api/hp/bymonth'
      //http://v3.wufazhuce.com:8000/api/hp/bymonth/2016-09-01%2000:00:00
    }
  },
  ready: function() {
      this.getEntryIdList()
  },
  methods: {
      getEntryIdList: function() {
          this.$http.get(this.apiUrl)
              .then((response) => {
                emulateJSON: true
                if (response.data.res == 0) {
                  this.getResult = true
                  this.gridData = response.data.data
                  this.message = ''
                } else {
                  this.getResult = false
                  this.message = '艾玛，啥也没找着...'
                }
              })
              .catch(function(response) {
                  console.log(response)
              })
      },
      getHomePageListByMonth: function() {
          this.$http.get(this.apiArticleByMonthUrl + "/" + new Date().toJSON().slice(0, 10))
              .then((response) => {
                emulateJSON: true
                if (response.data.res == 0) {
                  this.getResult = true
                  this.entryList = response.data.data
                  this.message = ''

                  let entryList = []
                  for (let data of response.data.data) {
                      list.push({
                          hp_img_url: data.hp_img_url,
                          hp_content: data.hp_content
                      })
                  }
                  this.entryList = entryList

                } else {
                  this.getResult = false
                  this.message = '艾玛，啥也没找着...'
                }
              })
              .catch(function(response) {
                  console.log(response)
              })
      }
  },
  computed: {},
  mounted () {},
  components: {}
}
</script>

<style lang="css">

  .root_content {
    max-width: 800px;
    margin: 0 auto;
  }

  .hp_content {
    max-width:600px;
    min-height:80px;
    line-height: 100px;
    text-align: center;
    text-align: center;
    vertical-align: middle;
    margin: 0 auto;
  }

  .card {
    position: relative;
    float: left;
    margin-right: 10px;
    background: #fafafa;
    border-radius: 10px;
    margin-top: 26px;
    margin-bottom: 26px;
    -webkit-box-shadow: 3px 3px 7px rgba(0,0,0,0.3);
    box-shadow: 3px 3px 7px rgba(0,0,0,0,3);
  }

  span {
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
  }

  img {
    display: block;
    max-width:800px;
    max-height:600px;
    width: auto;
    height: auto;
    margin: 0 auto;
    border-radius: 10px 10px 0 0;
  }

</style>
