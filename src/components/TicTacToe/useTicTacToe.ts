/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { createGameBoard } from './utils';

export enum StraightDirections {
  VERTICAL = 1,
  HORIZONTAL = 2,
}

export interface WinnerInterface {
  winner: string | null;
  positions: number[][];
}

const boardFull = (board: Array<string[]>): boolean => {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      if (board[i][j] === '') {
        return false;
      }
    }
  }
  return true;
};

const straightCheck = (
  board: Array<string[]>,
  direction: StraightDirections,
  winLength: number
): WinnerInterface => {
  for (let i = 0; i < board.length; i += 1) {
    let xCount = 0;
    let oCount = 0;
    let prevSymbol = '';
    let positionArr = [];
    for (let j = 0; j < board.length; j += 1) {
      const currentSymbol =
        direction === StraightDirections.HORIZONTAL ? board[i][j] : board[j][i];
      const position =
        direction === StraightDirections.HORIZONTAL ? [i, j] : [j, i];
      if (currentSymbol === '') {
        xCount = 0;
        oCount = 0;
        prevSymbol = '';
        positionArr = [];
      }
      if (currentSymbol === 'x' && prevSymbol === 'x') {
        xCount += 1;
        positionArr.push(position);
      }
      if (currentSymbol === 'x' && prevSymbol !== 'x') {
        xCount = 1;
        oCount = 0;
        prevSymbol = 'x';
        positionArr = [];
        positionArr.push(position);
      }
      if (currentSymbol === 'o' && prevSymbol === 'o') {
        oCount += 1;
        positionArr.push(position);
      }
      if (currentSymbol === 'o' && prevSymbol !== 'o') {
        xCount = 0;
        oCount = 1;
        prevSymbol = 'o';
        positionArr = [];
        positionArr.push(position);
      }

      if (xCount === winLength) {
        return { winner: 'x', positions: positionArr };
      }
      if (oCount === winLength) {
        return { winner: 'o', positions: positionArr };
      }
    }
  }
  return { winner: null, positions: [] };
};

const diagonalCheck = (
  board: Array<string[]>,
  winLength: number
): WinnerInterface => {
  // check direction (\)
  for (let i = board.length - 1; i >= 0; i -= 1) {
    let xCount = 0;
    let oCount = 0;
    let prevSymbol = '';
    let positionArr = [];
    for (let j = 0; j < board.length - i; j += 1) {
      const currentSymbol = board[i + j][j];
      const position = [i + j, j];
      if (currentSymbol === '') {
        xCount = 0;
        oCount = 0;
        prevSymbol = '';
        positionArr = [];
      }
      if (currentSymbol === 'x' && prevSymbol === 'x') {
        xCount += 1;
      }
      if (currentSymbol === 'x' && prevSymbol !== 'x') {
        xCount = 1;
        oCount = 0;
        prevSymbol = 'x';
        positionArr = [];
        positionArr.push(position);
      }
      if (currentSymbol === 'o' && prevSymbol === 'o') {
        oCount += 1;
        positionArr.push(position);
      }
      if (currentSymbol === 'o' && prevSymbol !== 'o') {
        xCount = 0;
        oCount = 1;
        prevSymbol = 'o';
        positionArr = [];
        positionArr.push(position);
      }
      if (xCount === winLength) {
        return { winner: 'x', positions: positionArr };
      }
      if (oCount === winLength) {
        return { winner: 'o', positions: positionArr };
      }
    }
  }
  for (let i = 0; i < board.length - 1; i += 1) {
    let xCount = 0;
    let oCount = 0;
    let prevSymbol = '';
    let positionArr = [];
    for (let j = 0; j < board.length - i - 1; j += 1) {
      const currentSymbol = board[j][j + i + 1];
      const position = [j, j + i + 1];
      if (currentSymbol === '') {
        xCount = 0;
        oCount = 0;
        positionArr = [];
        prevSymbol = '';
      }
      if (currentSymbol === 'x' && prevSymbol === 'x') {
        xCount += 1;
        positionArr.push(position);
      }
      if (currentSymbol === 'x' && prevSymbol !== 'x') {
        xCount = 1;
        oCount = 0;
        prevSymbol = 'x';
        positionArr = [];
        positionArr.push(position);
      }
      if (currentSymbol === 'o' && prevSymbol === 'o') {
        oCount += 1;
        positionArr.push(position);
      }
      if (currentSymbol === 'o' && prevSymbol !== 'o') {
        xCount = 0;
        oCount = 1;
        prevSymbol = 'o';
        positionArr = [];
        positionArr.push(position);
      }
      if (xCount === winLength) {
        return { winner: 'x', positions: positionArr };
      }
      if (oCount === winLength) {
        return { winner: 'o', positions: positionArr };
      }
    }
  }
  // check opposite direction (/)
  for (let i = 0; i < board.length; i += 1) {
    let xCount = 0;
    let oCount = 0;
    let prevSymbol = '';
    let positionArr = [];
    for (let j = 0; j < i + 1; j += 1) {
      const currentSymbol = board[j][i - j];
      const position = [j, i - j];
      if (currentSymbol === '') {
        xCount = 0;
        oCount = 0;
        prevSymbol = '';
        positionArr = [];
      }
      if (currentSymbol === 'x' && prevSymbol === 'x') {
        xCount += 1;
        positionArr.push(position);
      }
      if (currentSymbol === 'x' && prevSymbol !== 'x') {
        xCount = 1;
        oCount = 0;
        prevSymbol = 'x';
        positionArr = [];
        positionArr.push(position);
      }
      if (currentSymbol === 'o' && prevSymbol === 'o') {
        oCount += 1;
        positionArr.push(position);
      }
      if (currentSymbol === 'o' && prevSymbol !== 'o') {
        xCount = 0;
        oCount = 1;
        prevSymbol = 'o';
        positionArr = [];
        positionArr.push(position);
      }
      if (xCount === winLength) {
        return { winner: 'x', positions: positionArr };
      }
      if (oCount === winLength) {
        return { winner: 'o', positions: positionArr };
      }
    }
  }
  for (let i = 1; i < board.length; i += 1) {
    let xCount = 0;
    let oCount = 0;
    let prevSymbol = '';
    let positionArr = [];
    for (let j = 0; j < board.length - i; j += 1) {
      const currentSymbol = board[i + j][board.length - j - 1];
      const position = [i + j, board.length - j - 1];
      if (currentSymbol === '') {
        xCount = 0;
        oCount = 0;
        prevSymbol = '';
        positionArr = [];
      }
      if (currentSymbol === 'x' && prevSymbol === 'x') {
        xCount += 1;
        positionArr.push(position);
      }
      if (currentSymbol === 'x' && prevSymbol !== 'x') {
        xCount = 1;
        oCount = 0;
        prevSymbol = 'x';
        positionArr = [];
        positionArr.push(position);
      }
      if (currentSymbol === 'o' && prevSymbol === 'o') {
        oCount += 1;
        positionArr.push(position);
      }
      if (currentSymbol === 'o' && prevSymbol !== 'o') {
        xCount = 0;
        oCount = 1;
        prevSymbol = 'o';
        positionArr = [];
        positionArr.push(position);
      }
      if (xCount === winLength) {
        return { winner: 'x', positions: positionArr };
      }
      if (oCount === winLength) {
        return { winner: 'o', positions: positionArr };
      }
    }
  }
  return { winner: null, positions: [] };
};

