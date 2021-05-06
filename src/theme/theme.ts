import { createMuiTheme } from "@material-ui/core/styles";
import deepPurple from "@material-ui/core/colors/deepPurple";
import grey from "@material-ui/core/colors/grey";

export const appTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: deepPurple["A100"],
      // light: "4D598C",
      // dark: "111732",
      // contrastText: "F3F2FA",
    },
    text: {
      primary: grey[200],
    },
    background: {
      default: grey[900],
      paper: grey[800],
    },
  },
});
