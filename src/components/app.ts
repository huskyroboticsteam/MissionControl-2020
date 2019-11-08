import {Typography, Button, CssBaseline, withStyles, Theme} from '@material-ui/core'
import { Component } from 'react';

const styles : any = (theme : Theme) => ({
  text: {
    color: 'red',
    textAlign: 'center'
  }
});

const App : any = (props : any) => {
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
