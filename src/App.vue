<template>
  <div class="container" id="app">

  <nav class="navbar navbar-expand-lg navbar-light">
    <router-link class="navbar-brand" to="movies">Movies</router-link>
    <router-link :to="{name: 'movie-add'}">Add Movie</router-link>
    <movie-search/>
  </nav>

      <!-- <router-link to="/about">About</router-link> -->
   
    <router-view/>
  </div>
</template>
<script>
import MovieSearch from './components/MovieSearch'
export default {
  components: {
    MovieSearch
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
