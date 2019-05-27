import React, { Component } from "react";
import "./css/current-dif.css";

export default class CurrentDif extends Component {

  render() {
    return (
      <div className="sdk-current-dif-wrapper mb-2">
        <span className="sdk-difficulty">{`Dificultad: ${this.props.difLevel}`}</span>
      </div>
    );
  }
}
