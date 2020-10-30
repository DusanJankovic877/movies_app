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
    async addMovie(movie){
        const { data } = await this.apiClient.post('/movies', movie)
        return data;
    }
}
const movieService = new MovieService();
export default movieService;