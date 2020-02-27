import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import openSocket from "../actions/socket/openSocket";
import CheckboxesGroup from "./tasklist-component";
import GamepadList from "./GamepadList";

type ArmProps = {
  value: number
};
class ArmComponent extends React.Component<ArmProps, any> {
  //this displays arm data
  // put upper and lower limits on angles
  constructor(props) {
    super(props);
    this.state = {value: 0};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Valid angle ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <CheckboxesGroup/>
      <form onSubmit={this.handleSubmit}>
        <label>
          Input Angle here: 
          <input type="number" value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
      <GamepadList />
      </div>
    );
  }
}

export default ArmComponent;
