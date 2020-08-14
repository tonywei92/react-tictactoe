/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw, { css } from 'twin.macro';

interface Props {
  children: React.ReactNode;
}

const style = css`
  ${tw`items-center flex flex-col h-screen`}
`;

const footerStyle = css`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 18px;
  ${tw`bg-indigo-500 border-indigo-600 border-t-2 flex text-white justify-center items-center text-xs font-bold`}
`;

const MainLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <div css={style}>
      {children}
      <div css={footerStyle}>
        <span>
          Made with&nbsp;
          <span role="img" aria-label="love symbol">
            ❤️
          </span>
          &nbsp; by Tony Song
        </span>
      </div>
    </div>
  );
};

export default MainLayout;
