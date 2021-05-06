import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Pause from "@material-ui/icons/Pause";
import Replay from "@material-ui/icons/Replay";
import { makeStyles } from "@material-ui/core/styles";

interface SimulationControlsProps {
  isRunning: boolean;
  showReset: boolean;
  play: () => void;
  pause: () => void;
  reset: () => void;
}

const SimulationControls = (props: SimulationControlsProps) => {
  const classes = useStyles();
  const { isRunning, showReset, play, pause, reset } = props;
  return (
    <Container>
      <Button
        variant='contained'
        color='primary'
        className={classes.playButton}
        disabled={isRunning}
        onClick={play}
      >
        <PlayArrow />
        Play
      </Button>
      <Button
        variant='contained'
        color='primary'
        className={classes.playButton}
        disabled={!isRunning}
        onClick={pause}
      >
        <Pause />
        Pause
      </Button>
      {showReset && (
        <Button
          variant='contained'
          color='primary'
          className={classes.playButton}
          onClick={reset}
        >
          <Replay />
          Reset
        </Button>
      )}
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  playButton: {
    marginTop: "20px",
    maxWidth: "200px",
    marginLeft: "10%",
  },
}));

export default SimulationControls;
