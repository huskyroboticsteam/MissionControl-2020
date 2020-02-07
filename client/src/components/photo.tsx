import * as React from "react";
import { SSL_OP_CISCO_ANYCONNECT } from "constants";
import { any } from "prop-types";
import "./photo.css";

type PhotoUpdateProps = {};
// update picture
// add timer to picture display
class PhotoUpdate extends React.Component<PhotoUpdateProps> {
  render() {
    return (
      <div className="container">
        <img src={require("./images/testimage.jpg")} />;
      </div>
    );
  }
}

export default PhotoUpdate;
