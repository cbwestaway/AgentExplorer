import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import SimulationSnapshot, {
  SnapshotProps,
  simulationState,
} from "../common/SimulationSnapshot";
import SimulationControls from "../common/SimulationControls";

interface SimulationPanelProps {
  readonly className?: string;
  readonly snapshotProps: SnapshotProps;
  readonly takeSimStep: (state: simulationState) => simulationState;
  isRunning: boolean;
  setIsRunning: Dispatch<SetStateAction<boolean>>;
}

const nIter = 100;
const SimulationPanel = (props: SimulationPanelProps) => {
  const classes = useStyles();

  const {
    className,
    takeSimStep,
    snapshotProps,
    isRunning,
    setIsRunning,
  } = props;
  const { state, gridColors } = snapshotProps;

  const [stateHistory, setStateHistory] = useState<
    ReadonlyArray<simulationState>
  >([state]);
  const [snapshot, setSnapshot] = useState<simulationState>(state);
  const [iter, setIter] = useState<number>(0);

  let simTimer: null | NodeJS.Timeout = null;
  const advanceOneFrame = (state: simulationState) => {
    simTimer = setTimeout(() => {
      const newState = takeSimStep(state);
      setStateHistory([...stateHistory, newState]);
      setSnapshot(newState);
      setIter(() => iter + 1);
    }, 500);
  };

  const play = () => {
    setIsRunning(true);
    advanceOneFrame(snapshot);
  };

  const pause = () => {
    clearTimeout(simTimer);
    setIsRunning(false);
  };

  const reset = () => {
    pause();
    setSnapshot(stateHistory[0]);
    setIter(0);
  };

  useEffect(() => {
    if (isRunning && iter < nIter) {
      advanceOneFrame(snapshot);
    } else if (iter === nIter) {
      setIsRunning(false);
    }
  }, [iter, isRunning]);

  return (
    <Container className={classes.container}>
      <SimulationSnapshot gridColors={gridColors} state={snapshot} />
      <SimulationControls
        percentComplete={(iter / nIter) * 100}
        isRunning={isRunning}
        play={play}
        pause={pause}
        reset={reset}
      />
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "700px",
    padding: "10px 10px 0 10px",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "2px",
  },
}));

export default SimulationPanel;
