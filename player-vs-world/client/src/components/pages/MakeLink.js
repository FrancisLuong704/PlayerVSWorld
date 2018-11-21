import React, { Component } from "react";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
import "./MakeLink.css"

class MakeLink extends Component {
    // create state
    state = {
        blogs: [],
        title: "",
        game: "",
        content: ""
    };

    //on input change
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // when submit form FormBtn is clicked for blogs
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.game && this.state.content) {
            API.blogAdd({
                title: this.state.title,
                game: this.state.game,
                content: this.state.content
            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
    };


    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-8">
                        <h1>Add a Blog!</h1>
                        <form>
                            <Input
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="title"
                                placeholder="Title (required)"
                            />
                            <Input
                                value={this.state.game}
                                onChange={this.handleInputChange}
                                name="game"
                                placeholder="Game (required)"
                            />
                            <Input
                                value={this.state.content}
                                onChange={this.handleInputChange}
                                name="content"
                                placeholder="Content (required)"
                            />
                            <FormBtn
                                disabled={!(this.state.game || !this.state.title || !this.state.content)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit Blog
                            </FormBtn>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default MakeLink;
//     <div className="uk-container">
//     {/* title and profile title container */}
//     <div className="uk-padding-large">
//         <h1 className="uk-heading-primary pvw">Player VS World</h1>
//         <h1 className="uk-heading-line heading"><span>Create a new post</span></h1>
//         <div className="uk-card cardContent">
//             <div className="uk-card-body">
//                 <form>
//                     Title:
//                     <Input className="uk-Input uk-margin-small"></Input>
//                     Game:
//                     <Input className="uk-Input uk-margin-small"></Input>
//                     <textarea className="uk-textarea uk-margin-small" rows="4" cols="50" placeholder="Type content here"></textarea>
//                     <FormBtn className="uk-FormBtn-secondary uk-margin-small" type="FormBtn">SUBMIT</FormBtn>
//                 </form>
//             </div>
//         </div>
//     </div>
// </div>
// );