import React, { Component } from "react";
import API from "../utils/API";
import {Redirect, Link} from 'react-router-dom'

class Searchbar extends Component {
    state = {
        query: '',
        redirect:false
    }

         
    handleInputChange = event => {
        console.log(event.target)
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
        console.log(this.state.query)
    }
  
    handleSubmit = event => {
        event.preventDefault()
        const data = {
            user: this.state.query,
        }
        console.log("what is data",data)
        API.userSearch(data)
        .then(res => {
            
          if(res.data){
              console.log( "were going to make it after all")
              this.setState({redirect:true})
              
            // 
          }
          else{
              alert("Could not locate requested user!")
          }
        }
        )
        .catch(err => console.log(err))
    
       
          
          
    
    
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            console.log("made it in redirect")
            return <Redirect to={{ pathname: "/Dashboard/Friend/", state: { passed: (this, this.state.query) }}}/>
        }
      }
    
    render() {
        return(
            <div>
            {this.renderRedirect()}
            <form>
                <input className="uk-input" type="text" name="query" placeholder="Search for user" onChange={this.handleInputChange} />
                <button className="uk-button uk-button-default" onClick={this.handleSubmit}><label className="search-text">Search</label></button>
            </form>
            </div>
        )
       
    }
}

export default Searchbar;