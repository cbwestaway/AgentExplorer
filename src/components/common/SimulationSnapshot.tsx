import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export type simulationState = ReadonlyArray<ReadonlyArray<number>>;
export interface SnapshotProps {
  readonly state: simulationState;
  readonly gridColors: ReadonlyArray<string>;
}

interface ColorClassMap {
  [index: number]: {
    backgroundColor: string;
  };
}

const SimulationSnapshot = (props: SnapshotProps) => {
  const classes = useStyles();
  const { state, gridColors } = props;

  const colorClasses: ColorClassMap = {};
  gridColors.forEach((color, ind) => {
    colorClasses[ind] = {
      backgroundColor: color,
    };
  });
  const colorMap = makeStyles({
    ...colorClasses,
  })();

  const rows = new Array(state.length);
  for (let m = 0; m < state.length; m++) {
    const cells = [];
    for (let n = 0; n < state[0].length; n++) {
      const cellState = state[m][n];
      cells.push(
        <div
          key={`key_cell_${m}_${n}`}
          className={`${classes.cell} ${colorMap[cellState]}`}
        />
      );
    }
    rows.push(
      <div key={`key_row_${m}`} className={classes.row}>
        {...cells}
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.grid}>{...rows}</div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    "&::after": {
      content: `""`,
      paddingBottom: "100%",
    },
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    border: "1px solid black",
  },
  row: {
    display: "flex",
    flexGrow: 1,
  },
  cell: {
    flexGrow: 1,
    // border: "1px solid black",
  },
}));

export default SimulationSnapshot;
