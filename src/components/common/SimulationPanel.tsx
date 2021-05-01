import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

interface SimulationPanelProps {
  className?: string;
};

const SimulationPanel = (props: SimulationPanelProps) => {
  const { className } = props;
  const classes = useStyles();
  return (
    <Card className={className}>
      <CardContent className={classes.content}>
        SimulationPanel
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  content: {},
}));

export default SimulationPanel;
