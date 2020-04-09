import React from 'react';
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token')

  return token ? <Redirect to="/" /> : <Route
    {...rest}
    render={props => <Component {...props} />}
  />
}

export default PublicRoute
