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
        <div class="hp_id_user">
          <span class="span_title">{{ entry.hp_title }}</span>
          <span class="span_make_time">{{ entry.hp_makettime }}</span>
        </div>
        <div class="hp_content">
          <span class="span_content">{{ entry.hp_content}}</span>
        </div>
        <div>
          <span class="auth">━━━━━   {{ entry.hp_author }}</span>
        </div>
      </li>
    </ul>

    <div class="folat_menu"></div>

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

  created () {
    this.getHomePageListByMonth()
  },
  /*
  beforeRouteEnter (to, from, next) {
    //在导航完成前获取数据
    console.log("VueReourceDemo run ...")
  },
  */
  ready: function() {
      // this.getEntryIdList()
  },
  methods: {
      getEntryIdList: function() {
          this.$http.get(this.apiUrl)
              .then((response) => {
                console.log("VueResourceDemo getEntryIdList run")
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
                console.log("VueResourceDemo getEntryIdList run")
                emulateJSON: true
                if (response.data.res == 0) {
                  this.getResult = true
                  this.entryList = response.data.data
                  this.message = ''

                  let entryList = []
                  for (let data of response.data.data) {
                      list.push({
                          hp_img_url: data.hp_img_url,
                          hp_content: data.hp_content,
                          hp_makettime: data.hp_makettime,
                          hp_title: data.hp_title,
                          hp_author: data.hp_author
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

  .folat_menu {
    width: 30px;
    height: 30px;
    background: #000;
    position: fixed;
    top: 50%;
    right: 0;
  }

  .root_content {
    max-width: 800px;
    margin: 0 auto;
  }

  .hp_content {
    max-width:800px;
    min-height:60px;
    line-height: 50px;
    text-align: center;
    text-align: center;
    vertical-align: middle;
    margin: 0 auto;
  }

  .card {
    position: relative;
    float: left;
    width: 100%;
    margin-right: 10px;
    background: #fafafa;
    border-radius: 10px;
    margin-top: 26px;
    margin-bottom: 26px;
    -webkit-box-shadow: 3px 3px 7px rgba(0,0,0,0.3);
    box-shadow: 3px 3px 7px rgba(0,0,0,0,3);
  }

  .span_content {
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    margin-top: 12px;
    padding: 10px 36px 10px 36px;
  }

  .span_title {
    float: left;
    margin-left: 40px;
    margin-top: 20px;
  }

  .span_make_time {
    float: right;
    margin-top: 20px;
    margin-right: 40px;
  }

  .auth {
    float:right;
    padding-bottom: 26px;
    margin-right: 40px;
    margin-top: 5px;
  }

  ul {
    float: left;
  }

  img {
    display: block;
    max-width:800px;
    max-height:600px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    border-radius: 10px 10px 0 0;
  }

  ul {
    list-style:none;
    padding-left:0;
  }

</style>
