import React, { Component } from "react";
import "./detilfilm.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getFilmDetail } from "../redux/actions/film";

class AddEpisode extends Component {
  render() {
    return (
      <div>
        <Link to={`/post-episode/${this.props.filmId}`}>
          <button className="new-episode">Add Episode</button>
        </Link>
      </div>
    );
  }
}

class DetailFilm extends Component {
  componentDidMount() {
    const filmId = this.props.match.params.filmId;
    this.props.getFilmDetail(filmId);
  }

  constructor() {
    super();
    this.state = { x: 0, y: 1 };
  }

  handleIncrement() {
    this.setState({
      x: this.state.x + 1,
      y: this.state.y + 1,
    });
  }

  handleDecrement() {
    this.setState({
      x: this.state.x - 1,
      y: this.state.y - 1,
    });
  }

  // FilmId = ({ match }) => {
  //   const { filmId } = this.props.match.params;
  //   console.log(filmId);
  // };

  render() {
    const { data: dataUser } = this.props.user;
    const { data: dataEpisode } = this.props.film;
    let x = this.state.x;
    let y = this.state.y;
    let a = Object.values(dataEpisode);

    let title;
    let link;
    let thumbnail;
    let year;
    let category;
    let summary;
    let nextEp;

    const filmId = this.props.match.params.filmId;
    return (
      <div className="video-detil">
        {a.slice(x, y).map((FilmDetail) => {
          title = FilmDetail.title;
          link = FilmDetail.linkEp;
          thumbnail = FilmDetail.thumbnailEp;
          year = FilmDetail.Film.year;
          category = FilmDetail.Film.Category.name;
          summary = FilmDetail.Film.description;
          return false;
        })}
        {a.slice(x + 1, y + 1).map((nextDetail) => {
          nextEp = nextDetail.linkEp;
          return false;
        })}

        <div>
          <ReactPlayer
            url={link}
            playing={false}
            controls={true}
            width="100%"
            className="video-preview"
          />
        </div>
        <div className="detail-warper">
          <img
            className="gambar-preview"
            src={thumbnail}
            alt="film-thumbnail"
          />

          <div>
            <p className="judul-preview">{title}</p>
            <p className="tahun-preview">{year}</p>
            <p className="genre-preview">{category}</p>
            <p className="sinposis-preview">{summary}</p>

            <div className="episode-preview">
              {dataUser.role === 1 ? <AddEpisode filmId={filmId} /> : <p />}
              <ReactPlayer
                url={nextEp}
                playing={false}
                controls={true}
                width="400px"
                height="300px"
              />
              {y === a.length ? (
                <div className="next-episode">
                  <button
                    className="button-next-episode"
                    onClick={this.handleDecrement.bind(this)}
                  >
                    <i
                      className="fas fa-angle-left"
                      style={{ margin: "15px", color: "red" }}
                    ></i>
                  </button>
                </div>
              ) : x === 0 ? (
                <div className="next-episode">
                  <div></div>
                  <button
                    className="button-next-episode"
                    onClick={this.handleIncrement.bind(this)}
                  >
                    <i
                      className="fas fa-angle-right"
                      style={{ margin: "15px", color: "red" }}
                    ></i>
                  </button>
                </div>
              ) : (
                <div className="next-episode">
                  <button
                    className="button-next-episode"
                    onClick={this.handleDecrement.bind(this)}
                  >
                    <i
                      className="fas fa-angle-left"
                      style={{ margin: "15px", color: "red" }}
                    ></i>
                  </button>
                  <button
                    className="button-next-episode"
                    onClick={this.handleIncrement.bind(this)}
                  >
                    <i
                      className="fas fa-angle-right"
                      style={{ margin: "15px", color: "red" }}
                    ></i>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    film: state.film,
  };
};
export default connect(mapStateToProps, { getFilmDetail })(DetailFilm);
