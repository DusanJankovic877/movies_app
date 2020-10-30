import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMovies from '../components/AppMovies.vue'
import AddMovie from '../components/AddMovie.vue'


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
  {
    path: '/addMovie',
    name: 'movie-add',
    component: AddMovie
  },

]

const router = new VueRouter({
  routes
})

export default router
