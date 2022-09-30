import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './MovieCard.css'

const MovieCard = ({ movie }) => {
  return (
    <>
      <Col>
        <Link to={`/movie/${movie.name}`}>
          <Card
            className="bg-dark text-white movie-card"
          >
            <Card.Img variant="top" src={movie.poster} />
            <Card.Body>
              <Card.Title>{movie.name}</Card.Title>
              <Card.Subtitle>Year : {movie.yearOfRelease}</Card.Subtitle>
              <Card.Text>Director : {movie.directorName}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </>
  );
};

export default MovieCard;
