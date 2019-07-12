import React from 'react';
import './app.css';

class Friend extends React.Component {
  render() {
    const { name, hobbies } = this.props;
    return (
      <div className='Friend'>
        <h1>{name}</h1>
        <ul>
          {hobbies.map(h => (
            <li>{h}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Friend;
