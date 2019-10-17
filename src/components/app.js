import React from "react";
import {Typography, Button, CssBaseline, withStyles} from '@material-ui/core'

const styles = (theme) => ({
  text: {
    color: 'blue',
    textAlign: 'center'
  }
});

const App = (props) => {
  const {classes} = props

  return (
    <div>
      <CssBaseline/>
      <Typography className={classes.text}>{props.text}</Typography>
      <Button onClick={props.alert}>Test</Button>
    </div>
  );
};

export default withStyles(styles)(App);
