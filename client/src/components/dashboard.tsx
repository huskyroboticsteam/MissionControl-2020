import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import ReactSpeedometer from "react-d3-speedometer"
import StopButton from "./stop-button";
import ConnectionQualityComponent from "./connection-quality-component";


type DashProps = {

}
class DashComponent extends React.Component<DashProps> {
// this is the dash
    render() {
        return ( 
            <div style={{ background:"lightGreen", height:"250px"}}>
                <h1> this is the dash</h1>
                <StopButton/> 
                <div style = {{float:"left"}}>
                <ReactSpeedometer />
                </div> 
                <div style = {{float:"left"}}>
                <ConnectionQualityComponent quality={100}/>
                </div>
            </div>
        )
    }
}

export default DashComponent;