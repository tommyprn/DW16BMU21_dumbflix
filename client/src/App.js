import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Movies from "./pages/movie";
import Series from "./pages/series";
import Header from "./component/header";
import Login from "./pages/loginmodul";
import Regis from "./pages/regismodul";
import Person from "./pages/person";
import Premium from "./pages/premium";
import DetailSeries from "./pages/detilfilm";
import Transaction from "./pages/transaksi";
import AddFilm from "./pages/addfilmform";
import AddEpisode from "./pages/addepisode";
import List from "./pages/listfilm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />

          <Switch>
            <Route exact path="/tv-series">
              <Series />
            </Route>

            <Route exact path="/movies">
              <Movies />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/register">
              <Regis />
            </Route>

            <Route exact path="/profile">
              <Person />
            </Route>

            <Route exact path="/plan">
              <Premium />
            </Route>

            <Route exact path="/detail">
              <DetailSeries />
            </Route>

            <Route exact path="/transaction">
              <Transaction />
            </Route>

            <Route exact path="/post-film">
              <AddFilm />
            </Route>

            <Route exact path="/post-episode">
              <AddEpisode />
            </Route>

            <Route exact path="/films">
              <List />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
