import React, { Component } from "react";

import sudokus from "./Sudokus";

import SudokuGenerator from "./SudokuGenerator";

import Board from "./Board";

import TitleGame from "./TitleGame";

import CurrentDif from "./CurrentDif";

import Info from './Info';

import SlotAd from './SlotAd';

import { confirmAlert } from 'react-confirm-alert'; // Import

import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export default class Sudoku extends Component {
  constructor(props) {
    super(props);

    this.check = this.check.bind(this);
    this.solve = this.solve.bind(this);
    this.help = this.help.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.alertFromSon = this.alertFromSon.bind(this);

    this.state = {
      btnSolveValue: "Resolver"

    };
  }

  generate(level) {
    var puzzles;
    switch (level) {
      /* case 'Muy simple':
                puzzles = sudokus.veryeasy
                break */
      case "Fácil":
        puzzles = sudokus.easy;
        break;
      case "Medio":
        puzzles = sudokus.medium;
        break;
      case "Dificil":
        puzzles = sudokus.tough;
        break;
      /* case 'Muy dificil':
                puzzles = sudokus.verytough
                break */
      default:
        puzzles = sudokus.easy;
    }

    var grid = puzzles[Math.floor(Math.random() * puzzles.length)],
      sudoku = new SudokuGenerator(grid).generate(),
      puzzle = sudoku[0];
    this.solution = sudoku[1];
    const origin = new Set();
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (puzzle[i][j]) {
          origin.add(i + "" + j);
        }
      }
    }

    this.setState({
      values: puzzle,
      level: level,
      peep: false,
      origin: origin,
      chosen: null,
      possible: null,
      filter: new Set(),
      highlight: new Set(),
      check: false,
      helps: 3,
      conflict: new Set(),
      btnSolveValue: "Resolver"
    });
  }

  componentWillMount() {
    this.generate("Fácil");
  }

  checkPossible(i, j) {
    var values = this.state.values;
    var allPossible = new Set([..."123456789"]);
    for (let k = 0; k <= 8; k++) {
      if (k === j) {
        continue;
      }
      if (allPossible.has(values[i][k])) {
        allPossible.delete(values[i][k]);
      }
    }
    for (let k = 0; k <= 8; k++) {
      if (k === i) {
        continue;
      }
      if (allPossible.has(values[k][j])) {
        allPossible.delete(values[k][j]);
      }
    }
    var bi = Math.floor(i / 3) * 3,
      bj = Math.floor(j / 3) * 3;
    for (let m = bi; m < bi + 3; m++) {
      for (let n = bj; n < bj + 3; n++) {
        if (m === i && n === j) {
          continue;
        }
        if (allPossible.has(values[m][n])) {
          allPossible.delete(values[m][n]);
        }
      }
    }
    return allPossible;
  }

  filter(value) {
    var values = this.state.values;
    var filter = new Set();
    for (let m = 0; m < 9; m++) {
      for (let n = 0; n < 9; n++) {
        if (values[m][n] === value) {
          filter.add(m + "" + n);
        }
      }
    }
    this.setState({
      filter: filter,
      highlight: new Set(),
      chosen: null
    });
  }

  highlight(i, j) {
    var values = this.state.values;
    var highlight = new Set();
    for (let k = 0; k < 9; k++) {
      if (values[i][k]) {
        highlight.add(i + "" + k);
      }
    }
    for (let k = 0; k < 9; k++) {
      if (values[k][j]) {
        highlight.add(k + "" + j);
      }
    }
    var line = Math.floor(i / 3) * 3,
      row = Math.floor(j / 3) * 3;
    for (let ln = line; ln < line + 3; ln++) {
      for (let r = row; r < row + 3; r++) {
        if (values[ln][r]) {
          highlight.add(ln + "" + r);
        }
      }
    }
    this.setState({
      highlight: highlight,
      filter: new Set()
    });
  }

  help() {
    var solution = this.solution,
      values = this.state.values.slice(),
      chosen = this.state.chosen,
      helps = this.state.helps;
    if (
      !chosen ||
      this.state.origin.has(chosen[0] + "" + chosen[1]) ||
      !this.state.helps
    ) {
      return;
    } else {
      var solutionValue = solution[chosen[0]][chosen[1]];
      values[chosen[0]][chosen[1]] = solutionValue;
      helps -= 1;
      var conflict = new Set();
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (!values[i][j]) {
            continue;
          } else {
            var thisvalue = values[i][j],
              possible = this.checkPossible(i, j);
            if (!possible.has(thisvalue)) {
              conflict.add(i + "" + j);
            }
          }
        }
      }
      this.setState({
        values: values,
        helps: helps,
        conflict: conflict
      });
    }
  }

  check() {
    this.setState({
      check: true
    });
  }

  solve() {
    if (this.state.peep) {
      /* return; */

      this.setState({
        btnSolveValue: "Resolver"
      });
    }

    /* var r =  */
    confirmAlert({
      title: 'Resolver Sudoku',
      message: '¿Seguro que quieres resolver el juego?',
      buttons: [
        {
          label: 'No',
        },
        {
          label: 'Si',
          onClick: () => this.setState({
            values: this.solution,
            peep: true,
            conflict: new Set(),
            highlight: new Set(),
            filter: new Set(),
            btnSolveValue: "Partida Finalizada"
          })
        }
      ]
    });

  }

  handleClick(i, j) {

    var values = this.state.values.slice();

    var thisvalue = values[i].slice();

    if (this.state.origin.has(i + "" + j)) {
      this.filter(thisvalue[j]);
      return;
    } else {
      var filter = new Set();
      if (thisvalue[j] != null && thisvalue.includes(thisvalue[j])) {
        for (let m = 0; m < 9; m++) {
          for (let n = 0; n < 9; n++) {
            if (values[m][n] === thisvalue[j]) {
              filter.add(m + "" + n);
            }
          }
        }
      }
      /* this.highlight(i, j); */
      var chosen = i + "" + j;
      var possible = Array.from(this.checkPossible(i, j)).toString();
      this.setState({
        chosen: chosen,
        possible: possible,
        filter: filter,
        check: false
      });
    }
  }

  handleNumsClick(i) {
    if (this.state.peep) {
      return;
    }

    var chosen = this.state.chosen;

    if (!chosen) {
      this.filter("" + i);
    } else {

      var values = this.state.values.slice();

      if (this.state.origin.has([chosen[0]][chosen[1]])) {
        this.setState({
          chosen: null,
          highlight: new Set()
        });
        return;
      }

      if (i === "X") {
        values[chosen[0]][chosen[1]] = null;
      } else {
        values[chosen[0]][chosen[1]] = "" + i;
      }

      var conflict = new Set();

      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (!values[i][j]) {
            continue;
          } else {
            var thisvalue = values[i][j],
              possible = this.checkPossible(i, j);
            if (!possible.has(thisvalue)) {
              conflict.add(i + "" + j);
            }
          }
        }
      }

      this.setState({
        values: values,
        highlight: new Set(),
        conflict: conflict,
        chosen: null
      });

      if (!this.state.peep && values.toString() === this.solution.toString()) {
        alert("Felicitaciones, ha completado este rompecabezas.");
        this.setState({
          peep: true
        });
      }
    }
  }

  alertFromSon() {
    console.log('Clickeado desde el componente hijo');
  }

  render() {
    var peep = this.state.peep ? " peep" : "";

    /* var checking = this.state.check ? ' checking' : '' */
    /* var hinttime = [' zero', ' one', ' two', ' three'][this.state.helps] */

    var choices = [..."123456789"].map(i => {
      return (
        <button
          key={i}
          className="choice"
          value={i}
          onClick={() => this.handleNumsClick(i)}
        >
          {i}
        </button>
      );
    });

    var controls = [
      /* 'Muy simple',  */
      "Fácil",
      "Medio",
      "Dificil"
      /* , 'Muy dificil' */
    ].map((level, index) => {

      var active = level === this.state.level ? " active" : "";

      return (
        <button
          key={index}
          className={"dropdown-item btn-level" + active}
          onClick={() => this.generate(level)}
          type="button"
        >
          {level}
        </button>
      );
    });
    return (
      <div className="game">
        <div className="container game-wrapper mt-5">

          <div className="sdk-heading d-flex flex-row justify-content-between align-items-baseline my-2">
            <TitleGame />
            <div className="sdk-difficulty-dropdown d-md-none">
              <div className="dropdown">
                <button
                  className="btn btn-link dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Nueva partida
                </button>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownMenu2"
                >
                  {controls}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="left-column col-lg-8">
              <div className="sdk-wrapper card mt-2 md-4 p-3">
                <div className="row">
                  <div className="col-12">
                    <CurrentDif difLevel={this.state.level}/>
                  </div>
                </div>
                <div className="row">
                  <div className="sdk-board col-lg-8">
                    <Board
                      values={this.state.values}
                      origin={this.state.origin}
                      filter={this.state.filter}
                      conflict={this.state.conflict}
                      chosen={this.state.chosen}
                      highlight={this.state.highlight}
                      onClick={this.handleClick}
                      /* onClick={this.alertFromSon} */
                      /* onClick={(e) => { this.alertFromSon(e); this.handleClick(e);}} */
                    />
                  </div>

                  <div className="sdk-dashboard col-lg-4">
                    <div className="sdk-difficulty-dropdown d-none d-md-block">
                      <div className="dropdown">
                        <button
                          className="btn btn-outline-primary btn-lg btn-block dropdown-toggle"
                          type="button"
                          id="dropdownMenu2"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Nueva partida
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenu2"
                        >
                          <span className="dropdown-item-text">
                            Elegí la dificultad del juego
                          </span>
                          {controls}
                        </div>
                      </div>
                    </div>

                    <div className="sdk-options">
                      <div className="sdk-number-options">
                        {choices}
                        <button
                          className="btn-sdk-delete"
                          onClick={() => this.handleNumsClick("X")}
                        />
                      </div>
                    </div>
                    <div className="sdk-helps">
                      <button
                        className={"btn btn-sdk-solve btn-block btn-lg" + peep}
                        onClick={this.solve}
                        aria-pressed="false"
                      >
                        {this.state.btnSolveValue}
                      </button>

                      {/* <button className={"hint" + hinttime} onClick={this.help} /> */}

                      {/* <div className={"checktext" + checking}>
                            <p value={this.state.possible}>{this.state.possible}</p>
                          </div> */}

                      {/* <button className="check" onClick={this.check} /> */}
                    </div>
                  </div>
                </div>
              </div>
              <Info />
            </div>
            <div className="right-column col-lg-4">
              <SlotAd />
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}
