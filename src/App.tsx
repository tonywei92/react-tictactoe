import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import gameStore from 'stores/GameStore';
import HomePage from './components/pages/Home';
import NewGamePage from './components/pages/NewGame';
import GamePage from './components/pages/Game';
import 'tailwindcss/dist/base.min.css';

const App: React.FC = () => {
  return (
    <Provider store={gameStore}>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/newgame" exact component={NewGamePage} />
          <Route path="/game" exact component={GamePage} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
