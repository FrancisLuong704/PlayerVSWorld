import React, { Component } from "react";
import API from "../../utils/API";
import Auth from "../../utils/auth"
import "./Mail.css"

let user = "";


class Games extends Component {
    state = {
        games: [],
    }

    componentDidMount() {
        this.gamePost();
        user = Auth.getUser();
    };

    gamePost = () => {
        API.gameGet()
            .then(res => this.setState({ games: res.data }))
            .catch(err => console.log(err))
    };

    handleSubmit = (game) => {
        console.log(game)
        API.gamesAdd({
            user: user,
            games: game,
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="uk-container uk-margin-medium-top">
                {this.state.games.length ? (
                    <div className="uk-card-secondary uk-card-body" >
                        <table className="messageDump uk-table-striped uk-text-center" id="clickIt">
                            <tbody>
                                {this.state.games.map(games => (
                                    <tr key={games.id}>

                                        <td class="color-white">{games.name}</td>
                                        <td class="color-white">{games.genre}</td> 
                                        <td class="color-white"><button className="uk-button uk-button-default" onClick={() => this.handleSubmit(games.name)}>Add</button></td>
                                        

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                        <h3>No Results to Display</h3>
                    )}
            </div>
        )
    }

}

export default Games;