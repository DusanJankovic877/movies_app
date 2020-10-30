import axios from 'axios';
class MovieService {
    constructor(){
        this.apiClient = axios.create({
            baseURL: 'http://localhost:3000/api'
        });
    }
    async getAll(){
       const movies = await this.apiClient.get('/movies');
       return movies;
    }
   async getMovie(id){
 
        const movie = await this.apiClient.get(`/movies/${id}`);
        return movie;
    }
    async addMovie(movie){
        // console.log('working');
        const { data } = await this.apiClient.post('/movies', movie)
        return data;
    }
    async editMovie(movie){
            const editedMovie = await this.apiClient.put(`/movies/${movie.id}`, movie);
            return editedMovie;
    }
}
const movieService = new MovieService();
export default movieService;