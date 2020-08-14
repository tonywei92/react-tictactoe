/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useHistory } from 'react-router-dom';
import Button from 'components/UI/Button';
import tw from 'twin.macro';
import MainLayout from 'components/layouts/MainLayout';
import GameLogo from 'components/views/GameLogo';

const menuStyle = tw`flex flex-col w-4/12`;
const buttonStyle = tw`mb-3`;

enum MENUS {
  MENU_NEW_GAME = 1,
  MENU_ABOUT = 2,
}

const Home = () => {
  const history = useHistory();
  const handleSelectedMenu = (menu: MENUS): void => {
    switch (menu) {
      case MENUS.MENU_NEW_GAME:
        history.push('/newgame');
        break;
      case MENUS.MENU_ABOUT:
        break;
      default:
        console.error('invalid menu selected');
    }
  };

  return (
    <MainLayout>
      <nav tw="py-4">
        <GameLogo />
      </nav>
      <div css={menuStyle}>
        <Button
          css={buttonStyle}
          onClick={(): void => handleSelectedMenu(MENUS.MENU_NEW_GAME)}
        >
          New Game
        </Button>
        <Button>About</Button>
      </div>
    </MainLayout>
  );
};

export default Home;
