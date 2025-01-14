import React from "react";

export default function LoadingSk({ index }) {
  return (
    <div className="skeleton__movie" key={index}>
      <div className="skeleton__img"></div>
      <div className="skeleton__info">
        <div className="skeleton__title"></div>
        <div className="skeleton__year"></div>
      </div>
    </div>
  );
}
