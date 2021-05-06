import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import Container from "@material-ui/core/Container";

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
  const [showReset, setShowReset] = useState<boolean>(false);

  const advanceOneFrame = (state: simulationState) => {
    setTimeout(() => {
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
    setIsRunning(false);
    setShowReset(true);
  };

  const reset = () => {
    setSnapshot(stateHistory[0]);
    setShowReset(false);
  };

  useEffect(() => {
    if (isRunning && iter < nIter) {
      advanceOneFrame(snapshot);
    } else if (iter === nIter) {
      setIsRunning(false);
      setShowReset(true);
    }
  }, [iter, isRunning]);

  return (
    <Container className={className}>
      <SimulationSnapshot gridColors={gridColors} state={snapshot} />
      <SimulationControls
        isRunning={isRunning}
        showReset={showReset}
        play={play}
        pause={pause}
        reset={reset}
      />
    </Container>
  );
};

export default SimulationPanel;
