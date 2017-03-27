import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  router
})

//字符串
// router.push('home')
// 对象
// router.push({ path: 'home' })
// 命名的路由
// router.push({ name: 'user', params: { userId: 123 }})
// 带查询参数，变成 /register?plan=private
// router.push({ path: 'register', query: { plan: 'private' }})

// 在浏览器记录中前进一步，等同于 history.forward()
// router.go(1)
// 后退一步记录，等同于 history.back()
// router.go(-1)
// 前进 3 步记录
// router.go(3)
// 如果 history 记录不够用，那就默默地失败呗
// router.go(-100)
// router.go(100)

/*
  require js file
*/
// require('./url');
// require('./http');
// require('./resource');
// require('./promise');
