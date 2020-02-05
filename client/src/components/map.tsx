import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// map displayed, add functionality over the next few weeks
// add ability to automatically sense coordinates
//west is negative
// try to see if we can zoom in more
class MapTest extends React.Component {
  state = {
    lat: 47.6498,
    lng: -122.3038,
    zoom: 19
  };
  constructor(props) {
    super(props);
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map
        center={position}
        zoom={this.state.zoom}
        style={{ width: "50%", height: "400px" }}
      >
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <span>
              A pretty CSS3 popup.
              <br />
              Easily customizable.
            </span>
          </Popup>
        </Marker>
      </Map>
    );
  }
}
export default MapTest;
