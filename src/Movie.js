import React from "react";
import propTypes from "prop-types";
import "./Movie.css";

function Movie({ title, poster }) {
  return (
    <div>
      <MoviePoster poster={poster} />
      <h1>{title}</h1>
    </div>
  );
}

// functional component
// stateless component
// state가 필요없고 props만 존재할 때 이를 stateless component 라 함.
// function render 존재 x , 라이프 사이클 존재 x
function MoviePoster({ poster }) {
  return <img src={poster} alt="Movie Poster" />;
}

Movie.propTypes = {
    title: propTypes.string.isRequired,
    poster: propTypes.string.isRequired
  };

MoviePoster.propTypes = {
  poster: propTypes.string.isRequired
};

export default Movie;
