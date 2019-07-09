import React, { Component } from "react";
import Movie from "./Movie";
import axios from "axios";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// 추가해야 할 것!
// 1. css 적용(Style Component 인강을 들은 후!) [O]
// 2. 무한스크롤 [x]
// 3. fetch 대신해서 Axios 적용 [O]
// 4. 모바일 반응형 웹 적용 [x]

const GlobalStyle = createGlobalStyle`
  ${reset};
  a{
    text-decoration: none;
    color:inherit;
  };
  *{
    box-sizing:border-box;
  };
`;

const MovieApp = styled.div`
  box-sizing: border-box;
  background-color: #dcdde1;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding : 50px;
  @media screen and (min-width: 320px) and (max-width: 667px) {
    flex-direction : column;
    padding : 20px;
  }
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  width: 100%;
  height: 100vh;
`;

class App extends Component {
  // Render : componentWillMount() => render() -> componentDidMount()
  state = {};

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => (
      <Movie
        title={movie.title_english}
        poster={movie.medium_cover_image}
        genres={movie.genres}
        synopsis={movie.synopsis}
        key={movie.id}
      />
    ));
    return movies;
  };

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  };

  _callApi = () => {
    return axios
      .get("https://yts.lt/api/v2/list_movies.json?sort_by=like_count")
      .then(json => json.data.data.movies)
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        {this.state.movies ? (
          <MovieApp>{this._renderMovies()}</MovieApp>
        ) : (
          <Loading> Loading </Loading>
        )}
        <GlobalStyle />
      </>
    );
  }
}

export default App;
