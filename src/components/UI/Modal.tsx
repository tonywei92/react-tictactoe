/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useEffect } from 'react';
import tw from 'twin.macro';
import { useSpring, animated } from 'react-spring';

interface Props {
  visible?: boolean;
  buttons?: React.ReactNode[];
  icon?: React.ReactNode;
}

const style = tw`bg-white fixed rounded-lg overflow-hidden shadow-xl transform flex flex-col transition-all sm:max-w-md sm:w-full shadow-lg z-10 border`;

const Modal: React.FC<Props> = (props) => {
  const { children, icon, visible = false, buttons = [] } = props;
  const [spring, setSpring] = useSpring(() => ({
    top: visible ? '50px' : '-200px',
  }));

  useEffect(() => {
    setSpring({ top: visible ? '10px' : '-200px' });
  }, [setSpring, visible]);
  return (
    <animated.div style={spring} css={style}>
      <div tw="mt-3 mb-3 pt-5 pb-4 px-6 flex items-center text-xs md:text-lg">
        <div tw="mr-3">{icon}</div>
        <div>{children}</div>
      </div>
      <hr />
      <div tw="flex justify-end mt-2 mb-2 px-4">{buttons}</div>
    </animated.div>
  );
};

export default Modal;
