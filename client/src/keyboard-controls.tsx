import makeRequest from "./utils/request/makeRequest";

const keys = new Map();

export function addKeyboardListeners() {
    document.addEventListener("keydown", onKeyPress);
    document.addEventListener("keyup", onKeyRelease);
}

function onKeyPress(event) {
    const key = String.fromCharCode(event.keyCode);
    keys[key] = true;
    updateDrive();
}

function onKeyRelease(event) {
    const key = String.fromCharCode(event.keyCode);
    keys[key] = false;
    updateDrive();
}

function updateDrive() {
    var x = 0;
    var y = 0;
    if (keys["W"]) {
        y += 0.5;
    }
    if (keys["A"]) {
        x -= 0.5;
    }
    if (keys["S"]) {
        y -= 0.5;
    }
    if (keys["D"]) {
        x += 0.5;
    }
    if (keys["V"]) {
        x *= 2.0;
        y *= 2.0;
    }
    if (keys["C"]) {
        x *= 0.5;
        y *= 0.5;
    }
    const request = {
        "type": "drive",
        "forward_backward": y,
        "left_right": x
    }
    makeRequest(
        "/",
        JSON.stringify(request),
        () => {
            alert("sent");
        },
        (error) => {
            alert("Error sending command: " + error);
        }
    );
}
