import React from 'react';
import Header from './components/container/header';
import Feed from './components/container/feed';
import Profile from './components/container/profile';
import Account from './components/container/user-account'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route
          path="/"
          component={Feed}
          exact
        />
        <Route
          path="/profile"
          component={Account}
          exact
        />
      </div>
    </Router>
  );
}

export default App;
