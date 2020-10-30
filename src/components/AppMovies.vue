<template>
  <div class="movies" >
    <h1>Movies</h1>
      <h4>Selected Movies {{countMoviesSelected}}</h4>
      <div class="row">
        <div class="select ">
          <button class="btn btn-primary" @click="selectAll">Select all</button>&nbsp;
          <button class="btn btn-primary" @click="deselectAll">Deselect all</button>
        </div>
        <div class="sort ml-auto">
          <button class="btn btn-primary" @click="setSortingCriteria('title')">Title</button>&nbsp;
          <button class="btn btn-primary" @click="setSortingCriteria('duration')">Duration</button>&nbsp;
          <button class="btn btn-warning" @click="setSortingDirection(-1)">Asc</button>&nbsp;
          <button class="btn btn-warning" @click="setSortingDirection(1)">Dsc</button>
        </div>
      </div>
    <div class="movies-list" v-if="filteredMovies.length">
      
      <movie-card 
        v-for="movie in moviesPage" :key="movie.id" 
        :movie="movie" 
        :isSelected="getIsMoviesSelected(movie)" 
        @movie-selected="handleMovieSelected"
        @movie-deselected="deselectMovie"
        @delete-movie="handleDelete"/>
    </div>
    <div v-else class="d-flex justify-content-center">
      <p class="alert alert-danger col-sm-5" style="color:#ff8080;">
        No match found for your search input
      </p>
    </div>
    <pagination :num-of-items="sortList.length" @current-page-changed="goToPage"/>
  </div>
</template>

<script>
import  store from '../store/index'
import { mapActions, mapGetters } from 'vuex'
import MovieCard from './MovieCard'
import Pagination from './Pagination'
const PAGE_SIZE = 5;
export default {
  name: 'AppMovies',
  components: {
    MovieCard,
    Pagination
    },
  data(){
    return {
      selectedMovies: [],
      sortingCriteria: '',
      sortingDirection: '',
      currentPage: 1

    }
  },
  computed:{
    ...mapGetters(['movies', 'filteredMovies']),
    countMoviesSelected(){
      return this.selectedMovies.length;
    },
    sortList(){
      return this
              .filteredMovies
              .map((m) => m)
              .sort((movieA, movieB) => 
              movieA[this.sortingCriteria] < movieB[this.sortingCriteria] 
              ? this.sortingDirection : -1 * this.sortingDirection)
    },
    moviesPage(){
      return this.sortList.slice((this.currentPage - 1) * PAGE_SIZE, this.currentPage * PAGE_SIZE);
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
    },
    deselectMovie(movie){
      const F_MOVIE = this.selectedMovies.find((m) => m.id == movie.id);
      const INDEX = this.selectedMovies.indexOf(F_MOVIE);
      this.selectedMovies.splice(INDEX, 1);
    },
    setSortingCriteria(field){
      this.sortingCriteria = field;
    },
    setSortingDirection(direction){
      this.sortingDirection = direction;

    },
    goToPage(page){
      this.currentPage = page
    },
    ...mapActions(['deleteMovie']),
    handleDelete(id){
      this.deleteMovie(id);
      
    }
  },
    beforeRouteEnter(to, from, next){
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
