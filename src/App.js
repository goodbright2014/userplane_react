import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Userplane from './components/Userplane'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Userplane />
      </div>
    );
  }
}

export default App;