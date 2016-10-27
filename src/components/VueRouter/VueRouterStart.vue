<template lang="html">

  <div>
    <p>
      <!-- 使用 router-link 组件导航 -->
      <!-- 传入 to 属性指定连接 -->
      <!-- <router-link> 默认被渲染成 `<a>` 标签 -->
      <!-- <router-link to="/page_1">Go to Foo</router-link> -->
      <!-- <router-link to="/page_2">Go to Bar</router-link> -->

      <router-link to="/home">Home</router-link>
      <router-link to="/bar">OtherPage</router-link>
      <router-link to="/form">VueForm</router-link>
      <router-link to="/user/NeXT">NeXT</router-link>
      <!-- <br><br> -->
      <!-- <router-link to="/user/NeXT">NeXT</router-link> -->
      <!-- <router-link to="/user/盖世英雄">盖世英雄</router-link> -->
      <!-- <br><br> -->
      <!-- <router-link to="/user/盖世英雄/profile">个人主页</router-link> -->
      <!-- <router-link to="/user/盖世英雄/posts">文章列表</router-link> -->
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件渲染在这里 -->
    <router-view></router-view>

  </div>

</template>

<script>

export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
  div {
  }
</style>
