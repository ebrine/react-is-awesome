import React, { Component } from 'react';
import $ from 'jquery';
import '../board.css'

// eslint-disable-next-line react/prefer-stateless-function
class Cell extends Component {
  constructor() {
    super();
  }



  render() {
    return (
      <div className="Cell" id={this.props.genre} onClick={this.props.onClick}>
        <p>{this.props.genre}</p>
      </div>
    );
  }
}

export default Cell;
