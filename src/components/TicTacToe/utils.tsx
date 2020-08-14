/* eslint-disable import/prefer-default-export */
export const createGameBoard = (gridSize: number): Array<string[]> => {
  console.log('asdadsd');
  return Array(gridSize)
    .fill(null)
    .map(() => Array(gridSize).fill(''));
};
