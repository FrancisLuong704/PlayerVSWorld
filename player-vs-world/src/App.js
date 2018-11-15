import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Profile from "./components/pages/Profile";
import Login from "./components/pages/Login";
import Survey from "./components/pages/Survey";
import SignUp from "./components/pages/SignUp";
import Main from "./components/pages/Main";
import Link from "./components/pages/Link";
import MakeLink from "./components/pages/MakeLink";
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Survey" component={Survey} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Main" component={Main} />
          <Route exact path="/Link" component={Link} />
          <Route exact path="/MakeLink" component={MakeLink} />
        </div>
      </Router>
    )
  }
};

export default App;
