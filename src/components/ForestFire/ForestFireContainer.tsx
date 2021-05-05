import * as React from "react";
import { useState, useEffect } from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import ModelHeader from "../common/ModelHeader";
import SimulationPanel from "../common/SimulationPanel";
import { Neighborhood, getNeighbors, shuffle } from "../utils/gridHelpers";
import ForestFireControlPanel from "./ForestFireControlPanel";
import { ForestFireState } from "./ForestFireStateDefinitions";

const DEFAULT_ROWS = 100;
const DEFAULT_COLUMNS = 100;
const DEFAULT_NEIGHBORHOOD = 8 as Neighborhood;
const DEFAULT_P_LIGHTNING = 0.05;
const DEFAULT_P_REVIVING = 0.05;

enum AgentState {
  TREE = 0,
  BURNING = 1,
  ASH = 2,
}

const DEFAULT_STATE_DEFINITIONS: ReadonlyArray<ForestFireState> = [
  {
    name: "Tree",
    color: "green",
    proportion: 0.95,
  },
  {
    name: "Burning",
    color: "red",
    proportion: 0,
  },
  {
    name: "Ash",
    color: "black",
    proportion: 0.05,
  },
];

const MAX_ITER = 1;

const getInitialState = (
  rows: number,
  columns: number,
  stateDefinitions: ReadonlyArray<ForestFireState>
) => {
  const N_AGENTS = rows * columns;
  const stateVals = new Array();
  stateDefinitions.forEach((x, i) => {
    const n = Math.floor(x.proportion * N_AGENTS);
    const agents = Array.apply(null, Array(n)).map(() => i);
    stateVals.push(...agents);
  });

  shuffle(stateVals);
  const state = new Array();
  while (stateVals.length) state.push(stateVals.splice(0, columns));
  return state;
};

const getNextState = (
  currentState: ReadonlyArray<ReadonlyArray<number>>,
  pLightning: number,
  pReviving: number,
  neighborhood: Neighborhood
) => {
  const hasBurningNeighbor = (m: number, n: number) => {
    const neighbors = getNeighbors(
      currentState.length,
      currentState[0].length,
      m,
      n,
      neighborhood
    );
    return (
      neighbors.find((coords) => {
        const [x, y] = coords;
        if (currentState[x][y] === AgentState.BURNING) {
          return true;
        }
      }) !== undefined
    );
  };

  const nextState = currentState.map((x) => [...x]);
  for (let m = 0; m < nextState.length; m++) {
    for (let n = 0; n < nextState[0].length; n++) {
      switch (nextState[m][n]) {
        case AgentState.TREE:
          if (hasBurningNeighbor(m, n) || Math.random() <= pLightning) {
            nextState[m][n] = AgentState.BURNING;
          }
          break;
        case AgentState.BURNING:
          nextState[m][n] = AgentState.ASH;
          break;
        case AgentState.ASH:
          if (Math.random() <= pReviving) {
            nextState[m][n] = AgentState.TREE;
          }
          break;
      }
    }
  }
  return nextState;
};

const ForestFireContainer = () => {
  const classes = useStyles();
  const [rows, setRows] = useState(DEFAULT_ROWS);
  const [columns, setColumns] = useState(DEFAULT_COLUMNS);
  const [neighborhood, setNeighborhood] = useState<Neighborhood>(
    DEFAULT_NEIGHBORHOOD
  );
  const [pLightning, setPLightning] = useState(DEFAULT_P_LIGHTNING);
  const [pReviving, setPReviving] = useState(DEFAULT_P_REVIVING);

  const [stateDefinitions, setStateDefinitions] = useState<
    ReadonlyArray<ForestFireState>
  >(DEFAULT_STATE_DEFINITIONS);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentIter, setCurrentIter] = useState(0);
  const [state, setState] = useState<ReadonlyArray<ReadonlyArray<number>>>(
    getInitialState(rows, columns, stateDefinitions)
  );

  useEffect(() => {
    setState(getInitialState(rows, columns, stateDefinitions));
  }, [stateDefinitions, setState]);

  if (isRunning) {
    if (currentIter < MAX_ITER) {
      setCurrentIter((x) => x + 1);
      setState(getNextState(state, pLightning, pReviving, neighborhood));
    } else {
      setIsRunning(false);
      setCurrentIter(0);
    }
  }

  return (
    <Container>
      <ModelHeader
        modelTitle='Forest Fire'
        modelDescription='
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        '
        className={classes.modelHeader}
      />
      <Grid
        container
        direction='row'
        alignItems='stretch'
        className={classes.root}
      >
        <Grid item xs={7} className={classes.simulationPanelGridItem}>
          <SimulationPanel
            snapshotProps={{
              state,
              gridColors: stateDefinitions.map((v) => v.color),
            }}
          />
        </Grid>
        <Grid item xs={5} className={classes.controlPanelGridItem}>
          <ForestFireControlPanel
            rows={rows}
            columns={columns}
            neighborhood={neighborhood}
            pLightning={pLightning}
            pReviving={pReviving}
            stateDefinitions={stateDefinitions}
            setRows={setRows}
            setColumns={setColumns}
            setNeighborhood={setNeighborhood}
            setPLightning={setPLightning}
            setPReviving={setPReviving}
            setStateDefinitions={setStateDefinitions}
            isRunning={isRunning}
            startSimulation={() => setIsRunning(true)}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  modelHeader: {
    marginBottom: "20px",
  },
  simulationPanelGridItem: {},
  controlPanelGridItem: {},
}));

export default ForestFireContainer;
