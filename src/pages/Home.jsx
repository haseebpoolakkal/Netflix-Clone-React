import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { fetchAllMovies } from "../services/Movie.services";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [movieError, setMovieError] = useState("");

  useEffect(() => {
    fetchAllMovies()
      .then((response) => {
        setMovies(response);
      })
      .catch((err) => {
        setMovieError("Something went wrong");
      });
  }, []);
  return (
    <>
      <Row className="mt-2">
        {movieError !== "" ? (
          <h5>{movieError}</h5>
        ) : (
          movies.map((movie) => <MovieCard key={movie._id} movie={movie} />)
        )}
      </Row>
    </>
  );
};

export default Home;
