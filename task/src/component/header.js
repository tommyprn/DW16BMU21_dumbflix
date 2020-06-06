import React, {Component, useState} from 'react';
import logo from '../logo.png';
import './header.css';
import {
Link
} from "react-router-dom";
import Register from '../pages/regismodul';
import Login from '../pages/loginmodul';
import App from '../App.js';

// function LoginUser(props){
//     const history = useHistory();
//     function tester(){
//         let path = 'headlog';
//         history.push(path);
//     }

class Header extends Component {
    render(){
        return (
            <div className="header">
                
                <div className="header-left">
                
                    <Link to="/"><p>Home</p></Link>
                    <Link to="/Series"><p>TV Shows</p></Link>
                    <Link to="/Movies"><p>Movies</p></Link>
                </div>

                <div className="header-middle">
                    <img src={logo} alt="Logo"/>
                </div>
                    
                <div className="header-right">
                    <Register />
                    <Login/>
                </div>

            </div>
        )
    }   
}
// }
export default Header;