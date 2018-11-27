import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "./Main.css";
import Searchbar from "../Searchbar";

class Search extends Component {
    state = {
        blogs: []
    }

    componentDidMount() {
        this.blogFind();
    }

    blogFind = () => {
        API.blogGame(Searchbar.state)
            .then(res => this.setState({ blogs: res.data, title: ""}))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="uk-container-large uk-margin-large ">
                <h1 className="uk-heading-primary uk-margin-medium-left">Search Results</h1>
                <div className="uk-container uk-width-1-2 container">
                    {this.state.blogs.length ? (
                        <div>
                            {this.state.blogs.map(blog => (
                                <div className="uk-card-default uk-padding postCard uk-margin">
                                    <div data-id={blog.id} key={blog.id}>
                                        <h1> <Link to={{ pathname: "/Link", state: {passed: (this, blog.id)}}}> {blog.title} </Link> </h1>
                                    </div>
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