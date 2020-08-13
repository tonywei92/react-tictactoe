import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';
import HomePage from './components/pages/Home';
import NewGamePage from './components/pages/NewGame';
import GamePage from './components/pages/Game';
import 'tailwindcss/dist/base.min.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/newgame" exact component={NewGamePage} />
          <Route path="/game" exact component={GamePage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
