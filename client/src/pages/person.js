import React, { Component } from "react";
import "./person.css";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { getUser } from "../redux/actions/user";

class Person extends Component {
  componentDidMount() {
    this.props.getUser(localStorage.getItem("id"));
  }
  render() {
    const { data: dataUser } = this.props.auth;
    let a = Object.values(dataUser);
    let b = localStorage.getItem("id");

    return (
      <div className="person">
        <Form className="form-profil">
          {a
            .filter((auth) => auth.id === b)
            .map((profile) => {
              return (
                <div className="grid-container">
                  <div className="imeji">
                    <i
                      class="fas fa-user-alt"
                      style={{ margin: "10px", color: "red" }}
                    ></i>
                    <i
                      class="fas fa-envelope"
                      style={{ margin: "10px", color: "red" }}
                    ></i>
                    <i
                      class="fas fa-check-circle"
                      style={{ margin: "10px", color: "red" }}
                    ></i>
                    <i
                      class="fas fa-venus-mars"
                      style={{ margin: "10px", color: "red" }}
                    ></i>
                    <i
                      class="fas fa-phone"
                      style={{ margin: "10px", color: "red" }}
                    ></i>
                    <i
                      class="fas fa-house-user"
                      style={{ margin: "10px", color: "red" }}
                    ></i>
                  </div>

                  <div className="tulisan">
                    <p className="data-diri">{profile.name}</p>
                    <p className="keterangan">Full Name</p>

                    <p className="data-diri">{profile.email}</p>
                    <p className="keterangan">Email</p>

                    <p className="data-diri">{profile.status}</p>
                    <p className="keterangan">Premium</p>

                    <p className="data-diri">{profile.gender}</p>
                    <p className="keterangan">Gender</p>

                    <p className="data-diri">{profile.phone}</p>
                    <p className="keterangan">Phone Number</p>

                    <p className="data-diri">{profile.address}</p>
                    <p className="keterangan">Address</p>
                  </div>

                  <div className="fotodll">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLFIGid8OqMlxWVB_3a9-11cSAv4cWeT8GR_ngPi1c1_nThPLd&usqp=CAU"
                      alt="Profile Picture"
                      className="foto-profil"
                    />
                    <label className="ganti-foto">
                      <input type="file" />
                      Change Profile Picture
                    </label>
                  </div>
                </div>
              );
            })}
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { getUser })(Person);
