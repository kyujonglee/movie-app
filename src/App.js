import React, { Component } from "react";
import Movie from "./Movie";
import axios from "axios";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// 추가해야 할 것!
// 1. css 적용(Style Component 인강을 들은 후!) (Ok)
// 2. 무한스크롤 적용
// 3. fetch 대신해서 Axios 적용 (Ok)

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
  width: 100%;
  background-color: #dcdde1;
  padding: 100px 180px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 250px;
  grid-gap: 50px;
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
