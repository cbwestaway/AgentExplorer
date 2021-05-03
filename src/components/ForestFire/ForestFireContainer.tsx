import * as React from 'react';
import { useState } from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ModelHeader from '../common/ModelHeader';
import SimulationPanel from '../common/SimulationPanel';
import { Neighborhood } from '../common/BasicControlFields';
import ForestFireControlPanel from './ForestFireControlPanel';
import { ForestFireState } from './ForestFireStateDefinitions';

const DEFAULT_ROWS = 256;
const DEFAULT_COLUMNS = 256;
const DEFAULT_NEIGHBORHOOD = 8 as Neighborhood;
const DEFAULT_P_LIGHTNING = 0.125;
const DEFAULT_P_REVIVING = 0.125;

const DEFAULT_STATE_DEFINITIONS: ReadonlyArray<ForestFireState> = [
  {
    name: "Tree",
    color: "green",
    proportion: 0.25,
  }, {
    name: "Burning",
    color: "red",
    proportion: 0,
  }, {
    name: "Ash",
    color: "black",
    proportion: 0.25,
  }
];
const DEFAULT_STATE = [[0, 1, 0, 2], [2, 2, 1, 0], [0, 2, 1, 1], [1, 2, 0, 1]];
const ForestFireContainer = () => {
  const classes = useStyles();
  const [rows, setRows] = useState(DEFAULT_ROWS);
  const [columns, setColumns] = useState(DEFAULT_COLUMNS);
  const [neighborhood, setNeighborhood] = useState<Neighborhood>(DEFAULT_NEIGHBORHOOD);
  const [pLightning, setPLightning] = useState(DEFAULT_P_LIGHTNING);
  const [pReviving, setPReviving] = useState(DEFAULT_P_REVIVING);

  const [stateDefinitions, setStateDefinitions] = useState<ReadonlyArray<ForestFireState>>(DEFAULT_STATE_DEFINITIONS);
  const [state, setState] = useState<ReadonlyArray<ReadonlyArray<number>>>(DEFAULT_STATE);

  return (
    <Container>
      <ModelHeader
        modelTitle="Forest Fire"
        modelDescription="
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
        "
        className={classes.modelHeader}
      />
      <Grid
        container
        direction="row"
        alignItems="stretch"
        className={classes.root}
      >
        <Grid
          item
          xs={7}
          className={classes.simulationPanelGridItem}
        >
          <SimulationPanel
            snapshotProps={{
              state,
              gridColors: stateDefinitions.map((v) => v.color)
            }}
          />
        </Grid>
        <Grid
          item
          xs={5}
          className={classes.controlPanelGridItem}
        >
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
          />
        </Grid>
      </Grid>
    </Container >
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
