import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Import routing components
import Home from '../src/client/container/home';
import Inprogress from '../src/client/components/inprogress';


import './App.css';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/inprogress" component={Inprogress} />
        </Switch>
      </Router>
  );
}

export default App;
