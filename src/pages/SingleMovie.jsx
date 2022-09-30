import React, { useEffect, useState } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../services/Movie.services";

const SingleMovie = () => {
  const { movieName } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovie(movieName)
      .then((response) => setMovie(response))
      .catch((err) => console.error(err));
  }, [movieName]);
  return (
    <>
      <Row className="mt-2">
        <Col>
          <Image src={movie.poster} style={{ width: "20rem"}} />
        </Col>
        <Col  className="mt-5 text-white">
          <Card.Title>{movie.name}</Card.Title>
          <Card.Subtitle>Year : {movie.yearOfRelease}</Card.Subtitle>
          <Card.Text>Director : {movie.directorName}</Card.Text>
        </Col>
      </Row>
    </>
  );
};

export default SingleMovie;
