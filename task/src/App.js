import React, {Component} from 'react';
import Home from './pages/home';
import Movies from './pages/movie';
import Series from './pages/series';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Series />
      </div>
    )
  }
}

export default App;
