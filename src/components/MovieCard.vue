<template>
  <div >
    <b-card
     :class="{'selected': isSelected}"
      no-body
      style="
        max-width: 20rem;
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
        <a href="#" class="btn btn-primary" @click="handleSelect">Select</a>
        <a href="#" class="btn btn-success">Edit</a>
        <a href="#" class="btn btn-danger">Delete</a>
      </b-card-body>
    </b-card>
  </div>
</template>
<script>
export default {
    name: 'MovieCard',
    // data(){
    //   return{
    //     isSelected: false
    //   }
    // },
    props: {
        movie: Object,
        isSelected: Boolean
    },
    methods: {
      handleSelect(){
        // this.isSelected = true;
        this.$emit('movie-selected', this.movie);
        
      }
    }
}
</script>
<style scoped>
img{height:400px;} 
.selected{
  background-color: gray;
}
</style>