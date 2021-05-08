import * as React from "react";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import ColorPicker from "../common/ColorPicker";

export type ForestFireState = {
  name: "Tree" | "Burning" | "Ash";
  color: string;
  proportion: number;
};

interface ForestFireStateDefinitionsProps {
  readonly className?: string;
  readonly stateDefinitions: ReadonlyArray<ForestFireState>;
  readonly setStateDefinitions: React.Dispatch<
    React.SetStateAction<ReadonlyArray<ForestFireState>>
  >;
  readonly disabled?: boolean;
}

const ForestFireStateDefinitions = (props: ForestFireStateDefinitionsProps) => {
  const { className, stateDefinitions, setStateDefinitions, disabled } = props;
  const classes = useStyles();

  const onColorChange = (index: number, color: string) => {
    setStateDefinitions((definitions) => {
      definitions[index].color = color;
      return [...definitions];
    });
  };
  const onProportionChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStateDefinitions((definitions) => {
      definitions[index].proportion = Number(e.target.value);
      return [...definitions];
    });
  };

  return (
    <Container className={className}>
      <Typography className={classes.title}>Agent State Definitions</Typography>
      <Table className={classes.table} size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Color</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Proportion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stateDefinitions.map((value, index) => (
            <TableRow key={index}>
              <TableCell>
                <ColorPicker
                  selectedColor={value.color}
                  setSelectedColor={(color: string) =>
                    onColorChange(index, color)
                  }
                  disabled={disabled}
                />
              </TableCell>
              <TableCell>{value.name}</TableCell>
              <TableCell>
                <Input
                  type='number'
                  defaultValue={value.proportion}
                  inputProps={{
                    min: 0,
                    max: 1,
                    step: 0.05,
                  }}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onProportionChange(index, e)
                  }
                  disabled={disabled}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: "10px",
  },
  table: {},
}));

export default ForestFireStateDefinitions;
