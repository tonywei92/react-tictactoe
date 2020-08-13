/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/core';
import React from 'react';
import tw, { css } from 'twin.macro';

const gridStyle = (gridSize: number): SerializedStyles =>
  css`
    ${tw`grid select-none gap-1 `}
    grid-template-columns: repeat(${gridSize}, minmax(0, 1fr));
  `;

const winningAnimation = (): SerializedStyles =>
  css`
    ${tw`pointer-events-none`}
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

const defaultHolderStyle = tw`
  w-10 h-10
  transition-colors
  duration-300
  rounded
  flex
  justify-center
  items-center
`;

const xHolderStyle = css`
  ${defaultHolderStyle}
  ${tw`
        bg-blue-500
        hover:bg-blue-400
        text-white font-bold
        border-b-4
        border-blue-700
        hover:border-blue-500
        `}
  ::after {
    content: 'x';
  }
`;

const oHolderStyle = css`
  ${defaultHolderStyle}
  ${tw`
        bg-orange-500
        hover:bg-orange-400
        text-white
        font-bold
        border-b-4
        border-orange-700
        hover:border-orange-500 
        rounded
        `}
  ::after {
    content: 'o';
  }
`;

const emptyHolderContainerStyle = (
  turn: number,
  disableHover: boolean
): SerializedStyles => css`
  &:hover {
    > button {
      outline: none;
      ${disableHover || tw`animate-bounce bg-gray-400 cursor-pointer`}
      ${disableHover || (turn % 2 ? xHolderStyle : oHolderStyle)}
    }
  }
  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-25%);
      animationtimingfunction: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animationtimingfunction: cubic-bezier(0, 0, 0.2, 1);
    }
  }
`;

const emptyHolderStyle = css`
  ${defaultHolderStyle}
  ${tw`
        bg-gray-500
        text-white
        font-bold
        border-b-4
        border-gray-500
        hover:border-gray-500 
        transition-colors
        duration-300
        rounded
        cursor-pointer
        `}
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
                <div css={xHolderStyle} />
              </div>
            );
          }
          if (gameTile === 'o') {
            return (
              <div key={`${i}, ${j}`}>
                <div css={oHolderStyle} />
              </div>
            );
          }
          return (
            <div
              key={`${i}, ${j}`}
              css={emptyHolderContainerStyle(turn, !!hasWinner)}
            >
              <button
                css={emptyHolderStyle}
                type="button"
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
      {hasWinner && <div css={winningAnimation}>{boardRender}</div>}
      {boardRender}
    </div>
  );
};

export default Board;
