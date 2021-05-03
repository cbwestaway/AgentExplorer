import * as React from 'react';
import Container from '@material-ui/core/Container';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

interface ForestFireEvolutionRulesProps {
  readonly className?: string;
  readonly pLightning: number;
  readonly pReviving: number;
  readonly setPLightning: (pLightning: number) => void;
  readonly setPReviving: (pReviving: number) => void;
}

const ForestFireEvolutionRules = (props: ForestFireEvolutionRulesProps) => {
  const { className, pLightning, pReviving, setPLightning, setPReviving } = props;
  const classes = useStyles();

  const changePLightning = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPLightning(Number(event.target.value));
  };

  const changePReviving = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPReviving(Number(event.target.value));
  };
  return (
    <Container className={className}>
      <Typography className={classes.title}>
        Evolution Rules
      </Typography>
      <FormGroup className={classes.formGroup}>
        <InputLabel className={classes.formLabel}>
          Chance of lightning strike (f)
        </InputLabel>
        <Input
          required
          id="pLightning"
          type="number"
          inputProps={{
            min: 0,
            max: 100,
          }}
          value={pLightning}
          onChange={changePLightning}
          endAdornment={<span>%</span>}
          className={classes.chanceInput}
        />
      </FormGroup>
      <FormGroup className={classes.formGroup}>
        <InputLabel className={classes.formLabel}>
          Chance of reviving (p)
        </InputLabel>
        <Input
          required
          id="pLightning"
          type="number"
          inputProps={{
            min: 0,
            max: 100,
          }}
          value={pReviving}
          onChange={changePReviving}
          endAdornment={<span>%</span>}
          className={classes.chanceInput}
        />
      </FormGroup>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={2}>IF</TableCell>
            <TableCell align="center" colSpan={3}>THEN - NEXT STATE</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Current State</TableCell>
            <TableCell align="center">#. Neighbors Burning</TableCell>
            <TableCell align="center">Ash</TableCell>
            <TableCell align="center">Tree</TableCell>
            <TableCell align="center">Burning</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">Tree</TableCell>
            <TableCell align="center">0</TableCell>
            <TableCell align="center">0</TableCell>
            <TableCell align="center">1-f</TableCell>
            <TableCell align="center">f</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Tree</TableCell>
            <TableCell align="center">{`> 0`}</TableCell>
            <TableCell align="center">0</TableCell>
            <TableCell align="center">0</TableCell>
            <TableCell align="center">1</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Burning</TableCell>
            <TableCell align="center">-</TableCell>
            <TableCell align="center">1</TableCell>
            <TableCell align="center">0</TableCell>
            <TableCell align="center">0</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Ash</TableCell>
            <TableCell align="center">-</TableCell>
            <TableCell align="center">1-p</TableCell>
            <TableCell align="center">p</TableCell>
            <TableCell align="center">0</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: "10px",
  },
  chanceInput: {
    minWidth: "65px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "row",
    justify: "flex-start",
    alignItems: "center",
    marginBottom: "20px",
  },
  formLabel: {
    width: "55%",
  },
  table: {},
}));

export default ForestFireEvolutionRules;
