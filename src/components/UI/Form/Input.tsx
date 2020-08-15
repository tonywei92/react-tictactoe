/* eslint-disable react/jsx-props-no-spreading */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { forwardRef } from 'react';
import tw, { css } from 'twin.macro';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { error, ...rest } = props;
  return (
    <input
      {...rest}
      ref={ref}
      css={css`
        ${tw`shadow
      appearance-none
      border rounded
      w-full py-2 px-3
      text-gray-700 mb-3
      leading-tight focus:outline-none
      focus:shadow-outline`}
        ${error ? tw`border-red-500` : ''}
      `}
    />
  );
});

export default Input;
