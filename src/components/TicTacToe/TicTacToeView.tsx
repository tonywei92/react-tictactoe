/* eslint-disable jsx-a11y/control-has-associated-label */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { UseTicTacToeInterface } from './useTicTacToe';
import Board from './Board';

interface Props {
  tictactoe: UseTicTacToeInterface;
}

const TicTacToe: React.FC<Props> = ({ tictactoe }) => {
  const {
    gameBoard,
    setPawn,
    winner,
    turn,
    playerOScore,
    playerXScore,
  } = tictactoe;

  const handleEmptyHolderClick = (i: number, j: number): void => {
    setPawn(i, j);
    if (winner) {
      console.log('winner is', winner);
    }
  };
  return (
    <div>
      <div>
        <Board
          hasWinner={winner}
          gameBoard={gameBoard}
          onEmptyPawnclick={handleEmptyHolderClick}
          turn={turn}
        />
        <div>X: {playerXScore}</div>
        <div>Tie: 0</div>
        <div>O: {playerOScore}</div>
      </div>
    </div>
  );
};

export default TicTacToe;
