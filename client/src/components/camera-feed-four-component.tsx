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

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(
  require.context("./camera_feed_04", false, /\.(png|jpe?g|svg)$/)
);
let imageIndex = 0;
interface PhotoUpdateProps {}
interface FullState {
  isFull: boolean;
  isClicked: boolean;
  image: any;
}
class PhotoUpdate4 extends React.Component<PhotoUpdateProps, FullState> {
  constructor(props) {
    super(props);
    this.state = {
      isFull: false,
      isClicked: false,
      image: images[0]
    };
  }
  setInterval() {
    if (this.state.isClicked === false) {
      this.setState({ isClicked: true });
      setInterval(() => {
        this.tickImg();
      }, 1000);
    }
  }

  compononentWillUnmount() {
    imageIndex = 0;
    this.setState({ isFull: false });
    clearInterval();
  }

  tickImg() {
    if (this.state.isFull) {
      imageIndex = imageIndex + 1;
      this.setState({ image: images[imageIndex] });
      if (imageIndex === images.length - 1) {
        imageIndex = -1;
      }
    }
  }

  goFull = () => {
    this.setState({ isFull: true });
  };

  onClickCheck = () => {
    this.goFull();
    this.setInterval();
  };

  render() {
    if (this.state.isFull) {
      return (
        <div className="container">
          <Fullscreen
            enabled={this.state.isFull}
            onChange={isFull => this.setState({ isFull })}
          >
            <img src={this.state.image} />
          </Fullscreen>
        </div>
      );
    } else {
      return (
        <div className="container">
          <img src={this.state.image} onClick={this.onClickCheck} />
        </div>
      );
    }
  }
}
export default PhotoUpdate4;
