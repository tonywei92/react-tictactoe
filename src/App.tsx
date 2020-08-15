import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import gameStore from 'stores/GameStore';
import HomePage from './components/pages/Home';
import NewGamePage from './components/pages/NewGame';
import GamePage from './components/pages/Game';
import AboutPage from './components/pages/About';
import p404Page from './components/pages/404';
import 'tailwindcss/dist/base.min.css';

const App: React.FC = () => {
  return (
    <Provider store={gameStore}>
      <Router basename="/react-tictactoe">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/newgame" exact component={NewGamePage} />
          <Route path="/game" exact component={GamePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/*" exact component={p404Page} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
