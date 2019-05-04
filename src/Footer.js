import React, { Component } from 'react';
import ListFooter from './ListFooter'
import './css/footer.css';
import logoImage from './img/icons/logo-infobae.svg';

export default class Footer extends Component {
    render() {
        return (
            <footer className="app-footer">
                <div className="top-wrapper container">
                    
                        <img src={logoImage} className="footer-logo" alt="Infobae" />
                    
                    
                        <span className="copyright"> Todos los derechos reservados © 2019 Infobae</span>
                    
                </div>
                <div className="bottom-wrapper container">
                    <ListFooter />
                </div>
            </footer>
        )
    }
}
