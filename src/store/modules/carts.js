import Vue from 'vue'
import Cart from '../models/cart'

export default {
  state: {
    index: []
  },
  actions: {
    fetchCarts ({commit}) {
      return Vue.http.get(Cart.url).then(response => {
        commit('setCarts', response)
      })
    }
  },
  mutations: {
    setCarts (state, response) {
      // console.log(response.body.feed.entry)
      state.index = response.body.feed.entry.map(x => new Cart(x))
    }
  }
}
