import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VendingMachine extends Component {
  render() {
    return (
      <div>
        <h1>VendingMachine</h1>
        <Link to='/soda' exact>
          Soda
        </Link>
        <Link to='/chips' exact>
          Chips
        </Link>
        <Link to='/sardines' exact>
          Sardines
        </Link>
      </div>
    );
  }
}
export default VendingMachine;
