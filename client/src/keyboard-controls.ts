/*
 * Controls for the rover are as follows:
 * 
 * Drive:
 *  ArrowUp: drive forward
 *  ArrowDown: drive backward
 *  ArrowLeft: turn counterclockwise
 *  ArrowRight: turn clockwise
 *  C (hold): reduce speed
 *  V (hold): increase speed
 * 
 * Arm:
 *  Q/A: arm base
 *  W/S: shoulder
 *  E/D: elbow
 *  R/F: forearm
 *  T/G/Y/H: wrist
 *  U/J: hand
 */

import { Motor } from "./motor";
import { RoverCommands } from "./rover-commands";


/** Stores which keys are currently pressed. */
const pressedKeys: Map<string, boolean> = new Map();

const motorSensitivity: Map<Motor, number> = new Map();

for (const motor of Object.values(Motor)) {
    motorSensitivity.set(motor, 1.0);
}

/** Invoked in index.tsx to add event listeners. */
export function addKeyboardListeners(): void {
    document.addEventListener("keydown", onKeyPress);
    document.addEventListener("keyup", onKeyRelease);
}

export function setMotorSensitivity(motor: Motor, sensitivity: number) {
    motorSensitivity.set(motor, sensitivity);
}

function onKeyPress(event: KeyboardEvent): void {
    event.preventDefault();
    if (!keyPressed(event.key)) {
        pressedKeys[event.key] = true;
        update();
    }
}

function onKeyRelease(event: KeyboardEvent): void {
    pressedKeys[event.key] = false;
    update();
}

/**
 * Returns true if the given key is currently pressed, false otherwise.
 *
 * @param key the key to examine
 */
function keyPressed(key: string): boolean {
    return pressedKeys[key];
}

/**
 * Sends commands to the rover based on user input.
 */
function update(): void {
    updateDrive();
    updateArm();
}

/**
 * Sends drive-related commands to the rover based on user input.
 */
function updateDrive(): void {
    let leftRight: number = 0.0;
    let forwardBackward: number = 0.0;
    if (keyPressed("ArrowUp")) {
        forwardBackward += 0.5;
    }
    if (keyPressed("ArrowDown")) {
        forwardBackward -= 0.5;
    }
    if (keyPressed("ArrowLeft")) {
        leftRight += 0.5;
    }
    if (keyPressed("ArrowRight")) {
        leftRight -= 0.5;
    }
    if (keyPressed("c")) {
        leftRight *= 0.5;
        forwardBackward *= 0.5;
    }
    if (keyPressed("v")) {
        leftRight *= 2.0;
        forwardBackward *= 2.0;
    }
    RoverCommands.setDrivePower(forwardBackward, leftRight);
}

/**
 * Sends arm-related commands to the rover based on user input.
 */
function updateArm(): void {
    RoverCommands.setMotorPower(Motor.ARM_BASE, powerFromKeys("q", "a") * motorSensitivity.get(Motor.ARM_BASE));
    RoverCommands.setMotorPower(Motor.SHOULDER, powerFromKeys("w", "s") * motorSensitivity.get(Motor.SHOULDER));
    RoverCommands.setMotorPower(Motor.ELBOW, powerFromKeys("e", "d") * motorSensitivity.get(Motor.ELBOW));
    RoverCommands.setMotorPower(Motor.FOREARM, powerFromKeys("r", "f") * motorSensitivity.get(Motor.FOREARM));
    RoverCommands.setMotorPower(Motor.HAND, powerFromKeys("u", "j") * motorSensitivity.get(Motor.HAND));
    updateWrist();
}

/**
 * Returns 0.0 if neither or both keys are pressed, 1.0 if positiveKey is
 * pressed, or -1.0 if negativeKey is pressed.
 * 
 * @param positiveKey the key that, when pressed, should increase the overall power
 * @param negativeKey they that, when pressed, should decrease the overall power
 */
function powerFromKeys(positiveKey: string, negativeKey: string): number {
    let power: number = 0.0;
    if (keyPressed(positiveKey)) {
        power += 1.0;
    }
    if (keyPressed(negativeKey)) {
        power -= 1.0;
    }
    return power;
}

/**
 * Sends wrist-related commands to the rover based on user input.
 */
function updateWrist() {
    let leftPower: number;
    let rightPower: number;
    if (keyPressed("t")) {
        leftPower = 1.0;
        rightPower = 1.0;
    } else if (keyPressed("g")) {
        leftPower = -1.0;
        rightPower = -1.0;
    } else if (keyPressed("y")) {
        leftPower = 1.0;
        rightPower = -1.0;
    } else if (keyPressed("h")) {
        leftPower = -1.0;
        rightPower = 1.0;
    } else {
        leftPower = 0.0;
        rightPower = 0.0;
    }
    RoverCommands.setMotorPower(Motor.DIFF_LEFT, leftPower);
    RoverCommands.setMotorPower(Motor.DIFF_RIGHT, rightPower);
}
