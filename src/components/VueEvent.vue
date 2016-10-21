<template lang="html">
  <div>
    <h2>事件处理器</h2>
    <h3>监听事件</h3>
    <button v-on:click="counter += 1">+ 1</button>
    <p>
      这个按钮被点击了 {{ counter }} 下
    </p>
    <br><br>
    <h3>方法事件处理器</h3>
    <button v-on:click="greet">Greet</button>
    <h3>内联处理器方法</h3>
    <button v-on:click="say('hi')">Say hi</button>
    <button v-on:click="say(' 啥？')">Say what</button>
    <br>
    <button v-on:click="warn('Form cannot be submitted yet.', $event)">Submit</button>
    <br><br><br>
    <h3>事件修饰符</h3>
    <a v-on:click.stop="doThis">阻止单击事件冒泡</a>
    <form v-on:submit.prevent="onSubmit">提交事件不再重载页面</form>
    <a v-on:click.stop.prevent="doThat">修饰符可以串联</a>
    <form v-on:submit.prevent>只有修饰符</form>
    <div v-on:click.capture="doThis">添加时间侦听器时使用 capture 模式</div>
    <div v-on:click.self="doThat">只当时间在该元素本身（而不是子元素）触发时回调</div>
    <br><br>
    <h3>按键修饰符</h3>
    <p>
      只有在 keyCode 为 enter 时调用 vm.submit()
    </p>
    <input v-on:keyup.13="submit">
    <!-- 同上 -->
    <input v-on:keyup.enter="submit">
    <!-- 缩写语法 -->
    <input @keyup.enter="submit">
    <h4>按键别名</h4>
    <ul>
      <li v-for="name in names">{{ name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      counter: 0,
      name: 'Vue.js',
      names: [
        'enter',
        'tab',
        'delete(捕获『删除』和『退格』键)',
        'esc',
        'space',
        'up',
        'down',
        'left',
        'right'
      ]
    }
  },
  computed: {},
  mounted () {},
  methods: {
    greet: function (event) {
      alert('Hello ' + this.name + '!')
      //'event' 是原声 DOM 事件
      alert(event.target.tagName)
    },
    say: function (message) {
      alert(message)
    },
    warn: function (message, event) {
      if (event) event.preventDefault()
      alert(message)
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
