import React, { Component } from "react";
import API from "../../utils/API";
import Auth from "../../utils/auth"
import "./Mail.css"

let user = {};


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
            <div>
                {this.state.games.length ? (
                    <div>
                        {this.state.games.map(games => (
                            <div key={games.id}>

                                <h2 class="color-white">
                                    {games.name}
                                    {games.genre}
                                    <button className="uk-button uk-button-default" onClick={() => this.handleSubmit(games.name)}>Add</button>
                                </h2>

                            </div>
                        ))}
                    </div>
                ) : (
                        <h3>No Results to Display</h3>
                    )}
            </div>
        )
    }

}

export default Games;