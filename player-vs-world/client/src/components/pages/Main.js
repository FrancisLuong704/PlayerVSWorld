import React, { Component } from "react";
import API from "../../utils/API";
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
                        <div>
                            {this.state.blogs.map(blog => (
                                <div key={blog.id}>

                                    <h1> {blog.title} </h1>

                                    <h2> {blog.game}</h2>

                                    <h3> {blog.content} </h3>

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


