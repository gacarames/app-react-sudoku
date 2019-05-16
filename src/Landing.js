import React, { Component } from 'react';
import logoImage from './img/icons/logo-infobae.svg';
import './css/landing.css';

export default class Landing extends Component {
    render() {
        return (
            <div className="app-landing">
                <div className="top-wrapper container">
                    
                        <img src={logoImage} className="landing-logo" alt="Infobae" />
                    
                    
                        <span className="copyright"> Todos los derechos reservados © 2019 Infobae</span>
                    
                </div>
            </div>
        )
    }
}
