/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/core';
import React from 'react';
import tw, { css } from 'twin.macro';
import { EmptyHolder, OHolder, XHolder } from './Pawn';

const gridStyle = (gridSize: number): SerializedStyles =>
  css`
    ${tw`grid select-none gap-1 w-full h-full`}
    grid-template-columns: repeat(${gridSize}, minmax(0, 1fr));
  `;

const winningAnimation = (): SerializedStyles =>
  css`
    ${tw`pointer-events-none bg-green-500 rounded-full`}
    ${tw`absolute w-full h-full`}
    animation: ping 0.5s cubic-bezier(0, 0, 0.2, 1);
    animation-fill-mode: forwards;

    @keyframes ping {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      75%,
      100% {
        transform: scale(2);
        opacity: 0;
      }
    }
  `;

interface Props {
  hasWinner: string;
  gameBoard: Array<string[]>;
  onEmptyPawnclick: (i: number, j: number) => void;
  turn: number;
}

const Board: React.FC<Props> = (props) => {
  const { gameBoard, hasWinner, onEmptyPawnclick, turn } = props;
  const gridSize = gameBoard.length;
  const boardRender = (
    <div css={gridStyle(gridSize)}>
      {gameBoard.map((gameRow, i) =>
        gameRow.map((gameTile, j) => {
          if (gameTile === 'x') {
            return (
              <div key={`${i}, ${j}`}>
                <XHolder />
              </div>
            );
          }
          if (gameTile === 'o') {
            return (
              <div key={`${i}, ${j}`}>
                <OHolder />
              </div>
            );
          }
          return (
            <div key={`${i}, ${j}`}>
              <EmptyHolder
                hasWinner={!!hasWinner}
                turn={turn}
                onClick={(): void => {
                  if (!hasWinner) onEmptyPawnclick(i, j);
                }}
              />
            </div>
          );
        })
      )}
    </div>
  );
  return (
    <div css={tw`relative`}>
      {hasWinner && <div css={winningAnimation} />}
      {boardRender}
    </div>
  );
};

export default Board;
