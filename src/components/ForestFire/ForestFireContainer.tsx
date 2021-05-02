import * as React from "react";

import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";

import SimulationPanel from "../common/SimulationPanel";
import ForestFireControlPanel from "./ForestFireControlPanel";


const ForestFireContainer = () => {
  const classes = useStyles();
  return(
    <Grid
      container
      direction="row"
      alignItems="stretch"
      className={classes.root}
    >
        <Grid
          item
          className={classes.animationPanelGridItem}
        >
          <SimulationPanel/>
        </Grid>
        <Grid
          item
          className={classes.controlPanelGridItem}
        >
          <ForestFireControlPanel/>
        </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  animationPanelGridItem: {},
  controlPanelGridItem: {},
}));


export default ForestFireContainer;
