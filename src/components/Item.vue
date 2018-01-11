<template lang="html">
  <div v-if="item" class="">

    <div class="jumbotron text-center">
      <div class="">
        {{ item.imageSrc }}
        <br>
        {{ item.name }}
      </div>
    </div>

    <!--  -->
    <CartForm v-on:answered="answer" v-on:skipped="skip"/>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CartForm from '@/components/CartForm'

export default {
  components: {
    CartForm
  },
  methods: {
    ...mapActions([
      'validateGame',
      'checkAnswer',
      'nextItem'
    ]),
    answer (cart) {
      this.checkAnswer({
        item: this.item,
        cart
      })
      this.nextItem()
    },
    skip (e) {
      this.nextItem()
    }
  },
  computed: {
    ...mapState({
      game: state => state.game
    }),
    item () {
      return (this.game.active) ? this.game.active.items[this.game.currentItemIndex] : false
    }
  },
  beforeMount () {
    this.validateGame()
    setInterval(() => {
      if (this.game.expired) this.nextItem()
    }, 1000)
  }
}
</script>

<style lang="css">
</style>
