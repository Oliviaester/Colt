import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
  render() {
    console.log(this.props.info);
    return (
      <div className='Coin'>
        <img src={this.props.info.imgSrc} />
      </div>
    );
  }
}

export default Coin;
