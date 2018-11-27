import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
import {Redirect} from 'react-router-dom'
import "./SignUp.css";

class SignUp extends Component {
    //create state
    state = {
        photo: "",
        description: "",
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
                  API.updateProfile({
                description: this.state.description,
                photo: this.state.photo,
               
            })
            .then(res => {
                console.log(res.status)
               if (res.status===200){
                this.setState({
                    redirect: true
                  })
               }
            })
            .catch(err => console.log(err));
        }
    
    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/Dashboard' />
        }
      }
    render() {
        return (
                <div className="uk-container uk-margin-bottom">
                    <div className="uk-text-center uk-grid uk-margin-large-bottom">   
                        {this.renderRedirect()}
                        <div className="uk-width-1-3 uk-padding" ></div>                 
                        <div className="uk-card uk-card-body cardContent uk-width-1-3 uk-margin-medium-top">
                            <form>
                                <Input
                                    value= {this.state.photo}
                                    onChange= {this.handleInputChange}
                                    name="photo"
                                    placeholder="Photo Url"
                                />
                                <Input
                                    value= {this.state.description}
                                    onChange= {this.handleInputChange}
                                    name="description"
                                    placeholder="Enter a description of yourself and the games you like to play"
                                />
                                <FormBtn
                                    disabled={!(this.state.firstName || !this.state.lastName || !this.state.email || !this.state.Username || !this.state.password )}
                                    onClick={this.handleFormSubmit}
                                >
                                    Sign Up!
                                </FormBtn>
                            </form>
                        </div>
                        <div className="uk-width-1-3 uk-padding"></div>
                    </div>
                </div>
        )
    }
}

export default SignUp;