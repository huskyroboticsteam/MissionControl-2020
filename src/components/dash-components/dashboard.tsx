import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import StopStatus from "./stop-status";
import ConnectionQualityComponent from "./connection-quality-component";
import "./dashboard.css";
import Temperature from "./temperature-component";
import DataPacket from "../../types";
import CoordinatesComponent from "./coordinates-component";
import VoltageComponent from "./voltage-component";
import {stopStatusRef} from '../../rover-commands';

type DashProps = {
  sensors: DataPacket;
};

class DashComponent extends React.Component<DashProps> {
  render() {
    return (
      <div
        style={{
          background: "#959298",
          height: "250px",
          margin: "0px",
          padding: "10px"
        }}
      >
        <div style={{ float: "left", padding: "10px", margin: "40px" }}>
          <StopStatus ref={stopStatusRef} />
        </div>
        <div
          style={{
            display: "flex",
            float: "left",
            marginTop: "20px",
            margin: "0px",
            padding: "20px",
            fontFamily: "Roboto"
          }}
        >
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
        <div
          style={{
            display: "flex",
            float: "left",
            marginTop: "20px",
            margin: "0px",
            padding: "20px"
          }}
        >
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
        <div
          style={{
            float: "left",
            paddingTop: "20px",
            padding: "5px",
            margin: "0px",
            marginTop: "0px"
          }}
        >
          <CoordinatesComponent
            X={this.props.sensors.x}
            Y={this.props.sensors.y}
            Z={this.props.sensors.z}
          />
        </div>
        <div
          style={{
            padding: "10px",
            margin: "0px",
            marginTop: "0px",
            paddingTop: "20px"
          }}
        >
          <Temperature value={this.props.sensors.temperature} />
        </div>
        <div>
          <VoltageComponent Voltage={this.props.sensors.voltage} />
        </div>
        <div
          style={{
            float: "right",
            padding: "20px",
            margin: "10px",
            marginTop: "0px"
          }}
        >
          <ConnectionQualityComponent quality={100} />
        </div>
        <div style={{ clear: "both" }}></div>
      </div>
    );
  }
}

export default DashComponent;
