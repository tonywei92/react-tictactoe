/* eslint-disable react/jsx-props-no-spreading */
/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/core';
import tw, { css } from 'twin.macro';

interface Props {
  progress?: number;
}

const style = (progress = 0): SerializedStyles => css`
  width: ${progress}%;
  ${tw`bg-indigo-500 h-full rounded-lg transition-all duration-100`}
`;

const ProgressBar: React.FC<Props> = (props) => {
  const { progress = 0, ...rest } = props;
  return (
    <div tw="w-full h-2 shadow-lg border bg-gray-200 rounded-lg" {...rest}>
      <div css={style(progress)} />
    </div>
  );
};

export default ProgressBar;
