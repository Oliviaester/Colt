import React, { Component } from 'react';
import axios from 'axios';
import './ZenQuote.css';

class ZenQuote extends Component {
  constructor(props) {
    super(props);
    this.state = { quote: '', isLoaded: false };
    console.log('in constructor');
  }

  componentDidMount() {
    console.log('component did mount');
    axios.get('https://api.github.com/zen').then(response => {
      setTimeout(
        function() {
          this.setState({
            quote: response.data,
            isLoaded: true
          });
        }.bind(this),
        1000
      );
    });
  }

  render() {
    console.log('IN RENDER');
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <h1>Always remember...</h1>
            <p>{this.state.quote}</p>
          </div>
        ) : (
          <div className='loader' />
        )}
      </div>
    );
  }
}
export default ZenQuote;
