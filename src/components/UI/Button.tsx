/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';
import tw, { css } from 'twin.macro';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'normal';
  icon?: React.ReactNode;
}

const defaultStyle = tw`
  inline-flex
  bg-blue-500 hover:bg-blue-400
  border-blue-700 hover:border-blue-500 rounded focus:outline-none
  relative
`;

const style = css`
  ${defaultStyle}
  ${tw`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4`}
`;

const styleSmall = css`
  ${defaultStyle}
  ${tw`bg-blue-500 hover:bg-blue-400 text-white py-1 px-3 border-b-4`}
`;

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { children, icon, size = 'normal', ...rest } = props;
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      css={size === 'small' ? styleSmall : style}
      ref={ref}
      type="button"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
});

export default Button;
