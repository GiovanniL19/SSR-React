import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './containers/Home';
import Test from './containers/Test';

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path='/'
          component={Home} />
        <Route
          exact
          path='/test'
          component={Test} />
      </Switch>
    );
  }
}
