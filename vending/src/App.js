import React from 'react';
import { Route } from 'react-router-dom';
import Chips from './Chips';
import VendingMachine from './VendingMachine';
import Sardines from './Sardines';
import Soda from './Soda';
import './App.css';

function App() {
  return (
    <div className='App'>
      <VendingMachine />
      <Chips />
      <Sardines />
      <Soda />
    </div>
  );
}

export default App;
