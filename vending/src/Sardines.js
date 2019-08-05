import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sardines extends Component {
  render() {
    return (
      <div>
        <h1>Sardines</h1>
        <Link to='/'>Go back</Link>
      </div>
    );
  }
}
export default Sardines;
