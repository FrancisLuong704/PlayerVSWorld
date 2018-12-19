import React, { Component } from "react";
import API from "../utils/API";
import {Redirect} from 'react-router-dom'

class Searchbar extends Component {
    state = {
        query: '',
        redirect:false
    }

         
    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
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
            console.log(this.state.inFriend, "the state of fiends")
            console.log("made it in redirect")
             this.setState({redirect:false})
            return <Redirect to={`/Dashboard/Friend/${this.state.query}`}/>
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