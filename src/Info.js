import React, { Component } from 'react'

class Info extends Component {
    render() {
        return (
            <div className="about">
                <div className="showabout"></div>
                <div className="aboutme">
                    <p>Complete cada tablero (subdividido en 9 cuadrados) de 81 casillas (dispuestos en 9 filas verticales y horizontales) llenando los casilleros vacíos con los numero del 1 al 9, de modo que no se repita ninguna cifra en fila vertical ni horizontal, ni en cada cuadrado.</p>
                </div>
            </div>
        )
    }
}
export default Info
