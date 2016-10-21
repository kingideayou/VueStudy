<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{msgFromFather}}</h1>
    <a v-bind:href="url"></a>
    <button @click="onClickMe">Click!</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'This is ComponentA'
    }
  },
  props: ['msgFromFather'],
  methods: {
    onClickMe: function () {
      console.log(this.msgFromFather)
      this.$emit('child-tell-me-something', this.msg)
      // this.$dispatch('child-tell-me-something', this.msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
