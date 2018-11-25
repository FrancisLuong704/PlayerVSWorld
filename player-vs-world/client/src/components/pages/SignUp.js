import React, { Component } from "react";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
import "./SignUp.css";

class SignUp extends Component {
    //create state
    state = {
        firstName: "",
        lastName: "",
        Username: "",
        email: "",
        password: "",
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
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
    };

    render() {
        return (
                <div className="uk-container">
                    <div className="uk-text-center">                    
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


//  <div className="uk-container uk-text-center@s">
// {/* title  */}
//     <h1 className="uk-padding-large uk-heading-primary signupTitle">Player VS World</h1>
//     {/* start form */}
//     <form>
//         {/* First Name Input */}
//         <div className="uk-margin ">
//             <div className="uk-inline">
//                 <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: user"></span>
//                 <input className="uk-input" type="text" placeholder="First Name"/>
//             </div>
//         </div>
//         {/* Last Name Input */}
//         <div className="uk-margin">
//             <div className="uk-inline">
//                 <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: user"></span>
//                 <input className="uk-input" type="text" placeholder="Last Name"/>
//             </div>
//         </div>
//         {/* Email Input */}
//         <div className="uk-margin">
//             <div className="uk-inline">
//                 <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: user"></span>
//                 <input className="uk-input" type="email" placeholder="Email"/>
//             </div>
//         </div>
//         {/* UserName Input */}
//         <div className="uk-margin">
//             <div className="uk-inline">
//                 <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: user"></span>
//                 <input className="uk-input" type="text" placeholder="Username"/>
//             </div>
//         </div>
//         {/* Password Input */}
//         <div className="uk-margin">
//             <div className="uk-inline">
//                 <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
//                 <input className="uk-input" type="text" placeholder="Password"/>
//             </div>
//         </div>
//         {/* submit button (type=submit) */}
//         <button className="uk-button uk-button-primary" type="submit">Sign Up!</button>
//     </form>
// </div> 