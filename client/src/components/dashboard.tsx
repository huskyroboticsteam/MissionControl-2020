import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import StopButton from "./dash-components/stop-button";
import ConnectionQualityComponent from "./dash-components/connection-quality-component";
import "./dash-components/dashboard.css";
import Temperature from "./dash-components/temperature-component";
import DataPacket from "../types";
import CoordinatesComponent from "./dash-components/coordinates-component";
import VoltageComponent from "./dash-components/voltage-component";


type DashProps = {
  sensors: DataPacket;
};



class DashComponent extends React.Component<DashProps> {
  render() {
    return (
      <div style={{ background: "#959298", height: "250px", margin: "0px", padding: "10px"}}>
        <div style={{float: "left", padding: "10px", margin: "40px" }}>
          <StopButton />
        </div>
        <div style={{display: "flex", float: "left", marginTop: "20px", margin: "0px", padding: "20px", fontFamily: "Roboto"}}>
          <ReactSpeedometer
            maxValue={500}
            value={this.props.sensors.velocity}
            needleColor="black"
            startColor="lightgrey"
            maxSegmentLabels={5}
            segments={10}
            endColor="lightgreen"
          />
        </div>
        <div style={{display: "flex", float: "left", marginTop: "20px", margin: "0px", padding: "20px" }}>
          
          <ReactSpeedometer
            maxValue={500}
            value={100}
            needleColor="black"
            startColor="lightgrey"
            maxSegmentLabels={5}
            segments={10}
            endColor="lightblue"
          />
        </div>
        <div style={{float: "left", paddingTop: "20px", padding:"5px", margin: "0px", marginTop: "0px"}}>
          <CoordinatesComponent X={this.props.sensors.x} Y={this.props.sensors.y} Z={this.props.sensors.z}/> 
        </div>
        <div style={{padding: "10px", margin: "0px", marginTop: "0px", paddingTop: "20px"}}> 
          <Temperature value = {this.props.sensors.temperature}/>
          </div>
        <div>
          <VoltageComponent Voltage = {this.props.sensors.voltage}/>
        </div>  
        <div style={{float: "right", padding: "20px", margin: "10px", marginTop: "0px"}}>
         <ConnectionQualityComponent quality={100} />
        </div> 
    <div style={{clear: "both"}}></div>  
    </div>
    );
  }
}



export default DashComponent;
