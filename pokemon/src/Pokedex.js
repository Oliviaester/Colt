import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    return (
      <div className='Pokedex'>
        <h1>Pokedex!</h1>
        <h3>Totla Experience: {this.props.exp}</h3>
        <p>{this.props.isWinner ? 'Winner' : 'Loser'}</p>
        <div className='Pokedex-cards'>
          {this.props.pokemon.map(pokemon => (
            <Pokecard
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              exp={pokemon.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
