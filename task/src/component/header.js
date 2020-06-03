import React, {Component} from 'react';
import logo from '../logo.png';
import '../App.css';


class Header extends Component {
    render(){
        return (
                <div className="header">
                    <div className="header-left">
                        <a href="">Home</a>
                        <a href="">TV Shows</a>
                        <a href="">Movies</a>
                    </div>

                    <div className="header-middle">
                        <img src={logo} alt="Logo"/>
                    </div>

                    <div className="header-right">
                        <button className="regis">Register</button>
                        <button className="login">Login</button>
                    </div>
                </div>
        )
    }
}   

export default Header;