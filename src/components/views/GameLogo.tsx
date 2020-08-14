/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'twin.macro';

const GameLogo = () => (
  <div css={tw`font-bold text-indigo-600 text-2xl mx-4`}>
    TicTacToe v{process.env.REACT_APP_VERSION}
  </div>
);

export default GameLogo;
