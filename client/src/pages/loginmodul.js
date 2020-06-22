import React, { Component } from "react";
import "./loginmodul.css";
import { connect } from "react-redux";
import { login } from "../redux/actions/user";
import { Link } from "react-router-dom";
import { Modal, Form } from "react-bootstrap";

class Login extends React.Component {
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
    this.props.login(this.state.data);
    this.setState({ data: {} });
  };

  render() {
    const { data } = this.state;
    return (
      <Modal size="sm" show={this.props.show} onHide={this.props.onHide}>
        <Modal.Body className="modaldasar">
          <Modal.Title>
            <p className="judulmodal">Login</p>
          </Modal.Title>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail" className="email">
              <Form.Control
                name="email"
                type="email"
                value={data.email ? data.email : ""}
                placeholder="Email"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="pass">
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                value={data.password ? data.password : ""}
                onChange={this.handleChange}
              />
            </Form.Group>

            <button
              className="tombollogin"
              onClick={this.props.handleLoginClick}
            >
              Login
            </button>
            <p className="kalimat-baru">
              New on Dumbflix?
              <Link to="/register" className="redirect-regis">
                <span>Click Here</span>
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
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { login })(Login);
