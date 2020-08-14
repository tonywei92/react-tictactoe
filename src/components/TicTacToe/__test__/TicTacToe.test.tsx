import { checkhasWinner } from '../useTicTacToe';
import { createGameBoard } from '../utils';

describe('TicTacToe algorithm testing', () => {
  describe('3x3 check', () => {
    it('should return x as winner with vertical pawn', () => {
      const board = createGameBoard(3);
      board[0][2] = 'x';
      board[1][2] = 'x';
      board[2][2] = 'x';
      const checkResult = checkhasWinner(board, 3);
      expect(checkResult).toEqual({
        winner: 'x',
        positions: [...checkResult.positions],
      });
    });

    it('should return x as winner with horizontal pawn', () => {
      const board = createGameBoard(3);
      board[2][0] = 'x';
      board[2][1] = 'x';
      board[2][2] = 'x';
      const checkResult = checkhasWinner(board, 3);
      expect(checkResult).toEqual({
        winner: 'x',
        positions: [...checkResult.positions],
      });
    });

    it('should return x as winner with diagonal X pawn', () => {
      const board = createGameBoard(3);
      board[0][0] = 'x';
      board[1][1] = 'x';
      board[2][2] = 'x';
      const checkResult = checkhasWinner(board, 3);
      expect(checkResult).toEqual({
        winner: 'x',
        positions: [...checkResult.positions],
      });
    });

    it('should return x as winner with diagonal Y pawn', () => {
      const board = createGameBoard(3);
      board[0][2] = 'x';
      board[1][1] = 'x';
      board[2][0] = 'x';
      const checkResult = checkhasWinner(board, 3);
      expect(checkResult).toEqual({
        winner: 'x',
        positions: [...checkResult.positions],
      });
    });
  });

  describe('100x100 check', () => {
    it('should return o as winner with vertical pawn', () => {
      const board = createGameBoard(100);
      board[8][81] = 'o';
      board[9][81] = 'o';
      board[10][81] = 'o';
      const checkResult = checkhasWinner(board, 3);
      expect(checkResult).toEqual({
        winner: 'o',
        positions: [...checkResult.positions],
      });
    });
  });

  describe('100x100 check', () => {
    it('should return o as winner with vertical mixed pawn', () => {
      const board = createGameBoard(100);
      board[8][81] = 'o';
      board[9][81] = 'o';
      board[10][81] = 'o';
      board[99][1] = 'x';
      board[32][67] = 'x';
      board[88][35] = 'x';
      board[14][77] = 'x';
      const checkResult = checkhasWinner(board, 3);
      expect(checkResult).toEqual({
        winner: 'o',
        positions: [...checkResult.positions],
      });
    });
  });
});
