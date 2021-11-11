// Imports
import Router from 'vue-router'
 
import Vue from 'vue'
 
 
// import {
//   // abort,
//   // route,
//   layout
// } from '@/util/routes'

// Setup
Vue.use(Router)

export function createRouter () {
 
  const router = new Router({
    mode: 'history',

    routes: [
      {
        path: '/',
        name: 'home',
        component: require('@/layouts/home/index.vue').default
      },
      {
        path: '/404',
        name: '404',
        component: require('@/views/errors/404.vue').default
      },

      {
        path: '*',
        redirect: '/'
      }
    ]
  })

  
  return router
}
