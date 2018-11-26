import React, { Component } from "react";
import API from "../../utils/API";
import "./message.css";

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
            <div className="uk-container">
                <div className="uk-card-default message-card">
                    
                    <div key={this.state.Messages.id} >
                        <h2>{this.state.Messages.title}</h2>
                        <p className="uk-text-meta uk-margin-left uk-flex-inline">From: {this.state.Messages.sender}</p>
                        <p className="uk-text-meta uk-margin-left uk-flex-inline"> To: {this.state.Messages.receiver}</p>
                        
                        <p className="uk-padding-small uk-text-left">{this.state.Messages.body}</p>
                    </div>


                </div>
            </div>
        )
    }
}

export default Inbox;