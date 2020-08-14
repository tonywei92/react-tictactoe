/* eslint-disable import/prefer-default-export */
export const createGameBoard = (gridSize: number): Array<string[]> => {
  return Array(gridSize)
    .fill(null)
    .map(() => Array(gridSize).fill(''));
};
