import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

interface PageContainerProps {
  children: JSX.Element;
}

const PageContainer = (props: PageContainerProps) => {
  const classes = useStyles();
  const { children } = props;
  return <Container className={classes.globalContainer}>{children}</Container>;
};

const useStyles = makeStyles((appTheme) => ({
  globalContainer: {
    marginTop: "15px",
    maxWidth: "1500px",
  },
}));

export default PageContainer;
