import { createStore } from 'redux';
import {
  SET_GRID_SIZE,
  SET_TIME_LIMIT,
  SET_WINNING_SIZE,
  SET_ALL_CONFIG,
  GameActionTypes,
} from './GameStoreActions';

const initialState = {
  gridSize: 3,
  winningSize: 3,
  timeLimit: 10,
};

export type GameStoreType = typeof initialState;

function gameReducer(
  state = initialState,
  action: GameActionTypes
): GameStoreType {
  switch (action.type) {
    case SET_GRID_SIZE: {
      return {
        ...state,
        gridSize: action.payload,
      };
    }
    case SET_WINNING_SIZE: {
      return {
        ...state,
        winningSize: action.payload,
      };
    }
    case SET_TIME_LIMIT:
      return { ...state, timeLimit: action.payload };
    case SET_ALL_CONFIG:
      return {
        ...state,
        gridSize: action.payload.gridSize,
        winningSize: action.payload.winningSize,
        timeLimit: action.payload.timeLimit,
      };
    default:
      return state;
  }
}

const store = createStore(gameReducer);

export default store;
