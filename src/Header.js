import React, { Component } from 'react';
import './App.css';

export default class Heeader extends Component {

  constructor() {
    super();
    this.state = {
      name: 'Caleb'
    }
  }

  render () {
    return (
      <header>
          <div>Logo</div>
          <nav>
              <a href="http://localhost:3000/">Create Ads</a>
              <a href="http://localhost:3000/">About Us</a>
              <a href="http://localhost:3000/">Login</a>
              <a href="http://localhost:3000/" className="register-btn">Register</a>
          </nav>
      </header>
    )
  }
  
}
