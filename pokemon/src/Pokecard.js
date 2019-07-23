import React from 'react';
import './Pokecard.css';

const POKI_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = number => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends React.Component {
  render() {
    let imgSrc = `${POKI_API}${padToThree(this.props.id)}.png`;
    return (
      <div className='Pokecard'>
        <h1 className='Pokecard-title'>{this.props.name}</h1>
        <img src={imgSrc} alt={this.props.name} />
        <div className='Pokecard-data'>Type: {this.props.type}</div>
        <div className='Pokecard-data'>Exp: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;