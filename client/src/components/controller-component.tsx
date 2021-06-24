import * as React from "react";
import Gamepad from "react-gamepad";
import { RoverCommands } from "../rover-commands";

type ControllerProps = {};

let forwardBackward: number = 0.0;
let leftRight: number = 0.0;

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
    } else if (axisName === "RightStickX") {
      leftRight = value;
    }
    RoverCommands.setDrivePower(forwardBackward, leftRight);
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
