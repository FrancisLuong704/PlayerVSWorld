import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import Survey from "./components/pages/Survey";
import SignUp from "./components/pages/SignUp";
import Main from "./components/pages/Main";
import Link from "./components/pages/Link";
import MakeLink from "./components/pages/MakeLink";
import Inbox from "./components/pages/Inbox";
import Message from "./components/pages/message";
import HomePage from './components/pages/HomePage'
import DashboardPage from './components/pages/DashboardPage';
import LoginPage from './components/pages/LoginPage'
import Authentication from './components/Authentication'
import Auth from './utils/auth';
import './uikit/uikit.css';
import './App.css';

class App extends Component {
  state = {
    token: Auth.getToken()
  }

  componentDidMount() {
    Auth.onAuthChange(this.handleAuthChange)
    console.log("test", this.state.token)
  }

  handleAuthChange = token => {
    this.setState({
      token
    })
  }
  render() {
    return (
      <Router>
        <div>
          <header>
            <Authentication token={this.state.token} />
          </header>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" render={() => <LoginPage token={this.state.token} />} />
          <PrivateRoute path="/dashboard" component={DashboardPage} token={this.state.token} />

          <NavTabs token={this.state.token}/>
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Survey" component={Survey} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Main" component={Main} />
          <Route exact path ="/step-1" render={{routeProps} => (<StepOne {...routeProps} currentStep=(this.state.currentStep}/>)}/>
          <Route exact path="/Inbox" token = {this.state.token} component={Inbox}  />
          <Route exact path="/Link" component={Link} />
          <Route exact path="/MakeLink" component={MakeLink} />
          <Route exact path="/Message" component={Message} token={this.state.token} />
        </div>
      </Router>
    )
  }
};
const PrivateRoute = ({ component: Component, token, ...rest }) => (
  <Route {...rest} render={props => (
    token ? (
      <Component {...props} token={token} />
    ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )
  )} />
)
export default App;
