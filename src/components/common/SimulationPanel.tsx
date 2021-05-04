import * as React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import SimulationSnapshot, {
  SnapshotProps,
} from "../common/SimulationSnapshot";

interface SimulationPanelProps {
  readonly className?: string;
  readonly snapshotProps: SnapshotProps;
}

const SimulationPanel = (props: SimulationPanelProps) => {
  const { className, snapshotProps } = props;
  const classes = useStyles();
  return (
    <Container className={className}>
      <SimulationSnapshot {...snapshotProps} />
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  content: {},
}));

export default SimulationPanel;
