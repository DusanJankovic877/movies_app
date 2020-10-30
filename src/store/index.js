import Vue from 'vue'
import Vuex from 'vuex'
import movieService from '../services/movieService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    movie: {},
    searchTerm: '',
    filteredMovies: [],
   
    
  },
  mutations: {
    setMovies(state, payload){
      state.movies = payload;
    },
    setSearchText(state, payload){
      state.searchTerm = payload
    },
    addMovie(state, payload){
      state.movies.push(payload);
    },
    setMovie(state, payload){
      state.movie = payload;
    }

  },
  actions: {
    async fetchMovies(state){
      const {data} = await movieService.getAll();
      state.commit('setMovies', data);
    },
    async fetchMovieById(state, payload){
      const {data} = await movieService.getMovie(payload);
      state.commit('setMovie', data);
    },
    async addMovie(state, payload){
 
      const newMovie = await movieService.addMovie(payload);
      state.commit('addMovie', newMovie);
    },
    async editMovie(state, payload){
      await movieService.editMovie(payload);
    },
    async deleteMovie(state, payload){
      await movieService.deleteMovie(payload);
      const { data } = await movieService.getAll();
      state.commit('setMovies', data);
    }
  
  },
  getters: {
    movies: (state) => state.movies,
    movie: (state) => state.movie,
    filteredMovies: (state) => state.movies.filter((movie) => movie.title.toLowerCase().includes(state.searchTerm.toLowerCase())),
  }
})

