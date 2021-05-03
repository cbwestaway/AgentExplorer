import * as React from 'react';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import PlayArrow from '@material-ui/icons/PlayArrow';
import { makeStyles } from '@material-ui/core/styles';

import BasicControlFields, { Neighborhood } from '../common/BasicControlFields';
import ForestFireEvolutionRules from './ForestFireEvolutionRules';
import ForestFireStateDefinitions, { ForestFireState } from './ForestFireStateDefinitions';

interface ForestFireControlPanelProps {
  readonly rows: number;
  readonly columns: number;
  readonly neighborhood: Neighborhood;
  readonly pLightning: number;
  readonly pReviving: number;
  readonly stateDefinitions: ReadonlyArray<ForestFireState>;
  readonly setRows: React.Dispatch<React.SetStateAction<number>>;
  readonly setColumns: React.Dispatch<React.SetStateAction<number>>;
  readonly setNeighborhood: React.Dispatch<React.SetStateAction<Neighborhood>>;
  readonly setPLightning: React.Dispatch<React.SetStateAction<number>>;
  readonly setPReviving: React.Dispatch<React.SetStateAction<number>>;
  readonly setStateDefinitions: React.Dispatch<React.SetStateAction<ReadonlyArray<ForestFireState>>>;
}

const ForestFireControlPanel = (props: ForestFireControlPanelProps) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <BasicControlFields
        rows={props.rows}
        columns={props.columns}
        neighborhood={props.neighborhood}
        setRows={props.setRows}
        setColumns={props.setColumns}
        setNeighborhood={props.setNeighborhood}
      />
      <ForestFireStateDefinitions
        stateDefinitions={props.stateDefinitions}
        setStateDefinitions={props.setStateDefinitions}
        className={classes.section}
      />
      <ForestFireEvolutionRules
        pLightning={props.pLightning}
        pReviving={props.pReviving}
        setPLightning={props.setPLightning}
        setPReviving={props.setPReviving}
        className={classes.section}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.playButton}
      >
        <PlayArrow />
        Simulate
      </Button>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  section: {
    marginBottom: "20px",
  },
  playButton: {
    marginTop: "20px",
    maxWidth: "200px",
    marginLeft: "10%",
  },
}));

export default ForestFireControlPanel;
