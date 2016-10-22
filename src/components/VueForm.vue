<template lang="html">

  <div>
    <h2>基础用法</h2>
    <h3>文本</h3>
    <input v-model="message" placeholder="edit me">
    <p>
      Message is : {{ message }}
    </p>
    <h3>多行文本</h3>
    <span>Multiline message is :</span>
    <p style="white-space: pre">
      {{ message }}
    </p>
    <br>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
    <h3>复选框</h3>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
    <h3>多个勾选框</h3>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
    <br><br>
    <h3>单选按钮</h3>
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{ picked }}</span>
    <br>
    <h3>列表选择</h3>
    <h4>单选列表</h4>
    <select v-model="selected">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
    <br>
    <h4>多选列表</h4>
    <select v-model="selectedArray" multiple>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <br>
    <span>SelectedArray: {{ selectedArray }}</span>
    <br>
    <h4>动态选项 v-for</h4>
    <select v-model="selected">
      <option v-for="option in options" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
    <span>Selected: {{ selected }}</span>
    <br><br>
    <h3>绑定 value</h3>
    <input type="radio" v-model="picked" value="a">
    <br>
    <input type="checkbox" v-model="toogle">
    <span>Tooggle: {{ toogle }}</span>
    <br>
    <select v-model="selectedValue">
      <option value="abc">ABC</option>
    </select>
    <span>SelectdValue: {{ selectedValue }}</span>
    <br><br>
    <h4>复选框</h4>
    <input type="checkbox" v-model="toggleValue"
        v-bind:true-value="a" v-bind:false-value="b">
    <span>ToogleValue: {{ toggleValue }}</span>
    <br>
    <h4>单选按钮</h4>
    <input type="radio" v-model="pick" v-bind:value="a">
    <span>PickValue: {{ pick }}</span>
    <br>
    <h4>选择列表设置</h4>
    <select v-model="object">
      <option v-bind:value="{ number: 123 }">123</option>
    </select>
    <span>Object: {{ object }}</span>
    <br><br>
    <h3>修饰符</h3>
    <h4>.lazy</h4>
    <p>
      在 "change" 而不是 "input" 事件中更新
    </p>
    <input v-model.lazy="msg">
    <br>
    <h4>.number</h4>
    <p>
      User Input -> Number
    </p>
    <input v-model.number="age" type="number">
    <br>
    <h4>.trim</h4>
    <p>
      去首位空格
    </p>
    <input v-model.trim="msg">
    <br>
  </div>

</template>

<script>
export default {
  data () {
    return {
      message: '',
      checked: false,
      checkedNames: [],
      picked: '',
      selected: 'A',
      selectedArray: [],
      options: [
        {text: 'One', value: 'A'},
        {text: 'Two', value: 'B'},
        {text: 'Three', value: 'C'}
      ],
      toogle: false,
      toggleValue: '',
      a: 'valueA',
      b: 'valueB',
      selectedValue: '',
      pick: '',
      object: {}
    }
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
