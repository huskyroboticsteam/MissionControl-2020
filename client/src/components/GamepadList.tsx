import React from "react";
import GamepadItem from './GamepadItem';

interface GamepadListState {
  gamepads: (Gamepad | null)[];
}

export default class GamepadList extends React.Component<any, GamepadListState> {
  constructor(props: any) {
    super(props);
    this.state = { gamepads: [] };
  }

  componentDidMount() {
    this.tick();
  }

  tick() {
    this.setState({ gamepads: this.pollGamepads() });
    window.requestAnimationFrame(() => this.tick())
  }

  render() {
    var gamepadArr: (Gamepad | null)[] = [].slice.call(this.state.gamepads);
    return (
      <div className="gamepad-list" style={{background:"grey"}}>
        <GamepadItem gamepad={gamepadArr[0]} key={0} index = {0}/>
      </div>
    )
  }

  pollGamepads() {
    return navigator.getGamepads();
  }
}