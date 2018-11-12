import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getLocalStorage } from './web-storage';
export const PrivateRoute = props => {
  const { component: Component, ...rest } = props;
  const accessToken = getLocalStorage('accessToken');
  const extraProps = {};

  if (!Component) {
    throw new Error(`Component can't be undefined`);
  }
  return (
    <Route
      {...rest}
      render={rprops => {
        return accessToken ? (
          <Component {...rprops} {...extraProps} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: rprops.location } }} />
        );
      }}
    />
  );
};

export const PublicRoute = props => {
  const { component: Component, ...rest } = props;
  const accessToken = getLocalStorage('accessToken');
  const extraProps = {};
  if (!Component) {
    throw new Error(`Component can't be undefined`);
  }
  return (
    <Route
      {...rest}
       render={rprops => (accessToken ? <Redirect to="/home" /> : <Component {...rprops} {...extraProps} />)}
      // render={rprops=>(<Redirect to="/home" />)}
    />
  );
};
