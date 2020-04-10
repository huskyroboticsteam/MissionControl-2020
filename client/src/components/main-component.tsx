import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import openSocket from "../actions/socket/openSocket";
import MapTest from "./map";
import CheckboxesGroup from "./tasklist-component";
import DataPacket from "../types";

type MainProps = {
  sensors: DataPacket;
};

// figure out what map we will use and how to integrate it
//class MainComponent extends React.Component {
class MainComponent extends React.Component<MainProps> {
  // this is the Main page
  render() {
    //const {sensors} = this.props;
    return (
      <div>
      <MapTest latitude={this.props.sensors.latitude} longitude={this.props.sensors.longitude}/>
      </div>
    );
  }
}

export default MainComponent;
