import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = resolve => require(['./components/VueResourceDemo.vue'], resolve)
const VueForm = resolve => require(['./components/VueForm.vue'], resolve)
const VuexComponent = resolve => require(['./components/Vuex.vue'], resolve)
const VuexDemo = resolve => require(['./components/VuexDemo.vue'], resolve)
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
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/form', component: VueForm },
  { path: '/vuex', component: VuexDemo },
  // { path: '/vuex', component: VuexComponent },
   // 动态路径参数 以冒号开头
  { path: '/user/:id', component: User}
]
// 3. 创建 router 实例，然后传 `routes` 配置
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
