import React from "react";

import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import PageContainer from "../components/common/PageContainer";
import Gallery from "./Gallery";
import ForestFire from "./ForestFire";
import Error from "./Error";
import { appTheme } from "../theme/theme";

export const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <PageContainer>
        <Switch>
          <Route exact path='/' component={Gallery} />
          <Route exact path='/forestfire' component={ForestFire} />
          <Route component={Error} />
        </Switch>
      </PageContainer>
    </ThemeProvider>
  );
};
