import React, { Component } from "react";
import "./home.css";
import { connect } from "react-redux";
import { getAllFilm } from "../redux/actions/film";
import { Link } from "react-router-dom";

// class Child extends Component {
//   render() {
//     return (
//       <>
//         <FilmDetail filmId={this.props.handleFilmId} />
//       </>
//     );
//   }
// }

// export const Child = () => <FilmDetail filmId={this.handleFilmId} />;

class Home extends Component {
  componentDidMount() {
    this.props.getAllFilm();
  }

  // handleFilmId(value) {
  //   let val = value;
  // }

  render() {
    const { data: dataHome } = this.props.film;
    let a = Object.values(dataHome);

    return (
      <div className="homes">
        <div className="jumbo-home">
          <img
            src="https://www.ubackground.com/_ph/19/437655551.jpg"
            alt="jumbotron"
          />
        </div>

        <div style={{ backgroundColor: "black" }} className="rectangle"></div>

        <div className="judul-home">
          <img
            src="http://pngimg.com/uploads/witcher/witcher_PNG14.png"
            alt="Judul jumbotron"
          />
        </div>

        <p className="summary-home">
          Geralt of Rivia, a solitary monster hunter, struggles to find his
          place in a world where people often prove more wicked than beast
        </p>

        <div className="kategori-home">
          <p>2019</p>
          <p className="kate-home">TV Series</p>
        </div>

        <button className="watch-home">WATCH NOW !</button>

        <Link to="/Series" className="home-series">
          TV Series
        </Link>

        <div className="thumbnail-series-home">
          <div className="row justify-content-start">
            {a
              .slice(0, 6)
              .filter((film) => film.categoryId === 2)
              .map((tvseries, i) => {
                return (
                  <Link to={`/detail/${tvseries.id}`} key={i}>
                    <div>
                      <img
                        className="timbul"
                        src={tvseries.thumbnail}
                        alt="TV Series thumbnail"
                      />

                      <p></p>
                      <p>{tvseries.title}</p>
                      <p className="series-year">{tvseries.year}</p>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>

        <Link to="/Movies" className="home-movies">
          Movies
        </Link>

        <div className="thumbnail-movies-home">
          <div className="row justify-content-start">
            {a
              .slice(0, 18)
              .filter((film) => film.categoryId === 1)
              .map((moviesfilm, i) => {
                return (
                  <Link to={`/detail/${moviesfilm.id}`} key={i}>
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

export default connect(mapStateToProps, { getAllFilm })(Home);
