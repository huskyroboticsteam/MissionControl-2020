import React from 'react';
import { setMotorSensitivity, update } from '../../keyboard-controls';
import { ArmMotor } from '../../arm-motor';

interface MotorSensitivitySliderProps {
    motor: ArmMotor;
}

interface MotorPowerSliderState {
    sensitivity: number;
}

class MotorSensitivitySlider extends React.Component<MotorSensitivitySliderProps, MotorPowerSliderState> {

    constructor(props: MotorSensitivitySliderProps) {
        super(props);
        this.state = {
            sensitivity: 1.0
        };
    }

    updateSensitivity = (event: React.ChangeEvent<HTMLInputElement>) => {
        const sensitivity: number = Number.parseFloat(event.target.value);
        setMotorSensitivity(this.props.motor, sensitivity);
        this.setState({
            sensitivity: sensitivity
        });
        update();
    }

    render() {
        const id: string = "motor-sensitivity-slider-" + this.props.motor;
        const label: string = this.props.motor + ": " + this.state.sensitivity;
        return (
            <div>
                <p>{label}</p>
                <input id={id} type="range" min={0} max={1} step={0.1}
                    value={this.state.sensitivity} onChange={this.updateSensitivity} />
            </div>
        )
    }

}

export default MotorSensitivitySlider;
