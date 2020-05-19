import axios from "axios";
import { SERVER_URL } from "../../api/constants";

export default (
  route: any,
  body: any,
  handleSuccess: () => void,
  handleError: (arg0: string) => void
) => {
  axios
    .post(`${SERVER_URL}${route}`, body, {
      headers: {
        "Content-Type": "text/plain"
      }
    })
    .then(res => {
      handleSuccess();
    })
    .catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        handleError(error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
        handleError("No response received from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        handleError("Error while setting up request");
      }
    });
};
