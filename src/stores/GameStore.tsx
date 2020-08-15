import { createStore } from 'redux';
import {
  SET_GRID_SIZE,
  SET_TIME_LIMIT,
  SET_WINNING_SIZE,
  GameActionTypes,
} from './GameStoreActions';

const initialState = {
  gridSize: 3,
  winningSize: 3,
  timeLimit: 10,
};

export type GameStoreType = typeof initialState;

const getValidWinningSize = (winningSize: number, gridSize: number): number => {
  let validWinningSize = winningSize;
  let min = 3;
  if (gridSize > 3) {
    min = 4;
  }
  if (winningSize < min) {
    validWinningSize = min;
  }
  if (winningSize > gridSize) {
    validWinningSize = gridSize;
  }
  return validWinningSize;
};

const getValidGridSize = (gridSize: number): number => {
  const min = 3;
  const max = 1000;
  let validGridSize = gridSize;
  if (validGridSize < min) {
    validGridSize = min;
  }
  if (validGridSize > max) {
    validGridSize = max;
  }
  return validGridSize;
};

function gameReducer(
  state = initialState,
  action: GameActionTypes
): GameStoreType {
  switch (action.type) {
    case SET_GRID_SIZE: {
      const nextGridSize = getValidGridSize(action.payload);
      const nextWinningSize = getValidWinningSize(
        state.winningSize,
        nextGridSize
      );
      return {
        ...state,
        gridSize: nextGridSize,
        winningSize: nextWinningSize,
      };
    }
    case SET_WINNING_SIZE: {
      const nextWinningSize = getValidWinningSize(
        action.payload,
        state.gridSize
      );
      return {
        ...state,
        winningSize: nextWinningSize,
      };
    }

    case SET_TIME_LIMIT:
      return { ...state, timeLimit: action.payload };
    default:
      return state;
  }
}

const store = createStore(gameReducer);

export default store;
