import * as React from "react";
import Container from "@material-ui/core/Container";
import FormGroup from "@material-ui/core/FormGroup";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import ForestFireEvolutionRulePreview from "./ForestFireEvolutionRulePreview";

interface ForestFireEvolutionRulesProps {
  readonly className?: string;
  readonly pLightning: number;
  readonly pReviving: number;
  readonly setPLightning: (pLightning: number) => void;
  readonly setPReviving: (pReviving: number) => void;
}

const ForestFireEvolutionRules = (props: ForestFireEvolutionRulesProps) => {
  const {
    className,
    pLightning,
    pReviving,
    setPLightning,
    setPReviving,
  } = props;
  const classes = useStyles();

  const changePLightning = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPLightning(Number(event.target.value) / 100);
  };

  const changePReviving = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPReviving(Number(event.target.value) / 100);
  };
  return (
    <Container className={className}>
      <Typography className={classes.title}>Evolution Rules</Typography>
      <FormGroup className={classes.formGroup}>
        <InputLabel className={classes.formLabel}>
          Chance of lightning strike
        </InputLabel>
        <Input
          required
          id='pLightning'
          type='number'
          inputProps={{
            min: 0,
            max: 100,
          }}
          value={pLightning * 100}
          onChange={changePLightning}
          endAdornment={<span>%</span>}
          className={classes.chanceInput}
        />
      </FormGroup>
      <FormGroup className={classes.formGroup}>
        <InputLabel className={classes.formLabel}>
          Chance of reviving
        </InputLabel>
        <Input
          required
          id='pLightning'
          type='number'
          inputProps={{
            min: 0,
            max: 100,
          }}
          value={pReviving * 100}
          onChange={changePReviving}
          endAdornment={<span>%</span>}
          className={classes.chanceInput}
        />
      </FormGroup>
      <ForestFireEvolutionRulePreview
        pLightning={pLightning}
        pReviving={pReviving}
      />
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
