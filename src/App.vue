<template>
  <div id="app">

    <component v-bind:is="currentView"></component>
    <!-- VueResource -->
    <!-- <OneListPage></OneListPage> -->

    <!-- 动画 -->
    <!--
    <VueTransition></VueTransition>
  -->

    <!-- 表单 -->
    <!--
    <VueForm></VueForm>
    -->

    <!-- 事件 -->
    <!--
    <VueEvent></VueEvent>
    -->

    <!-- 列表 -->
    <!--
    <VueList></VueList>
    -->

    <!-- 条件判断 -->
    <!--
    <VueCondition></VueCondition>
    -->

    <!--
    <VueGuide></VueGuide>
    -->

    <!--
    <h1>{{title}}</h1>
    <input v-model='newItem' @keyup.enter="addNewItem">
    <ul>
      <li v-for="item in items" v-bind:class="{finished: item.isFinished}"
            @click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
    -->
    <!-- 组件 -->
    <!--
    <ComponentA msgFromFather='father teach you'
        v-on:child-tell-me-something='listenToMyBoy'></ComponentA>
    <p>子视图对我说：{{ childWords}}</p>
    -->

    <!--
    <img src="./assets/logo.png">
    <hello></hello>
    -->
  </div>
</template>

<script>
import Hello from './components/Hello'
import Store from './store'
import ComponentA from './components/componentA'
import VueGuide from './components/VueGuide'
import VueCondition from './components/VueCondition'
import VueList from './components/VueList'
import VueEvent from './components/VueEvent'
import VueForm from './components/VueForm'
import VueTransition from './components/VueTransition'
import OneListPage from './components/OneListPage'
import BlogVueRouter from './components/VueRouter/BlogVueRouter'

export default {
  data: function (){
    return {
      title: 'This is a todo list',
      childWords: '',
      //items: Store.fetch(),
      items: [
        {
          label: 'codding',
          isFinished: false
        },
        {
          label: 'walking',
          isFinished: true
        }
      ],
      liClass: 'thisIsLiClass',
      newItem: '',
      currentView: BlogVueRouter
    }
  },
  name: 'app',
  components: {
    ComponentA,
    Hello,
    VueGuide,
    VueCondition,
    VueList,
    VueEvent,
    VueForm,
    VueTransition,
    OneListPage,
    BlogVueRouter
  },
  watch: {
    items: {
      handler: function (items) {
        Store.save(items)
      },
      deep: true //单个 key 更改，也会更新列表
    }
  },
  /*
  events: {
    'child-tell-me-something': function (msg) {
      this.childWords = msg;
    }
  },
  */
  methods: {
    toggleFinish: function (item) {
      item.isFinished = !item.isFinished
    },
    addNewItem: function() {
      console.log(this.newItem)
      this.items.push(
        {
          label: this.newItem,
          isFinished: false
        }
      )
      this.newItem = ''
    },
    listenToMyBoy: function (msg) {
      this.childWords = 'child ...'
    }
  }
  /*
  name: 'app',
  components: {
    Hello
  }
  */
}
</script>

<style>

#app {
}

.finished {
  text-decoration: underline;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0, auto;
}

</style>
