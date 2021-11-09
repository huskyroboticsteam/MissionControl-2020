import * as React from "react";
import MapTest from "./map";
import DataPacket from "../../types";

type MainProps = {
  sensors: DataPacket;
};

// figure out what map we will use and how to integrate it
//class MainComponent extends React.Component {
class MainComponent extends React.Component<MainProps> {
  // this is the Main page
  render() {
    return (
      <div>
      <MapTest latitude={this.props.sensors.latitude} longitude={this.props.sensors.longitude}/>
     </div>
    );
  }
}

export default MainComponent;
