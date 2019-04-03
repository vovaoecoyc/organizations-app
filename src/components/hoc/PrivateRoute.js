import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, isAuthorized, ...rest }) {
  const renderComponent = propsRoute =>
    isAuthorized ? <Component {...propsRoute} /> : <Redirect to="/auth" />;
  return <Route {...rest} render={renderComponent} />;
}
