import React, { useState } from "react";
import Undraw from "../assets/undraw_home.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";

export default function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function handleSearch() {
    if (!query.trim()) return;

    setLoading(true);
    setTimeout(() => {
      navigate(`/movies?search=${query}`);
      setLoading(false);
    }, 1000);
  }

  return (
    <>
      <section>
        <Nav />
      </section>
      <header>
        <div className="row">
          <div className="header__info">
            <h1 className="header__description">
              United States most awarded movie streamed platform
            </h1>
            <h2 className="input__title">
              FIND YOUR FAVORITE MOVIE WITH
              <span className="turquoise"> WATCHA</span>
            </h2>
            <div className="input__wrapper">
              <input
                className="input__home"
                type="text"
                placeholder="Search Movie"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <button
                className="btn__search"
                onClick={handleSearch}
                disabled={loading}
              >
                {loading ? (
                  <FontAwesomeIcon
                    icon="spinner"
                    className="loading__spinner"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon="fa-solid fa-magnifying-glass"
                    className="search__icon home__search--icon"
                  />
                )}
              </button>
            </div>
          </div>
          <img className="header__img" src={Undraw} alt="" />
        </div>
      </header>
    </>
  );
}
