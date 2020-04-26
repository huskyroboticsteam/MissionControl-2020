import * as React from "react";
import openSocket from "../actions/socket/openSocket";
import PhotoUpdate1 from "./camera-feed-one-component";
import PhotoUpdate2 from "./camera-feed-two-component";
import PhotoUpdate3 from "./camera-feed-three-component";
import PhotoUpdate4 from "./camera-feed-four-component";
import "./camera-component.css";
import DataPacket from "../types";

// rename photoupdates
type CameraProps = {
  sensors: DataPacket;
};

const divStyle = {
  display: "flex",
  margin: "100px",
  justifyContent: "space-between"
};

class CameraComponent extends React.Component<CameraProps> {
  // this displays multiple photographs (subject to change)
  render() {
    return (
      <div>
        <div style={divStyle}>
          <PhotoUpdate1 
          cameraDummy={this.props.sensors.camera1}/>
          <PhotoUpdate2 
          cameraDummy={this.props.sensors.camera2}/>
        </div>
        <div style={divStyle}>
          <PhotoUpdate3 
          cameraDummy={this.props.sensors.camera3}/>
          <PhotoUpdate4 
          cameraDummy={this.props.sensors.camera4}/>
        </div>
      </div>
    );
  }
}
export default CameraComponent;
