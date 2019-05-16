import React, { Component } from 'react';

import './css/list-menu.css';

export default class ListMenu extends Component {

    /* constructor(props) {
        super(props);
        this.state = {
            level: 'Facil'
        }
    }

    componentDidMount() {
        this.setState({
            level: document.querySelector('.active').innerHTML
        });
    }

    componentWillUpdate() {
        this.setState({
            level: document.querySelector('.active').innerHTML
        });
    }
    */

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
        }
        ].map(({ name, url}) => {
            return <li className={`sdk-menu-item ${name}`} key={name}>
                    <a href={url} >{name}</a>
            </li>
        })

        return (
            <ul className="sdk-list-menu">
                {itemsMenu}
            </ul>
        )

    }
}