export const checkhasWinner = (
  board: Array<string[]>,
  winLength: number
): WinnerInterface => {
  let checkWinner = straightCheck(
    board,
    StraightDirections.HORIZONTAL,
    winLength
  );
  if (checkWinner.winner) {
    return checkWinner;
  }
  checkWinner = straightCheck(board, StraightDirections.VERTICAL, winLength);
  if (checkWinner.winner) {
    return checkWinner;
  }

  checkWinner = diagonalCheck(board, winLength);
  if (checkWinner.winner) {
    return checkWinner;
  }
  if (boardFull(board)) {
    return { winner: 'tie', positions: [] };
  }
  return { winner: null, positions: [] };
};

export interface UseTicTacToeInterface {
  gameBoard: Array<string[]>;
  setPawn: (i: number, j: number) => void;
  playerXScore: number;
  playerOScore: number;
  tie: number;
  winner: WinnerInterface;
  turn: number;
  getPlayerTurn: () => string;
  nextTurn: () => void;
  retryGame: () => void;
}

interface GameStateInterface {
  winner: WinnerInterface;
  gameBoard: Array<string[]>;
  playerXScore: number;
  playerOScore: number;
  tie: number;
  turn: number;
}

// custom hook
const useTicTacToe = (
  gridSizeProp = 3,
  winningSize = 3
): UseTicTacToeInterface => {
  const [gameState, setGameState] = useState<GameStateInterface>({
    winner: { winner: null, positions: [] },
    gameBoard: [],
    playerXScore: 0,
    playerOScore: 0,
    tie: 0,
    turn: 1,
  });

  useEffect(() => {
    setGameState({
      ...gameState,
      gameBoard: createGameBoard(gridSizeProp),
    });
  }, [gridSizeProp]);

  let { gameBoard, winner, playerXScore, playerOScore, turn, tie } = gameState;
  const setPawn = (i: number, j: number): void => {
    gameBoard[i][j] = turn % 2 ? 'x' : 'o';
    turn += 1;
    const checkWinner: WinnerInterface = checkhasWinner(gameBoard, winningSize);
    if (checkWinner.winner) {
      winner = checkWinner;
      if (checkWinner.winner === 'o') {
        playerOScore += 1;
      }
      if (checkWinner.winner === 'x') {
        playerXScore += 1;
      }
      if (checkWinner.winner === 'tie') {
        tie += 1;
      }
    }
    setGameState({
      ...gameState,
      turn,
      gameBoard: [...gameBoard],
      winner,
      tie,
      playerOScore,
      playerXScore,
    });
  };

  const retryGame = () => {
    gameBoard = createGameBoard(gridSizeProp);
    winner = { winner: null, positions: [] };
    setGameState({
      ...gameState,
      gameBoard,
      winner,
    });
  };

  const nextTurn = () => {
    setGameState({
      ...gameState,
      turn: turn + 1,
    });
  };

  return {
    gameBoard,
    setPawn,
    playerXScore,
    playerOScore,
    tie,
    turn,
    winner,
    nextTurn,
    retryGame,
    getPlayerTurn: (): string => {
      return turn % 2 === 0 ? 'o' : 'x';
    },
  };
};

export default useTicTacToe;
