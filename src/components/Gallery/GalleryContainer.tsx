import * as React from "react";
import Grid from "@material-ui/core/Grid";

import { Models, ModelConfig } from "./gallery.interfaces";
import GalleryItem from "./GalleryItem";

const Gallery = (props: Models) => {
  const { models } = props;
  return (
    <Grid container spacing={4}>
      {models.map((model: ModelConfig, i: number) => (
        <GalleryItem key={`key_${i}`} {...model} />
      ))}
    </Grid>
  );
};

export default Gallery;
