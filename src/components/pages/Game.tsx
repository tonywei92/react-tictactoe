/* eslint-disable react-hooks/exhaustive-deps */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw, { css } from 'twin.macro';
import MainLayout from 'components/layouts/MainLayout';
import TicTacToe from 'components/TicTacToe';
import Modal from 'components/UI/Modal';
import Button from 'components/UI/Button';
import ProgressBar from 'components/UI/ProgressBar';
import Smile from 'components/UI/icons/Smile';
import Suprised from 'components/UI/icons/Surprised';
import useTimer from 'components/hooks/useTimer';
import { XHolder, OHolder } from 'components/TicTacToe/Pawn';
import { useEffect } from 'react';

const { useTicTacToe } = TicTacToe;

const animationPulse = css`
  ${tw`animate-ping absolute`}
  left:0;
  @keyframes ping {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }
`;

const Game = () => {
  const ticTacToe = useTicTacToe(10);
  const {
    winner,
    retryGame,
    playerOScore,
    playerXScore,
    tie,
    nextTurn,
  } = ticTacToe;
  const timer = useTimer(10, () => {
    timer.resetTimer();
    timer.startTimer();
    nextTurn();
  });

  const handleEmptyHolderClick = (): void => {
    timer.resetTimer();
    timer.startTimer();
  };

  useEffect(() => {
    timer.startTimer();
  }, []);

  useEffect(() => {
    if (winner) {
      timer.resetTimer();
    }
  }, [winner]);

  const modalButtons = [
    <Button
      size="small"
      key="retry"
      type="button"
      onClick={() => {
        retryGame();
        timer.resetTimer();
        timer.startTimer();
      }}
    >
      Retry
    </Button>,
  ];

  return (
    <MainLayout>
      <Modal
        visible={!!winner}
        buttons={modalButtons}
        icon={winner === 'tie' ? <Suprised /> : <Smile />}
      >
        {winner === 'tie'
          ? 'Uh oh, the game is tie!'
          : `Congratulations, the winner is ${winner.toUpperCase()}!`}
      </Modal>
      <nav tw="mt-2 mb-6 flex">
        <Button size="small">Back</Button>
        <div tw="font-bold text-indigo-600 text-2xl mx-4">TicTacToe v1.0</div>
      </nav>
      <div tw="flex mb-8 bg-white shadow border rounded">
        <div tw="px-2 border-r w-24 flex p-2 flex-col items-center">
          <div tw="text-indigo-700 text-4xl font-bold">{playerXScore}</div>
          <div tw="text-gray-600 font-bold text-xs">Scored by X</div>
        </div>
        <div tw="px-2 w-24 flex flex-col p-2 items-center">
          <div tw="text-indigo-700 text-4xl font-bold ">{tie}</div>
          <div tw="text-gray-600 font-bold text-xs">Tied</div>
        </div>
        <div tw="px-2 border-l w-24 flex p-2 flex-col items-center">
          <div tw="text-indigo-700 text-4xl font-bold">{playerOScore}</div>
          <div tw="text-gray-600 font-bold text-xs">Scored by O</div>
        </div>
      </div>
      <div tw="w-full md:w-8/12 lg:w-6/12 p-4">
        <div css={tw`flex items-center justify-center mb-4 relative`}>
          {!winner ? (
            <div tw="w-16 mr-4" css={animationPulse}>
              Hurry&nbsp;up!
              {ticTacToe.getPlayerTurn() === 'x' ? <XHolder /> : <OHolder />}
            </div>
          ) : null}
          <div tw="w-16 mr-4">
            {!winner ? <span>Hurry&nbsp;up!</span> : <span>&nbsp;</span>}
            {ticTacToe.getPlayerTurn() === 'x' ? <XHolder /> : <OHolder />}
          </div>
          <div tw="w-full h-full flex items-stretch justify-center">
            <ProgressBar progress={timer.percentProgress} />
          </div>
        </div>
        <TicTacToe
          tictactoe={ticTacToe}
          onEmptyHolderClick={handleEmptyHolderClick}
        />
      </div>
    </MainLayout>
  );
};

export default Game;
