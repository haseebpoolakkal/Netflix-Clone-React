import axios from "axios"
import { BASE_URL } from '../utils/Constants';

export const fetchAllMovies = async () => {
    try {
        let response = await axios.get(`${BASE_URL}/movies`);
        return response.data;
    }
    catch(err) {
        console.log(err)
    }
}

export const fetchMovie = async (movieName) => {
    try {
        let response = await axios.get(`${BASE_URL}/movie/${movieName}`);
        return response.data;
    }
    catch(err) {
        console.log(err)
    }
}

export const updateMovie = async (movie) => {
    try {
        let response = await axios.put(`${BASE_URL}/movie/${movie.name}`, movie);
        return response.data;
    }
    catch(err) {
        console.log(err)
    }
}

export const addMovie = async (movie) => {
    try {
        let response = await axios.post(`${BASE_URL}/create`, movie);
        return response.data;
    }
    catch(err) {
        console.log(err)
    }
}

export const deleteMovie = async (movieId) => {
    try {
        let response = await axios.delete(`${BASE_URL}/movie?movieId=${movieId}`);
        return response.data;
    }
    catch(err) {
        console.log(err)
    }
}

