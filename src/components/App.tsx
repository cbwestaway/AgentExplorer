import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container'
import { makeStyles } from "@material-ui/core/styles";

import Gallery from './Gallery';
import ForestFire from './ForestFire';
import Error from './Error';

export const App = () => {
  const classes = useStyles();
  return (
    <Container className={classes.globalContainer}>
      <Switch>
        <Route exact path='/' component={Gallery} />
        <Route exact path='/forestfire' component={ForestFire} />
        <Route component={Error} />
      </Switch>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  globalContainer: {
    marginTop: '75px',
    maxWidth: '1500px'
  }
}));
