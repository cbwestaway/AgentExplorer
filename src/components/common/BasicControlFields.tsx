import * as React from "react";
import Container from "@material-ui/core/Container";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Clear from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core/styles";

import { Neighborhood } from "./Utils";

const MIN_GRID_SIZE = 3;
const MAX_GRID_SIZE = 1000;

interface BasicControlFieldsProps {
  readonly className?: string;
  readonly rows: number;
  readonly columns: number;
  readonly neighborhood: Neighborhood;
  readonly setRows: React.Dispatch<React.SetStateAction<number>>;
  readonly setColumns: React.Dispatch<React.SetStateAction<number>>;
  readonly setNeighborhood: React.Dispatch<React.SetStateAction<Neighborhood>>;
  readonly disabled?: boolean;
}

const BasicControlFields = (props: BasicControlFieldsProps) => {
  const {
    className,
    rows,
    columns,
    neighborhood,
    setRows,
    setColumns,
    setNeighborhood,
    disabled,
  } = props;
  const classes = useStyles();

  const changeRows = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRows(Number(event.target.value));
  };

  const changeColumns = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColumns(Number(event.target.value));
  };

  const changeNeighborhood = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNeighborhood(Number(event.target.value) as Neighborhood);
  };
  return (
    <Container className={className}>
      <FormGroup className={classes.formGroup}>
        <InputLabel className={classes.formLabel}>Grid size</InputLabel>
        <Input
          required
          id='rows'
          type='number'
          inputProps={{
            min: MIN_GRID_SIZE,
            max: MAX_GRID_SIZE,
          }}
          value={rows}
          onChange={changeRows}
          className={classes.gridSizeInput}
          disabled={disabled}
        />
        <Clear />
        <Input
          required
          id='columns'
          type='number'
          inputProps={{
            min: MIN_GRID_SIZE,
            max: MAX_GRID_SIZE,
          }}
          value={columns}
          onChange={changeColumns}
          className={classes.gridSizeInput}
          disabled={disabled}
        />
      </FormGroup>
      <FormGroup className={classes.formGroup}>
        <InputLabel className={classes.formLabel}>Neighborhood</InputLabel>
        <RadioGroup
          row
          name='neighborhood'
          value={neighborhood}
          onChange={changeNeighborhood}
        >
          <FormControlLabel
            value={4}
            control={<Radio disabled={disabled} />}
            label='4'
          />
          <FormControlLabel
            value={8}
            control={<Radio disabled={disabled} />}
            label='8'
          />
        </RadioGroup>
      </FormGroup>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  content: {},
  formGroup: {
    display: "flex",
    flexDirection: "row",
    justify: "flex-start",
    alignItems: "center",
    marginBottom: "20px",
  },
  formLabel: {
    width: "45%",
  },
  gridSizeInput: {
    maxWidth: "50px",
  },
}));

export default BasicControlFields;
