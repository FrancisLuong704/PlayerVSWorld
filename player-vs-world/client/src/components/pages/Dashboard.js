import React from "react";
//import FriendCard from "../friendCard";
import "./Dashboard.css";

const Dashboard = () => (
  // page container
  <div className="uk-container-large page-container">
    {/* title and dashboard title */}
      <h1 className="uk-heading-primary uk-margin-medium-left pvw">Player VS World</h1>
      <h1 className="uk-margin-medium-left prof">My Profile</h1>
    {/* card container */}
    <div className="cardRows">
      {/* friend card */}
      <div className="uk-width-1-3@s cardBody uk-grid-collapse uk-grid uk-margin-small-left uk-margin-small-right">
        <div className="uk-card uk-card-transparent dashboardCards uk-card-body">
          <h2 className="uk-card-title cardTitle">My Friends</h2>
          <p>Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div><friendCard></friendCard></div>
        </div>
      </div>
      {/* game card */}
      <div className="uk-width-1-3@s cardBody uk-grid-collapse uk-grid uk-margin-small-left uk-margin-small-right">
        <div className="uk-card uk-card-transparent dashboardCards uk-card-body">
          <h2 className="uk-card-title cardTitle">My Games</h2>
          <p>Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      {/* group card */}
      <div className="uk-card uk-width-1-3@s cardBody uk-grid-collapse uk-grid uk-margin-small-left uk-margin-small-right">
        <div className="uk-card uk-card-transparent dashboardCards uk-card-body">
          <h2 className="uk-card-title cardTitle">My Groups</h2>
          <p>Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;