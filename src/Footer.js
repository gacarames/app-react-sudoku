import React, { Component } from 'react';
import './css/footer.css';
import logoImage from './img/icons/logo-infobae.svg';

export default class Footer extends Component {
    render() {
        return (
            <footer className="app-footer">
                <div className="footer-wrapper container">
                    <img src={logoImage} alt="Infobae" className="img-logo" />
                    <p className="copyright"> Todos los derechos reservados © 2019 Infobae</p>
                </div>
            </footer>
        )
    }
}
