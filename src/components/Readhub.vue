<template lang="html">

  <div class="root_content">
    <ul>
      <li v-for="read in readList">
        <a class="card_item" target="_blank" :href="read.newsArray[0].url">
          <div>
            <span class="read_title">{{ read.title}}</span><br />
            <span class="read_desc">{{ read.summary}}</span>
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
      apiUrl: 'https://api.readhub.me/topic',
      readList: []
    }
  },
  created() {
    this.getReadList()
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
  }
  .read_title {
    background: #fff;
  }
  .card_item {
    color: #333;
    padding: 20px;
  }
</style>
