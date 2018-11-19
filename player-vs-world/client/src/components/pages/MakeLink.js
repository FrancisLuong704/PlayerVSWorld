import React from "react";
import "./MakeLink.css"

const MakeLink = () => (
    <div className="uk-container">
        {/* title and profile title container */}
        <div className="uk-padding-large">
            <h1 className="uk-heading-primary pvw">Player VS World</h1>
            <h1 className="uk-heading-line heading"><span>Create a new post</span></h1>
            <div className="uk-card uk-card-default">
                <div className="uk-card-body">
                <form>
                    Related Game:
                    <select className="uk-select uk-margin-small ">
                        <option>Game</option>
                    </select>
                    <textarea className="uk-textarea uk-margin-small">Type Content Here</textarea>
                    <button className="uk-button-default uk-margin-small" type="button">SUBMIT</button>               
                </form>
                </div>
            </div>
        </div>
    </div>
);

export default MakeLink;