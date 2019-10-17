import React from "react";
import {
  Typography,
  Button,
  CssBaseline,
  withStyles
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = theme => ({
  text: {
    color: "blue",
    textAlign: "center"
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false
    };
  }

  closeDialog = () => {
    this.setState({dialogOpen: false})
  }

  render() {
    const {classes} = this.props;

    return (
      <div>
        <Dialog
          open={this.state.dialogOpen}
          onClose={this.closeDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeDialog} color="primary">
              Disagree
            </Button>
            <Button onClick={this.closeDialog} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>


        <CssBaseline />
        <Typography className={classes.text}>{this.props.text}</Typography>
        <Button onClick={() => {this.setState({dialogOpen: true})}}>Open Dialog</Button>
      </div>
    );
  }
}

export default withStyles(styles)(App);
