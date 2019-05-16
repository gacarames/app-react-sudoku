import React, { Component } from 'react';


export default class Board extends Component {
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
          >
            {this.props.values[rowindex][squareindex]}
          </button>
        );
      });
  
      return (
        <div key={rowindex} className={"board-row " + rowindex}>
          {squares}
        </div>
      );
      
    }
    render() {
      var rows = [..."012345678"].map((i, rowindex) => {
        return this.getsquares(rowindex);
      });
      return <div className="board">{rows}</div>;
    }
  }
