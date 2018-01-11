<template lang="html">
  <div v-if="game.active" class="">

    <hr>
    
    <h2 class="text-center">
      Results
    </h2>

    <div class="row my-3">
      <div v-for="item in game.active.items" class="col-3">
        <div class="card card-body" :class="itemClass(item)">
          {{ item.name }}<br>
          {{ item.correct }}
        </div>
      </div>
    </div>

    <p class="text-center">
      <button @click="newGame" class="btn btn-success btn-lg text-white font-weight-bold">
        Play Again
      </button>
    </p>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'results',
  computed: mapState({
    game: state => state.game
  }),
  methods: {
    itemClass (item) {
      return (item.correct) ? 'text-success' : 'text-danger'
    },
    ...mapActions([
      'validateGame',
      'newGame'
    ])
  },
  mounted () {
    this.validateGame()
    clearInterval(this.game.interval)
  }
}
</script>
