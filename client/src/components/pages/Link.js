import React, { Component } from "react";
import API from "../../utils/API";
import Auth from "../../utils/auth";
import { Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
let id = {};
let sender = {};

class Link extends Component {
    //set state
    state = {
        blog: [],
        comments: [],
        comment: ""
    };
    //once component mounts
    componentDidMount() {
        id = this.props.location.state.idpassed
        sender = Auth.getUser();
        this.blogId();
        this.commentFind();
        console.log(`this is the sender:` + sender);
    }
    //grab the blogId
    blogId = () => {
        API.blogId(id)
            .then(res => this.setState({ blog: res.data}))
            .catch(err => console.log(err))
    }
    //find all comments related to title of blog
    commentFind = () => {
        API.commentFind()
            .then(res => this.setState({ comments: res.data }))
            .catch(err => console.log(err))
    }
    //handle input change in form
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    //once you click the submit form button
    handleFormSubmit = event => {
        event.preventDefault();
        //if a comment exists then call the api route and add it
        if (this.state.comment) {
            API.commentAdd({
                title: event,
                sender: sender,
                comments: this.state.comment
            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
    };

    render() {

        return (
            <div className="uk-container uk-margin-large-top">
                <div className="uk-card-default uk-padding">
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
                        )} {/* create a form for inputting comments */}
                        <form>
                            <TextArea
                                value={this.state.comment}
                                onChange={this.handleInputChange}
                                name="comment"
                                placeholder="Comment Here"
                            />
                            <FormBtn
                                disabled={!(this.state.comment)}
                                onClick={this.handleFormSubmit}
                            >
                                Add Comment!
                            </FormBtn>
                        </form>
                        {/* map through comments and post */}
                        {this.state.comments.length ? (
                            <div>
                                {this.state.comments.map(comments => (
                                    <div key={comments.id}>
                                        <h1> {comments.comments} </h1>
                                    </div>
                                ))}
                            </div>
                        ) : (
                                <h3>.</h3>
                            )}
                </div>
                    
            </div>
        )
    }
}

export default Link;