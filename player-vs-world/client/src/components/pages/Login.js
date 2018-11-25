import React, {Component} from 'react';
import Auth from '../../utils/auth'
import {Redirect} from 'react-router-dom'
import "./Login.css"

class Login extends Component {
    state = {
        email: "",
        password: ""

    }
    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = event => {
        event.preventDefault()
        const data ={
            email: this.state.email,
            password: this.state.password
        }
        fetch('/login', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                
                const token = response.token.split(' ')[1]
                Auth.login(token);
            }
                )
            .catch(error => console.error('Error:', error));
    }
    render() {
        if (this.props.token)
        {
            return <Redirect to='/dashboard'/>
        }
    return (
    <div className="uk-container uk-text-center@s">
    {/* Title */}
        <h1 className="uk-heading-primary uk-padding-large loginTitle">Player VS World</h1>
        {/* form start */}
        <form onSubmit={this.handleSubmit}>
            {/* Email Input */}
            <div className="uk-margin">
                <div className="uk-inline">
                    <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: user"></span>
                    <input className="uk-input" type="email"   name="email" placeholder="Email" onChange={this.handleInputChange} />
                </div>
            </div>
            {/* Password Input */}
            <div className="uk-margin">
                <div className="uk-inline">
                    <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                    <input className="uk-input" type="password" name="password" placeholder="Password" onChange={this.handleInputChange} />
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
    )
    }
};
export default Login;