import * as React from "react";
import Button from "@material-ui/core/Button";

type RequestProps = {};
 class RequestButton extends React.Component<RequestProps> {
     constructor(props) {
         super(props);
     }
    request() {
      // makeRequest;
    }
   render() {
     return (
         <Button variant="contained" onClick={this.request} color="primary">
           REQUEST
         </Button>
     );
   }
 }
export default RequestButton;
