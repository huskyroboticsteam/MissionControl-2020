import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import blueGrey from '@material-ui/core/colors/blueGrey';
import green from '@material-ui/core/colors/green';
import createHistory from 'history/createBrowserHistory';
import { SnackbarProvider } from 'notistack';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import configureStore from './configureStore';

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

// Global Theme
const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: green,
    type: 'dark'
  }
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={6}>
        <App />
      </SnackbarProvider>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
