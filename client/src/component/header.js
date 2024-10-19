import React, { Component } from "react";
import logo from "../logo.png";
import "./header.css";
import { Link } from "react-router-dom";
import LoginModul from "../pages/loginmodul";
import RegisModul from "../pages/regismodul";
import { connect } from "react-redux";
import { getUser, logout } from "../redux/actions/user";
import { Dropdown, DropdownButton, Image } from "react-bootstrap";

class User extends Component {
  render() {
    return (
      <div>
        <Link to="/profile">
          <li className="profile-dropdown-list">
            <i class="fas fa-user" style={{ margin: "10px", color: "red" }}></i>
            profile
          </li>
        </Link>
        <Link to="/plan">
          <li className="profile-dropdown-list">
            <i
              class="fas fa-donate"
              style={{ margin: "10px", color: "red" }}
            ></i>
            Upgrade Plan
          </li>
        </Link>
      </div>
    );
  }
}

class Admin extends Component {
  render() {
    return (
      <div>
        <Link to="/films">
          <li className="profile-dropdown-list">
            <i class="fas fa-tv" style={{ margin: "10px", color: "red" }}></i>
            Film
          </li>
        </Link>
        <Link to="/transaction">
          <li className="profile-dropdown-list">
            <i
              class="fas fa-donate"
              style={{ margin: "10px", color: "red" }}
            ></i>
            Transaction
          </li>
        </Link>
      </div>
    );
  }
}

class UserButton extends Component {
  render() {
    return (
      <div className="header-right">
        <DropdownButton
          alignRight
          title={
            <Image
              src={
                "https://img.favpng.com/7/7/17/portrait-drawing-visual-arts-painting-png-favpng-9sxWdF91pWRzCKrTnzgHHrpET_t.jpg"
              }
              roundedCircle
              className="foto-profile"
            />
          }
          id="dropdown-menu"
          variant="black"
          className="drop-button"
        >
          {this.props.role === 1 ? <Admin /> : <User />}

          <Dropdown.Divider />
          <Link to="/">
            <button className="Logout" onClick={this.props.logout}>
              <li className="profile-dropdown-list">
                <i
                  class="fas fa-times"
                  style={{ margin: "15px", color: "red" }}
                ></i>
                Logout
              </li>
            </button>
          </Link>
        </DropdownButton>
      </div>
    );
  }
}

class AuthButton extends Component {
  render() {
    return (
      <div className="header-right">
        <button
          onClick={() => this.props.handleToggleModal(true)}
          className="register"
        >
          Register
        </button>

        <button
          onClick={() => this.props.handleToggleModal(false)}
          className="login"
        >
          Login
        </button>
      </div>
    );
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false, isRegis: false };
  }

  handleToggleModal = (isRegis = false) => {
    this.setState({ isRegis }, () => {
      this.setState(({ isModalOpen }) => {
        return { isModalOpen: !isModalOpen };
      });
    });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };
  render() {
    const { data } = this.props.user;
    return (
      <>
        <div className="header">
          <div className="header-left">
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/tv-series">
              <p>TV Shows</p>
            </Link>
            <Link to="/movies">
              <p>Movies</p>
            </Link>
          </div>
          <div className="header-middle">
            <img src={logo} alt="Logo" />
          </div>
          {this.props.isLogin ? (
            <UserButton logout={this.props.logout} role={data.role} />
          ) : (
            <AuthButton handleToggleModal={this.handleToggleModal} />
          )}
        </div>

        {this.state.isModalOpen && (
          <>
            {this.state.isRegis ? (
              <RegisModul
                show={this.state.isModalOpen}
                onHide={() => this.handleToggleModal(true)}
                close={this.handleCloseModal}
              />
            ) : (
              <LoginModul
                show={this.state.isModalOpen}
                onHide={this.handleToggleModal}
                close={this.handleCloseModal}
              />
            )}
          </>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    isLogin: state.user.isLogin,
  };
};

export default connect(mapStateToProps, { getUser, logout })(Header);
