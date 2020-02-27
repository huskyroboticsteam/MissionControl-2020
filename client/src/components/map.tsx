import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// map displayed, add functionality over the next few weeks
// add ability to automatically sense coordinates
// west is negative
// try to see if we can zoom in more
// find out how to make this work without internet
// find out how to display position of rover
class MapTest extends React.Component {
  state = {
    lat: 47.6498,
    lng: -122.3038,
    zoom: 19,
    markers: [[47.6498, -122.3038]] 
  };
  constructor(props) {
    super(props);
  }

  addMarker = (e) => { 
    const {markers} = this.state
    markers.push(e.latlng)
    this.setState({markers})
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map
        center={position}
        zoom={this.state.zoom}
        style={{ width: "50%", height: "380px", right: "500px", position:"absolute"}}
        onClick={this.addMarker} 
      >
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          maxNativeZoom = {19}
          minZoom = {0}
          maxZoom = {22}
        />
        {this.state.markers.map((position, idx) => 
        <Marker 
          key={`marker-${idx}`} 
          position={position} 
        >
          <Popup>
            <span>
              A pretty CSS3 popup.             
              <br />
              Easily customizable.             
            </span>
          </Popup>
        </Marker>
        )} 
      </Map>
    );
  }
}
export default MapTest;