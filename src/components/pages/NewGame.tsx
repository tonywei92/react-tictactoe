/* eslint-disable jsx-a11y/label-has-associated-control */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import tw from 'twin.macro';
import MainLayout from 'components/layouts/MainLayout';
import GameLogo from 'components/views/GameLogo';
import { GameStoreType } from 'stores/GameStore';
import {
  SET_GRID_SIZE,
  SET_WINNING_SIZE,
  SET_TIME_LIMIT,
} from 'stores/GameStoreActions';
import Button from 'components/UI/Button';

const NewGame = () => {
  const history = useHistory();
  const gridSize = useSelector((state: GameStoreType) => state.gridSize);
  const winningSize = useSelector((state: GameStoreType) => state.winningSize);
  const timeLimit = useSelector((state: GameStoreType) => state.timeLimit);
  const dispatch = useDispatch();

  const dispatchGridSize = (e: React.FormEvent<HTMLInputElement>): void => {
    dispatch({ type: SET_GRID_SIZE, payload: Number(e.currentTarget.value) });
  };

  const handlePawnWinningConditionChange = (
    e: React.FormEvent<HTMLInputElement>
  ): void => {
    dispatch({
      type: SET_WINNING_SIZE,
      payload: Number(e.currentTarget.value),
    });
  };

  const handleTimeLimitChange = (
    e: React.FormEvent<HTMLInputElement>
  ): void => {
    dispatch({ type: SET_TIME_LIMIT, payload: Number(e.currentTarget.value) });
  };
  return (
    <MainLayout>
      <div tw="flex">
        <GameLogo />
      </div>
      <div css={tw`w-full max-w-xs`}>
        <form tw="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div tw="mb-4">
            <label
              tw="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Grid Size
            </label>
            <input
              type="number"
              tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              min={3}
              value={gridSize}
              onChange={dispatchGridSize}
            />
          </div>
          <div tw="mb-4">
            <label
              tw="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Winning condition
            </label>
            <input
              tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="number"
              min={3}
              value={winningSize}
              onChange={handlePawnWinningConditionChange}
              max={gridSize}
            />
          </div>
          <div tw="mb-4">
            <label
              tw="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Time limit each turn
            </label>
            <input
              tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="number"
              min={5}
              value={timeLimit}
              onChange={handleTimeLimitChange}
            />
          </div>
          <div tw="flex items-center justify-center">
            <div tw="mt-8">
              <Button onClick={(): void => history.push('/game')}>Play</Button>
            </div>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default NewGame;
