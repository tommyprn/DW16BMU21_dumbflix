import React, { Component } from "react";
import "./addepisode.css";
import { connect } from "react-redux";
import { postEpisode } from "../redux/actions/episode";

class AddEpisode extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }

  handleChange = (event) => {
    const { data } = this.state;
    this.setState({
      data: { ...data, [event.target.name]: event.target.value },
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postEpisode(this.state.data);
    this.setState({ data: {} });
  };

  render() {
    const { data: dataEpisode, loading, error } = this.props.episode;
    const { data } = this.state;

    return (
      <form className="form-add-episode" onSubmit={this.handleSubmit}>
        <p className="judul-add-episode">Add Episode</p>
        <div>
          <input
            name="title"
            value={data.title ? data.title : ""}
            type="text"
            className="custom-input"
            placeholder="Episode Title"
            onChange={this.handleChange}
          />
        </div>

        <div>
          <input
            name="thumbnail"
            value={data.thumbnail ? data.thumbnail : ""}
            type="text"
            className="custom-input"
            placeholder="Thumbnail URL"
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group-basic">
          <input
            name="linkEp"
            value={data.linkEp ? data.linkEp : ""}
            type="text"
            className="custom-input"
            placeholder="Video Link"
            onChange={this.handleChange}
          />
        </div>

        <button className="tombol-save-episode" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    episode: state.episode,
  };
};

export default connect(mapStateToProps, { postEpisode })(AddEpisode);
