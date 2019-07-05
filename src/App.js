import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  // Render : componentWillMount() => render() -> componentDidMount()
  state = {};

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGWeFS2F8w7Y_JQKLA-dOBc5q5sLHsT3Q8H0PHQemqcpca4JWo"
          },
          {
            title: "괴물",
            poster:
              "https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EA%B4%B4%EB%AC%BC.jpg/250px-%EA%B4%B4%EB%AC%BC.jpg"
          },
          {
            title: "어벤저스",
            poster:
              "https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/23Y6/image/Z3eB-5i-2QIg9jXAhpsP86jc090.jpg"
          },
          {
            title: "어벤저스 인피니트 워",
            poster:
              "https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2018%2F07%2Favengers-infinity-war-2018-1.jpg?q=75&w=800&cbr=1&fit=max"
          },
          {
            title: "기생충",
            poster:
              "http://image.chosun.com/sitedata/image/201906/24/2019062401560_0.png"
          }
        ]
      });
    }, 5000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => (
      <Movie title={movie.title} poster={movie.poster} key={index} />
    ));
    return movies;
  };

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
