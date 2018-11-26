import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Link extends Component {
    state = {
        blog: [],
        blogId: ""
    };

    componentDidMount() {
        if(!this.props.location.state|| !this.props.location.state.passed){
            return
        }

        this.setState({blogId: this.props.location.state.passed})
    }
}

export default Link;