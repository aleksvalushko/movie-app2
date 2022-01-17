import Vue from 'vue'
import VueRouter from 'vue-router'

import PopularMovies from '../07-views/Movies.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PopularMovies',
    component: PopularMovies
  },
  {
    path: '/nowPlaying',
    name: 'NowPlaying',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../07-views/Movies.vue')
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    component: () =>
      import('../07-views/MovieCard.vue')
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
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () =>
      import('../07-views/NotFound.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
