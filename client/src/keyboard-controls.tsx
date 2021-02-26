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
 *  T/G: diffs (positive direction)
 *  Y/H: diffs (negative direction)
 *  U/J: hand
 */

import makeRequest from "./utils/request/makeRequest";

/** How often the client sends packets to the server. */
const UPDATE_PERIOD_MILIS: number = 100;

/** Stores which keys are currently pressed. */
const pressedKeys: Map<string, boolean> = new Map();

/** Invoked in app.tsx to add event listeners. */
export function addKeyboardListeners(): void {
    document.addEventListener("keydown", onKeyPress);
    document.addEventListener("keyup", onKeyRelease);
    setInterval(update, UPDATE_PERIOD_MILIS);
}

function onKeyPress(event: KeyboardEvent): void {
    event.preventDefault();
    pressedKeys[event.key] = true;
}

function onKeyRelease(event: KeyboardEvent): void {
    pressedKeys[event.key] = false;
}

/** Sends packets to the server. */
function update(): void {
    updateDrive();
    updateArm();
}

/**
 * Returns true if the given key is currently pressed, false otherwise.
 *
 * @param key the key to examine
 */
function keyPressed(key: string): boolean {
    return pressedKeys[key];
}

/** Sends drive-related packets to the server. */
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
    setDrivePower(forwardBackward, leftRight);
}

/**
 * Sends a drive packet with the given parameters to the server.
 * 
 * @param forwardBackward power in the vertical direction [-1.0, 1.0]
 * @param leftRight power in the horizontal direction [-1.0, 1.0]
 */
function setDrivePower(forwardBackward: number, leftRight: number): void {
    const request = {
        "type": "drive",
        "forward_backward": forwardBackward,
        "left_right": leftRight
    };
    sendRequest(request);
}

/** Sends arm-related packets to the server. */
function updateArm(): void {
    setMotorPower("arm_base", powerFromKeys("q", "a"));
    setMotorPower("shoulder", powerFromKeys("w","s"));
    setMotorPower("elbow",powerFromKeys("e","d"));
    setMotorPower("forearm", powerFromKeys("r", "f"));
    setMotorPower("hand", powerFromKeys("u", "j"));
    updateDiff();
}

/**
 * Sends a motor packet with the given parameters to the server.
 * 
 * @param motor the name of the motor
 * @param power the power of the motor [-1.0, 1.0]
 */
function setMotorPower(motor: string, power: number): void {
    const request = {
        "type": "motor",
        "motor": motor,
        "mode": "PWM",
        "PWM target": power
    };
    sendRequest(request);
}

/**
 * Returns 0.0 if neither or both keys are pressed, 1.0 if positiveKey is
 * pressed, or -1.0 if negativeKey is pressed.
 * 
 * @param positiveKey the key that, when pressed, should increase the overall power
 * @param negativeKey they that, when pressed, should decrease the overall power
 */
function powerFromKeys(positiveKey: string, negativeKey: string): number {
    let power: number = 0;
    if (keyPressed(positiveKey)){
        power += 1.0;
    }
    if (keyPressed(negativeKey)) {
        power -= 1.0;
    }
    return power;
}

/**
 * Sends wrist motor-related packets to the server.
 */
function updateDiff(){
    let power: number = 0.0;
    if (keyPressed("t") || keyPressed("g")) {
        power += 1.0;
    }
    if (keyPressed("y") || keyPressed("h")) {
        power -= 1.0;
    }
    setMotorPower("diffleft", power);
    setMotorPower("diffright", power);
}

/**
 * Sends the given request to the server.
 * 
 * @param request the request to send
 */
function sendRequest(request: any): void{
    makeRequest(
        "/",
        JSON.stringify(request),
        () => {
        },
        (error) => {
            // TODO: fix bug that causes this to run even when working correctly
            // alert("Error sending command: " + error);
        }
    );
}
