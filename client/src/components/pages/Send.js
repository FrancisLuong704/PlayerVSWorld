import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Redirect } from "react-router-dom";


class Send extends Component {
    
    state = {
        books: [],
        title: "",
        receiver: "",
        body: "",
        fireRedirect:false
    };
    componentDidMount() {
        console.log(this.props)
        if(!this.props.location.state|| !this.props.location.state.passed){
            return
        }
        
        this.setState({receiver: this.props.location.state.passed})
        
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.receiver && this.state.body) {
            API.sendMessage({
                title: this.state.title,
                sender: this.props.user ,
                receiver: this.state.receiver,
                body: this.state.body
            })
                .then(res => this.setState({fireRedirect:true}))
                .catch(err => console.log(err));
        }
    };

    render() {
        const {fireRedirect} = this.state
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <form>
                            <Input
                                value={this.state.receiver}
                                onChange={this.handleInputChange}
                                name="receiver"
                                placeholder="To (required)"
                            />
                            <Input
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="title"
                                placeholder="Title (required)"
                            />

                            <TextArea
                                value={this.state.body}
                                onChange={this.handleInputChange}
                                name="body"
                                placeholder="Message (Optional)"
                            />
                            <FormBtn
                                disabled={!(this.state.body && this.state.title && this.state.receiver)}
                                onClick={this.handleFormSubmit}
                            >
                                Send
                </FormBtn>
                {fireRedirect && (<Redirect to = "/Mail/Inbox"/>)}
                        </form>
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Send;