import * as React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";

interface GalleryItemProps {
	modelName: string;
	modelPath: string;
}

const GalleryItem = (props: GalleryItemProps) => {
	const history = useHistory();

	const { modelName, modelPath } = props;
	return (
		<Container onClick={() => history.push(modelPath)}>
			{ /* Image Placeholder */ }
			<div style={{width: '200px', height: '200px', backgroundColor: 'red'}}></div>
			<Typography variant="h4">{modelName}</Typography>
		</Container>
	)
};

export default GalleryItem;
