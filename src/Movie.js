import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import LinesEllipsis from "react-lines-ellipsis";

const Container = styled.div`
  width: 600px;
  display: grid;
  grid-template-columns: 3.5fr 6.5fr;
  background-color: white;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const Poster = styled.img`
  position: absolute;
  top: -20px;
  left: 20px;
  display: block;
  width: 180px;
  height: 240px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const Title = styled.span`
  display: inline-block;
  color: #2d3436;
  font-size: 32px;
  margin-top: 10px;
  padding: 5px 0px;
  font-weight: 600;
`;

const Genres = styled.span`
  display: flex;
  color: #b2bec3;
  font-size: 16px;
  & > span:not(:last-child) {
    display: inline-block;
    margin-right: 5px;
  }
`;

const Columns = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  & > span {
    padding: 10px 0px;
  }
`;
const Synopsis = styled.span`
  color: #b2bec3;
`;

function Movie({ title, poster, genres, synopsis }) {
  return (
    <Container>
      <Columns>
        <MoviePoster poster={poster} alt={title} />
      </Columns>
      <Columns>
        <Title>{title}</Title>
        <Genres>
          {genres.map((genre, index) => (
            <MovieGenre genre={genre} key={index} />
          ))}
        </Genres>
        <Synopsis>
          <LinesEllipsis
            text={synopsis}
            maxLine="3"
            ellipsis=" ..."
            trimRight
            basedOn="letters"
          />
        </Synopsis>
      </Columns>
    </Container>
  );
}

// functional component
// stateless component
// state가 필요없고 props만 존재할 때 이를 stateless component 라 함.
// function render 존재 x , 라이프 사이클 존재 x
function MoviePoster({ poster, alt }) {
  return <Poster src={poster} alt={alt} title={alt} />;
}

function MovieGenre({ genre }) {
  return <span>{genre}</span>;
}

Movie.propTypes = {
  title: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  genres: propTypes.array.isRequired,
  synopsis: propTypes.string.isRequired
};

MoviePoster.propTypes = {
  poster: propTypes.string.isRequired,
  alt: propTypes.string.isRequired
};

// function Movie({ title, poster, genres, synopsis }) {
//   return (
//     <div className="Movie">
//       <div className="Movies__Columns">
//         <MoviePoster poster={poster} alt={title}/>
//       </div>
//       <div className="Movies__Columns">
//         <h1>{title}</h1>
//         <div className="Movies__Genres">
//           {genres.map((genre, index) => (
//             <MovieGenre genre={genre} key={index} />
//           ))}
//         </div>
//         <p className="Movie__Synopsis">{synopsis}</p>
//       </div>
//     </div>
//   );
// }

// function MoviePoster({ poster,alt }) {
//   return <img src={poster} alt={alt} title={alt} className="Movie__Poster" />;
// }

export default Movie;
