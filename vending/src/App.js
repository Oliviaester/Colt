import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Chips from './Chips';
import VendingMachine from './VendingMachine';
import Sardines from './Sardines';
import Soda from './Soda';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' render={() => <VendingMachine />} />
        <Route exact path='/chips' render={() => <Chips />} />
        <Route exact path='/soda' render={() => <Soda />} />
        <Route exact path='/sardines' render={() => <Sardines />} />
      </Switch>
    </div>
  );
}

export default App;
