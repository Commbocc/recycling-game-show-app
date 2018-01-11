import _ from 'underscore'
import Game from '../models/game'
import router from '@/router'

export default {
  state: {
    active: null,
    timer: Game.allottedTime,
    expired: false,
    interval: null,
    currentItemIndex: 0,
    answeredIndices: []
  },
  actions: {
    validateGame ({state}) {
      if (!state.active) router.push({ path: '/' })
    },
    newGame ({dispatch, commit, rootState}) {
      return dispatch('fetchItems').then(() => {
        commit('resetGame')
        var items = _.sample(rootState.items.index, Game.itemCount)
        commit('setActiveGame', { items })
        commit('setGameInterval')
        router.push({ path: '/item/0' })
      })
    },
    checkAnswer ({commit}, data) {
      data.item.answer = data.cart.color
      data.item.correct = (data.item.cart === data.item.answer)
      commit('answer', data.item)
    },
    nextItem ({commit, getters}) {
      router.push({ path: getters.nextRoutePath })
      commit('incrementItemIndex', getters.nextItemIndex)
    }
  },
  mutations: {
    resetGame (state) {
      state.active = null
      state.timer = Game.allottedTime
      state.expired = false
      clearInterval(state.interval)
      state.interval = null
      state.currentItemIndex = 0
      state.answeredIndices = []
    },
    setActiveGame (state, data) {
      state.active = new Game(data)
    },
    setGameInterval (state) {
      state.interval = setInterval(() => {
        state.timer = state.active.timeRemaining()
        state.expired = state.active.isExpired()
      }, 1000)
    },
    answer (state, data) {
      state.answeredIndices.push(data.index)
    },
    incrementItemIndex (state, data) {
      state.currentItemIndex = data
    }
  },
  getters: {
    availableIndices: state => {
      return _.difference(state.active.items.map(i => i.index), state.answeredIndices)
    },
    nextItemIndex: (state, getters) => {
      if (state.currentItemIndex >= _.last(getters.availableIndices)) {
        return _.first(getters.availableIndices)
      } else {
        return _.chain(getters.availableIndices).filter(index => index > state.currentItemIndex).first().value()
      }
    },
    nextRoutePath: (state, getters) => {
      if (!getters.availableIndices.length || state.expired) {
        return '/results'
      } else {
        return `/item/${getters.nextItemIndex}`
      }
    }
  }
}
