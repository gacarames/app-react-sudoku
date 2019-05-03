import React, { Component } from 'react';
import './css/list-footer.css';

export default class ListFooter extends Component {

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
        

        var itemsFooter = [{
            name: 'Apps',
            url: 'https://www.infobae.com/apps/'
        },
        {
            name: 'Últimas noticias',
            url: 'https://www.infobae.com/ultimas-noticias/'
        },
        {
            name: 'RSS',
            url: 'https://www.infobae.com/feeds/rss/'
        },
        {
            name: 'Sitemap',
            url: 'https://www.infobae.com/sitemap.xml'
        },
        {
            name: 'Contacto',
            url: 'https://www.infobae.com/mailto:contacto@infobae.com'
        },
        {
            name: 'Redacción',
            url: 'https://www.infobae.com/mailto:redaccion@infobae.com'
        },
        {
            name: 'Red de Periodistas',
            url: 'http://cdn01.ib.infobae.com/adjuntos/162/documentos/periodistas/index.html'
        },
        {
            name: 'Comercial',
            url: 'https://www.infobae.com/mailto:comercial@infobae.com'
        },
        {
            name: 'Media Kit',
            url: 'http://mediakit.infobae.com'
        },
        {
            name: 'Facebook',
            url: 'http://www.facebook.com/infobae'
        },
        {
            name: 'Instagram',
            url: 'http://www.instagram.com/infobae'
        },
        {
            name: 'Twitter',
            url: 'http://www.twitter.com/infobae'
        },
        {
            name: 'Política de Privacidad',
            url: 'https://www.infobae.com/politicas-de-privacidad/'
        },
        {
            name: 'Términos y Condiciones',
            url: 'https://www.infobae.com/terminos-y-condiciones/'
        }
        ].map(({ name, url}) => {
            return <li className={`sdk-menu-item ${name}`} key={name}>
                    <a href={url} >{name}</a>
            </li>
        })

        return (
            <ul className="sdk-list-menu">
                {itemsFooter}
            </ul>
        )

    }
}
