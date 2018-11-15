import React from "react";

const Survey = () => (
    <div className="uk-container uk-text-center@s">
        <h1 className="uk-padding-large uk-heading-primary">Player VS World</h1>
        <form>
            <div className="uk-margin">
                <div className="uk-form-label">Which Gaming Platform Do You Prefer? -check all that apply</div>
                <div className="uk-form-controls uk-form-controls-text">
                    <label><input className="uk-radio" type="radio"name="radio1" value="Computer"/> Computer</label><br></br>
                    <label><input className="uk-radio" type="radio" name="radio1" value="Nintendo"/> Nintendo</label><br></br>
                    <label><input className="uk-radio" type="radio" name="radio1" value="Playstation"/> Playstation</label><br></br>
                    <label><input className="uk-radio" type="radio" name="radio1" value="Tabletop"/> Tabletop</label><br></br>
                    <label><input className="uk-radio" type="radio" name="radio1" value="XBox"/> XBox</label><br></br>
                    <label>
                        <input className="uk-radio" type="radio" name="radio1"/> If other(please specify) <br></br>
                            <textarea name="otherPlat" id="otherPlat" cols="50" rows="02"></textarea>
                    </label>
                </div>
            </div>
            
            <div className="uk-margin">
                <div className="uk-form-label">Which Type Of Games Do You Like To Play? -check all that apply</div>
                <div className="uk-form-controls uk-form-controls-text">
                    <label><input className="uk-radio" type="radio" name="radio2"/> FPS</label><br></br>
                    <label><input className="uk-radio" type="radio" name="radio2"/> RTS</label><br></br>
                    <label><input className="uk-radio" type="radio" name="radio2"/> MMORPG</label><br></br>
                    <label><input className="uk-radio" type="radio" name="radio2"/> Adventure</label><br></br>
                    <label><input className="uk-radio" type="radio" name="radio2"/> Combat</label><br></br>
                    <label><input className="uk-radio" type="radio" name="radio2"/> Sports</label><br></br>
                    <label>
                        <input className="uk-radio" type="radio" name="radio2"/> If other(please specify) <br></br>
                            <textarea name="otherType" id="otherType" cols="50" rows="02"></textarea>
                    </label>
                </div>
            </div>
            
            <div className="uk-margin">
                <div className="uk-form-label">Do You Prefer... -check all that apply</div>
                <div className="uk-form-controls uk-form-controls-text">
                    <label><input className="uk-radio" type="radio" name="radio3"/> Playing Solo - Offline</label><br></br>
                    <label><input className="uk-radio" type="radio" name="radio3"/> Playing Solo - Online</label><br></br>
                    <label><input className="uk-radio" type="radio" name="radio3"/> Playing with Friends in Person</label><br></br>
                </div>
            </div>
            
            <div className="uk-margin">
                <div className="uk-form-label">Do You Prefer...</div>
                <div className="uk-form-controls uk-form-controls-text">
                    <label><input className="uk-radio" type="radio" name="radio4"/> A Virtual Gaming Experience</label><br></br>
                    <label><input className="uk-radio" type="radio" name="radio4"/> An In-Person Gaming Experience</label><br></br>
                    <label><input className="uk-radio" type="radio" name="radio4"/> Either Or Sounds like a Blast</label><br></br>
                </div>
            </div>
            
            <div className="uk-margin">
                <div className="uk-form-label">What Would You Say Your Experience Level Is?</div>
                <div className="uk-form-controls uk-form-controls-text">
                    <label><input className="uk-radio" type="radio" name="radio5"/> Beginner - No Playing Experience</label><br></br>
                    <label><input className="uk-radio" type="radio" name="radio5"/> Novice - Relative amount of Gaming Experience</label><br></br>
                    <label><input className="uk-radio" type="radio" name="radio5"/> Intermediate - Been Playing for a while, Can Handle Your Own</label><br></br>
                    <label><input className="uk-radio" type="radio" name="radio5"/> Advanced - Skips to Hard Mode, Competitive, Hardly loses</label><br></br>
                    <label><input className="uk-radio" type="radio" name="radio5"/> Expert - Best of the Best</label><br></br>
                </div>
            </div>
            
            <button className="uk-button uk-button-primary" type="submit">Submit</button>
        </form>
    </div>
);

export default Survey;
