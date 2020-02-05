import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import openSocket from "../actions/socket/openSocket";

type ArmProps = {};
class ArmComponent extends React.Component<ArmProps> {
  //this displays arm data
  render() {
    return (
      <div>
        <h1> this is the arm page</h1>
      </div>
    );
  }
}

export default ArmComponent;
