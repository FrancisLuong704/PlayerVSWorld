import React from "react";

const SignUp = () => (
    <div className="uk-container uk-text-center@s">
    {/* title  */}
        <h1 className="uk-padding-large uk-heading-primary">Player VS World</h1>
        {/* start form */}
        <form>
            {/* First Name Input */}
            <div className="uk-margin ">
                <div className="uk-inline">
                    <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: user"></span>
                    <input className="uk-input" type="text" placeholder="First Name"/>
                </div>
            </div>
            {/* Last Name Input */}
            <div className="uk-margin">
                <div className="uk-inline">
                    <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: user"></span>
                    <input className="uk-input" type="text" placeholder="Last Name"/>
                </div>
            </div>
            {/* Email Input */}
            <div className="uk-margin">
                <div className="uk-inline">
                    <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: user"></span>
                    <input className="uk-input" type="email" placeholder="Email"/>
                </div>
            </div>
            {/* UserName Input */}
            <div className="uk-margin">
                <div className="uk-inline">
                    <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: user"></span>
                    <input className="uk-input" type="text" placeholder="Username"/>
                </div>
            </div>
            {/* Password Input */}
            <div className="uk-margin">
                <div className="uk-inline">
                    <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                    <input className="uk-input" type="text" placeholder="Password"/>
                </div>
            </div>
            {/* submit button (type=submit) */}
            <button className="uk-button uk-button-primary" type="submit">Sign Up!</button>
        </form>
    </div>
);

export default SignUp;
