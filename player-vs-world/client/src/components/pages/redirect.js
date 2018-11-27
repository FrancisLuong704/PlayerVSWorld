import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Main.css";
class Redirec extends Component {

    componentDidMount() {
        console.log(this.props.location.pathname)
    }
    render() {
        return (<div/>)}
}
export default Redirec;