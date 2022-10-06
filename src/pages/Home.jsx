import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Row } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';
import { getAllMovies } from '../servers/MovieService'

const Home = () => {
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        let response = await getAllMovies();
        setMovies(response);
    }

    useEffect(() => {
        getMovies()
    }, [])

  return (
    <>
    <Row>
    {movies.map((item) => <MovieCard key={item._id} movie={item} />)}
    </Row>
    {console.log(movies)}
    </>
  )
}

export default Home