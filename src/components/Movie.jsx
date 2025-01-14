import React from "react";
import { Link } from "react-router-dom";

export default function Movie({ title, poster, year, id }) {
  return (
    <div className="movie">
      <Link to={`/movies/${id}`}>
        <figure className="movie__img--wrapper">
          <img className="movie__img" src={poster} />
        </figure>
        <div className="movie__info--wrapper">
          <h3 className="movie__title">{title}</h3>
          <p className="movie__year">Year: {year}</p>
        </div>
      </Link>
    </div>
  );
}
