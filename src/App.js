import React, { Component } from "react";

import { Route } from 'react-router-dom'

import NavBar from "./NavBar";
import Footer from './Footer';

import Landing from "./Landing";
import Sudoku from "./Sudoku";
import TitleGame from "./TitleGame";

export default class App extends Component {

  render() {
    return (
      <div className="app">
        <NavBar />

        <div className="content">
          <Route exact path="/" component={Landing} />
          <Route exact path="/sudoku" component={Sudoku} />
          <Route exact path="/title" component={TitleGame} />
        </div>

        <Footer />

      </div>
    );
  }
}
