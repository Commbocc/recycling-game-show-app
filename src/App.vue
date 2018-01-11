<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

    <Timer/>

    <router-view/>

    <pre class="bg-dark text-light p-3 my-3">{{ $store.state }}</pre>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Timer from '@/components/Timer'

export default {
  name: 'app',
  components: {
    Timer
  },
  methods: mapActions([
    'fetchCarts'
  ]),
  mounted () {
    this.fetchCarts()
  }
}
</script>
