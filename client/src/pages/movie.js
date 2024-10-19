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
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aaa79357-9476-4c1d-b9a8-6e881f2449d3/ddf2d7e-bcfd0bdb-461b-4dd2-b93c-1dcd68208788.png/v1/fill/w_800,h_310,strp/joker_2019_logo_by_buffy2ville_ddf2d7e-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0zMTAiLCJwYXRoIjoiXC9mXC9hYWE3OTM1Ny05NDc2LTRjMWQtYjlhOC02ZTg4MWYyNDQ5ZDNcL2RkZjJkN2UtYmNmZDBiZGItNDYxYi00ZGQyLWI5M2MtMWRjZDY4MjA4Nzg4LnBuZyIsIndpZHRoIjoiPD04MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.7RnAsTbpBb0qD99K5eiYxf6L64R8hJ2X3alN6yMtljM"
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
              .filter((film) => film.categoryId === 1)
              .map((moviesfilm, i) => {
                return (
                  <Link
                    to={`/detail/${moviesfilm.id}`}
                    key={i}
                    key={moviesfilm.id}
                  >
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
