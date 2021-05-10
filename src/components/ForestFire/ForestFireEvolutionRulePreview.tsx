import * as React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";

interface ForestFireEvolutionRulePreviewProps {
  readonly className?: string;
  readonly pLightning: number;
  readonly pReviving: number;
}

const createData = (
  currentState: string,
  nBurningNeighbors: string | null,
  pAsh: number,
  pTree: number,
  pBurning: number
) => {
  return {
    currentState,
    nBurningNeighbors,
    pAsh,
    pTree,
    pBurning,
  };
};

const ForestFireEvolutionRulePreview = (
  props: ForestFireEvolutionRulePreviewProps
) => {
  const { className, pLightning, pReviving } = props;
  const classes = useStyles();

  const data = [
    createData("Tree", "0", 0, Number((1 - pLightning).toFixed(1)), pLightning),
    createData("Tree", ">0", 0, 0, 1),
    createData("Burning", null, 1, 0, 0),
    createData("Ash", null, Number((1 - pReviving).toFixed(1)), pReviving, 0),
  ];

  return (
    <Table className={className} size='small'>
      <TableHead>
        <TableRow>
          <TableCell align='center' colSpan={2}>
            IF
          </TableCell>
          <TableCell align='center' colSpan={3}>
            THEN - NEXT STATE
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align='center'>Current State</TableCell>
          <TableCell align='center'>#. Burning Neighbors</TableCell>
          <TableCell align='center'>Pr(Ash)</TableCell>
          <TableCell align='center'>Pr(Tree)</TableCell>
          <TableCell align='center'>Pr(Burning)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((value, index) => (
          <TableRow key={index}>
            <TableCell align='center'>{value.currentState}</TableCell>
            <TableCell align='center'>
              {value.nBurningNeighbors ? value.nBurningNeighbors : "-"}
            </TableCell>
            <TableCell align='center'>{value.pAsh}</TableCell>
            <TableCell align='center'>{value.pTree}</TableCell>
            <TableCell align='center'>{value.pBurning}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default ForestFireEvolutionRulePreview;
