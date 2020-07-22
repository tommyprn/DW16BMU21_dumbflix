import React, { Component } from "react";
import "./person.css";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";

class Person extends Component {
  render() {
    const { data: dataUser } = this.props.user;

    return (
      <div className="person">
        <Form className="form-profil">
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
              <p className="data-diri">{dataUser.fullName}</p>
              <p className="keterangan">Full Name</p>

              <p className="data-diri">{dataUser.email}</p>
              <p className="keterangan">Email</p>

              <p className="data-diri">
                {dataUser.subscribe === 1 ? "Active" : "Not Active"}
              </p>
              <p className="keterangan">Premium</p>

              <p className="data-diri">{dataUser.gender}</p>
              <p className="keterangan">Gender</p>

              <p className="data-diri">{dataUser.phone}</p>
              <p className="keterangan">Phone Number</p>

              <p className="data-diri">{dataUser.address}</p>
              <p className="keterangan">Address</p>
            </div>

            <div className="fotodll">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLFIGid8OqMlxWVB_3a9-11cSAv4cWeT8GR_ngPi1c1_nThPLd&usqp=CAU"
                alt="Profile"
                className="foto-profil"
              />
              <label className="ganti-foto">
                <input type="file" />
                Change Profile Picture
              </label>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Person);
