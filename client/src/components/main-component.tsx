import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import openSocket from "../actions/socket/openSocket";
import MapTest from "./map";



type MainProps = {

}
// figure out what map we will use and how to integrate it
class MainComponent extends React.Component<MainProps> {
// this is the Main page
    render() {
        return ( 
            <div>
                <MapTest/>
            </div>
        )
    }
}

export default MainComponent;

