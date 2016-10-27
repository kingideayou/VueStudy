import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = resolve => require(['./components/VueResourceDemo.vue'], resolve)
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const User = {
  template: '<div class="user"><h2>User: {{ $route.params.id }}</h2><router-view></router-view></div>',
  watch: {
    '$route' (to, from) {
      console.log(from);
      console.log(to);
    }
  }
}
const UserProfile = {
  template: '<div>UserProfile</div>'
}
const UserPosts = {
  template: '<div>UserPosts</div>'
}
const UserHome = {
  template: '<div>UserHomePage</div>'
}

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点在讨论嵌套路由。
const routes = [
  { path: '/home', component: Home },
  { path: '/bar', component: Bar },
   // 动态路径参数 以冒号开头
  { path: '/user/:id', component: User}
]
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数，不过先这么简单着吧。
const router = new VueRouter({
  // （缩写）相当于 routes: routes
  routes
  /*
  routes: [
    {
      path: '/user/:id', component: User,
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        { path: '', component: UserHome },
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
  */
})

export default router
