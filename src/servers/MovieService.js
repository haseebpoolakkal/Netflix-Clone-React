import axios from 'axios';

export const getAllMovies = async () => {
    try {
        let response = await axios.get('http://localhost:3100/movies');
        return response.data;
    }
    catch(error) {
        console.log(error)
    }
}

export const searchMovies = async (movieName) => {
    try {
        let response = await axios.get(`http://localhost:3100/movie/${movieName}`);
        console.log(response.data)
        return response.data;
    }
    catch(error) {
        console.log(error)
    }
}

export const createMovie = async (movie) => {
    try {
        let response = await axios.post(`http://localhost:3100/create`, movie);
        console.log(response.data)
        return response.data;
    }
    catch(error) {
        console.log(error)
    }
}

export const deleteMovie = async (movieId) => {
    try {
        let response = await axios.delete(`http://localhost:3100/movie?movieId=${movieId}`);
        console.log(response.data)
        return response.data;
    }
    catch(error) {
        console.log(error)
    }
}
