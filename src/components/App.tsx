import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Gallery from "./Gallery";
import ForestFire from "./ForestFire";
import Error from "./Error";
import { appTheme } from "../theme/theme";
export const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Container className={classes.globalContainer}>
        <Switch>
          <Route exact path='/' component={Gallery} />
          <Route exact path='/forestfire' component={ForestFire} />
          <Route component={Error} />
        </Switch>
      </Container>
    </ThemeProvider>
  );
};

const useStyles = makeStyles((appTheme) => ({
  globalContainer: {
    marginTop: "15px",
    maxWidth: "1500px",
  },
}));
