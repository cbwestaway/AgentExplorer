import * as React from "react";
import { Switch, Route } from 'react-router-dom';
  
import Gallery from './Gallery/Gallery';
import ErrorPage from './Error';

export const App = () => (
	<Switch>
		<Route exact path='/' component={Gallery} />
		<Route exact path='/forestfire' component={ErrorPage} />
	</Switch>
);
