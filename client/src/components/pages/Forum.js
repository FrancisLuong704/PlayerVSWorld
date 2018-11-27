import React from "react";
import ThreadThumbnail from "./ThreadThumbnail";
import "./Forum.css"
import {Link} from "react-router-dom";

const Forum = () => (
    <div className="uk-margin-bottom">
        <div className="uk-section">
            <div className="uk-container uk-text-center uk-width-1-1 uk-padding bg-grey " >
                <h1 className='uk-margin-large text-white'>The Forum</h1>
                <div className="uk-flex-inline">
                    <div className="uk-margin-left uk-margin-right button-bg">
                    <Link to="/MakeLink"><button className="uk-button-default uk-button-large ">New Thread</button></Link>
                    </div>
                </div>                    
            </div>
        </div>

        <div className="uk-section">
            <div className="uk-container">
                <div className="uk-card-default uk-padding-large containingCard"><ThreadThumbnail></ThreadThumbnail></div>
            </div>
        </div>
    </div>
)

export default Forum;
