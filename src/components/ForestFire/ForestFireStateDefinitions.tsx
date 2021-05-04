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
}

const ForestFireStateDefinitions = (props: ForestFireStateDefinitionsProps) => {
  const { className, stateDefinitions, setStateDefinitions } = props;
  const classes = useStyles();

  const onColorChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStateDefinitions((definitions) => {
      definitions[index].color = e.target.value;
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
            <TableCell align='center'>Color</TableCell>
            <TableCell align='center'>State</TableCell>
            <TableCell align='center'>Proportion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stateDefinitions.map((value, index) => (
            <TableRow key={index}>
              <TableCell align='center'>
                <Input
                  type='string'
                  value={value.color}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onColorChange(index, e)
                  }
                />
              </TableCell>
              <TableCell align='center'>{value.name}</TableCell>
              <TableCell align='center'>
                <Input
                  type='string'
                  value={value.proportion}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onProportionChange(index, e)
                  }
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
