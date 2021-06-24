import * as React from "react";

class HelpComponent extends React.Component {
    render() {
        return (
            <div>
                <h3>E-stop Controls</h3>
                <ul>
                    <li>Space: engage E-stop</li>
                    <li>Shift-space: disengage E-stop</li>
                </ul>
                <br />
                <h3>Drive Controls</h3>
                <ul>
                    <li>ArrowUp: drive forward</li>
                    <li>ArrowDown: drive backward</li>
                    <li>ArrowLeft: turn counterclockwise</li>
                    <li>ArrowRight: turn clockwise</li>
                    <li>C (hold): reduce speed</li>
                    <li>V (hold): increase speed</li>
                </ul>
                <br />
                <h3>Arm Controls</h3>
                <ul>
                    <li>Q/A: arm base</li>
                    <li>W/S: shoulder</li>
                    <li>E/D: elbow</li>
                    <li> R/F: forearm</li>
                    <li> T/G/Y/H: wrist</li>
                    <li> U/J: hand</li>
                </ul>
            </div>
        );
    }
}

export default HelpComponent;
