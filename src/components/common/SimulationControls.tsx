import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Pause from "@material-ui/icons/Pause";
import Replay from "@material-ui/icons/Replay";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";

interface SimulationControlsProps {
  percentComplete: number;
  isRunning: boolean;
  play: () => void;
  pause: () => void;
  reset: () => void;
}

const SimulationControls = (props: SimulationControlsProps) => {
  const classes = useStyles();
  const { percentComplete, isRunning, play, pause, reset } = props;
  return (
    <div className={classes.container}>
      <LinearProgress variant='determinate' value={percentComplete} />
      <ButtonGroup variant='text'>
        <Button
          color='primary'
          className={classes.controlButton}
          onClick={isRunning ? pause : play}
        >
          {isRunning ? <Pause /> : <PlayArrow />}
          {isRunning ? "Pause" : "Play"}
        </Button>
        <Button
          color='primary'
          className={classes.controlButton}
          onClick={reset}
        >
          <Replay />
          Reset
        </Button>
      </ButtonGroup>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
  },
  controlButton: {
    maxWidth: "200px",
    padding: "5px 15px",
  },
}));

export default SimulationControls;
