
import React, { Component } from "react";
import API from "../../utils/API";
import "./Dashboard.css";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import Auth from "../../utils/auth"
let user = ""
=======
import Auth from "../../utils/auth";
let user = {};

>>>>>>> 6a7eaeacd232ff5ce48797ba5b5a4231789a92c6
class Dashboard extends Component {
  //set state
  state = {
    friends: [],
    groups: [],
    games: [],
<<<<<<< HEAD
    photo: "",
    description: "",
  }
  //after component mounts
  componentDidMount() {
    user = Auth.getUser()
    //this.friendFind();
    this.groupFind();
    this.gamesFind();
    this.findTheInfo()
  }
  findTheInfo = () => {
    API.findeProfile({ userName: user })
      .then(res => {
        this.setState({
          photo: res.data.photo,
          description: res.data.description
        })
        console.log(this.state.photo, this.state.description)
      })
      .catch(err => console.log(err))
  }

  // find friends
  friendFind = () => {
    console.log("made it this far")
    API.friendFind("Joel")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }
=======
  }
  //after component mounts
  componentDidMount() {
    user = Auth.getUser();
    console.log("dashboard user check:" + user)
    this.friendFind();
    this.groupFind();
    this.gamesFind();

  }

  //find friends
  friendFind = () => {
    API.friendFind(user)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }
>>>>>>> 6a7eaeacd232ff5ce48797ba5b5a4231789a92c6
  //find groups
  groupFind = () => {
    API.groupFind(user)
      .then(res => this.setState({ groups: res.data }))
      .catch(err => console.log(err))
  }
  //find games
  gamesFind = () => {
    API.gamesFind(user)
      .then(res => this.setState({ games: res.data }))
      .catch(err => console.log(err))
  }
  // API.friendfind(this.props.match.params.user)

  render() {
    return (
      // page container
      <div className="uk-container page-container">
        {/* title and dashboard title */}
       
        <h1 className="uk-margin-medium-left prof">Profile</h1>
        {/* card container */}
        <div className="cardRows">
          {/* friend card */}
          <div className="uk-width-1-3 uk-grid-collapse uk-grid uk-margin-medium">
            <div className="uk-card uk-card-transparent dashboardCards uk-card-body">
              <div>
              <h1 className="uk-card-title cardTitle">{user}</h1>
              </div>
              <div>
              
              {this.state.photo.length ? (
                <div>
                    <img className="nav-logo" src={this.state.photo}  />
                </div>
              ) : (
                <img className="profile-pic" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"  />
                )}
              </div>
              <div>
                Contact {user}: <Link to={{ pathname: "/Mail/Send", state: {passed: (this, user)}}}>Message</Link> 
              </div>
            </div>
          </div>
          {/* game card */}
          <div className="uk-width-2-3 cardBody uk-grid-collapse uk-grid uk-margin-medium">
            <div className="uk-card uk-card-transparent dashboardCards uk-card-body">
              <h2 className="uk-card-title cardTitle">Description</h2>
              {this.state.description.length ? (
                <div>
                   {this.state.description}
                </div>
              ) : (
                  <h3>User has not written a description</h3>
                )}
            </div>
          </div>
        </div>
        <div className="cardRows">
          {/* friend card */}
          <div className="uk-width-1-3 uk-grid-collapse uk-grid ">
            <div className="uk-card uk-card-transparent dashboardCards uk-card-body uk-margin-medium">
              <h2 className="uk-card-title cardTitle">Friends</h2>
              {this.state.friends.length ? (
                <div>
                  {this.state.friends.map(user => (
                    <div key={user.frien}>

                      <strong>
                        {user.frien}
                      </strong>

                    </div>
                  ))}
                </div>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </div>
          </div>
          {/* game card */}
          <div className="uk-width-1-3 cardBody uk-grid-collapse uk-grid ">
            <div className="uk-card uk-card-transparent dashboardCards uk-card-body uk-margin-medium">
              <h2 className="uk-card-title cardTitle">Games</h2>
              {this.state.games.length ? (
                <div>
                  {this.state.games.map(user => (
                    <div key={user.games}>

                      <strong>
                        {user.games}
                      </strong>

                    </div>
                  ))}
                </div>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </div>
          </div>
          {/* group card */}
          <div className="uk-card uk-width-1-3 cardBody uk-grid-collapse uk-grid ">
            <div className="uk-card uk-card-transparent dashboardCards uk-card-body uk-margin-medium">
              <h2 className="uk-card-title cardTitle">My Groups</h2>
              {this.state.groups.length ? (
                <div>
                  {this.state.groups.map(user => (
                    <div key={user.groups}>

                      <strong>
                        {user.groups}
                      </strong>

                    </div>
                  ))}
                </div>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;