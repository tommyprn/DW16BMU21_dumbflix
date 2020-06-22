import React, { Component } from "react";
import "./home.css";
import { connect } from "react-redux";
import { getAllFilm } from "../redux/actions/film";
import { Link } from "react-router-dom";

class Home extends Component {
  componentDidMount() {
    this.props.getAllFilm();
  }

  render() {
    const { data: dataHome } = this.props.film;
    let a = Object.values(dataHome);
    return (
      <div className="homes">
        <div className="jumbo-home">
          <img
            src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/101701370_3056727111033322_8855875788692520960_o.jpg?_nc_cat=108&_nc_sid=730e14&_nc_eui2=AeHxTYZZG0eZeG4uKpPet90KR6zylArG8vdHrPKUCsby9w2jdE8sYuI63Z9zK_UO8mFqfDTfC2BvlgsArRmg5MUh&_nc_ohc=5z1HmtZedf0AX8rDd2h&_nc_ht=scontent-sin6-2.xx&oh=4db110d5f59deb98c0c3bc05cd363e24&oe=5EFE084B"
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

        <Link to="Detil">
          <button className="watch-home">WATCH NOW !</button>
        </Link>

        <Link to="/Series" className="home-series">
          TV Series
        </Link>

        <div className="thumbnail-series-home">
          <div className="row justify-content-start">
            {a
              .slice(0, 12)
              .filter((film) => film.categoryId == 2)
              .map((tvseries) => {
                return (
                  <Link to="/detail" key={tvseries.id}>
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
              .slice(0, 12)
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

export default connect(mapStateToProps, { getAllFilm })(Home);
