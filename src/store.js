import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    goods: [ ],
    cartlist: [ ],
    users: []
  },
  mutations: {
    initdata (state, arr) {
      state.goods = arr
    },
    initdata2 (state, arr) {
      state.users = arr
    },
    changeLogin (state, user) {
      state.Authorization = user.Authorization
      localStorage.setItem('Authorization', user.Authorization)
    }

  }
})

export default store
