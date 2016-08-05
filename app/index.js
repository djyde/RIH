import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/': {
    component: require('./Home.vue')
  },
  '/folders/:id': {
    name: 'folders',
    component: require('./Folders.vue')
  },
  '/tags/:id': {
    name: 'tags',
    component: require('./Tags.vue')
  }
})

router.start(App, '#app')
