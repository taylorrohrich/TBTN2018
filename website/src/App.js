import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./Components/Home.js";
import EventPage from "./Components/EventPage.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/Event" component={EventPage} />
        </div>
      </Router>
    );
  }
}

export default App;
