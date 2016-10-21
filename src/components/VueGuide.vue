<template>
  <div class="vue_1">
    <span>Message: {{ msg }}</span>
    <br/><br/>
    <span v-bind:title="message">
      Hover your mouse over me for a few seconds to see my dynamically bound title!
    </span>
    <br><br>
    <p v-if="seen">
      Now you see me.
    </p>
    <br><br>
    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>
    <br><br>
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
    <br><br>
    <p>{{ message }}</p>
    <input v-model="message">
    <br><br>
    <ul>
      <todo-item></todo-item>
    </ul>
    <br><br>
    <ol>
      <todo v-for="todo in todos" v-bind:todo="todo"></todo>
    </ol>
  </div>
</template>

<script>

export default {
  name: 'vue_1',
  data () {
      return {
        msg: 'Hello World.',
        message: 'You loaded this page on ' + new Date(),
        seen: true,
        todos: [
          { text: 'Learn JS'},
          { text: 'Learn Vue'},
          { text: 'Build something awesome'}
        ]
      }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  },
  components: {
  }
}

</script>
