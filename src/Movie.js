import React from "react";
import propTypes from "prop-types";
import "./Movie.css";

function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movies__Columns">
        <MoviePoster poster={poster} alt={title}/>
      </div>
      <div className="Movies__Columns">
        <h1>{title}</h1>
        <div className="Movies__Genres">
          {genres.map((genre, index) => (
            <MovieGenre genre={genre} key={index} />
          ))}
        </div>
        <p className="Movie__Synopsis">{synopsis}</p>
      </div>
    </div>
  );
}

// functional component
// stateless component
// state가 필요없고 props만 존재할 때 이를 stateless component 라 함.
// function render 존재 x , 라이프 사이클 존재 x
function MoviePoster({ poster,alt }) {
  return <img src={poster} alt={alt} title={alt} className="Movie__Poster" />;
}

function MovieGenre({ genre }) {
  return <span className="Movie__Genre">{genre} </span>;
}

Movie.propTypes = {
  title: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  genres: propTypes.array.isRequired,
  synopsis: propTypes.string.isRequired
};

MoviePoster.propTypes = {
  poster: propTypes.string.isRequired,
  alt : propTypes.string.isRequired
};

export default Movie;
