<template>
    <div class="addMovie">
        <div v-if="!this.$route.params.id">
            <h1>Add movie</h1>
        </div>
        <div v-else>
            <h1>Edit movie</h1>
        </div>
        <form @submit.prevent>
            <div class="form-group">
                <input class="form-control  m-auto col-sm-4" name="title" type="text" placeholder="Title" v-model="movieAdd.title" v-if="!this.$route.params.id">
                <input class="form-control  m-auto col-sm-4" name="title" type="text" placeholder="Title" v-model="movie.title" v-else>
            </div>
            <div class="form-group">
                <input class="form-control  m-auto col-sm-4" name="director" type="text" placeholder="Director" v-model="movieAdd.director" v-if="!this.$route.params.id">
                <input class="form-control  m-auto col-sm-4" name="director" type="text" placeholder="Director" v-model="movie.director" v-else>
            </div>
            <div class="form-group">
                <input class="form-control  m-auto col-sm-4" name="imageUrl" type="text" placeholder="Image url" v-model="movieAdd.imageUrl" v-if="!this.$route.params.id">
                <input class="form-control  m-auto col-sm-4" name="imageUrl" type="text" placeholder="Image url" v-model="movie.imageUrl" v-else>
            </div>
            <div class="form-group">
                <input class="form-control  m-auto col-sm-4" name="duration" type="number" placeholder="Duration" v-model="movieAdd.duration" v-if="!this.$route.params.id">
                <input class="form-control  m-auto col-sm-4" name="duration" type="number" placeholder="Duration" v-model="movie.duration" v-else>
            </div>
            <div class="form-group">
                <input class="form-control  m-auto col-sm-4" name="releaseDate" type="date" placeholder="ReleaseDate" v-model="movieAdd.releaseDate" v-if="!this.$route.params.id">
                <input class="form-control  m-auto col-sm-4" name="releaseDate" type="date" placeholder="ReleaseDate" v-model="movie.releaseDate" v-else>
            </div>
            <div class="form-group">
                <input class="form-control  m-auto col-sm-4" name="genre" type="text" placeholder="Genre" v-model="movieAdd.genre" v-if="!this.$route.params.id">
                <input class="form-control  m-auto col-sm-4" name="genre" type="text" placeholder="Genre" v-model="movie.genre" v-else>
            </div>
            <div class="form-group">
                <button class="btn btn-primary" @click="onSubmit()">Submit</button>
            </div>
        </form>
    </div> 
</template>
<script>
import  store from '../store/index'
import { mapActions, mapGetters } from 'vuex'
import movieService from '../services/movieService';
export default {
    name: 'AddMovie',
    data(){
        return{
            movieAdd: {
                title: '',
                director: '',
                imageUrl: '',
                duration: '',
                releaseDate: '',
                genre: ''
            }
        }
    },
    computed:{
        ...mapGetters(['movie']),
    },
    methods: {
        ...mapActions(['addMovie','fetchMovieById', 'editMovie']),
        onSubmit(){
            if(!this.$route.params.id){
              
                this.addMovie(this.movieAdd);
                this.$router.push('/movies');
            }else{
                this.editMovie(this.movie);
                this.$router.push('/movies');
            }
        },
    },
    created(){
   
        if(this.$route.name !== 'movie-add'){
            store.dispatch('fetchMovieById', this.$route.params.id)
        }
    }
}
</script>
<style scoped>

</style>