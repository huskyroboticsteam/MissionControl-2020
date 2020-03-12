import * as React from "react";
import Fullscreen from "react-full-screen";
import "./photo.css";


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
