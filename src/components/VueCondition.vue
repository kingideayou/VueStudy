<template lang="html">
  <div>
    <h1 v-if="ok">yes</h1>
    <h1 v-else>No</h1>
    <h1 v-show="ok">Hello!</h1>
    <h1>v-else</h1>
    <div v-if="Math.random() > 0.5">
      Sorry
    </div>
    <div v-else>
      Not sorry
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ok: false
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
