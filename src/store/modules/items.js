import Vue from 'vue'
import Item from '../models/item'

export default {
  state: {
    index: []
  },
  actions: {
    fetchItems ({commit}) {
      return Vue.http.get(Item.url).then(response => {
        commit('setItems', response)
      })
    }
  },
  mutations: {
    setItems (state, response) {
      state.index = response.body.feed.entry.map(x => new Item(x))
    }
  }
}
