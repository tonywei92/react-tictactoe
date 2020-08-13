/* eslint-disable jsx-a11y/control-has-associated-label */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { UseTicTacToeInterface } from './useTicTacToe';
import Board from './Board';

interface Props {
  tictactoe: UseTicTacToeInterface;
  onEmptyHolderClick?: (i: number, j: number) => void;
}

const TicTacToe: React.FC<Props> = React.memo(
  ({ tictactoe, onEmptyHolderClick }) => {
    const { gameBoard, setPawn, winner, turn } = tictactoe;
    const handleEmptyHolderClick = (i: number, j: number): void => {
      setPawn(i, j);
      if (onEmptyHolderClick) {
        onEmptyHolderClick(i, j);
      }
    };
    return (
      <Board
        hasWinner={winner}
        gameBoard={gameBoard}
        onEmptyPawnclick={handleEmptyHolderClick}
        turn={turn}
      />
    );
  },
  (prevProps, nextProps) => {
    return !(
      prevProps.tictactoe.gameBoard !== nextProps.tictactoe.gameBoard ||
      prevProps.tictactoe.turn !== nextProps.tictactoe.turn
    );
  }
);

export default TicTacToe;
