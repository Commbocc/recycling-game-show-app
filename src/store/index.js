import Vue from 'vue'
import Vuex from 'vuex'

// modules
import game from './modules/game'
import carts from './modules/carts'
import items from './modules/items'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    game,
    carts,
    items
  }
})
