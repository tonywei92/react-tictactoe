/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react-hooks/exhaustive-deps */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw, { css } from 'twin.macro';
import React, { useEffect } from 'react';
import MainLayout from 'components/layouts/MainLayout';
import TicTacToe from 'components/TicTacToe';
import Modal from 'components/UI/Modal';
import Button from 'components/UI/Button';
import NavBar from 'components/UI/NavBar';
import ProgressBar from 'components/UI/ProgressBar';
import ScoreBoard from 'components/UI/ScoreBoard';
import Smile from 'components/UI/icons/Smile';
import Suprised from 'components/UI/icons/Surprised';
import useTimer from 'components/hooks/useTimer';
import { GameStoreType } from 'stores/GameStore';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { XHolder, OHolder } from 'components/TicTacToe/Pawn';

const { useTicTacToe } = TicTacToe;
const bellSound = require('../../assets/bell.mp3');
const failSound = require('../../assets/fail.mp3');

const animationPing = css`
  ${tw`absolute`}
  animation: ping1 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  left: -6px;
  top: -30px;
  @keyframes ping1 {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1.6);
      opacity: 0;
    }
  }
`;

const Game = () => {
  const gridSize = useSelector((state: GameStoreType) => state.gridSize);
  const winningConditionSize = useSelector(
    (state: GameStoreType) => state.winningSize
  );
  const timeLimit = useSelector((state: GameStoreType) => state.timeLimit);
  const history = useHistory();
  const ticTacToe = useTicTacToe(gridSize, winningConditionSize);
  const {
    winner,
    retryGame,
    playerOScore,
    playerXScore,
    tie,
    nextTurn,
  } = ticTacToe;

  const timer = useTimer(timeLimit, () => {
    new Audio(failSound).play();
    timer.resetTimer();
    timer.startTimer();
    nextTurn();
  });

  const restartGame = (): void => {
    retryGame();
    timer.resetTimer();
    timer.startTimer();
  };

  const handleEmptyHolderClick = (): void => {
    timer.resetTimer();
    timer.startTimer();
  };

  // start timer on game start
  useEffect(() => {
    timer.startTimer();
  }, []);

  // start timer on game over
  useEffect(() => {
    if (winner.winner) {
      timer.resetTimer();
      new Audio(bellSound).play();
    }
  }, [winner.winner]);

  const modalButtons = [
    <Button
      size="small"
      key="retry"
      type="button"
      onClick={(): void => {
        restartGame();
      }}
    >
      Retry
    </Button>,
    <Button
      tw="ml-4"
      size="small"
      key="home"
      type="button"
      danger
      onClick={(): void => {
        history.push('/');
      }}
    >
      Back to home
    </Button>,
  ];

  const TicTacToeGameRender = React.useMemo(
    () => (
      <TicTacToe
        tictactoe={ticTacToe}
        onEmptyHolderClick={handleEmptyHolderClick}
      />
    ),
    [ticTacToe, handleEmptyHolderClick]
  );

  return (
    <MainLayout>
      <Modal
        visible={!!winner.winner}
        buttons={modalButtons}
        icon={winner.winner === 'tie' ? <Suprised /> : <Smile />}
      >
        {winner.winner === 'tie' ? (
          'Uh oh, the game is tie!'
        ) : (
          <div tw="flex items-center">
            <div>
              Congratulations, the winner is&nbsp;
              <div tw="w-12 h-8 inline-block align-middle">
                {winner.winner === 'x' ? <XHolder /> : <OHolder />}
              </div>
            </div>
          </div>
        )}
      </Modal>
      <NavBar
        leftButton={
          <Button size="small" danger onClick={(): void => history.push('/')}>
            Home
          </Button>
        }
        rightButton={
          <Button size="small" onClick={(): void => restartGame()}>
            Restart
          </Button>
        }
      />

      <ScoreBoard
        scores={[
          { label: 'Scored by X', score: playerXScore },
          { label: 'Tie', score: tie },
          { label: 'Scored by O', score: playerOScore },
        ]}
      />

      <div tw="w-full md:w-8/12 lg:w-6/12 p-4 flex flex-col justify-center items-center">
        <div css={tw`flex items-center justify-center mb-4 relative w-full`}>
          {!winner.winner ? (
            <div tw="w-16 mr-4 h-12 absolute" css={animationPing}>
              Hurry&nbsp;up!
              {ticTacToe.getPlayerTurn() === 'x' ? <XHolder /> : <OHolder />}
            </div>
          ) : null}
          <div tw="w-16 mr-4 h-12">
            {ticTacToe.getPlayerTurn() === 'x' ? <XHolder /> : <OHolder />}
          </div>
          <div tw="w-full h-full flex items-stretch justify-center items-center">
            <ProgressBar progress={timer.percentProgress} />
          </div>
        </div>
      </div>
      {TicTacToeGameRender}
    </MainLayout>
  );
};

export default Game;
