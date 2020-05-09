import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import openSocket from "../actions/socket/openSocket";
import TelemetryTableComponent from "./telemetry-table-component";
import DataPacket from "../types";



type TelemetryProps = {
    sensors: DataPacket;
};
class TelemetryComponent extends React.Component<TelemetryProps> {
    // this displays the telemetry data
    render() {
        const {sensors } = this.props;
        //const classes = useStyles();
        return (
            <div style={{clear:'both'}}>
                <h1></h1>
                <div style={{padding:'20px'}}>
                <TelemetryTableComponent/>
                </div>
               
            </div>
        )
    }
}
export default TelemetryComponent;
