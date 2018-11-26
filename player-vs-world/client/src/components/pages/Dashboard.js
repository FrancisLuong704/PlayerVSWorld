
import React, { Component } from "react";
import API from "../../utils/API";
import "./Dashboard.css";

class Dashboard extends Component {
  //set state
  state = {
    friends: [],
    groups: [],
    games: []
  }
  //after component mounts
  componentDidMount() {
    //this.friendFind();
    this.groupFind();
    this.gamesFind();
  }
  //find friends
  // friendFind = () => {
  //   console.log("made it this far")
  //   API.friendFind("Joel")
  //     .then(res => this.setState({ friends: res.data }))
  //     .catch(err => console.log(err))
  // }
  //find groups
  groupFind = () => {
    API.groupFind("Joel")
      .then(res => this.setState({ groups: res.data }))
      .catch(err => console.log(err))
  }
  //find games
  gamesFind = () => {
    API.gamesFind("Joel")
      .then(res => this.setState({ games: res.data }))
      .catch(err => console.log(err))
  }
  // API.friendfind(this.props.match.params.user)

  render() {
    return (
      // page container
      <div className="uk-container page-container">
        {/* title and dashboard title */}
        <h1 className="uk-heading-primary uk-margin-medium-left pvw">Player VS World</h1>
        <h1 className="uk-margin-medium-left prof">Profile</h1>
        {/* card container */}
        <div className="cardRows">
          {/* friend card */}
          <div className="uk-width-1-3@s  uk-grid-collapse uk-grid uk-margin-small-left uk-margin-small-right">
            <div className="uk-card uk-card-transparent dashboardCards uk-card-body">
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
          <div className="uk-width-1-3@s cardBody uk-grid-collapse uk-grid uk-margin-small-left uk-margin-small-right">
            <div className="uk-card uk-card-transparent dashboardCards uk-card-body">
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
          <div className="uk-card uk-width-1-3@s cardBody uk-grid-collapse uk-grid uk-margin-small-left uk-margin-small-right">
            <div className="uk-card uk-card-transparent dashboardCards uk-card-body">
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