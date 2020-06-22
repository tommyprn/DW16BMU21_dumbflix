import React, { Component, useState } from "react";
import logo from "../logo.png";
import "./header.css";
import { Link } from "react-router-dom";
import LoginModul from "../pages/loginmodul";
import RegisModul from "../pages/regismodul";
import { Dropdown, DropdownButton, Image } from "react-bootstrap";

function AdminButton(props) {
  return (
    <div className="header-right">
      <DropdownButton
        alignRight
        title={
          <Image
            src={
              "https://apollo-singapore.akamaized.net/v1/files/lrtdeeoj2jtl1-ID/image"
            }
            roundedCircle
            className="foto-profile"
          />
        }
        id="dropdown-menu"
        variant="black"
        className="drop-button"
      >
        <Link to="/transaction">
          <li className="profile-dropdown-list">
            <i
              class="fas fa-donate"
              style={{ margin: "10px", color: "red" }}
            ></i>
            Transaction
          </li>
        </Link>
        <Link to="/films">
          <li className="profile-dropdown-list">
            <i class="fa fa-film" style={{ margin: "10px", color: "red" }}></i>
            Film
          </li>
        </Link>
        <Dropdown.Divider />
        <button onClick={props.handleLogoutClick} className="Logout">
          <li className="profile-dropdown-list">
            <i
              class="fas fa-times"
              style={{ margin: "10px", color: "red" }}
            ></i>
            Logout
          </li>
        </button>
      </DropdownButton>
    </div>
  );
}

function UserButton(props) {
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
        <Link to="/profile">
          <li className="profile-dropdown-list">
            <i
              class="far fa-address-card"
              style={{ margin: "10px", color: "red" }}
            />
            Profile
          </li>
        </Link>
        <Link to="/plan">
          <li className="profile-dropdown-list">
            <i
              class="fas fa-donate"
              style={{ margin: "10px", color: "red" }}
            ></i>
            Pay
          </li>
        </Link>
        <Dropdown.Divider />
        <button onClick={props.handleLogoutClick} className="Logout">
          <li className="profile-dropdown-list">
            <i
              class="fas fa-times"
              style={{ margin: "10px", color: "red" }}
            ></i>
            Logout
          </li>
        </button>
      </DropdownButton>
    </div>
  );
}

function AuthButton(props) {
  return (
    <div className="header-right">
      <button onClick={() => props.handleToggleModal(true)} className="regis">
        Register
      </button>

      <button onClick={() => props.handleToggleModal(false)} className="login">
        Login
      </button>
    </div>
  );
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false, isRegis: false, isLoggedIn: false };
  }

  handleToggleModal = (isRegis = false) => {
    this.setState({ isRegis }, () => {
      this.setState(({ isModalOpen }) => {
        return { isModalOpen: !isModalOpen };
      });
    });
  };

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const a = localStorage.getItem("role");

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
          {isLoggedIn ? (
            <UserButton handleLogoutClick={this.handleLogoutClick} />
          ) : a === 1 ? (
            <AdminButton handleLogoutClick={this.handleLogoutClick} />
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
              />
            ) : (
              <LoginModul
                show={this.state.isModalOpen}
                onHide={this.handleToggleModal}
                handleLoginClick={this.handleLoginClick}
              />
            )}
          </>
        )}
      </>
    );
  }
}

export default Header;
