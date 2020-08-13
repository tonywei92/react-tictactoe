/* eslint-disable jsx-a11y/control-has-associated-label */
/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/core';
import tw, { css } from 'twin.macro';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ClickSound = require('../../assets/click.mp3');

const defaultHolderStyle = tw`
  w-full
  h-8 md:h-10 lg:h-12
  md:text-4xl
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

interface EmptyHolderProps {
  turn: number;
  hasWinner: boolean;
  onClick?: () => void;
}

export const OHolder: React.FC = () => <div css={oHolderStyle} />;

export const XHolder: React.FC = () => <div css={xHolderStyle} />;

export const EmptyHolder: React.FC<EmptyHolderProps> = ({
  turn,
  hasWinner,
  onClick,
}) => {
  return (
    <div css={emptyHolderContainerStyle(turn, hasWinner)}>
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
