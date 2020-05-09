// import * as React from "react";
// import Button from "@material-ui/core/Button";
// import {makeRequest} from "./../utils/request/makeRequest.js";

// type RequestProps = {};
// class RequestButton extends React.Component<RequestProps> {
//   render() {
//     return (
//         <Button variant="contained" onClick={request} color="primary">
//           REQUEST
//         </Button>
//     );
//   }
// }
// function request() {
//     makeRequest(
//         “/”,
//         {{type: ‘drive’, power: 0.86, left-right: 0.2}},
//         () => {
//             this.props.enqueueSnackbar(“Success”);
//         },
//         (error: Error) => {
//             this.props.enqueueSnackbar(error, snackbarOptions);
//         }
//     );
// }

// export default RequestButton;