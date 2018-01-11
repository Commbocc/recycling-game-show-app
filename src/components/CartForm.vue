<template lang="html">
  <div class="cart-form">

    <div class="row no-gutters">
      <div v-for="cart in carts" class="col p-1">
        <div class="card card-body p-1 bg-dark text-light">
          <button @click="selectThis(cart)" class="btn btn-lg btn-light font-weight-bold">
            {{ cart.color }}
          </button>
        </div>
      </div>
    </div>

    <p class="my-3 text-center">
      <button @click="skipThis" class="btn btn-warning text-white font-weight-bold" :disabled="skipDisabled">
        Skip for Now
      </button>
    </p>

  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      carts: state => state.carts.index
    }),
    ...mapGetters(['availableIndices']),
    skipDisabled () {
      return (this.availableIndices.length <= 1)
    }
  },
  methods: {
    selectThis (e) {
      this.$emit('answered', e)
    },
    skipThis (e) {
      this.$emit('skipped')
    }
  }
}
</script>

<style lang="css">
</style>
