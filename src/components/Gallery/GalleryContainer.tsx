import * as React from "react";
import Grid from '@material-ui/core/Grid';

import { models, modelConfig } from './gallery.interfaces';
import GalleryItem from './GalleryItem';

const Gallery = (props: models) => {
  const { models } = props;
  return (
    <Grid container spacing={2}>
      { models.map((model: modelConfig, i: number) => <GalleryItem key={`key_${i}`} {...model} />) }
    </Grid>
  );
};

export default Gallery;
