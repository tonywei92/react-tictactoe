/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/core';
import React from 'react';
import tw, { css } from 'twin.macro';
import { EmptyHolder, OHolder, XHolder } from './Pawn';
import { WinnerInterface } from './useTicTacToe';

const gridStyle = (gridSize: number): SerializedStyles =>
  css`
 
    ${tw`grid select-none gap-1 w-full h-full`}
    grid-template-columns: repeat(${gridSize}, minmax(0, 1fr));
    width: calc(${gridSize} * 4rem);
    height: calc(${gridSize} * 4rem);
    ${gridSize > 10 && `width: calc(${gridSize} * 3rem);`}
    ${gridSize > 10 && `height: calc(${gridSize} * 3rem);`}
    ${gridSize > 20 && `width: calc(${gridSize} * 2rem);`}
    ${gridSize > 20 && `height: calc(${gridSize} * 2rem);`}
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
  hasWinner?: WinnerInterface;
  gameBoard: Array<string[]>;
  onEmptyPawnclick?: (i: number, j: number) => void;
  turn?: number;
}

const Board: React.FC<Props> = (props) => {
  const { gameBoard, hasWinner, onEmptyPawnclick, turn = 0 } = props;
  const gridSize = gameBoard.length;

  const partOfWinner = (indexI: number, indexJ: number): boolean => {
    if (hasWinner) {
      const { positions } = hasWinner;
      if (hasWinner.winner) {
        for (let i = 0; i < positions.length; i += 1) {
          if (positions[i][0] === indexI && positions[i][1] === indexJ) {
            return true;
          }
        }
      }
    }
    return false;
  };
  const boardRender = (
    <div css={gridStyle(gridSize)}>
      {gameBoard.map((gameRow, i) =>
        gameRow.map((gameTile, j) => {
          if (gameTile === 'x') {
            return (
              <div tw="w-full h-full" key={`${i}, ${j}`}>
                <XHolder ping pulse={partOfWinner(i, j)} />
              </div>
            );
          }
          if (gameTile === 'o') {
            return (
              <div tw="w-full h-full" key={`${i}, ${j}`}>
                <OHolder ping pulse={partOfWinner(i, j)} />
              </div>
            );
          }
          return (
            <div tw="w-full h-full" key={`${i}, ${j}`}>
              <EmptyHolder
                hasWinner={hasWinner ? !!hasWinner.winner : false}
                turn={turn}
                onClick={(): void => {
                  if (!hasWinner?.winner) {
                    if (onEmptyPawnclick) {
                      onEmptyPawnclick(i, j);
                    }
                  }
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
      {hasWinner?.winner && <div css={winningAnimation} />}
      {boardRender}
    </div>
  );
};

export default Board;
