import * as React from "react";
import TelemetryTableComponent from "./telemetry-table-component";
import DataPacket from "../../types";

type TelemetryProps = {
    sensors: DataPacket;
};
class TelemetryComponent extends React.Component<TelemetryProps> {
    // this displays the telemetry data
    render() {
        return (
            <div style={{clear:'both'}}>
                <div style={{padding:'20px'}}>
                <TelemetryTableComponent/>
                </div>
               
            </div>
        )
    }
}
export default TelemetryComponent;
