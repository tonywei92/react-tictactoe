/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw, { css } from 'twin.macro';
import { OHolder, XHolder } from 'components/TicTacToe/Pawn';

const Banner = () => {
  return (
    <div
      css={css`
        ${tw`relative`}
        width: 300px;
        height: 100px;
        transform: scale(0.8);
        transform-origin: left top;
      `}
    >
      <div
        css={css`
          ${tw`absolute shadow`}
          width: 60px;
          height: 60px;
          left: 0px;
          transform: rotate(-24deg);
        `}
      >
        <OHolder />
      </div>
      <div
        css={css`
          ${tw`absolute shadow`}
          width: 60px;
          height: 60px;
          left: 32px;
          top: 20px;
          transform: rotate(24deg);
        `}
      >
        <XHolder />
      </div>
      <div
        css={css`
          ${tw`absolute font-light text-gray-800 text-center text-2xl`}
          width: 60px;
          height: 60px;
          left: 106px;
          top: 24px;
        `}
      >
        React&nbsp;TicTacToe
      </div>
    </div>
  );
};

export default Banner;
