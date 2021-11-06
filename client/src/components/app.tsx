import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import openSocket from "../actions/socket/openSocket";
import Navbar from "./dash-components/navbar";
import MainComponent from "./main-components/main-component";
import ArmComponent from "./arm-components/arm-component";
import CameraComponent from "./camera-components/camera-component";
import TelemetryComponent from "./telemetry-components/telemetry-component";
import ScienceComponent from "./science-components/science-component";
import DashComponent from "./dash-components/dashboard";
import HelpComponent from "./help-components/help-component";
import { Route, HashRouter } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./app.css";
import DataPacket from "../types";
import 'mapbox-gl/dist/mapbox-gl.css';
import GamepadComponent from './gamepad-component';

const backTheme = createMuiTheme({
  palette: {
    background: {
      default: "#D8D6D6"
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
  nominal: DataPacket;
  sensors: DataPacket;
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
      <MuiThemeProvider theme={backTheme}>
        <GamepadComponent />
        <HashRouter>
          <div style={{ top: "0" }}>
            <CssBaseline />
            <div
              style={{
                marginTop: "0px",
                paddingTop: "0px",
                top: "0px",
                width: "100%"
              }}
            >
              <DashComponent sensors={sensors} />
            </div>
            <div style={{ clear: "both", height: "0px", padding: '0px' }}></div>
            <Typography className={classes.rawData}>
              {JSON.stringify(nominal)}
              {JSON.stringify(sensors)}
            </Typography>
            <Route path="/main-component" render={(props) => <MainComponent {...props} sensors={sensors} />} />
            <Route path="/arm-component" component={ArmComponent} />
            <Route path="/science-component" render={() => <ScienceComponent sensors={sensors} />} />
            <Route path="/telemetry-component" render={() => <TelemetryComponent sensors={sensors} />} />
            <Route path="/camera-component" render={() => <CameraComponent sensors={sensors} />} />
            <Route path="/help-component" render={() => <HelpComponent />} />
            <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
              <Navbar />
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
const connectedApp: any = compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(App);

export default connectedApp;
