/* eslint-disable react/jsx-filename-extension */
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import blueGrey from "@material-ui/core/colors/blueGrey";
import green from "@material-ui/core/colors/green";
import createHistory from "history/createBrowserHistory";
import { SnackbarProvider } from "notistack";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/app";
import configureStore from "./configureStore";
import registerServiceWorker from "./registerServiceWorker";

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

// Global Theme
const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: green,
    type: "dark"
  }
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={6}>
        <App
          text="hi"
          alert={() => {
            alert("Hi");
            alert("This is a test");
          }}
        />
      </SnackbarProvider>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
