import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import openSocket from "../actions/socket/openSocket";

type ScienceProps = {};
class ScienceComponent extends React.Component<ScienceProps> {
  // this displays science data
  //copy pasted graph
  render() {
    return (
      <div>
        <h1>this is science</h1>
      </div>
    );
  }
}
export default ScienceComponent;
