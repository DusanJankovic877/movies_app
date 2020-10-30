<template>
    <div class="addMovie">
        <h1>add movie</h1>
        <form @submit.prevent>
            <div class="form-group">
                <input class="form-control  m-auto col-sm-4" name="title" type="text" placeholder="Title" v-model="movie.title">
            </div>
            <div class="form-group">
                <input class="form-control  m-auto col-sm-4" name="director" type="text" placeholder="Director" v-model="movie.director">
            </div>
            <div class="form-group">
                <input class="form-control  m-auto col-sm-4" name="imageUrl" type="text" placeholder="Image url" v-model="movie.imageUrl">
            </div>
            <div class="form-group">
                <input class="form-control  m-auto col-sm-4" name="duration" type="number" placeholder="Duration" v-model="movie.duration">
            </div>
            <div class="form-group">
                <input class="form-control  m-auto col-sm-4" name="releaseDate" type="date" placeholder="ReleaseDate" v-model="movie.releaseDate">
            </div>
            <div class="form-group">
                <input class="form-control  m-auto col-sm-4" name="genre" type="text" placeholder="Genre" v-model="movie.genre">
            </div>
            <div class="form-group">
                <button class="btn btn-primary" @click="onSubmit()">Submit</button>
            </div>
        </form>
    </div> 
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'AddMovie',
    data(){
        return{
            movie: {
                title: '',
                director: '',
                imageUrl: '',
                duration: '',
                releaseDate: '',
                genre: ''
            }
        }
    },
    methods: {
        ...mapActions(['addMovie']),
        onSubmit(){
            this.addMovie(this.movie);
            this.$router.push('movies');
        }
    }
}
</script>
<style scoped>

</style>