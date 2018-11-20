import React from "react";
import "./MakeLink.css"

const MakeLink = () => (
    <div className="uk-container">
        {/* title and profile title container */}
        <div className="uk-padding-large">
            <h1 className="uk-heading-primary pvw">Player VS World</h1>
            <h1 className="uk-heading-line heading"><span>Create a new post</span></h1>
            <div className="uk-card cardContent">
                <div className="uk-card-body">
                <form>
                    Title:
                    <input className="uk-input uk-margin-small"></input>
                    Related Game:
                    <select className="uk-select uk-margin-small ">
                        <option>Game</option>
                    </select>
                    <textarea className="uk-textarea uk-margin-small" rows="4" cols="50" placeholder="Type content here"></textarea>
                    <button className="uk-button-secondary uk-margin-small" type="button">SUBMIT</button>               
                </form>
                </div>
            </div>
        </div>
    </div>
);

export default MakeLink;