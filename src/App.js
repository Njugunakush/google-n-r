import React from 'react';
import './App.css';
import SearchPage from './components/SearchPage';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path='/search'>
            <SearchPage />
            {/* <SearchPage /> */}
          </Route>
          <Route path='/'>
            {/* Home (the one with the search on) */}
            <Home />
          </Route>
        </Switch>
        {/* search page (results page) */}
      </Router>
    </div>
  );
}

export default App;
