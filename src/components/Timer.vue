<template lang="html">
  <h1 class="text-center timer" :class="timerClass">
    <small v-if="!game.expired">
      Time Remaining:
      <br>
    </small>
    <span class="display-1">
      {{ timer }}
    </span>
  </h1>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      game: state => state.game
    }),
    timer () {
      return (this.game.expired) ? 'Time Expired' : this.game.timer
    },
    timerClass () {
      return (this.game.expired) ? 'text-danger' : 'text-dark'
    }
  }
}
</script>

<style media="screen">
.timer {
  font-family: Impact;
}
</style>
