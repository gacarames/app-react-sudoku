import React, { Component } from 'react';
import TitleGame from './TitleGame';
import Info from './Info';

import LinkButton from './LinkButton';

import './css/landing.css';

export default class Landing extends Component {
    render() {
        return (
            <div className="sdk-landing">
                <div className="sdk-landing-wrapper container d-flex flex-column justify-content-center align-items-center">
                    <TitleGame align="center" />
                    <Info align="center" />
                    <LinkButton/>
                </div>
            </div>
        )
    }
}