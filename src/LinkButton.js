import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './css/link-button.css';

export default class linkButton extends Component {
    render() {
        return (
          <NavLink exact to="/sudoku" className="btn btn-block link-button" >Jugar</NavLink>
        )
    }
}