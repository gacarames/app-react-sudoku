import React, { Component } from 'react';

import ClickOutHandler from 'react-onclickout';

import ListMenu from './ListMenu';

/* import { NavLink } from 'react-router-dom' */

import './css/nav-bar.css';

import logoImage from './img/icons/logo-infobae.svg';

export default class NavBar extends Component {

    constructor() {
        super();

        this.state = {
            shown: true,
            condition: false
        };
    }

    toggle() {
        this.setState({
            shown: !this.state.shown,
            condition: !this.state.condition
        });
    }

    onClickOut(e) {

        if (e.target.classList.contains('btn-toggle-menu')) return;

        this.setState({
            shown: true,
            condition: false
        });

        /* console.log('user clicked outside of the component!'); */
    }

    render() {

        var hidden = this.state.shown ? "" : "active";

        var condition = this.state.condition ? "close" : "";

        return (
            <div className="nav-bar">

                <button className={`btn-toggle-menu ${condition}`} onClick={this.toggle.bind(this)}></button>

                <img src={logoImage} alt="Infobae" className="img-logo" />

                <ClickOutHandler onClickOut={this.onClickOut.bind(this)}>
                    <div className={`sidenav ${hidden}`}>
                        <ListMenu />
                    </div>
                </ClickOutHandler>


            </div>
        )
    }
}