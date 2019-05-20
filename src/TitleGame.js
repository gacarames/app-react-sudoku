import React, { Component } from 'react';
import './css/title-game.css';

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
                <h1 className={"title " + this.props.align}>{this.state.title}</h1>
            </div>
        )
    }
}
