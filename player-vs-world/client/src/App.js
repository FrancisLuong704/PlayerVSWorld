import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import Survey from "./components/pages/Survey";
import SignUp from "./components/pages/SignUp";
import Main from "./components/pages/Main";
import Link from "./components/pages/Link";
import MakeLink from "./components/pages/MakeLink";
import Inbox from "./components/pages/Inbox";
import './uikit/uikit.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Survey" component={Survey} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Main" component={Main} />
          <Route exact path="/Link" component={Link} />
          <Route exact path="/MakeLink" component={MakeLink} />
          <Route exact path="/Inbox" component={Inbox} />
        </div>
      </Router>
    )
  }
};

export default App;
