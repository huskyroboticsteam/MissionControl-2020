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
import { RoverCommands } from '../../rover-commands';

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
        <Button variant="contained" onClick={toggleEStop} color="primary">
          STOP
        </Button>
      </MuiThemeProvider>
    );
  }
}

function toggleEStop() {
     RoverCommands.setEStop(!RoverCommands.isEStopped());
}

export default StopButton;
