import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Home from './pages/home';
import Movies from './pages/movie';
import Series from './pages/series';
import Header from './component/header';
import Login from './pages/loginmodul';
import Regis from './pages/regismodul';
import Person from './pages/person';
import Premium from './pages/premium';
import DetailSeries from './pages/detilfilm';
import Test from './tes';


class App extends Component {
  render(){
    return (
      <div className="App">
          <Router>
           <Header/>
              <Switch>
                <Route path="/Series">
                  <Series/>
                </Route>

                <Route path="/Movies">
                  <Movies />
                </Route>

                <Route path="/Login">
                  <Login/>  
                </Route>/>

                <Route path="/Regis">
                  <Regis/>  
                </Route>/>

                <Route path="/Personal">
                  <Person/>
                </Route>

                <Route path="/Plan">
                  <Premium/>
                </Route>

                <Route path="/Detil">
                  <DetailSeries/>
                </Route>

                <Route path="/">
                  <Home />
                </Route>

              </Switch>
          </Router>

      </div>
    )
  }
}

export default App;
