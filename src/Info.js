import React, { Component } from 'react';
import './css/info.css';

export default class Info extends Component {
    render() {
        return (
            <div className="about">
                <div className={"about-wrapper " + this.props.align}>
                    <p>El objetivo del juego es completar el tablero de 81 casilleros completando cada uno con números del 1 al 9.  No se debe repetir ninguna cifra, ni en fila vertical, ni en columna horizontal, ni en cada uno de los 9 cuadrados marcados en el tablero.</p>
                    <p>Para completar o borrar los datos de los casilleros utilizar el teclado de la pantalla o del dispositivo que esté usando</p>
                </div>
            </div>
        )
    }
}
