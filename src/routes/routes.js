import Vue from 'vue'
import Router from 'vue-router'
import Price from '../components/Price'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Price, name: 'price' }
    
  ]
})

export default router



