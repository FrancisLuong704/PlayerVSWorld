import React from "react";
import { Link } from "react-router-dom";
import Auth from '../utils/auth';
import "./NavTabs.css";
import Searchbar from "./Searchbar";



const NavTabs = props => (
    !props.token
        ? <nav className="main-nav uk-navbar-container uk-navbar uk-navbar-transparent">
            <div className="uk-navbar-left">
                {/* Our website Logo goes here */}
                <div className="uk-navbar-item uk-logo"><img className="nav-logo" src={require('../assets/images/PlayerVsWorldLogo.png')} /></div>
                {/* Search Bar is here */}
                <div className="uk-navbar-item">
                    <Searchbar />
                </div>
            </div>
                       {/* switching over to the right side of navbar */}
            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                    {/* main page link */}
    
                    <li className="nav-item">
                        <Link to='/signup'>Sign Up</Link>
                    </li>
            
                    <li className="nav-item">
                        <Link to='/login'>Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
        : <nav className="main-nav uk-navbar-container uk-navbar uk-navbar-transparent">
            <div className="uk-navbar-left">
                {/* Our website Logo goes here */}
                <div className="uk-navbar-item uk-logo"><img className="nav-logo" src={require('../assets/images/PlayerVsWorldLogo.png')} /></div>
                {/* Search Bar is here */}
                <div className="uk-navbar-item">
                    <Searchbar />
                </div>
                <div className="uk-navbar-item">
                  Welcome! {Auth.getUser()}
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
                    {/* Visit your Dashboard */}
                    <li>
                            <Link
                                to="/Dashboard"
                                className={
                                    window.location.pathname === "/Dashboard" ? "nav-link active" : "nav-link"
                                }
                            >
                                Profile
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
                        {/* Link to make a new page in forum */}
                        <li className="nav-item">
                            <Link
                                to="/Forum"
                                className={
                                    window.location.pathname === "/Forum" ? "nav-link active" : "nav-link"
                                }
                            >
                                Forums
                    </Link>
                        </li>
                        
                        {/* Visit your inbox */}
                        <li>
                            <Link
                                to="/Mail"
                                className={
                                    window.location.pathname === "/Mail" ? "nav-link active" : "nav-link"
                                }
                            >
                                Inbox
                    </Link>
                        </li>
                        {/* Sign Out and Head back to Login page */}
                        <li className="nav-item">
                        <Link to='/login'>
                                <div onClick={() => Auth.logout()}>
                                    Sign Out
                    </div>
                            </Link>
                        </li>
                </ul>
            </div>
        </nav>

);
            
 export default NavTabs;
