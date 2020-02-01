import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import React, { Component } from "react";
import ReactSpeedometer from "react-d3-speedometer"
import StopButton from "./stop-button";
import ConnectionQualityComponent from "./connection-quality-component";
import "./dashboard.css";


import DataPacket from "../types";
type DashProps = {
    sensors: DataPacket;
}
// this is the dash
// clean up style code later
class DashComponent extends React.Component<DashProps> {
    render() {
        return ( 
            <div style={{ background:"lightGreen", height:"250px"}}>
                <h1> this is the dash</h1>
                <StopButton/> 
                <div style={{position: "fixed", top: 0, right: 0}}>
                        <ConnectionQualityComponent quality={100}/>  
                </div>  
                <ReactSpeedometer/>
            </div>
        )
    }
}


export default DashComponent;