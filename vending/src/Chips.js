import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Chips extends Component {
  render() {
    return (
      <div>
        <h1>Chips</h1>
        <Link to='/'>Go back</Link>
      </div>
    );
  }
}
export default Chips;
