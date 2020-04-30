import * as React from "react";
import Fullscreen from "react-full-screen";
import "./photo.css";

// cameraFeed: string;
type PhotoUpdateProps = {
  cameraDummy: string;
};
interface FullState {
  isFull: boolean;
}

class PhotoUpdate3 extends React.Component<PhotoUpdateProps, FullState> {
  constructor(props) {
    super(props);
    this.state = {
      isFull: false,
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
    return (
      <div className="container">
        <button onClick={this.goFull}>Arm Camera</button>
        <Fullscreen
          enabled={this.state.isFull}
          onChange={isFull => this.setState({ isFull })}
        >
          <img src={this.props.cameraDummy} alt="sample"onClick={this.cancelFull} />
        </Fullscreen>
      </div>
    );
  }
}
export default PhotoUpdate3;

