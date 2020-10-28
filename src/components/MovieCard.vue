<template>
    <div       >
            <b-card
     
      no-body
      style="
        max-width: 20rem;
        margin-left: 10px
      "
      :img-src="movie.imageUrl"
      img-alt="Image"
      img-top
    >
      <b-card-body>
        <b-card-title>{{movie.title}}</b-card-title>
      </b-card-body>

      <b-list-group flush>
        <b-list-group-item>{{movie.director}}</b-list-group-item>
        <b-list-group-item>{{movie.releaseDate}}</b-list-group-item>
        <b-list-group-item>{{movie.duration}}</b-list-group-item>
        <b-list-group-item>{{movie.genre}}</b-list-group-item>
      </b-list-group>
      <b-card-body>
        <a href="#" class="card-link">Select</a>
        <a href="#" class="card-link">Edit</a>
        <a href="#" class="card-link">Delete</a>
      </b-card-body>
    </b-card>
    </div>
</template>
<script>
export default {
    name: 'MovieCard',
    props: {
        movie: Object
    }
}
</script>
<style scoped>
img{height:400px;} 
</style>