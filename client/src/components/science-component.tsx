import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import openSocket from "../actions/socket/openSocket";
import CO2graph from "./scienceGraphCO2";
import TVOCgraph from "./scienceGraphTVOC";
import Button from '@material-ui/core/Button';
import DrillToggle from './drill-toggle-component';
import LinearRailToggle from './linear-rail-toggle-component';
import DrillUpDownToggle from "./drill-updown-component";
type ScienceProps = {

}
class ScienceComponent extends React.Component<ScienceProps> {
    // this displays science data
    render() {
        return (
            <div style={{clear:'both', marginLeft: "50px"}}>
                
                <div style={{margin: "30px", float: "left", height:"450px"}}>
                <CO2graph/>
                </div>
                <div style={{margin: "30px", float: "left", height:"450px"}}>
                <TVOCgraph/>
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
