import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  };
  constructor(props) {
    super(props);
    this.state = { die1: 'one', die2: 'one' };
  }
  render() {
    return (
      <div>
        <Die face={this.state.die1} />
        <Die face={this.state.die2} />
      </div>
    );
  }
}
export default RollDice;
