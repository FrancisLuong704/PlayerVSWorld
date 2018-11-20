import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import DeleteBtn from "../../components/DeleteBtn";
import { Link } from "react-router-dom";
import "./Inbox.css"
const data = { "receiver": "max" }

class Inbox extends Component {
    state = {
        Messages: [],
        title: "",
        sender: "",
        id:"",
      
    };
    componentDidMount() {
        this.getLatest();
    }
    getLatest = () => {
        console.log()
        API.getMessages(data)
            .then(res =>
                this.setState({ Messages: res.data, id:"", title: "", sender: ""})
            )
            .catch(err => console.log(err));
    };
    deleteMessage = id => {
        console.log("made it", )
        API.deleteReciever({"id":id, "receiver":data.receiver})
      .then(res => this.getLatest())
      .catch(err => console.log(err));
    };
    render() {
        return (
            <Container fluid>
                    {this.state.Messages.length ? (
                        <table className="messageDump table-hover" id="clickIt">
                        <tbody>
                        {this.state.Messages.map(message => (
                            
                            <tr key={message.id} className="clickThis">
                                <td className="sender">{message.sender} </td>
                                    <td className="message" value = {message.id} ><Link to={{ pathname: "/message", state: {passed: (this, message.id)}}}>
                                        {message.title}</Link></td>
                                    <td className="delete"><center><button className="btn btn-danger" onClick={this.deleteMessage.bind(this, message.id)}>X</button></center></td>
                            </tr>
                            
                            ))
                        }
                    </tbody>
                    </table>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
            </Container>
        )
    }
}

export default Inbox;