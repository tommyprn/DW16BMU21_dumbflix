import React, { Component } from "react";
import "./series.css";
import { connect } from "react-redux";
import { getAllFilm } from "../redux/actions/film";
import { Link } from "react-router-dom";

class Series extends Component {
  componentDidMount() {
    this.props.getAllFilm();
  }

  render() {
    const { data: dataSeries } = this.props.film;
    let a = Object.values(dataSeries);

    return (
      <div className="page">
        <div className="jumbo-series">
          <img
            src="https://images.alphacoders.com/107/thumb-1920-1072652.jpg"
            alt="Jumbotron"
          />
        </div>

        <div
          style={{ backgroundColor: "black" }}
          className="rectangle-series"
        ></div>

        <div className="judul-series">
          <img
            src="https://lingopie.com/public/learn-spanish-with-casa-de-papel/images/lacasa.png"
            alt="Jumbotron title"
          />
        </div>

        <p className="summary-series">
          Eight thieves take hostages and lock themselves in the Royal Mint of
          Spain as a criminal mastermind manipulates the police to carry out his
          plan.
        </p>

        <div className="kategori-series">
          <p>2017</p>
          <p className="kate-series">TV Series</p>
        </div>

        <button className="watch-series">WATCH NOW !</button>

        <p className="navseries">TV Series</p>

        <div className="thumbnail-series-page">
          <div className="row justify-content-start">
            {a
              .slice(0, 24)
              .filter((film) => film.categoryId === 2)
              .map((tvseries, i) => {
                return (
                  <Link to={`/detail/${tvseries.id}`} key={i} key={tvseries.id}>
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    film: state.film,
  };
};

export default connect(mapStateToProps, { getAllFilm })(Series);
