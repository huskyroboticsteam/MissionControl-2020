import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import React, { Component } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import StopButton from "./stop-button";
import ConnectionQualityComponent from "./connection-quality-component";
import "./dashboard.css";
import Temperature from "./temperature-component";
import DataPacket from "../types";
import CoordinatesComponent from "./coordinates-component";
import  *  as  data  from  './data.json';

type DashProps = {
  sensors: DataPacket;
};

var parsedData = JSON.parse(JSON.stringify(data)).default;
var x = parsedData.GPS[0].Latitude;

class DashComponent extends React.Component<DashProps> {
  render() {
    return (
      <div style={{ background: "#959298", height: "200px", margin: "0px"}}>
        <div style={{float: "left", padding: "10px", margin: "40px" }}>
          <StopButton />
        </div>
        <div style={{float: "right", padding: "1px", margin: "10px", marginTop: "0px"}}>
          <CoordinatesComponent X={163.45} Y={-88.39} Z={5.55}/>
          <ConnectionQualityComponent quality={100} />
          <Temperature value = {this.props.sensors.temperature}/>
        </div>
        <div style={{display: "flex", marginTop: "50px", margin: "0px" }}>
          <ReactSpeedometer
            maxValue={500}
            value={473}
            needleColor="yellow"
            startColor="green"
            maxSegmentLabels={5}
            segments={10}
            endColor="blue"
          />
        </div>
      </div>
    );
  }
}



export default DashComponent;
