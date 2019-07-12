import React from 'react';
import ReactDOM from 'react-dom';
import Friend from './Friend';

class App extends React.Component {
  render() {
    return (
      <div>
        <Friend name='Olivia' hobbies={['Piano', 'Singing']} />
        <Friend name='Justin' hobbies={['Piano', 'Singing']} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
