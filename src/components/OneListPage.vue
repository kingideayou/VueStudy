<template lang="html">
  <div id="container" class="root_content">
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
    <ul>
      <li class="card" v-for="entry in entryList">
        <a target="_blank" :href="entry.hp_img_url"><img class="img_one" :src="entry.hp_img_url"></img></a>
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

    <div v-if="entryList.length != 0">
      <button class="button_load_more" @click="getHomePageListByMonth(true)">查看更多</button>
    </div>

    <div id="folat_menu" class="folat_menu" v-on:click="scroll2Top">
      <span class="icon-arrow-up icon-muted"></span>
    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      getResult: true,
      entryList: [],
      gridData: [],
      date: new Date(),
      message: '点击网络请求获取数据',
      apiUrl: 'http://v3.wufazhuce.com:8000/api/hp/idlist/0?',
      apiArticleByMonthUrl: 'http://v3.wufazhuce.com:8000/api/hp/bymonth'
      //http://v3.wufazhuce.com:8000/api/hp/bymonth/2016-09-01%2000:00:00
    }
  },

  created () {
    this.getHomePageListByMonth(false)
    document.title = 'One - 一个就够了'
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
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
      handleScroll: function() {
        var windowHeight = document.documentElement.clientHeight
        if (window.scrollY > windowHeight * 2) {
          document.getElementById('folat_menu').style.display = 'block';
        } else {
          document.getElementById('folat_menu').style.display = 'none';
        }
      },
      scroll2Top: function() {
        window.scrollTo(0, 0)
      },
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
      getHomePageListByMonth: function(loadMore) {
        this.date.setDate(1)
        if (loadMore) {
          this.date.setMonth(this.date.getMonth() - 1)
        }
        console.log('date: ' + this.date)
          this.$http.get(this.apiArticleByMonthUrl + "/" + this.date)
              .then((response) => {
                console.log("VueResourceDemo getEntryIdList run")
                emulateJSON: true
                if (response.data.res == 0) {
                  this.getResult = true
                  this.entryList = this.entryList.concat(response.data.data);
                  this.message = ''

                  // let entryList = []
                  // for (let data of response.data.data) {
                  //     list.push({
                  //         hp_img_url: data.hp_img_url,
                  //         hp_content: data.hp_content,
                  //         hp_makettime: data.hp_makettime,
                  //         hp_title: data.hp_title,
                  //         hp_author: data.hp_author
                  //     })
                  // }
                  // this.entryList = entryList

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

<style src="../assets/css/font-awesome.min.css"></style>
<style lang="css">

  .folat_menu {
    background: #000;
    position: fixed;
    top: 90%;
    left: 90%;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 2px;
    padding-bottom: 2px;
    display: none;
  }

  .root_content {
    max-width: 680px;
    margin: 0 auto;
  }

  .hp_content {
    max-width:680px;
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
    background: #fafaea;
    border-radius: 10px;
    margin-top: 26px;
    margin-bottom: 26px;
    box-shadow: 0 0 .625rem .08rem rgba(0,0,0,.05);
    -webkit-box-shadow: 3px 3px 7px rgba(0,0,0,0.3);
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
  }

  .img_one {
    display: block;
    max-width:800px;
    max-height:1200px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    border-radius: 10px 10px 0 0;
  }

  ul {
    float: left;
    list-style:none;
    padding-left:0;
  }

</style>
