import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(evt) {
    this.props.flipCellsAroundMe();
  }
  render() {
    let classes = 'Cell' + (this.props.isList ? 'Cell-lit' : '');
    return <td className={classes} onClick={this.handleClick} />;
  }
}

export default Cell;
