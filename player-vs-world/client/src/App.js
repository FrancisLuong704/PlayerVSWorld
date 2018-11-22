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
import inbox from "./components/pages/Inbox";
import Message from "./components/pages/message";
import Send from "./components/pages/Send";
import './uikit/uikit.css';
import './App.css';

import Mail from "./components/pages/Mail.js";


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
          <Route exact path="/Message" component={Message} />
          <Route exact path="/Send" component={Send} />
          <Route path="/Mail" component={Mail} />
         
        </div>
      </Router>
    )
  }
};

export default App;
