import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

import { ModelConfig } from "./gallery.interfaces";
import SimulationSnapshot from '../common/SimulationSnapshot';

const GalleryItem = (props: ModelConfig) => {
  const history = useHistory();

  const { name, path, summary } = props;
  return (
    <Grid item xs={4}>
      <Card variant="outlined" onClick={() => history.push(path)}>
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
    </Grid>
  );
};

export default GalleryItem;
