/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/core';
import { forwardRef } from 'react';
import tw, { css } from 'twin.macro';

type ButtonSizes = 'small' | 'normal';
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizes;
  icon?: React.ReactNode;
  danger?: boolean;
}

const defaultStyle = tw`
  inline-flex
  rounded focus:outline-none
  relative
  justify-center
`;

const primaryStyle = tw`
  bg-blue-500 hover:bg-blue-400
  border-blue-700 hover:border-blue-500
  text-white
`;

const dangerStyle = tw`
  bg-red-500 hover:bg-red-400
  border-red-700 hover:border-red-500
  text-white
`;

const normalSize = tw`
  font-bold py-2 px-4 border-b-4
`;

const smallSize = tw`
  py-1 px-3 border-b-4
`;

const style = (size: ButtonSizes, danger: boolean): SerializedStyles => css`
  ${defaultStyle}
  ${primaryStyle}
  ${size === 'small' ? smallSize : normalSize}
  ${danger ? dangerStyle : primaryStyle}
`;

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { children, icon, size = 'normal', danger, ...rest } = props;
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      css={style(size, !!danger)}
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
