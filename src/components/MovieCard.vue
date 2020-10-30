<template>
  <div >
    <b-card
     :class="{'selected': isSelected}"
      no-body
      style="
        max-width: 13rem;
        
        
        margin-left: 10px
      "
      :img-src="movie.imageUrl"
      img-alt="Image"
      img-top
    >
      <b-card-body >
        <b-card-title>{{movie.title}}</b-card-title>
      </b-card-body>        
        <p>{{movie.director}}</p>
        <p>{{movie.releaseDate}}</p>
        <p>{{movie.duration}}</p>
        <p>{{movie.genre}}</p>
      <b-card-body >
        <a class="btn btn-primary" v-if="isSelected == false" @click="handleSelect">Select</a>&nbsp;
        <a class="btn btn-primary" v-else @click="deselect">Deselect</a>&nbsp;
        <router-link class="btn btn-success" :to="{name: 'movie-edit', params: {id: movie.id}}">Edit</router-link>&nbsp;
        <a class="btn btn-danger" @click="deleteMovie">Delete</a>
      </b-card-body>
    </b-card>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    name: 'MovieCard',
    props: {
        movie: Object,
        isSelected: Boolean
    },
    methods: {
      handleSelect(){    
        this.$emit('movie-selected', this.movie);
      },
      deselect(){
        this.$emit('movie-deselected', this.movie);
      },
      deleteMovie(){
        this.$emit('delete-movie', this.movie.id);
      }
    }
}
</script>
<style scoped>
img{height:300px;} 
.selected{
  background-color: gray;
}
</style>