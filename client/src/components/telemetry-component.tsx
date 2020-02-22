import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import openSocket from "../actions/socket/openSocket";
import TelemetryTableComponent from "./telemetry-table-component";

type TelemetryProps = {};
class TelemetryComponent extends React.Component<TelemetryProps> {
  // this displays the telemetry data
  render() {
    return (
      <div style={{ clear: "both" }}>
        <TelemetryTableComponent />
      </div>
    );
  }
}
export default TelemetryComponent;
