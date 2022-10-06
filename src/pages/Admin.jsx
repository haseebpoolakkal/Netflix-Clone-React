import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { createMovie } from "../servers/MovieService";

const Admin = () => {
  let initialMovie = {
    name: "",
    directorName: "",
    yearOfRelease: 0,
    poster: "",
  };

  const [movie, setMovie] = useState(initialMovie);

  const handleSubmit = (event) => {
    event.preventDefault();
    createMovie(movie)
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setMovie(() => ({ ...movie, [name]: value }));
  };

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Movie Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={movie.name}
            onChange={changeHandler}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>
            Director Name:
          </Form.Label>
          <Form.Control
            type="text"
            name="directorName"
            value={movie.directorName}
            onChange={changeHandler}
            >
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Year Of Release:</Form.Label>
          <Form.Control
            type="text"
            name="yearOfRelease"
            value={movie.yearOfRelease}
            onChange={changeHandler}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Poster:</Form.Label>
          <Form.Control
            type="text"
            name="poster"
            value={movie.poster}
            onChange={changeHandler}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" onClick={handleSubmit} variant="success">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Admin;
