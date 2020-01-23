import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import MainComponent from "./main-component";
import ArmComponent from "./arm-component";
import CameraComponent from "./camera-component";
import TelemetryComponent from "./telemetry-component";
import ScienceComponent from "./science-component";

type NavbarProps = {
    onClickHandler: Function;
  };
  class Navbar extends React.Component<NavbarProps> {
    render() {
      return (
        <HashRouter>
        <div>
          <ul id ="nav">
            <li><NavLink to="/main-component">Main</NavLink></li>
            <li><NavLink to="/arm-component">Arm</NavLink></li>
            <li><NavLink to="/science-component">Science</NavLink></li>
            <li><NavLink to="/telemetry-component">Telemetry</NavLink></li>
            <li><NavLink to="/camera-component">Camera</NavLink></li>
          </ul>
          <div className="content">
            <Route path ="/main-component" component = {MainComponent}/>
            <Route path ="/arm-component" component = {ArmComponent}/>
            <Route path ="/science-component" component = {ScienceComponent}/>
            <Route path ="/telemetry-component" component = {TelemetryComponent}/>
            <Route path ="/camera-component" component = {CameraComponent}/>
          </div>
        </div>
        </HashRouter>
      )  
    }
  }

  export default Navbar;