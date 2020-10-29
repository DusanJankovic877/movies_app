import Vue from 'vue'
import Vuex from 'vuex'
import movieService from '../services/movieService'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    searchTerm: '',
    filteredMovies: []
    
  },
  mutations: {
    setMovies(state, payload){
      state.movies = payload;
    },

    setSearchText(state, payload){
      state.searchTerm = payload
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
    movies: (state) => state.movies,
    filteredMovies: (state) => state.movies.filter((movie) => movie.title.toLowerCase().includes(state.searchTerm.toLowerCase())),


  }
})

