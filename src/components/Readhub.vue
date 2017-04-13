<template lang="html">

  <div class="root_content">
    <ul>
      <li class="read_card" v-for="read in readList">
        <a class="card_item" target="_blank" :href="read.newsArray[0].url">
          <div class="read_title">{{ read.title}}</div>
          <div v-if="read.summary" class="read_desc">
            {{ read.summary}}
          </div>
        </a>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  data () {
    return {
      apiUrl: 'https://api.readhub.me/topic?pageSize=20',
      readList: []
    }
  },
  created() {
    this.getReadList()
    document.title = '科技资讯 - 一个就够了'
  },
  computed: {},
  mounted () {},
  methods: {
    getReadList() {
      this.$http.options.emulateJSON = true;
      console.log('url : ' + this.apiUrl);
      this.$http.get(this.$Api(this.apiUrl))
          .then((response) => {
            emulateJSON: true
            console.log(response.data.data);
            this.readList = response.data.data
          })
          .catch(function(response) {
              console.log(response)
          })
    }
  },
  components: {}
}
</script>

<style lang="css">
  .read_desc {
    margin-top: 10px;
    color: #565656;
    padding-left: 16px;
    padding-right: 16px;
  }
  .read_title {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.26em;
  }
  .card_item {
    color: #333;
    padding: 20px;
  }
  .read_card {
    width: 100%;
    margin-right: 10px;
    background: #ffffff;
    border-radius: 0px;
    margin-bottom: 38px;
    box-shadow: 0 0 .455rem .08rem rgba(0,0,0,.05);
  }
</style>
