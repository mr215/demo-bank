import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Login from './components/Login'
import Layout from './components/Layout'

function App() {
  return (
    <Switch>
      <Route exact path='/login' component={Login} />

      <Route component={Layout} />
    </Switch>
  );
}

export default App;
