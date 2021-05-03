import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

interface ModelHeaderProps {
  readonly modelTitle: string;
  readonly modelDescription: string;
  readonly className?: string;
};

const ModelHeader = (props: ModelHeaderProps) => {
  const { modelTitle, modelDescription, className } = props;
  const classes = useStyles();
  return (
    <Container className={`${className} ${classes.root}`}>
      <Typography variant="h1" className={classes.title}>
        {modelTitle}
      </Typography>
      <Typography className={classes.description}>
        {modelDescription}
      </Typography>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  title: {
    alignSelf: "center",
  },
  description: {
    padding: "10px",
  },
}));

export default ModelHeader;
