import React from "react";
import { ArmMotor } from "./arm-motor";
import StopStatus from "./components/dash-components/stop-status";
import makeRequest from "./utils/request/makeRequest";

/**
 * Reference to the StopStatus component that is set by its render() function.
 */
export const stopStatusRef: React.RefObject<StopStatus> = React.createRef();

/** How often the client sends packets to the server. */
const UPDATE_PERIOD_MILIS: number = 700;

/**
 * Returns an initialized map to store motor power.
 */
function initializeMotorPowerMap(): Map<ArmMotor, number> {
    const power: Map<ArmMotor, number> = new Map();
    for (const motor of Object.values(ArmMotor)) {
        power.set(motor, 0.0);
    }
    return power;
}

/**
 * Class containing static methods for sending commands to the rover.
 */
export class RoverCommands {
    private static drivePower: [number, number] = [0.0, 0.0];
    private static motorPower: Map<ArmMotor, number> = initializeMotorPowerMap();
    private static eStop: boolean = false;

    /**
     * Sets the power of the rover's drive system.
     * 
     * @param forwardBackward power in the vertical direction [-1.0, 1.0]
     * @param leftRight power in the horizontal direction [-1.0, 1.0]
     */
    static setDrivePower(forwardBackward: number, leftRight: number): void {
        if (this.drivePower[0] === forwardBackward && this.drivePower[1] === leftRight) {
            // No need to update.
            return;
        }
        this.drivePower = [forwardBackward, leftRight];
        sendDriveCommand(forwardBackward, leftRight);
    }

    /**
     * Returns a pair of numbers. The first number represents the
     * current forward/backward power of the drive system. The second number
     * represents the current left/right power of the drive system.
     */
    static getDrivePower(): [number, number] {
        return this.drivePower;
    }

    /**
     * Sets the power of the given motor.
     * 
     * @param motor the motor
     * @param power the power [-1.0, 1.0]
     */
    static setMotorPower(motor: ArmMotor, power: number): void {
        if (this.motorPower.get(motor) === power) {
            // No need to update.
            return;
        }
        this.motorPower.set(motor, power);
        sendMotorCommand(motor, power);
    }

    /**
     * Returns the current power of the given motor.
     * @param motor the motor
     */
    static getMotorPower(motor: ArmMotor): number {
        return this.motorPower.get(motor);
    }

    /**
     * Requests that the rover stops or resumes operation.
     * 
     * @param eStop true to request the rover to stop, false to request the
     *              rover to resume operations if it is stopped
     */
    static setEStop(eStop: boolean): void {
        if (this.eStop === eStop) {
            // No need to update.
            return;
        }
        this.eStop = eStop;
        sendEStopCommand(eStop);
        stopStatusRef.current.forceUpdate();
    }

    static toggleAutonomous(): void {
        sendAutonomousCommand();
    }

    /**
     * Returns true if this rover is E-stopped, false otherwise.
     */
    static isEStopped(): boolean {
        return this.eStop;
    }
}

/**
 * Sends command packets to the server.
 */
function update(): void {
    const drivePower: [number, number] = RoverCommands.getDrivePower();
    const forwardBackward: number = drivePower[0];
    const leftRight: number = drivePower[1];
    if (!(forwardBackward === 0 && leftRight === 0)) {
        sendDriveCommand(forwardBackward, leftRight);
    }

    for (const motor of Object.values(ArmMotor)) {
        const power: number = RoverCommands.getMotorPower(motor);
        if (power !== 0) {
            sendMotorCommand(motor, power);
        }
    }
}

/**
 * Sends drive-related command packets to the server.
 */
function sendDriveCommand(forwardBackward: number, leftRight: number): void {
    const request = {
        "type": "drive",
        "forward_backward": forwardBackward,
        "left_right": leftRight
    };
    sendRequest(request);
}

/**
 * Sends motor-related command packets to the server.
 */
function sendMotorCommand(motor: ArmMotor, power: number): void {
    // Right now PID control doesn't work well on the rover.
    //var op_mode_key = "incremental PID speed";
    var op_mode_key = "PWM target";
    if (motor !== ArmMotor.ARM_BASE &&
        motor !== ArmMotor.SHOULDER &&
        motor !== ArmMotor.ELBOW) {
        op_mode_key = "PWM target";
    }
    var request = {
        "type": "motor",
        "motor": motor
    };
    request[op_mode_key] = power;
    sendRequest(request);
}

/**
 * Sends an E-stop packet to the server.
 */
function sendEStopCommand(eStop: boolean) {
    const request = {
        "type": "estop",
        "release": !eStop
    };
    sendRequest(request);
}

/**
 * Sends a command to toggle autonomous mode on the rover.
 */
function sendAutonomousCommand() {
    const request = {
        "type": "autonomous"
    };
    sendRequest(request);
}

/**
 * Sends the given request to the server.
 * 
 * @param request the request to send
 */
function sendRequest(request: any): void {
    makeRequest(
        "/",
        JSON.stringify(request),
        () => {
        },
        (error) => {
            alert("Error sending command: " + error);
        }
    );
}

setInterval(update, UPDATE_PERIOD_MILIS);
