<template lang="html">
  <li>
     {{ title }}
     <button v-on:click="$emit('remove')">X</button>
   </li>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['title'],
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
