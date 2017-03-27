<template lang="html">
  <div id="root-div">

    <el-carousel :interval="4000" type="card" height="220px" width="800px">
      <el-carousel-item v-for="item in 6">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <p>{{ doneTodos }}</p>
    <p>完成任务数：{{ doneTodosCount }}</p>
    <br><br><br>
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="plus10">+10</button>
      <button @click="incrementAsync">incrementAsync111</button>
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
    return {
      value1: true,
      value2: true
    }
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
  actions: {

    increment ({ commit }) {
      commit('increment')
    }
    /*
    increment (context) {
      context.commit('increment')
    }
    */
  },
  mounted () {},
  methods: {
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
    increment () {
      store.commit('increment')
    },
    decrement () {
        store.commit('decrement')
    },
    plus10 () {
      store.commit({
        type: "plus10",
        amount: 10
      }, { silent: true })
      /*
      store.commit({
        type: "plus10",
        amount: 10
      })
      */
      /*
      store.commit('plus10', {
        amount: 10
      })
      */
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
    increment (state) {
      state.count++
    },
    // increment: state => state.count++,
    decrement: state => state.count--,
    plus10 (state, addValue) {
      state.count += addValue.amount
    }
  }
})
</script>

<style>
  .root-div{
    max-width: 1200px;
    margin: 0 auto;
  }
  .el-carousel {
    max-width: 800px;
    width: 100%;
    margin: auto;
  }
  .el-carousel__indicators {
    float: none;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 220px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  ul {
    float: none;
  }
</style>
