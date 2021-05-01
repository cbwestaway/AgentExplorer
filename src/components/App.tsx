import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Gallery from './Gallery';
import ForestFire from './ForestFire';
import Error from './Error';

export const App = () => (
  <Switch>
    <Route exact path='/' component={Gallery} />
    <Route exact path='/forestfire' component={ForestFire} />
    <Route component={Error} />
  </Switch>
);
