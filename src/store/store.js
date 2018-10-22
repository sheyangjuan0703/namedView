
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  count: 3,
  sum: 5
}
const mutations = {
  add (state, n) {
    state.count += n
  },
  dis (state) {
    state.count--
  }
}
const getters = {
  count: function (state) {
    console.log('11111')
    state.count += 100
    return state.count
  }
}
const store = new Vuex.Store({ // 此处的Store必须是大写
  state, mutations, getters
})
export default store
