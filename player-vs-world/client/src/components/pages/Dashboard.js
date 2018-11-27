
import React, { Component } from "react";
import API from "../../utils/API";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth"
class Dashboard extends Component {
  //set state
  state = {
    friends: [],
    groups: [],
    games: [],
    photo: "",
    description: "",
    user: "",
    friend: false,
    own: false

  }
  //after component mounts
  componentDidMount() {
    if (!this.props.location.state || !this.props.location.state.passed) {
      this.setState({
        user: Auth.getUser()
      }, () => {
        this.startUpScript();
      });

    }
    else {
      this.setState({
        user: this.props.location.state.passed
      }, () => {
        this.startUpScript();
      });
    }





  }
  startUpScript = () => {
    this.setState({
      friends: [],
      groups: [],
      games: [],
      photo: "",
      description: "",
      friend: false,
      own: false

    })
    if (this.state.user === Auth.getUser()) {
      this.setState({ own: true },
        () => {
          console.log("this should be triggered")
          this.loadTheRest()
        })
    }

    else {
      API.isItMe({ friend: this.state.user, user: Auth.getUser() })
        .then(res => {
          if (res.data) {
            this.setState({ friend: true })
          }
          console.log("yo I am here")
          this.loadTheRest()
        })
        .catch(err => console.log(err))

    }
  }
  loadTheRest = () => {
    console.log("me", this.state.user, "Friend", this.state.friend)
    this.friendFind();
    this.groupFind();
    this.gamesFind();
    this.findTheInfo()
  }
  difUser = newU => {
    this.setState({
      user: newU
    }, () => {
      this.startUpScript();
    });
  }
  findTheInfo = () => {
    console.log("inside find the info", this.state.user)
    API.findeProfile({ userName: this.state.user })
      .then(res => {
        if (res.data.photo !== null) {
          this.setState({
            photo: res.data.photo,

          })
        }
        if (res.data.description !== null) {
          this.setState({
            description: res.data.description
          })
        }
        console.log(this.state.photo, this.state.description)
      })
      .catch(err => console.log(err))
  }

  //findfriends
  friendFind = () => {
    console.log("friends stuff", this.state.user)
    API.friendfind({ user: this.state.user })
      .then(res => {
        if (res.data !== null) {
          this.setState({ friends: res.data })
        }
      })


      .catch(err => console.log(err))
  }
  // find groups
  groupFind = () => {
    API.groupFind(this.state.user)
      .then(res => this.setState({ groups: res.data }))
      .catch(err => console.log(err))
  }
  //find games
  gamesFind = () => {
    API.gamesFind(this.state.user)
      .then(res => {
        this.setState({ games: res.data })
      }
      )
      .catch(err => console.log(err))
  }
  // API.friendfind(this.props.match.params.user)
  AddFriend =()=>{
    console.log("yay you added a friend")
    API.friendAdd({frien:this.state.user, user:Auth.getUser()})
    .then(res=>this.startUpScript())
    .catch(err => console.log(err))
    
  }

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
                <h1 className="uk-card-title cardTitle">{this.state.user}</h1>
              </div>
              <div>

                {this.state.photo.length ? (
                  <div>
                    <img className="nav-logo" src={this.state.photo} alt="uploaded by" />
                  </div>
                ) : (
                    <img className="nav-logo" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="" />
                  )}
              </div>
              {this.state.own ? (
                <div>
                  Welcome to your Profile!
                </div>
              ) : (
                  <div>
                    <div>
                      {/* make message an envelope */}
                      Contact {this.state.user}: <Link to={{ pathname: "/Mail/Send", state: { passed: (this, this.state.user) } }}>Message</Link>
                    </div>
                    {this.state.own ? (
                      <div>
                        Welcome to your Profile!
                </div>
                    ) : (
                        <div>
                          <div>
                            {this.state.friend ? (
                              <div>
                                You and {this.state.user} are friends.
                             </div>
                            ) : (
                                <div>
                                  <div>
                                    Would you like to be friends with {this.state.user}  <div onClick={() => {
                          this.AddFriend()
                          //  replace add with plus
                        }}> ADD </div>
                                  </div>
                                </div>)}
                          </div>
                        </div>)}
                  </div>)}
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
                        <Link to={{ pathname: "/Dashboard/Friend/", state: { passed: (this, user.frien) } }}><div onClick={() => {
                          this.difUser(user.frien)
                        }}>{user.frien}</div></Link>
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