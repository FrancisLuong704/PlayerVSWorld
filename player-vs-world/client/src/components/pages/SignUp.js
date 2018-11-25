import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
import {Redirect} from 'react-router-dom'
import "./SignUp.css";

class SignUp extends Component {
    //create state
    state = {
        firstName: "",
        lastName: "",
        Username: "",
        email: "",
        password: "",
        redirect: false
    }

    // on input change
    handleInputChange = event => {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    //when submit for FormBtn is clicked for a new user
    handleFormSubmit = event => {
        event.preventDefault();
        if(this.state.firstName && this.state.lastName && this.state.Username && this.state.email && this.state.password) {
            API.newUser({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                Username: this.state.Username,
                email: this.state.email,
                password: this.state.password
            })
            .then(res => {
               if (res.status===200){
                this.setState({
                    redirect: true
                  })
               }
            })
            .catch(err => console.log(err));
        }
    };
    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/login' />
        }
      }
    render() {
        return (
                <div className="uk-container">
                    <div className="uk-text-center">   
                    {this.renderRedirect()}                 
                        <div className="uk-card uk-card-body cardContent uk-width-1-1 uk-margin-medium-top">
                            <form>
                                <Input
                                    value= {this.state.firstName}
                                    onChange= {this.handleInputChange}
                                    name="firstName"
                                    placeholder="First Name"
                                />
                                <Input
                                    value= {this.state.lastName}
                                    onChange= {this.handleInputChange}
                                    name="lastName"
                                    placeholder="Last Name"
                                />
                                <Input
                                    value= {this.state.Username}
                                    onChange= {this.handleInputChange}
                                    name="Username"
                                    placeholder="UserName"
                                />
                                <Input
                                    value= {this.state.email}
                                    onChange= {this.handleInputChange}
                                    name="email"
                                    placeholder="email"
                                />
                                <Input
                                    value= {this.state.password}
                                    onChange= {this.handleInputChange}
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                                <FormBtn
                                    disabled={!(this.state.firstName || !this.state.lastName || !this.state.email || !this.state.Username || !this.state.password )}
                                    onClick={this.handleFormSubmit}
                                >
                                    Sign Up!
                                </FormBtn>
                            </form>
                        </div>
                    </div>
                </div>
        )
    }
}

export default SignUp;