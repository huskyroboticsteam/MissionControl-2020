import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import openSocket from "../actions/socket/openSocket";

const styles: any = (theme: Theme) => ({
  rawData: {
    color: "white",
    textAlign: "center"
  }
});

type NavbarProps = {
  onClickHandler: Function;
};
class Navbar extends React.Component<NavbarProps> {
  render() {
    return (
      <div>
        <ul id ="nav">
          <li onClick={() => this.props.onClickHandler('main')}><a href="#">Main</a></li>
          <li onClick={() => this.props.onClickHandler('arm')}><a href="#">Arm</a></li>
          <li onClick={() => this.props.onClickHandler('science')}><a href="#">Science</a></li>
          <li><a href="#">Telemetry</a></li>
          <li><a href="#">Camera</a></li>
        </ul>
      </div>
    )  
  }
}

type AppProps = {
  classes: any;
  nominal: any;
  sensors: any;
  openSocket: Function;
};

class App extends React.Component<AppProps> {
  componentDidMount() {
    const { openSocket } = this.props;
    openSocket();
  }

  navbarClicked(navbarStr: string) {
    console.log(navbarStr);
  }

  render() {
    const { classes, nominal, sensors } = this.props;
    return (
      <div>
        <Navbar onClickHandler={this.navbarClicked}/>
        <CssBaseline />
        <Typography className={classes.rawData}>
          {JSON.stringify(nominal)}
          {JSON.stringify(sensors)}
        </Typography>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    nominal: state.nominal.data,
    sensors: state.sensors.data
  };
};

const mapDispatchToProps = {
  openSocket
};

//@ts-ignore
const connectedApp: any = compose(withStyles(styles),connect(mapStateToProps,mapDispatchToProps))(App);

export default connectedApp;

