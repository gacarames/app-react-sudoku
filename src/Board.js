import React, { Component } from 'react';


export default class Board extends Component {

  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {    
    this.props.onClick(e);
  }

  getsquares(rowindex) {
    var squares = [..."012345678"].map((i, squareindex) => {
      var cord = rowindex + "" + squareindex,
        className = "square";
      if (this.props.origin.has(cord)) {
        className += " origin";
      }
      if (this.props.highlight.has(cord)) {
        className += " highlight";
      }
      if (this.props.filter.has(cord)) {
        className += " filter";
      }
      if (this.props.conflict.has(cord)) {
        className += " conflict";
      }
      if (this.props.chosen === cord) {
        className += " chosen";
      }
      return (
        <button
          key={squareindex}
          className={className}
          onClick={() => this.props.onClick(rowindex, squareindex)}
          
          /* onClick={this.onClick} */
          
          /* onClick={() => this.props.onClick(rowindex, squareindex)} */
        >
          {this.props.values[rowindex][squareindex]}
        </button>
      );
    });

    return (
      <div
        key={rowindex}
        className={"board-row " + rowindex}
      >
        {squares}
      </div>
    );

  }

  /* handleSetKeyup(e) {

    addEventListener("keyup", function (e) {
      e.preventDefault();
      if (e.keyCode === 13) {
        console.log('Evento "Enter" registrado')
        document.getElementsByClassName("btn-sdk-delete").click();
      }
    });

    addEventListener('keyup', function (e) {

      var typeValue = /^[0-9]$/.test(e.key);

      var squareFocus = e.target;

      if (typeValue) {

        console.log("La tecla presionada es un numero entero");
        squareFocus.innerHTML = parseInt(e.key, 10);

      } else if (e.keyCode === 8 || e.keyCode === 46) {
        
        console.log("La tecla presionada es Borrar o Suprimir");
        squareFocus.innerHTML = "";
      
      } else {
        console.log("La tecla presionada no es valida");
      }

    })
  } */

  render() {

    var rows = [..."012345678"].map((i, rowindex) => {
      return this.getsquares(rowindex);
    });
    return <div className="board" onClick={this.handleSetKeyup}>
      {rows}
    </div>;
  }
}