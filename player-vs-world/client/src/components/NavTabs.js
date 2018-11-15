import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (
    <nav className="uk-navbar-container uk-navbar">
    {/* left side of navbar */}
        <div className="uk-navbar-left">
            {/* Our website Logo goes here */}
            <div className="uk-navbar-item uk-logo">Logo</div>
            {/* Search Bar is here */}
            <div className="uk-navbar-item">
                <form>
                    <input className="uk-input uk-form-width-large" type="text" placeholder="Search Games/Forums/Profiles" />
                    <button className="uk-button uk-button-default">Search</button>
                </form>
            </div>
        </div>
        {/* switching over to the right side of navbar */}
        <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
            {/* main page link */}
                <li className="nav-item">
                    <Link
                        to="/Main"
                        className={
                            window.location.pathname === "/Main" ? "nav-link active" : "nav-link"
                        }
                    >
                        Main
                    </Link>
                </li>
                {/* Link to make a new page in forum */}
                <li className="nav-item">
                    <Link
                        to="/MakeLink"
                        className={
                            window.location.pathname === "/MakeLink" ? "nav-link active" : "nav-link"
                        }
                    >
                        new Forum
                    </Link>
                </li>
                {/* Visit your profile */}
                <li>
                    <Link
                        to="/Profile"
                        className={
                            window.location.pathname === "/Profile" ? "nav-link active" : "nav-link"
                        }
                    >
                        Profile
                    </Link>
                </li>
                {/* Sign Out and Head back to Login page */}
                <li className="nav-item">
                    <Link
                        to="/Login"
                        className={
                            window.location.pathname === "/Login" ? "nav-link active" : "nav-link"
                        }
                    >
                        Sign Out
                    </Link>
                </li>
            </ul>
        </div>
    </nav>

);

export default NavTabs;
