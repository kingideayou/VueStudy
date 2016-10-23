<template lang="html">
  <div>
    <button @click="getEntryIdList">网络请求</button>
    <p v-if="getResult && gridData.length > 0">
      {{ gridData }}
    </p>
    <p v-else>
      {{ message }}
    </p>
  </div>
</template>

<script>

export default {
  data () {
    return {
      getResult: true,
      gridData: [],
      message: '点击网络请求获取数据',
      apiUrl: 'http://v3.wufazhuce.com:8000/api/hp/idlist/0?'
    }
  },
  ready: function() {
      this.getEntryIdList()
  },
  methods: {
      getEntryIdList: function() {
          this.$http.get(this.apiUrl)
              .then((response) => {
                emulateJSON: true
                if (response.data.res == 0) {
                  this.getResult = true
                  this.gridData = response.data.data
                  this.message = ''
                } else {
                  this.getResult = false
                  this.message = '艾玛，啥也没找着...'
                }
              })
              .catch(function(response) {
                  console.log(response)
              })
      }
  },
  computed: {},
  mounted () {},
  components: {}
}
</script>

<style lang="css">
</style>
