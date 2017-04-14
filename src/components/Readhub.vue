<template lang="html">

  <!-- v-bind:class="{ background: 'colorList[read.id % 6]'}"> -->
  <div class="root_content">
    <ul>
      <li class="read_card" v-for="read in readList"
            :class="{ read_card_hover: mouseOverItem == read }"
            v-on:mouseover="mouseOverItem = read"
            v-on:mouseleave="mouseOverItem = ''">

        <a class="card_item" target="_blank" :href="read.newsArray[0].url">
          <div id="read_title"
              class="read_title"
              :class="{ read_title_hover: mouseOverItem == read }">{{ read.title}}</div>
          <div id="read_desc" v-if="read.summary"
              class="read_desc"
              :class="{ read_desc_hover: mouseOverItem == read }">
            {{ read.summary}}
          </div>
        </a>

      </li>
    </ul>
    <div v-if="readList.length != 0">
      <button class="button_load_more" @click="loadMore">更多资讯</button>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      apiUrl: 'https://api.readhub.me/topic?pageSize=20',
      readList: [],
      colorList: ["#6ABBED", "#7FC667", "#7277E7", "#EE6A6C", "#718FD5", "#74C5CB"],
      mouseOverItem: ''
    }
  },
  created() {
    this.getReadList()
    document.title = '科技资讯 - 一个就够了'
  },
  computed: {},
  mounted () {},
  methods: {
    mouseOver: function(){
      document.getElementById("read_title").style.color = "#FF3F80"
      document.getElementById("read_desc").style.color = "#FFD54F"
        console.log('mouseOver');
    },
    mouseLeave: function(){
      document.getElementById("read_title").style.color = "#333"
      document.getElementById("read_desc").style.color = "#828a92"
        console.log('mouseLeave');
    },
    getReadList(url, needContact) {
      this.$http.options.emulateJSON = true;
      if (!url) {
        url = this.apiUrl
        console.log('url : ' + this.apiUrl);
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
      var lastReadId = this.readList[this.readList.length-1].id;
      var requestUrl = 'https://api.readhub.me/topic?lastCursor=' + lastReadId + '&pageSize=20';
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
  .read_desc_hover {
    margin-top: 10px;
    color: #FFD54F;
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
  .read_title_hover {
    font-size: 1.26rem;
    font-weight: 500;
    line-height: 1.26em;
    padding-left: 26px;
    padding-right: 26px;
    color: #f9c813;
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
  .read_card_hover {
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
</style>
