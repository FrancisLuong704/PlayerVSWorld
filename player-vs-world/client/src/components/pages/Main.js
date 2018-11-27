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
            .then(res => this.setState({ blogs: res.data}))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="uk-container-large uk-margin-large ">
                <h1 className="uk-heading-primary uk-margin-medium-left mainPVW">Player VS World</h1>
                <div className="uk-container uk-width-1-2 container">
                    {this.state.blogs.length ? (
                        <div>
                            {this.state.blogs.map(blogs => (
                                <div key={blogs.id}>
                                    <h1> <Link to={{ pathname: "/Link", state: {titlepassed: (this, blogs.title)}, state: {idpassed: (this, blogs.id)} }}> {blogs.title} </Link> </h1>
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

export default Main;