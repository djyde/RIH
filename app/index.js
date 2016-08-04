import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/': {
    component: require('./Home.vue')
  }
})

console.log('??')

router.start(App, '#app')

console.log('??')