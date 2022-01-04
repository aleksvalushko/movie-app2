import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../07-views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../07-views/About.vue')
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () =>
      import('../07-views/LoginPage.vue')
  },
  {
    path: '/registration',
    name: 'RegistrationPage',
    component: () =>
      import('../07-views/RegistrationPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
