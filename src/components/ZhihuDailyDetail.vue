<template lang="html">

  <article id="container" class="article">
    <div class="news-title">
      <h2 id="title"> {{ title }}</h2>
    </div>
    <div class="news-content" v-html="news.body"></div>
    <div id="share_button" class="share_button" v-on:click="clip">
      <span class="icon-arrow-up icon-muted"></span>
    </div>
  </article>

</template>

<script src="https://cdn.jsdelivr.net/clipboard.js/1.6.0/clipboard.min.js"></script>
<script>
import Clipboard from '../Clipboard.min.js'
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
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  computed: {},
  mounted () {},
  watch: {
    title: function (val, old) {
      document.title = val
    }
  },
  methods: {
    handleScroll() {
      var windowHeight = document.documentElement.clientHeight
      var container = this.$el.querySelector("#container");
      if (window.scrollY + windowHeight > document.body.scrollHeight / 2) {
        document.getElementById('share_button').style.display = 'block';
        // document.getElementById('share_button').slideDown("slow")
      } else {
        document.getElementById('share_button').style.display = 'none';
      }
    },
    clip() {
      window.scrollTo(0, 0)
      new Clipboard('.share_button', {
        text: function(trigger) {
            const title = document.getElementById("title").innerText
            return '「' + title + '」 ' + window.location.href + ' #One - 一个就够了#'
        }
      });
      this.$message({
          message: '链接已复制到剪贴板',
          type: 'success'
        });
    },
    fetchNews (id) {
      this.$http.get(this.$Api(`http://news-at.zhihu.com/api/4/news/${id}`))
          .then(response => {
            console.log('知乎日报详情页');
            console.log(response.data);
            this.news = response.data
            this.title = response.data.title
              if (this.news.images && this.news.images.length) {
                this.$covImg(this, this.news.images[0], cloudSrc =>  {
                    this.coverImage = cloudSrc
                    this.hasCoverImage = true
                })
              }
              this.$nextTick(this.updateOrganicationTextAlign)
              this.$nextTick(this.loadImg)
          })
          .catch(console.log)
      },
      loadImg () {
          var imgs = this.$el.getElementsByTagName('img')
          var parent = this
          for (var i = 0; i < imgs.length; i++) {
            var img = imgs[i]
            img.onerror = function() {
              var currentImg = this
              var currentSrc = this.src
              console.log('currentSrc : ' + currentSrc);
              parent.$covImg(parent, currentSrc, cloudSrc => {
                console.log('cloudSrc : ' + cloudSrc);
                  currentImg.src = cloudSrc
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
      },
      updateOrganicationTextAlign () {
         var organizations = document.getElementsByClassName("s1")
         if (organizations.length > 0) {
           var parentP = organizations[0].parentElement
           parentP.style.textAlign = 'center'
           console.log('parentP : ' + parentP);
         }
      }
  },
  components: {}
}
</script>

<style src="../assets/zhihudaily.css"></style>
<style src="../assets/css/font-awesome.min.css"></style>
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
  .content {
    text-align: left;
  }
  @media all and (max-width: 768px) {
    .article {
      max-width: 690px;
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
  .share_button {
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 2px;
    padding-bottom: 2px;
    background: #333;
    position: fixed;
    top: 92%;
    left: 90%;
    display: none;
    float: inherit;
    text-align: center;
  }
</style>
