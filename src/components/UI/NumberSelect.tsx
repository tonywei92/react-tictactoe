/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState, useEffect } from 'react';
import tw from 'twin.macro';

interface Props {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

const NumberSelect: React.FC<Props> = (props) => {
  const { value = 0, min = 0, max, onChange } = props;
  const [currentValue, setCurrentValue] = useState(value || min);

  useEffect(() => {
    if (!max) {
      setCurrentValue(value);
    } else if (value > max) {
      setCurrentValue(max);
      if (onChange) {
        onChange(max);
      }
    } else {
      setCurrentValue(value);
    }
  }, [value, max, onChange]);

  const stepUp = (step = 1): void => {
    if (max) {
      if (currentValue + step > max) {
        if (currentValue !== max) {
          if (onChange) {
            onChange(max);
          }
        }
      } else if (onChange) {
        onChange(currentValue + step);
      }
    } else if (onChange) {
      onChange(currentValue + step);
    }
  };

  const stepDown = (step = 1): void => {
    if (currentValue - step < min) {
      if (currentValue !== min) {
        if (onChange) {
          onChange(min);
        }
      }
    } else if (onChange) {
      onChange(currentValue - step);
    }
  };
  return (
    <div css={tw`flex border rounded-lg shadow overflow-hidden`}>
      <div tw="flex border-b">
        <button
          type="button"
          tw="flex items-center justify-center p-4 transition-colors duration-300 hover:bg-blue-300 hover:text-white focus:outline-none cursor-pointer select-none"
          onClick={(): void => stepUp()}
        >
          &#9650;
        </button>
        <button
          type="button"
          tw="flex border-l items-center justify-center p-4 hover:bg-blue-300 hover:text-white cursor-pointer select-none w-full focus:outline-none"
          onClick={(): void => stepUp(10)}
        >
          &#9650; +10
        </button>
      </div>
      <div tw="flex items-center justify-center p-4">
        <div tw="text-3xl">{currentValue}</div>
      </div>
      <div tw="flex border-t">
        <button
          type="button"
          tw="flex items-center justify-center p-4 transition-colors duration-300 hover:bg-blue-300 hover:text-white cursor-pointer select-none focus:outline-none"
          onClick={(): void => stepDown()}
        >
          &#9660;
        </button>
        <button
          type="button"
          tw="flex border-l items-center justify-center p-4 hover:bg-blue-300 hover:text-white cursor-pointer select-none w-full focus:outline-none"
          onClick={(): void => stepDown(10)}
        >
          &#9660; -10
        </button>
      </div>
    </div>
  );
};

export default NumberSelect;
