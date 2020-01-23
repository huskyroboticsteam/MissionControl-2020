import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import openSocket from "../actions/socket/openSocket";

type MainProps = {

}
class MainComponent extends React.Component<MainProps> {
// this is the Main page
    render() {
        return ( 
            <div>
                <h1> this is the main page</h1>
            </div>
        )
    }
}

export default MainComponent;

