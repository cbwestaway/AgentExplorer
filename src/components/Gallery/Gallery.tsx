import * as React from "react";
import Container from '@material-ui/core/Container';

import GalleryItem from './GalleryItem';

const GALLERY_ITEMS = [
	{
		modelName: 'Forest Fire',
		modelPath: '/forestfire'
	}
];

const Gallery = () => {
  return (
		<Container>
			{ GALLERY_ITEMS.map((item, i) => <GalleryItem key={`key_${i}`} {...item} />) }
		</Container>
	);
};

export default Gallery;
