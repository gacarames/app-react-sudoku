import React, { Component } from "react";
import "./css/current-dif.css";

export default class CurrentDif extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      difLevel: "Fácil"
    };
  }

  componentDidMount() {
    this.setState({
      difLevel: document.querySelector(".active").innerHTML
    });
  }

  /* componentDidUpdate() {
    this.setState({
    difLevel: document.querySelector(".dropdown-item.btn-level.active").innerHTML
    });
  } */

  render() {
    return (
      <div className="sdk-current-dif-wrapper mb-2">
        <span className="sdk-difficulty">{`Dificultad: ${this.state.difLevel}`}</span>
      </div>
    );
  }
}
