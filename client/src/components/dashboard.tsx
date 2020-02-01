import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import React, { Component } from "react";
import ReactSpeedometer from "react-d3-speedometer"
import StopButton from "./stop-button";
import ConnectionQualityComponent from "./connection-quality-component";
import "./dashboard.css";


type DashProps = {

}
// this is the dash
// clean up style code later
class DashComponent extends React.Component<DashProps> {
    render() {
        return (
            <div style= {{background: "lightGreen", height: "200px", width: "100%"}}> 
            <div className = "dashStyles">
                <div style= {{position: "fixed", top: 0, left: 0}}>
                    <StopButton/>    
                </div>
                <div style={{position: "fixed", top: 0, right: 0}}>
                        <ConnectionQualityComponent quality={100}/>  
                </div>  
                <ReactSpeedometer/>
            </div>
            </div>
        )
    }
}


export default DashComponent;