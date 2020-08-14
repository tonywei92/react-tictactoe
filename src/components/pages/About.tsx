/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useHistory } from 'react-router-dom';
import Button from 'components/UI/Button';
import tw from 'twin.macro';
import NavBar from 'components/UI/NavBar';
import MainLayout from 'components/layouts/MainLayout';

const Home = () => {
  const history = useHistory();

  return (
    <MainLayout>
      <NavBar
        leftButton={
          <Button size="small" danger onClick={(): void => history.push('/')}>
            Home
          </Button>
        }
      />
      <p>Made by Tony Song</p>
      <p>
        <a tw="text-blue-500 underline" href="https://github.com/tonywei92">
          Github
        </a>
      </p>
    </MainLayout>
  );
};

export default Home;
