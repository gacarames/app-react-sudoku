import React, { Component } from 'react'

export default class TitleGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Sudoku'
        };
    }

    render() {
        return (
            <div className="title-game-wrapper">
                <h1 className="title">{this.state.title}</h1>
            </div>
        )
    }
}
/* export default TitleGame */
