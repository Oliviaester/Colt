import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import About from './About';
import Dog from './Dog';
import Contact from './Contact';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <nav>
          <NavLink exact activeClassName='active-link' to='/'>
            About
          </NavLink>
          <NavLink exact activeClassName='active-link' to='/dog'>
            Dog
          </NavLink>
          <NavLink exact activeClassName='active-link' to='/contact'>
            Contact
          </NavLink>
        </nav>
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/dog' component={Dog} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
