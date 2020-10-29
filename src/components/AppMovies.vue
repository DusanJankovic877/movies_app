<template>
  <div class="movies" >
    <h1>Movies</h1>
      <h4>Selected Movies {{countMoviesSelected}}</h4>
    <div class="movies-list" v-if="filteredMovies.length">
      <movie-card 
        v-for="movie in filteredMovies" 
        :key="movie.id" 
        :movie="movie" 
        :isSelected="getIsMoviesSelected(movie)" 
        @movie-selected="handleMovieSelected"  />
    </div>
    <div v-else class="d-flex justify-content-center">
      <p class="alert alert-danger col-sm-5" style="color:#ff8080;">
        No match found for your search input
      </p>
    </div>
    <button @click="selectAll">Select all</button>
    <button @click="deselectAll">Deselect all</button>

  </div>
</template>

<script>
import  store from '../store/index'
import { mapGetters } from 'vuex'
import MovieCard from './MovieCard'
export default {
  name: 'AppMovies',
  components: {MovieCard},
  data(){
    return {
      selectedMovies: []
    }
  },
  computed:{
    ...mapGetters(['movies', 'filteredMovies']),
    countMoviesSelected(){
      return this.selectedMovies.length;
    }
  },
  methods:{
    handleMovieSelected(movie){
      if(this.getIsMoviesSelected(movie)){
        return;
      }
      this.selectedMovies.push(movie);
    },
    getIsMoviesSelected(movie){
   
      return !!this.selectedMovies.find((m) => m.id == movie.id);
    
    },
    selectAll(){
      this.selectedMovies = this.filteredMovies;
    },
    deselectAll(){
      this.selectedMovies = [];
    }
  },
    beforeRouteEnter(to, from, next){
        //4ti vuex korak
        // console.log('dispatch action')
        store.dispatch('fetchMovies').then(()=> {
            next();
        })
        
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.movies-list {
  display: flex;
  flex-wrap: wrap;
}


</style>
