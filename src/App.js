import React, { Component } from 'react';
import './App.css';
import Chessboard from './Chess';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Chess</h1>
        </header>
        <Chessboard/>
      </div>
    );
  }
}
