import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useSearchParams } from "react-router-dom";
import WatchaLg from "../assets/watcha.png";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import LoadingSk from "../components/LoadingSk";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('search') || "";

  useEffect(() => {
    async function fetchMovies(query) {
      if (!query) {
        setMovies([]);
        return;
      }

      setLoading(true);

      try {
        const { data } = await axios.get(
          `https://www.omdbapi.com/?apikey=e1e9d522&s=$${query || searchQuery}`
        );
        setMovies(data.Response === "True" ? data.Search || [] : []);
      } catch {
        setMovies([]);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies(query || searchQuery);
  }, [query || searchQuery]);

  return (
    <>
      <section id="landing__movies">
          <nav>
            <img className="nav__logo" src={WatchaLg} alt="" />
            <div className="nav__links">
              <Link
                to="/"
                className="nav__link--browse link__hover-effect link__hover-effect--white"
              >
                Home
              </Link>
              <Link
                className="nav__link--browse link__hover-effect link__hover-effect--white"
                href="#"
              >
                Find movie
              </Link>
              <Link className="nav__link--browse nav__btn--browse" href="#">
                Contact
              </Link>
            </div>
          </nav>
        <header>
          <div className="row">
            <div className="header__info">
              <h1 className="browse__title">Browse your movie</h1>
              <div className="input__wrapper--browse">
                <input
                  className="search__input"
                  type="text"
                  placeholder="Search Movie"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button className="btn__search--browse">
                  <FontAwesomeIcon
                    icon="fa-solid fa-magnifying-glass"
                    className="search__icon movies__search--icon"
                  />
                </button>
              </div>
            </div>
          </div>
          <img
            className="overlay__img"
            src="https://e0.pxfuel.com/wallpapers/361/985/desktop-wallpaper-dark-blue-background-dark-presentation-thumbnail.jpg"
            alt=""
          />
          <div className="divider"></div>
        </header>
      </section>
      <section className="search__movies">
        <div className="row">
          <div className="movies">
            {loading &&
              Array(6)
                .fill()
                .map((_, index) => <LoadingSk key={index} />)}
            {!loading &&
              movies.length > 0 &&
              movies.map((movie) => (
                <Movie
                  key={movie.imdbID}
                  id={movie.imdbID}
                  title={movie.Title}
                  poster={movie.Poster}
                  year={movie.Year}
                />
              ))}
            {!loading && query && movies.length === 0 && (
              <p>No movies found for "{query}".</p>
            )}
            <footer></footer>
          </div>
        </div>
      </section>
    </>
  );
}
