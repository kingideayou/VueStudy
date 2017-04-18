<template lang="html">

  <!-- v-bind:class="{ background: 'colorList[read.id % 6]'}"> -->
  <div class="root_content">
    <ul>
      <li class="read_card" v-for="read in readList">
        <a class="card_item" :href="read.url ? read.url : read.newsArray[0].url" target="_blank">
          <div id="read_title"
              class="read_title">{{ read.title}}</div>
          <div id="read_desc" v-if="read.summary"
              class="read_desc">
            {{ read.summary}}
          </div>
        </a>

      </li>
    </ul>
    <div v-if="readList.length != 0">
      <button class="button_load_more" @click="loadMore">更多资讯</button>
    </div>

    <div id="share_button" class="menu_selector" v-on:click="">
      <el-dropdown @command="changeListStyle">
        <el-button type="primary">
          {{ currentStyle == 'hot' ? '热门' : '最新' }}
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="hot">热门</el-dropdown-item>
          <el-dropdown-item command="new">最新</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

  </div>

</template>

<script>
export default {
  data () {
    return {
      apiUrl: 'https://api.readhub.me/topic?pageSize=20',
      apiUrlRecent: 'https://api.readhub.me/news?pageSize=20',
      readList: [],
      colorList: ["#6ABBED", "#7FC667", "#7277E7", "#EE6A6C", "#718FD5", "#74C5CB"],
      currentStyle: 'hot'
    }
  },
  created() {
    var sourceType = this.$route.params.sourceType
    if (sourceType) {
      if (sourceType == 'new') {
        this.currentStyle = 'new'
      } else {
        this.currentStyle = 'hot'
      }
    }
    this.getReadList()
    document.title = '科技资讯 - 一个就够了'
    console.log('created run');
  },
  computed: {},
  beforeMount() {
    console.log('before mounted run');
  },
  mounted () {
    console.log('mounted run');
  },
  beforeUpdate() {
    console.log('before update run');
  },
  methods: {
    changeListStyle: function(selectedStyle) {
      if (selectedStyle == this.currentStyle) {
        return;
      }
      this.$router.replace({ path: '/ReadHub/' + selectedStyle })
      this.currentStyle = selectedStyle
      this.getReadList()
      window.scrollTo(0, 0)
    },
    openUrl: function(read){
      var win = window.open(read.newsArray[0].url, '_blank')
      win.focus()
    },
    getReadList(url, needContact) {
      this.$http.options.emulateJSON = true;
      if (!url) {
        if (this.currentStyle == 'hot') {
          url = this.apiUrl
          console.log('url : ' + this.apiUrl);
        } else {
          url = this.apiUrlRecent
          console.log('url : ' + this.apiUrlRecent);
        }
      }
      this.$http.get(this.$Api(url))
          .then((response) => {
            emulateJSON: true
            console.log(response.data.data);
            if (needContact) {
              this.readList = this.uniquel(this.readList.concat(response.data.data))
            } else {
              this.readList = response.data.data
            }
          })
          .catch(function(response) {
              console.log(response)
          })
    },
    loadMore() {
      var requestUrl;
      if (this.currentStyle == 'hot') {
        var lastReadId = this.readList[this.readList.length-1].id;
        requestUrl = 'https://api.readhub.me/topic?lastCursor=' + lastReadId + '&pageSize=20';
      } else {
        var lastPublishTime = new Date(this.readList[this.readList.length-1].publishDate)
        var unixtime = lastPublishTime.getTime()
        requestUrl = 'https://api.readhub.me/news?lastCursor=' + unixtime + '&pageSize=20';
      }
      console.log('requestUrl : ' + requestUrl);
      this.getReadList(requestUrl, true)
    },
    uniquel(array) {
      var flags = [], output = [], l = array.length, i;
      for(i=0; i<l; i++) {
          if(flags[array[i].id]) continue;
          flags[array[i].id] = true;
          output.push(array[i]);
      }
      return output;
    }
  },
  components: {}
}
</script>

<style lang="css">
  .read_desc {
    margin-top: 10px;
    color: #767676;
    padding-left: 16px;
    padding-right: 16px;
  }
  .read_title {
    font-size: 1.26rem;
    font-weight: 500;
    line-height: 1.26em;
    padding-left: 26px;
    padding-right: 26px;
  }
  .card_item {
    color: #333;
    padding: 20px;
  }
  .read_card {
    width: 100%;
    margin-right: 10px;
    border-radius: 0px;
    margin-bottom: 38px;
    box-shadow: 0 0 .555rem .22rem rgba(0,0,0,.05);
  }

  .read_card:hover .read_title {
    font-size: 1.26rem;
    font-weight: 500;
    line-height: 1.26em;
    padding-left: 26px;
    padding-right: 26px;
    color: #FFC107;
  }

  .read_card:hover .read_desc {
    margin-top: 10px;
    color: #FFD54F;
    padding-left: 16px;
    padding-right: 16px;
  }

  .read_card:hover {
    width: 100%;
    margin-right: 10px;
    border-radius: 0px;
    margin-bottom: 38px;
    box-shadow: 0 0 .455rem .08rem rgba(0,0,0,.05);
    background: #333;
  }

  .button_load_more {
    margin-top: 0px;
    margin-bottom: 38px;
  }
  .menu_selector {
    position: fixed;
    top: 90%;
    left: 90%;
    width: 30px;
    height: 30px;
    background: #333;
  }

  .el-button.el-button--primary {
    color: #eee;
    background-color: #333;
    border-color: #333;
    border-radius: 0;
    font-size: .36rem;
}

</style>
