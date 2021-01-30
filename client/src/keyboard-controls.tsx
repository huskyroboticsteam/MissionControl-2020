import makeRequest from "./utils/request/makeRequest";

/*
 * Controls for controlling the robot are as follows:
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
 *  T/G: diff left
 *  Y/H: diff right
 *  U/J: hand
 */

const driveControlKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "c", "v"];
const armControlKeys = ["q", "a", "w", "s", "e", "d", "r", "f", "t", "g", "y", "h",
    "u", "j"];
const armMotors = ["arm_base", "shoulder", "elbow", "forearm", "diffleft",
    "diffright", "hand"];

const pressedKeys = new Map();
// Storing the PWM values allows us to only necessary arm motor requests.
const armPwmValues = new Array(7).fill(0.0);

export function addKeyboardListeners() {
    document.addEventListener("keydown", onKeyPress);
    document.addEventListener("keyup", onKeyRelease);
}

function onKeyPress(event) {
    // Multiple events can be fired for just one key press if the user holds the
    // key down, so we need to check if the key is already pressed.

    if (driveControlKeys.includes(event.key)) {
      // preventDefault() prevents users from scrolling through the page when
      // moving the robot using arrow keys.
      event.preventDefault();
    }
    if (!pressedKeys[event.key]) {
        pressedKeys[event.key] = true;
        if (driveControlKeys.includes(event.key)) {
            updateDrive();
        } else if (armControlKeys.includes(event.key)) {
            updateArm();
        }
    }
}

function onKeyRelease(event) {
    pressedKeys[event.key] = false;
    if (driveControlKeys.includes(event.key)) {
        updateDrive();
    } else if (armControlKeys.includes(event.key)) {
        updateArm();
    }
}

function updateDrive() {
    let leftRight = 0.0;
    let forwardBackward = 0.0;
    if (pressedKeys["ArrowUp"]) {
        forwardBackward += 0.5;
    }
    if (pressedKeys["ArrowDown"]) {
        forwardBackward -= 0.5;
    }
    if (pressedKeys["ArrowLeft"]) {
        leftRight += 0.5;
    }
    if (pressedKeys["ArrowRight"]) {
        leftRight -= 0.5;
    }
    if (pressedKeys["c"]) {
        leftRight *= 0.5;
        forwardBackward *= 0.5;
    }
    if (pressedKeys["v"]) {
        leftRight *= 2.0;
        forwardBackward *= 2.0;
    }
    const request = {
        "type": "drive",
        "forward_backward": forwardBackward,
        "left_right": leftRight
    };
    sendRequest(request);
}

function updateArm() {
    for (let i = 0; i < armMotors.length; i++) {
        let pwmTarget = 0.0;
        if (pressedKeys[armControlKeys[i * 2]]) {
            pwmTarget += 1.0;
        }
        if (pressedKeys[armControlKeys[i * 2 + 1]]) {
            pwmTarget -= 1.0;
        }
        if (pwmTarget !== armPwmValues[i]) {
            const request = {
                "type": "motor",
                "motor": armMotors[i],
                "mode": "PWM",
                "PWM target": pwmTarget
            };
            sendRequest(request);
            armPwmValues[i] = pwmTarget;
        }
    }
}

function sendRequest(request) {
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
