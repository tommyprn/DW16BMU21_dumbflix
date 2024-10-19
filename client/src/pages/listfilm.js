import React, { Component } from "react";
import "./listfilm.css";
import { Link } from "react-router-dom";
import { SplitButton, Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { getAllFilm } from "../redux/actions/film";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 1,
    };
  }

  handleMovie = () => {
    this.setState({
      category: 1,
    });
  };

  handleTv = () => {
    this.setState({
      category: 2,
    });
  };

  componentDidMount() {
    this.props.getAllFilm();
  }

  render() {
    const { data: dataMovies } = this.props.film;
    let a = Object.values(dataMovies);
    return (
      <div>
        <p className="judul-halaman">List Film</p>
        <SplitButton
          alignRight
          title="Category"
          id="dropdown-split-variants-secondary"
          split
          variant="dark"
          className="category-drop"
        >
          <Dropdown.Item
            eventKey="1"
            className="text-dark"
            onClick={this.handleMovie}
          >
            Movies
          </Dropdown.Item>
          <Dropdown.Item
            eventKey="2"
            className="text-dark"
            onClick={this.handleTv}
          >
            TV Series
          </Dropdown.Item>
        </SplitButton>

        <Link to="/post-film">
          <button className="nambah-film">Add Film</button>
        </Link>

        <div className="thumbnail-list-film">
          <div className="row justify-content-start">
            {a
              .filter((film) => film.categoryId === this.state.category)
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

export default connect(mapStateToProps, { getAllFilm })(List);
