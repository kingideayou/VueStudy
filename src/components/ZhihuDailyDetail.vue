<template lang="html">

  <article class="article">
    <div class="news-title">
      <h2> {{ title }}</h2>
    </div>
    <div class="news-content" v-html="news.body"></div>
  </article>

</template>

<script>
export default {
  data () {
    return {
      hasCoverImage: false,
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
              if (this.news.images && this.news.images.length) {
                this.$covImg(this, this.news.images[0], cloudSrc =>  {
                    this.coverImage = cloudSrc
                    this.hasCoverImage = true
                })
              }
              this.$nextTick(this.loadImg)
          })
          .catch(console.log)
      },
      loadImg () {
          let imgs = this.$el.getElementsByTagName('img')
          for (let img of imgs) {
              img.onerror = () => {
                  this.$covImg(this, img.src, cloudSrc => {
                      img.src = cloudSrc
                  })
              }
          }
      },
      newsContent (body) {
          const imgReg = /<img\s[^>]*?src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/g
          const srcReg = /htt(p|ps):\/\/.*?(png|jpg|jpeg|gif|webp|svg)/
          const imgs = body.match(imgReg)
          imgs.forEach(img => {
              let imgSrc = img.match(srcReg)[0]
              this.$covImg(this, imgSrc, cloudSrc => {
                  body = body.replace(imgSrc, cloudSrc)
              })
          })

          return body
      }
  },
  components: {}
}
</script>

<style src="../assets/zhihudaily.css"></style>
<style lang="css">
  .article {
    margin: auto;
    max-width: 800px;
    width: 80rem;
    box-shadow: 0 0 .625rem .08rem rgba(0,0,0,.05);
  }
  .news-content p > img {
      width: 100%;
  }
  .main-wrap {
      max-width: 80rem;
  }
  .news-title {
    color: #333;
    padding-top: 30px;
    padding-bottom: 20px;
    margin: auto;
    box-sizing: border-box;
  }
  @media all and (max-width: 768px) {
    .article {
      max-width: 690px;
    }
    .news-content {
        width: 100%;
    }
    .news-title {
        width: 100%;
        left: 0;
        box-sizing: border-box;
    }
  }
  @media all and (max-width: 520px) {
    .article {
      width: 100%;
    }
  }
</style>
