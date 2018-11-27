import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "./Main.css";
import Searchbar from "../Searchbar";

class Search extends Component {
    state = {
        friend: []
    }

    componentDidMount() {
        this.userSearch();
    }

    userSearch = () => {
        API.userSearch(Searchbar.state)
            .then(res => this.setState({ friend: res.data}))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="uk-container-large uk-margin-large ">
                <h1 className="uk-heading-primary uk-margin-medium-left">Search Results</h1>
                <div className="uk-container uk-width-1-2 container">
                    {this.state.friend.length ? (
                        <div>
                            {this.state.friend.map(friend => (
                                <div className="uk-card-default uk-padding postCard uk-margin">
                                    
                                        <h1>{friend.n}</h1>
                                    
                                </div>
                            ))}
                        </div>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </div>
            </div>
        )
    }
}

export default Search;