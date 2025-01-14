import React from "react";
import { Link } from "react-router-dom";
import WatchaLg from "../assets/watcha.png";

export default function Nav() {
  return (
    <nav>
      <img className="nav__logo" src={WatchaLg} alt="" />
      <div className="nav__links">
        <Link
          className="nav__link link__hover-effect hover__turquoise"
          href="#"
        >
          <span className="turquoise">Home</span>
        </Link>
        <Link
          to="/movies"
          className="nav__link link__hover-effect hover__black"
          href="./movie.html"
        >
          Find movie
        </Link>
        <Link className="nav__link nav__btn" href="#">
          Contact
        </Link>
      </div>
    </nav>
  );
}
