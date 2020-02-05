import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import openSocket from "../actions/socket/openSocket";
import LineChart from "react-linechart";
import "../node_modules/react-linechart/dist/styles.css";

type ScienceProps = {};
class ScienceComponent extends React.Component<ScienceProps> {
  // this displays science data
  //copy pasted graph
  render() {
    const data = [
      {
        color: "steelblue",
        points: [{ x: 1, y: 2 }, { x: 3, y: 5 }, { x: 7, y: -3 }]
      }
    ];
    return (
      <div className="App">
        <h1>My First LineChart</h1>
        <LineChart width={600} height={400} data={data} />
      </div>
    );
  }
}
export default ScienceComponent;
