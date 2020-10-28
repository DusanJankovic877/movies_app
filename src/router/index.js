import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMovies from '../components/AppMovies.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/movies'
  },
  {
    path: '/movies',
    name: 'movies-app',
    component: AppMovies
  },

]

const router = new VueRouter({
  routes
})

export default router
