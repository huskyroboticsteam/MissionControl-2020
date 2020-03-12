import * as React from "react";
import { SSL_OP_CISCO_ANYCONNECT } from "constants";
import { any } from "prop-types";
import Fullscreen from "react-full-screen";
import "./photo.css";
import { ImageGroup, Image } from "react-fullscreen-image";
import { Component } from "react";
import { runInThisContext } from "vm";

// update picture
// figure out how to stop "stopmotion" when leaving fullscreen
// add timer to picture display
// added fullscreen option, now make it to separate camera streams
// fix resolution of images
// cameraFeed: string;
type PhotoUpdateProps = {

}
interface FullState {
  isFull: boolean;
}

class PhotoUpdate1 extends React.Component<PhotoUpdateProps, FullState> {
  constructor(props) {
    super(props);
    this.state = {
      isFull: false
    };
  }

  compononentWillUnmount() {
    this.setState({ isFull: false });
  }

  goFull = () => {
    this.setState({ isFull: true });
  };

  cancelFull = () => {
    this.setState({ isFull: false });
  };

  render() {
    const cameraDummy = 'https://image.shutterstock.com/image-vector/sample-speech-bubble-sign-banner-260nw-1475723558.jpg';
    return (
      <div className="container">
        <button onClick={this.goFull}>Arm Camera</button>
        <Fullscreen
          enabled={this.state.isFull}
          onChange={isFull => this.setState({ isFull })}
        >
          <img src={cameraDummy} onClick={this.cancelFull} />
        </Fullscreen>
      </div>
    );
  }
}
export default PhotoUpdate1;
