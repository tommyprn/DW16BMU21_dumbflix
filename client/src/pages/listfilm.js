import React, { Component } from "react";
import "./listfilm.css";
import SeriesData from "../Data/dataseries.json";
import { Link } from "react-router-dom";
import { SplitButton, Dropdown } from "react-bootstrap";

class List extends Component {
  render() {
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
          <Dropdown.Item eventKey="1" className="text-dark">
            Action
          </Dropdown.Item>
          <Dropdown.Item eventKey="2" className="text-dark">
            Drama
          </Dropdown.Item>
          <Dropdown.Item eventKey="3" className="text-dark">
            Comedy
          </Dropdown.Item>
          <Dropdown.Item eventKey="4" className="text-dark">
            Romance
          </Dropdown.Item>
          <Dropdown.Item eventKey="5" className="text-dark">
            Sci-fi
          </Dropdown.Item>
        </SplitButton>

        <Link to="/post-film">
          <button className="nambah-film">Add Film</button>
        </Link>

        <div className="thumbnail-series-list">
          <div class="row justify-content-between">
            {SeriesData.map((seriesDetail, i) => {
              return (
                <div class="row-2">
                  <img className="list-timbul" src={seriesDetail.image} />
                  <p></p>
                  <p>{seriesDetail.name}</p>
                  <p className="list-series-year">{seriesDetail.year}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default List;
