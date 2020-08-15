/* eslint-disable jsx-a11y/label-has-associated-control */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import tw from 'twin.macro';
import { useForm, SubmitHandler } from 'react-hook-form';
import MainLayout from 'components/layouts/MainLayout';
import NavBar from 'components/UI/NavBar';
import Input from 'components/UI/Form/Input';
import { GameStoreType } from 'stores/GameStore';
import { SET_ALL_CONFIG } from 'stores/GameStoreActions';
import Button from 'components/UI/Button';

type gameRulesFormData = {
  gridSize: number;
  winningSize: number;
  timeLimit: number;
};

const validateWinningSize = (
  winningSize: number,
  gridSize: number
): string | boolean => {
  if (!winningSize) {
    return 'Required';
  }
  let message: string | boolean = true;
  let min = 3;
  if (gridSize > 3) {
    min = 4;
  }

  if (winningSize < min) {
    message = 'At least 4 for Grid > 3';
  }
  if (winningSize > gridSize) {
    message = `Max ${gridSize} for Grid ${gridSize}`;
  }
  return message;
};

const validateGridSize = (gridSize: number): string | boolean => {
  if (!gridSize) {
    return 'Required';
  }
  const min = 3;
  const max = 1000;
  let message: string | boolean = true;

  if (gridSize < min) {
    message = `At least ${3}`;
  }
  if (gridSize > max) {
    message = `Max ${max}`;
  }
  return message;
};

const NewGame = () => {
  const history = useHistory();

  const gridSize = useSelector((state: GameStoreType) => state.gridSize);
  const winningSize = useSelector((state: GameStoreType) => state.winningSize);
  const timeLimit = useSelector((state: GameStoreType) => state.timeLimit);
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, getValues: getFormValues } = useForm<
    gameRulesFormData
  >();
  const onSubmit: SubmitHandler<gameRulesFormData> = (data) => {
    dispatch({
      type: SET_ALL_CONFIG,
      payload: {
        gridSize: Number(data.gridSize),
        winningSize: Number(data.winningSize),
        timeLimit: Number(data.timeLimit),
      },
    });
    history.push('/game');
  };
  return (
    <MainLayout>
      <NavBar
        leftButton={
          <Button size="small" danger onClick={(): void => history.push('/')}>
            Home
          </Button>
        }
      />
      <div css={tw`w-full max-w-xs`}>
        <form
          tw="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div tw="mb-4">
            <label
              tw="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="gridSize"
            >
              Grid Size (max: 1000)
            </label>
            <Input
              type="number"
              id="gridSize"
              name="gridSize"
              defaultValue={gridSize}
              ref={register({
                validate: (v) => validateGridSize(Number(v)),
              })}
              error={!!errors.gridSize}
            />
            {errors.gridSize && (
              <p tw="text-red-500 text-xs italic">{errors.gridSize.message}</p>
            )}
          </div>
          <div tw="mb-4">
            <label
              tw="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="winningSize"
            >
              Winning condition
            </label>
            <Input
              id="winningSize"
              name="winningSize"
              type="number"
              defaultValue={winningSize}
              ref={register({
                validate: (v) =>
                  validateWinningSize(
                    Number(v),
                    Number(getFormValues().gridSize)
                  ),
              })}
              error={!!errors.winningSize}
            />
            {errors.winningSize && (
              <p tw="text-red-500 text-xs italic">
                {errors.winningSize.message}
              </p>
            )}
          </div>
          <div tw="mb-4">
            <label
              tw="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="timeLimit"
            >
              Time limit each turn
            </label>
            <Input
              id="timeLimit"
              name="timeLimit"
              type="number"
              defaultValue={timeLimit}
              ref={register({
                required: true,
                min: 3,
              })}
              error={!!errors.timeLimit}
            />
            {errors.timeLimit && (
              <p tw="text-red-500 text-xs italic">Time limit at least 3</p>
            )}
          </div>
          <div tw="flex items-center justify-center">
            <div tw="mt-8">
              <Button type="submit">Play</Button>
            </div>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default NewGame;
