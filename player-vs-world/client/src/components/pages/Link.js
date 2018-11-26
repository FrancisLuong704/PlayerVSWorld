import React, { Component } from "react";
import API from "../../utils/API";
<<<<<<< HEAD
let id = {}
=======
import Auth from "../../utils/auth";
import { Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
let id = {};
let sender = {};
let title = {};
>>>>>>> 6a7eaeacd232ff5ce48797ba5b5a4231789a92c6

class Link extends Component {
    //set state
    state = {
        blog: [],
        comments: [],
        comment: ""
    };
    //once component mounts
    componentDidMount() {
        title = this.props.location.state.titlepassed
        id = this.props.location.state.idpassed
        sender = Auth.getUser();
        this.blogId();
        this.commentFind();
        console.log(`this is the sender:` + sender);
        console.log("this is the title:" + title);
    }
    //grab the blogId
    blogId = () => {
        API.blogId(id)
            .then(res => this.setState({ blog: res.data}))
            .catch(err => console.log(err))
    }
    //find all comments related to title of blog
    commentFind = () => {
        API.commentFind(title)
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
                title: title,
                sender: sender,
                comments: this.state.comment
            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
    };

    render() {

        return (
<<<<<<< HEAD
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
                        )}
                </div>
                    
            </div>
=======
            <Container>
                {/* map through blog and post it */}
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
                {/* create a form for inputting comments */}
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
            </Container>
>>>>>>> 6a7eaeacd232ff5ce48797ba5b5a4231789a92c6
        )
    }
}

export default Link;