import {Typography, Button, CssBaseline, withStyles, Theme} from '@material-ui/core'
import * as React from 'react'

const styles : any = (theme : Theme) => ({
  text: {
    color: 'red',
    textAlign: 'center'
  }
});

type AppProps = {
  text: String,
  alert: (event: any) => void
  classes: any
}

const App: React.StatelessComponent<AppProps> = (props) => {
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
