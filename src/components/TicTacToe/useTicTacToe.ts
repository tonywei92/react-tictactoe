import { useState } from 'react';

enum StraightDirections {
  VERTICAL = 1,
  HORIZONTAL = 2,
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
): string | boolean => {
  for (let i = 0; i < board.length; i += 1) {
    let xCount = 0;
    let oCount = 0;
    let prevSymbol = '';
    for (let j = 0; j < board.length; j += 1) {
      const currentSymbol =
        direction === StraightDirections.HORIZONTAL ? board[i][j] : board[j][i];
      if (currentSymbol === '') {
        xCount = 0;
        xCount = 0;
      }
      if (currentSymbol === 'x' && prevSymbol === 'x') {
        xCount += 1;
      }
      if (currentSymbol === 'x' && prevSymbol !== 'x') {
        xCount = 1;
        oCount = 0;
        prevSymbol = 'x';
      }
      if (currentSymbol === 'o' && prevSymbol === 'o') {
        oCount += 1;
      }
      if (currentSymbol === 'o' && prevSymbol !== 'o') {
        xCount = 0;
        oCount = 1;
        prevSymbol = 'o';
      }
      if (xCount === winLength) {
        return 'x';
      }
      if (oCount === winLength) {
        return 'o';
      }
    }
  }
  return false;
};

const diagonalCheck = (
  board: Array<string[]>,
  winLength: number
): string | boolean => {
  // check direction (\)
  for (let i = board.length - 1; i >= 0; i -= 1) {
    let xCount = 0;
    let oCount = 0;
    let prevSymbol = '';
    for (let j = 0; j < board.length - i; j += 1) {
      const currentSymbol = board[i + j][j];
      if (currentSymbol === '') {
        xCount = 0;
        xCount = 0;
      }
      if (currentSymbol === 'x' && prevSymbol === 'x') {
        xCount += 1;
      }
      if (currentSymbol === 'x' && prevSymbol !== 'x') {
        xCount = 1;
        oCount = 0;
        prevSymbol = 'x';
      }
      if (currentSymbol === 'o' && prevSymbol === 'o') {
        oCount += 1;
      }
      if (currentSymbol === 'o' && prevSymbol !== 'o') {
        xCount = 0;
        oCount = 1;
        prevSymbol = 'o';
      }
      if (xCount === winLength) {
        return 'x';
      }
      if (oCount === winLength) {
        return 'o';
      }
    }
  }
  for (let i = 0; i < board.length - 1; i += 1) {
    let xCount = 0;
    let oCount = 0;
    let prevSymbol = '';
    for (let j = 0; j < board.length - i - 1; j += 1) {
      const currentSymbol = board[j][j + i + 1];
      if (currentSymbol === '') {
        xCount = 0;
        xCount = 0;
      }
      if (currentSymbol === 'x' && prevSymbol === 'x') {
        xCount += 1;
      }
      if (currentSymbol === 'x' && prevSymbol !== 'x') {
        xCount = 1;
        oCount = 0;
        prevSymbol = 'x';
      }
      if (currentSymbol === 'o' && prevSymbol === 'o') {
        oCount += 1;
      }
      if (currentSymbol === 'o' && prevSymbol !== 'o') {
        xCount = 0;
        oCount = 1;
        prevSymbol = 'o';
      }
      if (xCount === winLength) {
        return 'x';
      }
      if (oCount === winLength) {
        return 'o';
      }
    }
  }
  // check opposite direction (/)
  for (let i = 0; i < board.length; i += 1) {
    let xCount = 0;
    let oCount = 0;
    let prevSymbol = '';
    for (let j = 0; j < i + 1; j += 1) {
      const currentSymbol = board[j][i - j];
      if (currentSymbol === '') {
        xCount = 0;
        xCount = 0;
      }
      if (currentSymbol === 'x' && prevSymbol === 'x') {
        xCount += 1;
      }
      if (currentSymbol === 'x' && prevSymbol !== 'x') {
        xCount = 1;
        oCount = 0;
        prevSymbol = 'x';
      }
      if (currentSymbol === 'o' && prevSymbol === 'o') {
        oCount += 1;
      }
      if (currentSymbol === 'o' && prevSymbol !== 'o') {
        xCount = 0;
        oCount = 1;
        prevSymbol = 'o';
      }
      if (xCount === winLength) {
        return 'x';
      }
      if (oCount === winLength) {
        return 'o';
      }
    }
  }
  for (let i = 1; i < board.length; i += 1) {
    let xCount = 0;
    let oCount = 0;
    let prevSymbol = '';
    for (let j = 0; j < board.length - i; j += 1) {
      const currentSymbol = board[i + j][board.length - j - 1];
      if (currentSymbol === '') {
        xCount = 0;
        xCount = 0;
      }
      if (currentSymbol === 'x' && prevSymbol === 'x') {
        xCount += 1;
      }
      if (currentSymbol === 'x' && prevSymbol !== 'x') {
        xCount = 1;
        oCount = 0;
        prevSymbol = 'x';
      }
      if (currentSymbol === 'o' && prevSymbol === 'o') {
        oCount += 1;
      }
      if (currentSymbol === 'o' && prevSymbol !== 'o') {
        xCount = 0;
        oCount = 1;
        prevSymbol = 'o';
      }
      if (xCount === winLength) {
        return 'x';
      }
      if (oCount === winLength) {
        return 'o';
      }
    }
  }
  return false;
};

const checkhasWinner = (
  board: Array<string[]>,
  winLength: number
): string | boolean => {
  let checkWinner = straightCheck(
    board,
    StraightDirections.HORIZONTAL,
    winLength
  );
  if (checkWinner) {
    return checkWinner;
  }
  checkWinner = straightCheck(board, StraightDirections.VERTICAL, winLength);
  if (checkWinner) {
    return checkWinner;
  }

  checkWinner = diagonalCheck(board, winLength);
  if (checkWinner) {
    return checkWinner;
  }
  if (boardFull(board)) {
    return 'tie';
  }
  return false;
};

const createGameBoard = (gridSize: number): Array<string[]> => {
  return Array(gridSize)
    .fill(null)
    .map(() => Array(gridSize).fill(''));
};

export interface UseTicTacToeInterface {
  gameBoard: Array<string[]>;
  setPawn: (i: number, j: number) => void;
  playerXScore: number;
  playerOScore: number;
  tie: number;
  winner: string;
  turn: number;
  getPlayerTurn: () => string;
  nextTurn: () => void;
  retryGame: () => void;
}

// custom hook
const useTicTacToe = (gridSizeProp = 3): UseTicTacToeInterface => {
  const [gameState, setGameState] = useState({
    winner: '',
    gameBoard: createGameBoard(gridSizeProp),
    playerXScore: 0,
    playerOScore: 0,
    tie: 0,
    turn: 1,
  });

  let { gameBoard, winner, playerXScore, playerOScore, turn, tie } = gameState;
  const setPawn = (i: number, j: number): void => {
    gameBoard[i][j] = turn % 2 ? 'x' : 'o';
    turn += 1;
    const checkWinner = checkhasWinner(gameBoard, 3);
    if (checkWinner) {
      if (checkWinner === 'o') {
        playerOScore += 1;
        winner = 'o';
      }
      if (checkWinner === 'x') {
        playerXScore += 1;
        winner = 'x';
      }
      if (checkWinner === 'tie') {
        tie += 1;
        winner = 'tie';
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
    winner = '';
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
