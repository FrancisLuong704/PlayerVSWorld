import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
let id = {}

class Link extends Component {
    state = {
        blog: [],
    };

    componentDidMount() {
        id = this.props.location.state.passed
        this.blogI();
    }

    blogI = () => {
        API.blogId(id)
            .then(res => this.setState({ blog: res.data, id: "", title: "", game: "", content: ""  }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                    {this.state.blog.length ? (
                        <div>
                            {this.state.blog.map(blog => (
                                <div key={blog.id}>
                                    <h1> {blog.title} </h1>
                                    <h2> {blog.game} </h2>
                                    <h3> {blog.content} </h3>
                                </div>
                            ))}
                        </div>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}

                    
            </Container>
        )
    }
}

export default Link;