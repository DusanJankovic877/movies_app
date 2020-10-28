import Vue from 'vue'
import Vuex from 'vuex'
import movieService from '../services/movieService'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: []
  },
  mutations: {
    setMovies(state, payload){
      state.movies = payload;
      console.log('payload ', payload);
    }
  },
  actions: {
    async fetchMovies(state){
      const {data} = await movieService.getAll();
      state.commit('setMovies', data);
      // console.log(movies);
      
    }
  },
  getters: {
    movies: (state) => state.movies
    
  }
})

