import React, { Component } from 'react';
/* import { NavLink } from 'react-router-dom'; */
import './css/list-menu.css';

export default class ListMenu extends Component {

    render() {
        var itemsMenu = [{
            name: 'argentina',
            url: 'https://www.infobae.com/?noredirect'
        },
        {
            name: 'américa',
            url: 'https://www.infobae.com/america/'
        },
        {
            name: 'deportes',
            url: 'https://www.infobae.com/deportes/'
        },
        {
            name: 'teleshow',
            url: 'https://www.infobae.com/teleshow/'
        },
        {
            name: 'Registrate al Newsletter',
            url: 'https://www.infobae.com/newsletter/'
        }
        ].map(({ name, url }) => {
            return <li className={`sdk-menu-item ${name}`} key={name}>
                <a href={url} >{name}</a>
            </li>
        })
        return (
            <ul className="sdk-list-menu">
                {itemsMenu}
                {/* <li className="sdk-menu-item">
                    <NavLink exact to="/" activeClassName="selected">Inicio</NavLink>
                </li>
                <li className="sdk-menu-item">
                    <NavLink exact to="/sudoku" activeClassName="selected">Sudoku</NavLink>
                </li> */}
            </ul>
            
        )
    }

    
}
