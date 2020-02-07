import {
  Typography,
  CssBaseline,
  withStyles,
  Theme,
  createMuiTheme
} from "@material-ui/core";
import * as React from "react";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const stopTheme = createMuiTheme({
  palette: {
    primary: red
  }
});

type StopProps = {};
class StopButton extends React.Component<StopProps> {
  render() {
    return (
      <MuiThemeProvider theme={stopTheme}>
        <Button variant="contained" onClick={emergencyStop} color="primary">
          STOP
        </Button>
      </MuiThemeProvider>
    );
  }
}
function emergencyStop() {
  alert("Initiating emergency stop");
}

export default StopButton;
