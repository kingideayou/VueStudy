<template lang="html">
  <div id="app">
    <p>{{ doneTodos }}</p>
    <p>完成任务数：{{ doneTodosCount }}</p>
    <br><br><br>
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>

import Vue from 'vue'
import Vuex from 'vuex'
// vuex 提供了独立的构建工具函数 Vuex.mapState
import { mapState } from 'vuex'

Vue.use(Vuex)

export default {
  data () {
    return {}
  },
  /*
  computed: mapState({
    // 箭头函数可以让代码非常简洁
    // count: state => state.count,
    count() {
      return store.state.count
    }//,
    // 传入字符串 'count' 等同于 `state => state.count`
    // countAlias: 'count'
    // 想访问局部状态，就必须借助于一个普通函数，函数中使用 `this` 获取局部状态
    // countPlusLocalState (state) {
      // return state.count + this.localCount
    // }
  }),
  */
  computed: {
    count() {
      return store.state.count
      // return this.$store.state.count
    },
    doneTodos() {
      return store.getters.doneTodos
    },
    doneTodosCount () {
      return store.getters.doneTodosCount
    }
  },
  mounted () {},
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
        store.commit('decrement')
    }
  },
  components: {}
}

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
})
</script>

<style lang="css">
</style>
