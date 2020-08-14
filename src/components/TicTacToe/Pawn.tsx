/* eslint-disable jsx-a11y/control-has-associated-label */
/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/core';
import tw, { css } from 'twin.macro';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ClickSound = require('../../assets/click.mp3');

const pingAnimation = css`
  ${tw`pointer-events-none absolute w-full h-full`}
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

const pulseAnimation = css`
  animation: pulse 0.5s cubic-bezier(0, 0, 0.2, 1) infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

const defaultHolderStyle = tw`
  w-full
  h-full
  text-xl
  transition-colors
  duration-300
  rounded
  flex
  justify-center
  items-center
  relative
`;

const xHolderStyle = (ping?: boolean, pulse?: boolean): SerializedStyles => css`
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
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }
  ${ping && pingAnimation}
  ${pulse && pulseAnimation}
`;

const oHolderStyle = (ping?: boolean, pulse?: boolean): SerializedStyles => css`
  ${defaultHolderStyle}
  ${tw`
        bg-orange-500
        hover:bg-orange-400
        text-white
        border-b-4
        border-orange-700
        hover:border-orange-500 
        `}
  ::after {
    content: 'o';
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }
  ${ping && pingAnimation}
  ${pulse && pulseAnimation}
`;

const emptyHolderContainerStyle = (
  turn: number,
  disableHover: boolean
): SerializedStyles => css`
  ${tw`h-full w-full`}
  &:hover {
    > button {
      outline: none;
      ${disableHover ? null : tw`animate-bounce bg-gray-400 cursor-pointer`}
      ${turn % 2 === 1 ? xHolderStyle() : oHolderStyle()}
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

interface EmptyHolderProps {
  turn: number;
  hasWinner?: boolean;
  onClick?: () => void;
}

interface HolderProps {
  ping?: boolean;
  pulse?: boolean;
}

export const OHolder: React.FC<HolderProps> = (props) => {
  const { ping, pulse } = props;
  return (
    <div css={oHolderStyle(false, pulse)}>
      {ping && <div css={oHolderStyle(ping)} />}
    </div>
  );
};

export const XHolder: React.FC<HolderProps> = (props) => {
  const { ping, pulse } = props;
  return (
    <div css={xHolderStyle(false, pulse)}>
      {ping && <div css={xHolderStyle(ping)} />}
    </div>
  );
};

export const EmptyHolder: React.FC<EmptyHolderProps> = ({
  turn,
  hasWinner,
  onClick,
}) => {
  console.log('pawn rerender');

  return (
    <div css={emptyHolderContainerStyle(turn, !!hasWinner)}>
      <button
        css={emptyHolderStyle}
        type="button"
        onClick={(): void => {
          new Audio(ClickSound).play();
          if (!hasWinner && onClick) onClick();
        }}
      />
    </div>
  );
};
