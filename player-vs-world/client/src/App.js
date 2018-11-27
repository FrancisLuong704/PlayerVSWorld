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
import inbox from "./components/pages/Inbox";
import Search from "./components/pages/Search";
import Edit from "./components/pages/Edit"
import API from "./utils/API";
import Inbox from './components/pages/Inbox'
import Auth from './utils/auth';
import Forum from "./components/pages/Forum";
import './uikit/uikit.css';
import './App.css';
import Mail from "./components/pages/Mail";
import Games from "./components/pages/games"
import Redirec from "./components/pages/redirect"


class App extends Component {
  state = {
    token: Auth.getToken(),
    person: ""
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
  getMe = () =>{
    API.whoAmI(this.props.token)
    .then(res =>{
        
        this.setState({
            person: res.data
          })
        alert(this.state.person)
    })
    .catch(err => console.log(err));
}
  render() {
    if (this.props.token)
    {
      
        this.getMe()
    }
    return (
      <Router>
        <div>
          {/* <Route exact path="/login" render={() => <LoginPage token={this.state.token} />} /> */}
          <NavTabs token={this.state.token} />
          <PrivateRoute exact path="/Dashboard" component={Dashboard} token={this.state.token} />
          <PrivateRoute exact path="/Dashboard/Friend" component={Dashboard} token={this.state.token} />
          <PrivateRoute exact path="/Dashboard/Search" component={Dashboard} token={this.state.token} />
          <Route exact path="/Login" render={() => <Login token={this.state.token} />} />
          <PrivateRoute exact path="/Survey" component={Survey} token={this.state.token} />
          <Route exact path="/SignUp" render={(routeProps) => (<SignUp {...routeProps} token={this.state.token} />)}
          />
          <PrivateRoute exact path="/Main" component={Main} token={this.state.token} />
          <PrivateRoute exact path="/Inbox"
            render={(routeProps) => (<Inbox {...routeProps} token={this.state.token} />)}
          />
          <PrivateRoute exact path="/Edit" component={Edit} token={this.state.token} />
          <PrivateRoute exact path="/Link" component={Link} token={this.state.token} />
          <PrivateRoute exact path="/Forum" component={Forum} token={this.state.token} />
          <PrivateRoute exact path="/Link" component={Link} token={this.state.token} />
          <PrivateRoute exact path="/MakeLink" component={MakeLink} token={this.state.token} />
          <PrivateRoute exact path="/Games" component={Games} token={this.state.token} />
          <PrivateRoute path="/Mail" component={Mail} token={this.state.token} />
          <PrivateRoute path="/Inbox" component={inbox} token={this.state.token} />
          <PrivateRoute path="/Search" component={Search} token={this.state.token} />
          <PrivateRoute path="/Redirec" component={Redirec} token={this.state.token} />
          <br></br>
          <footer className="uk-width-1-1 uk-margin-top uk-padding uk-text-center footer"><img className="footer-logo" src={require('../src/assets/images/footer-logo.png')} alt=""/></footer>
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
