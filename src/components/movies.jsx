import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { throwStatement } from "@babel/types";

class Movies extends Component {
  state = {
    movies: getMovies() // 옳바른 방법은 아님. 예제용
  };

  handlDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    // length를 잘 모르겟네...
    const { length: count } = this.state.movies;

    if (count === 0) return <p>There are no movies in the dateabase.</p>;
    return (
      <React.Fragment>
        <p>현재 데이터베이스에 {count}개 있습니다.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button onClick={() => this.handlDelete(movie)} className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
