/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw, { css } from 'twin.macro';

interface Props {
  children: React.ReactNode;
}

const style = css`
  ${tw`container mx-auto items-center flex flex-col`}
`;

const MainLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return <div css={style}>{children}</div>;
};

export default MainLayout;
