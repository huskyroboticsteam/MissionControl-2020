import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import openSocket from "../actions/socket/openSocket";

type TelemetryProps = {

}
class TelemetryComponent extends React.Component<TelemetryProps> {
    // this displays the telemetry data
    render() {
        return (
            <div>
                <h1>this is the telemetry page</h1>
            </div>
        )
    }
}
export default TelemetryComponent;