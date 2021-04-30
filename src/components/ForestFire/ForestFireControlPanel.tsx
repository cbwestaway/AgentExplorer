import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

interface ForestFireControlPanelProps {
  className?: string;
};

const ForestFireControlPanel = (props: ForestFireControlPanelProps) => {
  const { className } = props;
  const classes = useStyles();
  return (
    <Card className={className}>
        <CardContent className={classes.content}>
          ForestFireControlPanel
        </CardContent>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  content: {},
}));

export default ForestFireControlPanel;
