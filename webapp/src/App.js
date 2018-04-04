import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Home from './containers/Home';
import Test from './containers/Test';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/ssr-react-94b59/us-central1/ssrApp/">Home</Link>
          </li>
          <li>
            <Link to="/ssr-react-94b59/us-central1/ssrApp/test">Test</Link>
          </li>
        </ul>

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
      </div>
    );
  }
}
