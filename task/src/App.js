import React, {Component} from 'react';
import logo from './logo.png';
import jumbo from './jumbo.png';
import witcher from './thewitcher.png';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
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

        <div className="preview">
          <img src={jumbo} alt="jumbo"/>
            <div className="judul">
              <img src={witcher} alt="witch"/>
            </div>
            <textarea className="summary">
              Geralt of Rivia, a solitary monster hunter, struggles to find his place in
              a world where people often prove more wicked than beast
            </textarea>
            <div className="kategori">
              <p>2019</p>
              <p className="kate">TV Series</p>
            </div>
        </div>

      </div>
    );
  }
}

export default App;
