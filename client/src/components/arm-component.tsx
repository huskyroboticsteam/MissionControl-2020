import * as React from "react";
import CheckboxesGroup from "./tasklist-component";
import GamepadList from "./GamepadList";
import CanvasTesting from "./arm-test-component";
import { Motor } from "../motor";
import { MotorSensitivitySlider } from "./motor-sensitivity-slider";
import {setMotorSensitivity} from "../keyboard-controls";

type ArmProps = {
  value: number;
};
class ArmComponent extends React.Component<ArmProps, any> {
  //this displays arm data
  // put upper and lower limits on angles
  constructor(props) {
    super(props);
    this.state = { value: 0 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Valid angle " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <GamepadList />
        <CanvasTesting />
        <CheckboxesGroup />
        <form onSubmit={this.handleSubmit}>
          <label>
            Input Angle here:
            <input
              type="number"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <div>
          <h1>Motor Sensitivity</h1>
          <MotorSensitivitySlider motor={Motor.ARM_BASE}/>
          <MotorSensitivitySlider motor={Motor.SHOULDER}/>
          <MotorSensitivitySlider motor={Motor.ELBOW}/>
          <MotorSensitivitySlider motor={Motor.FOREARM}/>
          <MotorSensitivitySlider motor={Motor.DIFF_LEFT}/>
          <MotorSensitivitySlider motor={Motor.DIFF_RIGHT}/>
          <MotorSensitivitySlider motor={Motor.HAND}/>
        </div>
      </div>
    );
  }
}

export default ArmComponent;
