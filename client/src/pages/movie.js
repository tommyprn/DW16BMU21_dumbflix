import React, { Component } from "react";
import "./movie.css";
import { connect } from "react-redux";
import { getAllFilm } from "../redux/actions/film";
import { Link } from "react-router-dom";

class Movie extends Component {
  componentDidMount() {
    this.props.getAllFilm();
  }

  render() {
    const { data: dataMovies } = this.props.film;
    let a = Object.values(dataMovies);
    return (
      <div className="page">
        <div className="jumbo-movie">
          <img
            src="https://images3.alphacoders.com/104/thumb-1920-1041825.jpg"
            alt="Jumbotron"
          />
        </div>

        <div
          style={{ backgroundColor: "black" }}
          className="rectangle-movie"
        ></div>

        <div className="judul-movie">
          <img
            src="https://hyperpix.net/wp-content/uploads/2019/09/joker-logo-font-download-1200x900.jpg"
            alt="Jumbotron title"
          />
        </div>

        <textarea className="summary-movie">
          In Gotham City, mentally troubled comedian Arthur Fleck is disregarded
          and mistreated by society. He then embarks on a downward spiral of
          revolution and bloody crime. This path brings him face-to-face with
          his alter-ego: the Joker
        </textarea>

        <div className="kategori-movie">
          <p>2019</p>
          <p className="kate-movie">Movies</p>
        </div>

        <button className="watch-movie">WATCH NOW !</button>

        <p className="navmovies">Movies</p>

        <div className="thumbnail-movies-page">
          <div className="row justify-content-start">
            {a
              .slice(0, 24)
              .filter((film) => film.categoryId == 1)
              .map((moviesfilm) => {
                return (
                  <Link to="/detail" key={moviesfilm.id}>
                    <div>
                      <img
                        className="timbul"
                        src={moviesfilm.thumbnail}
                        alt="Movie thumbnail"
                      />
                      <p></p>
                      <p>{moviesfilm.title}</p>
                      <p className="movie-year">{moviesfilm.year}</p>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    film: state.film,
  };
};

export default connect(mapStateToProps, { getAllFilm })(Movie);
