<template lang="html">
  <div>
    <h2>列表渲染</h2>
    <h3>基本用法</h3>
    <li v-for="item in items">{{ item.message }}</li>
    <br><br>

    <h3>父作用域及索引</h3>
    <ul>
      <li v-for="(item, index) in items">
        {{ parentMessage }} - {{ index }} - {{item.message}}
      </li>
    </ul>
    <br><br>

    <h3>对象迭代 v-for</h3>
    <ul>
      <li v-for="value in object">{{ value }}</li>
    </ul>
    <br>
    <div v-for="(value, key) in object">
      {{ key }} : {{ value }}
    </div>
    <br>
    <div v-for="(value, key, index) in object">
      {{ index }}. {{ key }} : {{ value }}
    </div>
    <br><br>
    <h3>整数迭代 v-for</h3>
    <div>
      <span v-for="n in 10">{{ n }}</span>
    </div>
    <br><br>
    <h3>组件 v-for</h3>
    <input
      v-model="newTodoText"
      v-on:keyup.enter="addNewTodo"
      placeholder="Add a todo">
    <ul>
      <li
        is="TodoComponent"
        v-for="(todo, index) in todos"
        v-bind:title="todo"
        v-on:remove="removeTodo(index)"
      ></li>
    </ul>
    <br><br><br>
    <h2>key</h2>
    <div v-for="item in items" :key="item.id">
      {{ item.message }}
    </div>
    <br><br>
    <h2>数组更新检测</h2>
    <h3>突变方法</h3>
    <ul>
      <li v-for="method in methods">{{ method }}</li>
    </ul>
    <h3>显示过滤/排序结果</h3>
    <ul>
      <li v-for="value in evenNumbers">{{ value }}</li>
    </ul>
    <h4>方法计算（低效）</h4>
    <ul>
      <li v-for="value in even(numbers)">{{ value }}</li>
    </ul>
  </div>
</template>

<script>

import TodoComponent from './TodoComponent'

export default {
  data () {
    return {
      items: [
        {message: 'foo'},
        {message: 'Bar'}
      ],
      parentMessage: 'Parent',
      object: {
        FirstName: 'Zhang',
        LastName: 'Zilin',
        Age: '18'
      },
      newTodoText: '',
      todos: [
        'Do the dishes',
        'Take out the trash',
        'Mow the lawn'
      ],
      methods: [
        'push()',
        'pop()',
        'shift()',
        'unshift()',
        'splice()',
        'sort()',
        'reverse()'
      ],
      numbers: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
      ]
    }
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function(number){
        return number % 2 === 0
      })
    }
  },
  mounted () {},
  methods: {
    addNewTodo: function () {
      if (this.newTodoText == '') {
        return
      }
      this.todos.push(this.newTodoText)
      this.newTodoText = ''
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1)
    },
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
    })
  }
  },
  components: {
    TodoComponent
  }
}
</script>

<style lang="css">
</style>
