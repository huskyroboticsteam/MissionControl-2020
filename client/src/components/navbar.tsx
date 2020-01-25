import { Typography, CssBaseline, withStyles, Theme, makeStyles, Grid } from "@material-ui/core";
import React from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from  '@material-ui/core/ButtonGroup';
import MainComponent from "./main-component";
import ArmComponent from "./arm-component";
import CameraComponent from "./camera-component";
import TelemetryComponent from "./telemetry-component";
import ScienceComponent from "./science-component";
import "./navbar.css";
import Box from "@material-ui/core/Box";
type NavbarProps = {
    onClickHandler: Function;
};
  class Navbar extends React.Component<NavbarProps> {
    render() {
      return (
        <HashRouter>
          <div>
          <div className ="content">
          <Box display = "flex"  
          alignItems= "center" justifyContent ="center" m={1} p={1}>
            <Box p={1}>
          <Route path ="/main-component" component = {MainComponent}/>
          <Route path ="/arm-component" component = {ArmComponent}/>
          <Route path ="/science-component" component = {ScienceComponent}/>
          <Route path ="/telemetry-component" component = {TelemetryComponent}/>
          <Route path ="/camera-component" component = {CameraComponent}/>
          </Box>
          </Box>
        </div>
        <div className="navbar">
          <Box display = "flex"  
          alignItems= "center" justifyContent ="center" m={1} p={1}>
            <Box p={1}>
              <ButtonGroup variant="contained" aria-label="contained primary button group">
              <Button href="/#/main-component" color="primary">Main </Button>
              <Button href="/#/arm-component" color="primary">Arm </Button>
              <Button href="/#/science-component" color="primary">Science </Button>
              <Button href="/#/telemetry-component" color="primary">Telemetry </Button>
              <Button href="/#/camera-component" color="primary">Camera </Button>
              </ButtonGroup> 
            </Box>
          </Box>
        </div>
        </div>
      </HashRouter>
      )  
    }
  }
  export default Navbar;
