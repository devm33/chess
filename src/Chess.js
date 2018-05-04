import React, { Component } from 'react';
import './Chessboard.css';
import { blackPawn, whitePawn, blackRook, whiteRook, blackKnight, whiteKnight,
  blackBishop, whiteBishop, blackKing, whiteKing, blackQueen, whiteQueen,
} from './pieces';

const initialBoard = [
  [ blackRook, blackKnight, blackBishop, blackQueen,
    blackKing, blackBishop, blackKnight, blackRook,
  ],
  [ blackPawn, blackPawn, blackPawn, blackPawn,
    blackPawn, blackPawn, blackPawn, blackPawn,
  ],
  Array(8), Array(8), Array(8), Array(8),
  [ whitePawn, whitePawn, whitePawn, whitePawn,
    whitePawn, whitePawn, whitePawn, whitePawn,
  ],
  [ whiteRook, whiteKnight, whiteBishop, whiteQueen,
    whiteKing, whiteBishop, whiteKnight, whiteRook
  ]
];


const ChessSquare = (props) => {
  const isWhite = props.row % 2 === props.col % 2;
  return (
    <div className={isWhite ? 'ChessSquare': 'ChessSquare black'}>
      { props.piece &&
        <img src={props.piece} alt="" />
      }
    </div>
  )
};

const ChessRow = (props) => {
  console.log(props);
  return (
    <div className="ChessRow">
      { [...Array(8).keys()].map(i =>
        <ChessSquare key={i} row={props.row} col={i}
          piece={initialBoard[props.row][i]} />) }
    </div>
  );
};

export default class Chessboard extends Component {
  render() {
    return (
      <div className="Chessboard">
        { [...Array(8).keys()].map(i => <ChessRow key={i} row={i} />) }
      </div>
    );
  }
}
