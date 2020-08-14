/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/core';
import React from 'react';
import tw, { css } from 'twin.macro';
import { Grid, AutoSizer, GridCellProps } from 'react-virtualized';
import { EmptyHolder, OHolder, XHolder } from './Pawn';
import { WinnerInterface } from './useTicTacToe';

const winningAnimation = (): SerializedStyles =>
  css`
    ${tw`pointer-events-none bg-green-500 rounded-full`}
    ${tw`absolute w-64 h-64`}
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

const gameAreaSizeStyle = (gridSize: number): SerializedStyles => css`
  ${tw`pb-8`}
  width: calc(55px * ${gridSize});
  max-width: 100vh;
  flex: '1 1 auto';
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

  const boardRender = ({
    columnIndex,
    key,
    rowIndex,
    style,
  }: GridCellProps): React.ReactNode => {
    const gameTile = gameBoard[rowIndex][columnIndex];
    if (gameTile === 'x') {
      return (
        <div key={key} tw="p-1" style={style}>
          <XHolder ping pulse={partOfWinner(rowIndex, columnIndex)} />
        </div>
      );
    }
    if (gameTile === 'o') {
      return (
        <div key={key} tw="p-1" style={style}>
          <OHolder ping pulse={partOfWinner(rowIndex, columnIndex)} />
        </div>
      );
    }
    return (
      <div key={key} tw="p-1" style={style}>
        <EmptyHolder
          hasWinner={hasWinner ? !!hasWinner.winner : false}
          turn={turn}
          onClick={(): void => {
            if (!hasWinner?.winner) {
              if (onEmptyPawnclick) {
                onEmptyPawnclick(rowIndex, columnIndex);
              }
            }
          }}
        />
      </div>
    );
  };
  return (
    <div tw="h-full w-full flex justify-center">
      {hasWinner?.winner && <div css={winningAnimation} />}
      <div css={gameAreaSizeStyle(gridSize)} className="gameContainerx">
        <AutoSizer>
          {({ width, height }) => (
            <Grid
              cellRenderer={boardRender}
              columnWidth={55}
              columnCount={gameBoard.length}
              height={height}
              tw="outline-none"
              // noContentRenderer={this._noContentRenderer}
              // overscanColumnCount={overscanColumnCount}
              // overscanRowCount={overscanRowCount}
              rowHeight={55}
              rowCount={gameBoard.length}
              // scrollToColumn={scrollToColumn}
              // scrollToRow={scrollToRow}
              width={width}
            />
          )}
        </AutoSizer>
      </div>
    </div>
  );
};

export default Board;
