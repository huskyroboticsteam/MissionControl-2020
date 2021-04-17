//import { CanvasJS } from '../../canvasjs.react';
import { CanvasJSChart } from '../../canvasjs.react';
//import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import * as React from "react";
//import { connect } from "react-redux";
//import { compose } from "recompose";
//import openSocket from "../../actions/socket/openSocket";
import DataPacket from "../../types";


//var Component = React.Component;
var dps = [{x: 1, y: 10}, {x: 2, y: 13}, {x: 3, y: 18}, {x: 4, y: 20}];   //dataPoints.
var xVal = dps.length + 1;
var yVal = 15;
var updateInterval = 3000;
var interval;

type TVOCgraphProps= {
  sensors: DataPacket;
}

class TVOCgraph extends React.Component<TVOCgraphProps> {
    chart: CanvasJSChart;
    constructor(TVOCgraphProps) {
		super(TVOCgraphProps);
        this.updateChart = this.updateChart.bind(this);
        this.chart = new CanvasJSChart({});
        
	}
	componentDidMount() {
		interval = setInterval(this.updateChart, updateInterval);
	}
	updateChart() {
		yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
		dps.push({x: xVal,y: yVal});
		xVal++;
		if (dps.length >  10 ) {
			dps.shift();
		}
		this.chart.render();
  }
  componentWillUnmount(){
    clearInterval(interval);  
  } 
	render =()=> {
        const options = {
          title: {
            text: "TVOC Graph"
          },
          data: [{
            type: "line",
            dataPoints : [{x: this.props.sensors.x_tvoc, y: this.props.sensors.y_tvoc}],
        }]
       }
       return (
          <div style={{height: "200px", width: "500px"}}>
            <CanvasJSChart options = {options}
                onRef = {(ref: CanvasJSChart) => this.chart = ref}
            />
          </div>
        );
      }
}
export default TVOCgraph;
