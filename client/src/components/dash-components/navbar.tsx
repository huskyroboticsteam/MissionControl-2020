import React from "react";
import "./navbar.css";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import CameraIcon from "@material-ui/icons/Camera";
import HelpIcon from "@material-ui/icons/Help"
import EcoIcon from "@material-ui/icons/Eco";
import PhoneIcon from "@material-ui/icons/Phone";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  state = {
    value: 0,
    pathMap: [
      "/main-component",
      "arm-component",
      "science-component",
      "telemetry-component",
      "camera-component"
    ]
  };

  // This causes client to crash when started after server, so I commented it
  // out. May need to revisit later.
  // componentWillReceiveProps(newProps) {
  //   const { pathName } = newProps.location;
  //   const { pathMap } = this.state;
  //   const value = pathMap.indexOf(pathName);

  //   if (value > -1) {
  //     this.setState({ value });
  //   }
  // }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value, pathMap } = this.state;
    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={"navbar"}
      >
        <BottomNavigationAction
          label="Main"
          icon={<HomeIcon />}
          component={Link}
          to={pathMap[0]}
        />
        <BottomNavigationAction
          label="Arm"
          icon={<PhoneIcon />}
          component={Link}
          to={pathMap[1]}
        />
        <BottomNavigationAction
          label="Science"
          icon={<EcoIcon />}
          component={Link}
          to={pathMap[2]}
        />
        <BottomNavigationAction
          label="Telemetry"
          icon={<OfflineBoltIcon />}
          component={Link}
          to={pathMap[3]}
        />
        <BottomNavigationAction
          label="Camera"
          icon={<CameraIcon />}
          component={Link}
          to={pathMap[4]}
        />
        <BottomNavigationAction
          label="Help"
          icon={<HelpIcon />}
          component={Link}
          to={pathMap[5]}
        />
      </BottomNavigation>
    );
  }
}
export default Navbar;
