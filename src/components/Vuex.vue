<template lang="html">

  <div>
    <button @click="updateCount">点击</button>
    计数：{{ count }}
  </div>

</template>

<script>

import { updateCount } from '../vuex/actions'

export default {
  computed: updateCount({
    count: state => state.count,

    countAlias: 'count',

    // 想访问局部状态，就必须借助于一个普通函数，函数中使用 `this` 获取局部状态
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })
}
</script>

<style lang="css">
</style>
