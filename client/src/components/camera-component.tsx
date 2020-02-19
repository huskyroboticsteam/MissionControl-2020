import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import openSocket from "../actions/socket/openSocket";
import PhotoUpdate1 from "./camera-feed-one-component";
import PhotoUpdate2 from "./camera-feed-two-component";
import PhotoUpdate3 from "./camera-feed-three-component";
import PhotoUpdate4 from "./camera-feed-four-component";
import "./camera-component.css";

// rename photoupdates
type CameraProps = {};
class CameraComponent extends React.Component<CameraProps> {
  // this displays multiple photographs (subject to change)
  render() {
    return (
      <div>
        <div>
          <PhotoUpdate1 />
        </div>
        <div style={{ float: "right" }}>
          <PhotoUpdate2 />
        </div>
      </div>
    );
  }
}
export default CameraComponent;
