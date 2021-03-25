import * as React from "react";
import { Motor } from "../motor";
import { MotorSensitivitySlider } from "./motor-sensitivity-slider";
export default function MotorSliderList() {
    return(
        <div>
            <h1>Motor Sensitivity</h1>
            <MotorSensitivitySlider motor={Motor.ARM_BASE} />
            <MotorSensitivitySlider motor={Motor.SHOULDER} />
            <MotorSensitivitySlider motor={Motor.ELBOW} />
            <MotorSensitivitySlider motor={Motor.FOREARM} />
            <MotorSensitivitySlider motor={Motor.DIFF_LEFT} />
            <MotorSensitivitySlider motor={Motor.DIFF_RIGHT} />
            <MotorSensitivitySlider motor={Motor.HAND} />
        </div>
    )
}