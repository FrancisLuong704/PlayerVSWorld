import React from "react";

const Login = () => (
    <div className="uk-container uk-text-center@s">
    {/* Title */}
        <h1 className="uk-heading-primary uk-padding-large">Player VS World</h1>
        {/* form start */}
        <form>
            {/* Email Input */}
            <div className="uk-margin">
                <div className="uk-inline">
                    <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: user"></span>
                    <input className="uk-input" type="email"  placeholder="Email"></input>
                </div>
            </div>
            {/* Password Input */}
            <div className="uk-margin">
                <div className="uk-inline">
                    <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                    <input className="uk-input" type="text" placeholder="Password"></input>
                </div>
            </div>
            {/* Login Button (type=submit) */}
            <div className="uk-margin">
                <button className="uk-button uk-button-primary" type="submit">Login</button>
            </div>
            {/* this here is just in case they dont have an account. it leads to signup page */}
            <div>
                <p className=".uk-text-small"> Don't have an Account?</p>
                <a href="/SignUp">
                    <p className=".uk-text-small">Sign Up here!</p>
                </a>
            </div>
        </form>
    </div>
);

export default Login;
