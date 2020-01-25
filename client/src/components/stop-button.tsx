import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import * as React from "react";
import Button from '@material-ui/core/Button';

type StopProps = {

}
class StopButton extends React.Component<StopProps> {
  render() {
    return (
        <Button variant="contained" onClick={emergencyStop} color="default">STOP</Button>
    )
  }
}
function emergencyStop() {
  alert('Initiating emergency stop');
}

export default StopButton;