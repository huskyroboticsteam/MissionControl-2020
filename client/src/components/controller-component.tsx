import * as React from "react";
import Gamepad from "react-gamepad";
import { RoverCommands } from "../rover-commands";

type ControllerProps = {};

// Current forward/backward input from gamepad
let forwardBackward: number = 0.0;
// Current left/right input from gamepad
let leftRight: number = 0.0;
// Used to ensure that gamepad input does not interfere with keyboard input
let gamepadInUse: boolean = false;

class ControllerComponent extends React.Component<ControllerProps> {

  connectHandler(gamepadIndex: number) {
    console.log(`Gamepad ${gamepadIndex} connected!`);
  }

  disconnectHandler(gamepadIndex: number) {
    console.log(`Gamepad ${gamepadIndex} disconnected!`);
  }

  buttonChangeHandler(buttonName: string, down: boolean) {
    // TODO
  }

  axisChangeHandler(axisName: string, value: number, previousValue: number) {
    if (axisName === "LeftStickY") {
      forwardBackward = value;
      if (value !== 0.0) {
        gamepadInUse = true;
      }
    } else if (axisName === "RightStickX") {
      // negative leftRight causes clockwise rotation
      leftRight = -value;
      if (value != 0.0) {
        gamepadInUse = true;
      }
    }
    if (gamepadInUse) {
      RoverCommands.setDrivePower(forwardBackward, leftRight);
    }
    if (forwardBackward === 0.0 && leftRight === 0.0) {
      gamepadInUse = false;
    }
  }

  buttonDownHandler(buttonName: string) {
    // TODO
  }

  buttonUpHandler(buttonName: string) {
    // TODO
  }

  render() {
    return (
      <Gamepad
        onConnect={this.connectHandler}
        onDisconnect={this.disconnectHandler}
        onButtonChange={this.buttonChangeHandler}
        onAxisChange={this.axisChangeHandler}
      >
        <div></div>
      </Gamepad>
    );
  }
}

export default ControllerComponent;
