import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import openSocket from "../actions/socket/openSocket";
import Navbar from "./navbar";
import StopButton from "./stop-button";
import MainComponent from "./main-component";
import ArmComponent from "./arm-component";
import CameraComponent from "./camera-component";
import TelemetryComponent from "./telemetry-component";
import ScienceComponent from "./science-component";
import {
  Route,
  HashRouter
} from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import './app.css';
import ConnectionQualityComponent from "./connection-quality-component";

const backTheme = createMuiTheme({
  palette: {
    background: {
      default: "#b19cd9"
    }
  }
});

const styles: any = (theme: Theme) => ({
  rawData: {
    color: "white",
    textAlign: "center"
  }
});

type AppProps = {
  classes: any;
  nominal: any;
  sensors: any;
  openSocket: Function;
};

class App extends React.Component<AppProps> {
  componentDidMount() {
    const { openSocket } = this.props;
    openSocket();
  }


  render() {
    const { classes, nominal, sensors } = this.props;
    return (
      <MuiThemeProvider theme = {backTheme}>
      <HashRouter>
      <div>             
        <StopButton/>
        <CssBaseline/>
        <Typography className={classes.rawData}>
          {JSON.stringify(nominal)}
          {JSON.stringify(sensors)}
        <ConnectionQualityComponent quality={100}/>
        </Typography>
          <Route path ="/main-component" component = {MainComponent}/>
          <Route path ="/arm-component" component = {ArmComponent}/>
          <Route path ="/science-component" component = {ScienceComponent}/>
          <Route path ="/telemetry-component" component = {TelemetryComponent}/>
          <Route path ="/camera-component" component = {CameraComponent}/>
          <div style={{position: "fixed", bottom:"0", width:"100%"}}>
            <Navbar/>  
          </div>
        </div>
      </HashRouter>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    nominal: state.nominal.data,
    sensors: state.sensors.data
  };
};

const mapDispatchToProps = {
  openSocket
};

//@ts-ignore
const connectedApp: any = compose(withStyles(styles),connect(mapStateToProps,mapDispatchToProps))(App);

export default connectedApp;

