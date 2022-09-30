import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import {
  fetchAllMovies,
  updateMovie,
  addMovie,
  deleteMovie
} from "../services/Movie.services";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  let selected = {
    name: "",
    directorName: "",
    yearOfRelease: 0,
    poster: "",
  };
  const [selectedMovie, setSelectedMovie] = useState(selected);

  useEffect(() => {
    fetchAllMovies()
      .then((response) => setMovies(response))
      .catch((err) => setError(err));
  }, [selectedMovie]);

  const selectMovie = (movie) => {
    setSelectedMovie(movie);
    console.log(selectedMovie);
  };

  const clearSelected = (e) => {
    e && e.preventDefault();
    setSelectedMovie(selected);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setSelectedMovie(() => ({ ...selectedMovie, [name]: value }));
  };

  const addNewMovie = (event) => {
    event.preventDefault();
    selectedMovie.name
      ? addMovie(selectedMovie)
          .then((response) => clearSelected())
          .catch((err) => console.error(err))
      : console.log("Movie details are empty");
  };

  const updateMovieDetails = (event) => {
    event.preventDefault();
    updateMovie(selectedMovie)
      .then((response) => clearSelected())
      .catch((err) => console.error(err));
  };

  const deleteSelecedMovie = (event) => {
    event.preventDefault();
    selectedMovie._id
      ? deleteMovie(selectedMovie._id)
          .then((response) => clearSelected())
          .catch((err) => console.error(err))
      : console.log("Movie details are empty");
  };

  return (
    <>
      <Form className="mt-2">
        <Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Movie Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={selectedMovie.name}
                  onChange={changeHandler}
                  placeholder="Enter movie name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="yearOfRelease">
                <Form.Label>Year Of Release</Form.Label>
                <Form.Control
                  type="number"
                  name="yearOfRelease"
                  value={selectedMovie.yearOfRelease}
                  onChange={changeHandler}
                  placeholder="Enter year"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="directorName">
                <Form.Label>Director Name</Form.Label>
                <Form.Control
                  type="text"
                  name="directorName"
                  value={selectedMovie.directorName}
                  onChange={changeHandler}
                  placeholder="Enter director name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="poster">
                <Form.Label>Poster Url</Form.Label>
                <Form.Control
                  type="text"
                  name="poster"
                  value={selectedMovie.poster}
                  onChange={changeHandler}
                  placeholder="Enter poster url"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="p-2">
              <Button onClick={addNewMovie} variant="primary">
                Add
              </Button>
              <Button
                onClick={updateMovieDetails}
                className="m-2"
                variant="success"
              >
                Update
              </Button>
              <Button
                onClick={(event) => clearSelected(event)}
                className="m-2"
                variant="warning"
              >
                Clear
              </Button>
              <Button
                onClick={deleteSelecedMovie}
                className="m-2"
                variant="danger"
              >
                Delete
              </Button>
            </Col>
          </Row>
        </Row>
      </Form>
      {error ? (
        <h3>Error is {error}</h3>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="text-light">#</th>
              <th className="text-light">Name</th>
              <th className="text-light">Year</th>
              <th className="text-light">Director Name</th>
            </tr>
          </thead>
          {movies.map((item, index) => (
            <tbody key={item._id}>
              <tr
                onClick={() => selectMovie(item)}
                style={{ cursor: "pointer" }}
              >
                <td className="text-light">{index + 1}</td>
                <td className="text-light">{item.name}</td>
                <td className="text-light">{item.yearOfRelease}</td>
                <td className="text-light">{item.directorName}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      )}
    </>
  );
};

export default Movie;
