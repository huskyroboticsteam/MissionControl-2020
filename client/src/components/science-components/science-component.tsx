import * as React from "react";
import CO2graph from "./scienceGraphCO2";
import TVOCgraph from "./scienceGraphTVOC";
import DrillToggle from './drill-toggle-component';
import LinearRailToggle from './linear-rail-toggle-component';
import DrillUpDownToggle from "./drill-updown-component";
import DataPacket from "../../types";

type ScienceProps = {
    sensors: DataPacket;
}
class ScienceComponent extends React.Component<ScienceProps> {
    // this displays science data
    render() {
        const {sensors } = this.props;
        return (
            <div style={{clear:'both', marginLeft: "50px"}}>
                
                <div style={{margin: "30px", float: "left", height:"450px"}}>
                <CO2graph sensors={sensors}/>
                </div>
                <div style={{margin: "30px", float: "left", height:"450px"}}>
                <TVOCgraph sensors={sensors}/>
                </div>
                <div style={{margin: "30px", float: "left"}}>
                        <LinearRailToggle/>
                        <br></br>
                        <DrillToggle/>
                        <br></br>
                        <DrillUpDownToggle/>
                </div>
            </div>
        )
    }
}
export default ScienceComponent;
