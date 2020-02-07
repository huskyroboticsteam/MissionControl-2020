import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import openSocket from "../actions/socket/openSocket";
import PhotoUpdate from "./photo";

type CameraProps = {};
class CameraComponent extends React.Component<CameraProps> {
  // this displays multiple photographs (subject to change)
  render() {
    return (
      <div>
        <h1> this is the camera page</h1>
        <PhotoUpdate/>
      </div>
    );
  }
}
export default CameraComponent;
