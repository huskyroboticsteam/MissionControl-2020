import { CanvasJSChart }  from '../../canvasjs.react';
import * as React from "react";
import DataPacket from "../../types";


var Component = React.Component;


var dps = [{x: 6, y: 10}];   //dataPoints.
var xVal = dps.length + 1;
var yVal = 15;
var updateInterval = 3000;
var interval;

type CO2graphProps= {
  sensors: DataPacket;
};

class CO2graph extends Component<CO2graphProps> {
    chart: CanvasJSChart;
    constructor(CO2graphProps) {
		super(CO2graphProps);
        this.updateChart = this.updateChart.bind(this);
        this.chart = new CanvasJSChart({});
	}
	componentDidMount() {
		interval = setInterval(this.updateChart, updateInterval);
  }
  componentWillUnmount(){
    clearInterval(interval);   
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
	render=()=>{
        const options = {
          title: {
            text: "CO2 Graph"
          },
          data: [{
            type: "line",
            dataPoints : [{x: this.props.sensors.x_s, y: this.props.sensors.y_s}],
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
export default CO2graph;