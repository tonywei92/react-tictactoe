/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import GameLogo from 'components/views/GameLogo';
import tw from 'twin.macro';

interface Props {
  leftButton?: React.ReactNode;
  rightButton?: React.ReactNode;
}

const NavBar: React.FC<Props> = (props) => {
  const { leftButton, rightButton } = props;
  return (
    <nav
      css={tw`py-3 md:py-2 mb-4 shadow border-b-4 border-indigo-600 flex w-full px-4  justify-center bg-indigo-500`}
    >
      <div tw="w-full md:w-8/12 lg:w-6/12 flex justify-center relative">
        <div tw="absolute left-0">{leftButton}</div>
        <GameLogo />
        <div tw="absolute right-0">{rightButton}</div>
      </div>
    </nav>
  );
};

export default NavBar;
