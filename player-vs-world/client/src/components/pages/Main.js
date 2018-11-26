import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "./Main.css";

class Main extends Component {
    state = {
        blogs: []
    }

    componentDidMount() {
        this.blogFind();
    }

    blogFind = () => {
        API.blogFind()
            .then(res => this.setState({ blogs: res.data, title: "", game: "", content: "" }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="uk-container-large">
                <h1 className="uk-heading-primary uk-margin-medium-left mainPVW">Player VS World</h1>
                <div className="uk-container uk-width-1-3">
                    {this.state.blogs.length ? (
                        // <Link to="/Link">
                        <div>
                            {this.state.blogs.map(blog => (
                                <div data-id={blog.id} key={blog.id}>
                                    <h1> <Link to={{ pathname: "/Link", state: {passed: (this, blog.id)}}}> {blog.title} </Link> </h1>
                                    <h2> {blog.game}</h2>
                                    <h3> {blog.content} </h3>
                                </div>
                            ))}
                        </div> // </Link>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </div>
            </div>
        )
    }
}

export default Main;


