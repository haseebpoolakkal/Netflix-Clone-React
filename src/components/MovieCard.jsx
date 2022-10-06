import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = (props) => {
  return (
    <>
      <Col>
        <Link to={`/movie/${props.movie.name}`}>
          <Card bg="dark">
            <Card.Header>
              <Card.Img
                className="image"
                variant="top"
                src={props.movie.poster}
              />
            </Card.Header>
            <Card.Body>
              <Card.Text>Movie Name: {props.movie.name}</Card.Text>
              <Card.Text>Director Name: {props.movie.directorName}</Card.Text>
              <Card.Text>
                Year of Release: {props.movie.yearOfRelease}
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </>
  );
};

export default MovieCard;
