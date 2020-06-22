import React, { Component } from "react";
import "./addfilmform.css";
import { connect } from "react-redux";
import { addFilm } from "../redux/actions/film";
import { postEpisode } from "../redux/actions/episode";
import { Form } from "react-bootstrap";

class AddFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { categoryId: "1" },
      dataEpisode: { filmId: "" },
    };
  }

  handleChange = (event) => {
    const { data } = this.state;
    this.setState({
      data: { ...data, [event.target.name]: event.target.value },
    });
  };
  handleChangeEpisode = (event) => {
    const { dataEpisode } = this.state;
    this.setState({
      data: { ...dataEpisode, [event.target.name]: event.target.value },
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addFilm(this.state.data);
    this.setState({ data: {} });
  };

  render() {
    const { data, dataEpisode } = this.state;

    return (
      <form className="form-add-film" onSubmit={this.handleSubmit}>
        <p className="judul-add-film">Add Film</p>
        <div className="form-group-basic">
          <input
            name="title"
            value={data.title ? data.title : ""}
            type="text"
            className="custom-input-basic"
            placeholder="Title"
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label className="form-group-basic">
            <input
              name="thumbnail"
              value={data.thumbnail ? data.thumbnail : ""}
              type="text"
              className="custom-input-basic"
              placeholder="thumbnail"
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div>
          <input
            name="year"
            value={data.year ? data.year : ""}
            onChange={this.handleChange}
            type="text"
            className="custom-input-tahun"
            placeholder="year"
          />

          <Form.Control
            as="select"
            name="categoryId"
            value={data.categoryId}
            onChange={this.handleChange}
            placeholder="Category"
            className="category-add-film"
          >
            <option value="1">Movies</option>
            <option value="2">TV Series</option>
          </Form.Control>
        </div>

        <div className="form-group-desc">
          <input
            name="description"
            value={data.description ? data.description : ""}
            onChange={this.handleChange}
            type="text"
            className="custom-input-desc"
            placeholder="Description"
          />
        </div>

        <p></p>

        <div>
          <input
            name="title"
            value={dataEpisode.title ? dataEpisode.title : ""}
            onChange={this.handleChangeEpisode}
            type="text"
            className="custom-input-episode"
            placeholder="Episode Title"
          />
        </div>

        <div>
          <input
            name="thumbnail"
            value={dataEpisode.thumbnail ? data.thumbnail : ""}
            onChange={this.handleChangeEpisode}
            type="text"
            className="custom-input-episode"
            placeholder="Episode Thumbnail"
          />
        </div>

        <div>
          <input
            name="linkEp"
            value={dataEpisode.linkEp ? dataEpisode.linkEp : ""}
            onChange={this.handleChangeEpisode}
            type="text"
            className="custom-input-episode"
            placeholder="Episode Link"
          />
        </div>

        <button className="tombol-save" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    film: state.film,
    episode: state.episode,
  };
};

export default connect(mapStateToProps, { addFilm, postEpisode })(AddFilm);
