import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { searchMovies } from "../servers/MovieService";
import { deleteMovie } from '../servers/MovieService'

const SelectedMovie = () => {
  const { movieName } = useParams();
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    let response = await searchMovies(movieName);
    setMovie(response);
  };

  useEffect(() => {
    getMovie();
  }, []);

  const deleteSelectedMovie = (event) => {
    event.preventDefault();
    deleteMovie(movie._id);
  }
   
  return (
    <>
      <Card.Header>
        <Card.Img variant="top" src={movie.poster} />
      </Card.Header>
      <Card.Body>
        <Card.Text>Movie Name: {movie.name}</Card.Text>
        <Card.Text>Director Name: {movie.directorName}</Card.Text>
        <Card.Text>Year of Release: {movie.yearOfRelease}</Card.Text>
      </Card.Body>

      <Button variant="danger" onClick={deleteSelectedMovie}>Delete</Button>
    </>
  );
};

export default SelectedMovie;
