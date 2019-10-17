import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, isLoading, isAuthenticated, ...rest }) {
  if (isLoading) {
    return <Route {...rest} render={() => <Spinner animation="border" variant="warning" />} />;
  }
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to={{ pathname: '/login', user: { from: props.location } }} />
      }
    />
  );
}

export default PrivateRoute;
