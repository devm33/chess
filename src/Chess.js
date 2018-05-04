import React, { Component } from 'react';
import './Chessboard.css';

const ChessSquare = (props) => {
  return (
    <div className="ChessSquare">
      <img src="/pieces/


const ChessRow = () => {
  return (
    <div className="ChessRow">
      { Array(8).keys().map(() => <ChessSquare/>) }
    </div>
  );
};

export default class Chessboard extends Component {
  render() {
    return (
      <div className="Chessboard">
        { Array(8).keys().map(() => <ChessRow/>) }
      </div>
    );
  }
}
