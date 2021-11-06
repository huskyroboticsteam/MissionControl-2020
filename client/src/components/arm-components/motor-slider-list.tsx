import * as React from "react";
import ArmMotor from "../../arm-motor";
import MotorSensitivitySlider from "./motor-sensitivity-slider";

class MotorSliderList extends React.Component<{}, {}> {

    render() {
        return (
            <div>
                <h1>Motor Sensitivity</h1>
                <MotorSensitivitySlider motor={ArmMotor.ARM_BASE} />
                <MotorSensitivitySlider motor={ArmMotor.SHOULDER} />
                <MotorSensitivitySlider motor={ArmMotor.ELBOW} />
                <MotorSensitivitySlider motor={ArmMotor.FOREARM} />
                <MotorSensitivitySlider motor={ArmMotor.DIFF_LEFT} />
                <MotorSensitivitySlider motor={ArmMotor.DIFF_RIGHT} />
                <MotorSensitivitySlider motor={ArmMotor.HAND} />
            </div>
        );
    }

}

export default MotorSliderList;
