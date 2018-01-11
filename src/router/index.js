import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
import Item from '@/components/Item'
import Start from '@/components/Start'
import Results from '@/components/Results'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/results',
      name: 'Results',
      component: Results
    },
    {
      path: '/item/:itemIndex',
      name: 'Item',
      component: Item
    }
  ]
})
