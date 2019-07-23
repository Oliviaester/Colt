import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  createBoard() {
    let board = [];

    return board;
  }

  flipeCellAround(coord) {
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split('-').map(Number);

    function flipCell(y, x) {
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    this.setState({ board, hasWon });
  }

  render() {}
}

export default Board;
