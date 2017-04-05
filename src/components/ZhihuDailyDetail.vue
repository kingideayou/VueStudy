<template lang="html">

  <article>
    <h2>
      {{ title }}
    </h2>
    <div class="news-content" v-html="news.body"></div>
  </article>

</template>

<script>
export default {
  data () {
    return {
      news: {},
      title: ''
    }
  },
  created () {
    this.fetchNews(this.$route.params.id)
  },
  computed: {},
  mounted () {},
  methods: {
    fetchNews (id) {
      this.$http.get(this.$Api(`http://news-at.zhihu.com/api/4/news/${id}`))
          .then(response => {
            console.log('知乎日报详情页');
            console.log(response.data);
            this.news = response.data
            this.title = response.data.title
              // if (this.news.images && this.news.images.length) {
              //     this.$covImg(this, this.news.images[0], cloudSrc => {
              //         this.coverImage = cloudSrc
              //         this.hasCoverImage = true
              //     })
              // }
              // this.$nextTick(this.loadImg)
          })
          .catch(console.log)
      }
  },
  components: {}
}
</script>

<style src="../assets/zhihudaily.css"></style>
<style lang="css">
  .news-content {
      max-width: 800px;
      width: 80rem;
      margin: auto;
      box-shadow: 0 0 .625rem .08rem rgba(0,0,0,.05);
  }
  .news-content p > img {
      width: 100%;
  }
  .main-wrap {
      max-width: 80rem;
  }
  @media all and (max-width: 768px) {
    .news-content {
        width: 100%;
    }
    .news-title {
        width: 100%;
        left: 0;
        padding: 1rem;
        box-sizing: border-box;
    }
  }
</style>
