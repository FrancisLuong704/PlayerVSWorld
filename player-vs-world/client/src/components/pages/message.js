import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

let id = {}

class Inbox extends Component {
    
    state = {
        Messages: {}
    };
    componentDidMount() {
        const messageId = this.props.location.state.passed
        id = { "id": messageId }
        this.getLatest()
        
    }
    getLatest = () => {
        console.log(id)
        API.getMessage(id)
            .then(res => this.setState({ Messages: res.data }))
            .catch(err => console.log(err));
    };
    deleteMessage = id => {

    };

    render() {
        return (
            <Container fluid>
                <Jumbotron >
                    
                    <div key={this.state.Messages.id}>
                        <h2>{this.state.Messages.title}</h2>
                        From: {this.state.Messages.sender}<br/>
                            To: {this.state.Messages.receiver}<br/>
                        
                        {this.state.Messages.body}
                    </div>


                </Jumbotron>
            </Container>
        )
    }
}

export default Inbox;