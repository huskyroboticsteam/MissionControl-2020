
import * as React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import "./connection-quality-component.css";

type ConnectionProps = {
  quality: Number;
};
var connectionBarContainer = {
  width: 150,
  height: 15,
  display: "flex",
  flexDirection: "row",
  background: "#eeeeee",
  padding: 1,
  borderRadius: 2,
  borderStyle: "solid",
  borderColor: "black",
  borderWidth: "thin",
  margin: 10,
  justifyContent: "space-between"
} as React.CSSProperties;

var gradient: string[] = ['#FF0000', '#FF3300', '#FF6600', '#FF9900', '#FFCC00', '#FFFF00', '#BBFF00', '#77FF00', '#33FF00', '#00FF00']
function connectionBar(bar: number, quality: Number): React.CSSProperties {
  return {
    borderRadius: 2,
    width: "9.3%",
    height: "%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: "thin",
    background: quality >= 10 * bar ? gradient[bar-1] : "lightgrey",
  };
}
class ConnectionQualityComponent extends React.Component<ConnectionProps> {
  render() {
    return (
      <div style={connectionBarContainer}>
        <div style={connectionBar(1, this.props.quality)} />
        <div style={connectionBar(2, this.props.quality)} />
        <div style={connectionBar(3, this.props.quality)} />
        <div style={connectionBar(4, this.props.quality)} />
        <div style={connectionBar(5, this.props.quality)} />
        <div style={connectionBar(6, this.props.quality)} />
        <div style={connectionBar(7, this.props.quality)} />
        <div style={connectionBar(8, this.props.quality)} />
        <div style={connectionBar(9, this.props.quality)} />
        <div style={connectionBar(10, this.props.quality)} />
      </div>
    );
  }
}

export default ConnectionQualityComponent;
