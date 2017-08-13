import React, { Component } from 'react';
import PowerButton from './PowerButton.js';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PowerButton id="powerbutton" value="Power Button"></PowerButton>
      </div>
    );
  }
}

export default App;
