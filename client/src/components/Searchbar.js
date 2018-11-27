import React, { Component } from "react";
import { Link } from "react-router-dom";



class Searchbar extends Component {
    state = {
        query: '',
    }

         
    handleInputChange = () => {
        this.setState({
          query: this.search.value
        });
    }
  

    render() {
        return(
            <form>
                <input className="uk-input uk-form-width-large" type="text" placeholder="Search Games/Forums/Dashboards" ref={input => this.search = input}  onChange={this.handleInputChange}></input>
                <Link to="/Search" className={window.location.pathname === "/Search" ? "nav-link active" : "nav-link"}><button className="uk-button uk-button-default "><label className="search-text">Search</label></button></Link>
            </form>
        )
       
    }
}

export default Searchbar;