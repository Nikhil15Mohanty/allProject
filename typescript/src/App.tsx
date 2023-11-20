import React from 'react';
import {Person,Country} from './Person'
import './App.css';

function App() {
  return (
    <div className="App">
      <Person
        name = "nikhil"
        age = {21}
        email="nikhil@gmail.com"
        isMarried = {true}
        friends = {['vicky','niki','nitu']}
        country = {Country.India}
        />
    </div>
  );
}

export default App;
