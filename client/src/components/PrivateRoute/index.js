import React from 'react';
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token')

  return token ? <Route
    {...rest}
    render={props => <Component {...props} />}
  /> : <Redirect to="/login" />
}

export default PrivateRoute
