import React from "react";
import "./Mail.css"
import Inbox from './Inbox';
import Sent from './Sent';
import {Route, Link} from "react-router-dom";



const Mail = () => (
    <div class="uk-text-center uk-grid uk-margin-top" uk-grid>
        <div class="uk-width-1-4">
            <div class="uk-nav uk-card-default uk-nav-default uk-margin-left nav-bg uk-padding card  ">
                <ul class="uk-nav uk-nav-default uk-nav-center">
                    <li class="uk-nav-header"><Link to="/Mail/Inbox"><h2 class="color-white">Inbox</h2></Link></li>
                    <li><Link to="/Mail/Sent"><h2 class="color-white">Sent</h2></Link></li>
                    <li><Link to="/Mail/Trash"><h2 class="color-white">Trash</h2></Link></li>                    
                </ul>
            </div>
        </div>

        <div class="uk-width-3-4">
                <div class="uk-card uk-card-body nav-bg card">   
                    <h3 class="uk-card-title color-white">Messages</h3>
                    <Route exact path="/Mail/Inbox" component={Inbox} />
                    <Route exact path="/Mail/Sent" component={Sent} />
                    <Route exact path="/Mail/Trash" component={Inbox} />
                </div>
        </div>        
    </div>
);

export default Mail;