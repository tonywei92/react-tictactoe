export const SET_GRID_SIZE = 'SET_GRID_SIZE';
export const SET_WINNING_SIZE = 'SET_WINNING_SIZE';
export const SET_TIME_LIMIT = 'SET_TIME_LIMIT';
export const SET_ALL_CONFIG = 'SET_ALL_CONFIG';

interface SetGridSizeAction {
  type: typeof SET_GRID_SIZE;
  payload: number;
}

interface SetWinningSize {
  type: typeof SET_WINNING_SIZE;
  payload: number;
}

interface SetTimeLimit {
  type: typeof SET_TIME_LIMIT;
  payload: number;
}

interface SetAllConfig {
  type: typeof SET_ALL_CONFIG;
  payload: {
    gridSize: number;
    winningSize: number;
    timeLimit: number;
  };
}

export type GameActionTypes =
  | SetGridSizeAction
  | SetWinningSize
  | SetTimeLimit
  | SetAllConfig;
