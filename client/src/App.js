import React from 'react';
import { Switch } from 'react-router-dom'

import PublicRoute from './components/PublicRoute'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import Layout from './components/Layout'

function App() {
  return (
    <Switch>
      <PublicRoute exact path='/login' component={Login} />

      <PrivateRoute component={Layout} />
    </Switch>
  );
}

export default App;
