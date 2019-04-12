import React, { Component } from 'react';
import ListMenu from './ListMenu';
import './css/nav-bar.css';
import logoImage from './img/icons/logo-infobae.svg';

export default class NavBar extends Component {
    constructor() {
        super();

        this.state = {
            shown: true,
            condition: false
        }

    }

    toggle() {
        this.setState({
            shown: !this.state.shown,
            condition: !this.state.condition
        });
    }

    render() {

        /* var hidden = {
            display: this.state.shown ? "none" : "block"
        } */

        var hidden = this.state.shown ? "" : "active";

        var condition = this.state.condition ? "close" : "";

        /* var condition = {
            display: this.state.condition ? "button toggled" : "button"
        }; */

        return (
            <div className="nav-bar">

                <button className={`btn-toggle-menu ${condition}`} onClick={this.toggle.bind(this)}></button>

                <img src={logoImage} alt="Infobae" className="img-logo" />

                <div /* style={hidden} */ className={`sidenav ${hidden}`}>
                    <ListMenu />
                </div>

            </div>
        )
    }
}