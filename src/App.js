import React, { Component } from 'react';
import './App.css';
import Navbar from '../src/components/Navbar.js';

class App extends Component {
  render() {
    return (
      <div className="App"> 
      <Navbar />
      </div>
    );
  }
}

export default App;