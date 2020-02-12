/*import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import openSocket from "../actions/socket/openSocket";

import CanvasJSReact from '../canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


type CO2graphProps= {}
class CO2graph extends React.Component<CO2graphProps> {

	render() {
        const options = {
            title: {
              text: "CO2 graph"
            },
            data: [{				
                      type: "line",
                      dataPoints: [
                          { label: "Apple",  y: 10  },
                          { label: "Orange", y: 15  },
                          { label: "Banana", y: 25  },
                          { label: "Mango",  y: 30  },
                          { label: "Grape",  y: 28  }
                      ]
             }]
         }
       return (
          <div style={{height: "200px", width: "300px"}}>
            <CanvasJSChart options = {options}
                /* onRef = {ref => this.chart = ref} 
            />
          </div>
        );
      }
}
export default CO2graph;*/


import { CanvasJS, CanvasJSChart }  from '../canvasjs.react';
import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import openSocket from "../actions/socket/openSocket";

// import CanvasJSReact from '../canvasjs.react';

//var CanvasJSReact = require('./canvasjs.react');

//var React = require('react');
var Component = React.Component;
//var CanvasJSReact = require('./canvasjs.react')

var dps = [{x: 1, y: 10}, {x: 2, y: 13}, {x: 3, y: 18}, {x: 4, y: 20}];   //dataPoints.
var xVal = dps.length + 1;
var yVal = 15;
var updateInterval = 3000;

type CO2graphProps= {}

class CO2graph extends Component<CO2graphProps> {
    chart: CanvasJSChart;
    constructor(CO2graphProps) {
		super(CO2graphProps);
        this.updateChart = this.updateChart.bind(this);
        this.chart = new CanvasJSChart({});
	}
	componentDidMount() {
		setInterval(this.updateChart, updateInterval);
	}
	updateChart() {
		yVal = yVal //+  Math.round(5 + Math.random() *(-5-5));
		dps.push({x: xVal,y: yVal});
		xVal++;
		if (dps.length >  10 ) {
			dps.shift();
		}
		this.chart.render();
	}
	render() {
        const options = {
          title: {
            text: "CO2 Graph"
          },
          data: [{
            type: "line",
            dataPoints : dps,
        }]
       }
       return (
          <div style={{height: "200px", width: "300px"}}>
            <CanvasJSChart options = {options}
                onRef = {(ref: CanvasJSChart) => this.chart = ref}
            />
          </div>
        );
      }
}
export default CO2graph;