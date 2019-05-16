import React, { Component } from "react";
import "./css/current-dif.css";

export default class CurrentDif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: "Facil"
    };
  }

  componentDidMount() {
    this.setState({
      level: document.querySelector(".active").innerHTML
    });
  }

  /* componentWillUpdate() {
    this.setState({
    level: document.querySelector(".active").innerHTML
    });
  } */

  render() {
    return (
      <div className="sdk-current-dif-wrapper mb-2">
        <span className="sdk-difficulty">{`Dificultad: ${this.state.level}`}</span>
      </div>
    );
  }
}
