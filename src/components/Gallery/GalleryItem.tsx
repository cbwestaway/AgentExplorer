import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import { ModelConfig } from "./gallery.interfaces";
import SimulationSnapshot from '../common/SimulationSnapshot';
import { Tooltip } from "@material-ui/core";

const GalleryItem = (props: ModelConfig) => {
  const history = useHistory();
  const classes = useStyles();

  const { name, path, summary, active } = props;
  const hoverMsg = active ? '' : 'Coming Soon';
  return (
    <Grid item xs={4}>
      <Tooltip
        classes={{
          popper: classes.almostCenter,
          tooltip: classes.tooltip
        }}
        placement='top'
        title={hoverMsg}
      >
        <Card
          className={active ? classes.enabled : classes.disabled}
          variant="outlined"
          onClick={active ? () => history.push(path) : () => null}
        >
          <CardHeader
            title={name}
          >
          </CardHeader>
          <CardContent>
            <SimulationSnapshot
              state={[[3, 1, 3, 4], [2, 2, 1, 4], [3, 2, 4, 1], [1, 2, 3, 4]]}
              gridColors={['purple', 'gold', 'grey', 'brown']}
            />
            <Typography>
              {summary}
            </Typography>
          </CardContent>
        </Card>
      </Tooltip>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  enabled: {
    cursor: 'pointer'
  },
  disabled: {
    opacity: '0.6'
  },
  tooltip: {
    fontSize: '20px'
  },
  almostCenter: {
    position: 'absolute',
    top: '30% !important',
    minWidth: '80px'
  }
}));

export default GalleryItem;
