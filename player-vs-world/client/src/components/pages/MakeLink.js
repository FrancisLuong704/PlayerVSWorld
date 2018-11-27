import React, { Component, Redirect } from "react";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Auth from "../../utils/auth"
import "./MakeLink.css"

let user= "";

class MakeLink extends Component {
    // create state
    state = {
        blogs: [],
        title: "",
        game: "",
        genre: "",
        content: ""
    };

    componentDidMount() {
        user = Auth.getUser();
    }

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
                user: user,
                game: this.state.game,
                genre: this.state.genre,
                content: this.state.content
            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
    };

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/Main' />
        }
      }


    render() {
        return (
            <div className="uk-container">
                <div className="uk-text-center">
                {this.renderRedirect()}
                    <div className="uk-card uk-card-body cardContent uk-width-1-1 uk-margin-medium-top uk-margin-bottom">
                    <h1 className="text-white">Post a Thread!</h1>
                        
                        <form className="uk-form">
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
                                placeholder="Related Game (required)"
                            />
                            <Input
                                value={this.state.genre}
                                onChange={this.handleInputChange}
                                name="genre"
                                placeholder="Genre (required)"
                            />
                            <TextArea
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
                    </div>
                </div>
            </div>
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
//                     <textarea className="uk-textarea uk-margin-small" rows="4" divs="50" placeholder="Type content here"></textarea>
//                     <FormBtn className="uk-FormBtn-secondary uk-margin-small" type="FormBtn">SUBMIT</FormBtn>
//                 </form>
//             </div>
//         </div>
//     </div>
// </div>
// );