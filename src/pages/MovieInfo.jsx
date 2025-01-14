import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import axios from "axios";

export default function MovieInfo() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovieInfo() {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=e1e9d522&i=${id}`
      );
      setMovie(data);
    }
    fetchMovieInfo();
  }, [id]);

  return (
    <>
      <Nav />
      <div className="movies__container">
        <div className="row">
          <div className="movie__selected--top">
            <Link to="/movies" className="movie__link">
              <FontAwesomeIcon icon="arrow-left" />
            </Link>
            <Link to="/movies" className="movie__link">
              <div className="movies__return">Movies</div>
            </Link>
          </div>
          {movie && (
            <div className="movie__details">
              <div className="movie__poster">
                <h1>{movie.Title}</h1>
                <img src={movie.Poster} alt={movie.Title} />
              </div>
              <div className="movie__info">
                <p>
                  <strong>Title:</strong> {movie.Title}
                </p>
                <p>
                  <strong>Rated:</strong> {movie.Rated}
                </p>
                <p>
                  <strong>Released:</strong> {movie.Released}
                </p>
                <p>
                  <strong>Runtime:</strong> {movie.Runtime}
                </p>
                <p>
                  <strong>Genre:</strong> {movie.Genre}
                </p>
                <p>
                  <strong>Director:</strong> {movie.Director}
                </p>
                <p>
                  <strong>Writer:</strong> {movie.Writer}
                </p>
                <p>
                  <strong>Actors:</strong> {movie.Actors}
                </p>
                <p>
                  <strong>Plot:</strong> {movie.Plot}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
