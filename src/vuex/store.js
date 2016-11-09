import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  UPDATE_COUNT (state) {
    state.count++
  }
}

/*
const store = new Vuex.Store({
  state,
  mutations
})
export store
*/

export default new Vuex.Store({
  state,
  mutations
})
