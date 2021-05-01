import * as React from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";

import { modelConfig } from "./gallery.interfaces";


const GalleryItem = (props: modelConfig) => {
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
          <Typography>
            {summary}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default GalleryItem;
