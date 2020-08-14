/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import gameStore from 'stores/GameStore';
import Game from '../Game';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Provider store={gameStore}>
      <Game />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
