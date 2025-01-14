import React from "react";

export default function LoadingSk({ index }) {
  return (
    <div className="skeleton_movie" key={index}>
      <div className="skeleton_img"></div>
      <div className="skeleton_info">
        <div className="skeleton_title"></div>
        <div className="skeleton_year"></div>
      </div>
    </div>
  );
}
