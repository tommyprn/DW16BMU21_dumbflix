import React, { Component } from "react";
import "./regismodul.css";
import { connect } from "react-redux";
import { register } from "../redux/actions/user";
import { Link } from "react-router-dom";
import { Modal, Form } from "react-bootstrap";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { data: { gender: "male" }, error: {} };
  }

  handleChange = (event) => {
    const { data } = this.state;
    this.setState({
      data: { ...data, [event.target.name]: event.target.value },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.register(this.state.data);
    this.setState({ data: {} });
  };

  render() {
    const { error } = this.props.user;
    const { data } = this.state;
    if (this.props.isLogin) {
      this.setState(this.props.close);
    }
    return (
      <Modal size="sm" show={this.props.show} onHide={this.props.onHide}>
        <Modal.Body className="modaldasar">
          <Modal.Title>
            <p className="judulmodal">Register</p>
          </Modal.Title>

          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail" className="email">
              <Form.Control
                name="email"
                value={data.email ? data.email : ""}
                type="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="email">
              <Form.Control
                name="password"
                value={data.password ? data.password : ""}
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicName" className="email">
              <Form.Control
                placeholder="Full Name"
                name="fullName"
                value={data.fullName ? data.fullName : ""}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formGridState" className="email">
              <Form.Control
                as="select"
                name="gender"
                value={data.gender}
                onChange={this.handleChange}
                placeholder="Gender"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicNumber" className="email">
              <Form.Control
                type="number"
                placeholder="Phone Number"
                name="phone"
                value={data.phone ? data.phone : ""}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicAddress" className="pass">
              <Form.Control
                type="textarea"
                placeholder="Address"
                name="address"
                value={data.address ? data.address : ""}
                onChange={this.handleChange}
              />
            </Form.Group>
            {error ? <p className="error-message">{error.message}</p> : <p></p>}
            <button type="submit" className="tombollogin">
              Register
            </button>
            <p className="kalimat-baru">
              Already have an account?
              <Link to="/Login" className="redirect-login">
                Login Here
              </Link>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isLogin: state.user.isLogin,
    error: state.user.error,
  };
};

export default connect(mapStateToProps, { register })(Register);
