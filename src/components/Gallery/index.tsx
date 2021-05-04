import * as React from "react";
import GalleryContainer from "./GalleryContainer";
const models = require("./../models.json");
export default () => <GalleryContainer models={models}></GalleryContainer>;
