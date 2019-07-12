import React, { Component } from 'react';
import Header from './Header';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: 'Caleb'
    }
  }

  render () {
    return (
      <div>
        <Header />
      </div>
    )
  }
  
}

export default App;
