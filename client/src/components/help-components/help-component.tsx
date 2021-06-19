import * as React from "react";

class HelpComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>E-stop Controls</h1>
                <ul>
                    <li>Space: engage E-stop</li>
                    <li>Shift-space: disengage E-stop</li>
                </ul>
                <h1>Drive Controls</h1>
                <ul>
                    <li>ArrowUp: drive forward</li>
                    <li>ArrowDown: drive backward</li>
                    <li>ArrowLeft: turn counterclockwise</li>
                    <li>ArrowRight: turn clockwise</li>
                    <li>C (hold): reduce speed</li>
                    <li>V (hold): increase speed</li>
                </ul>
                <h1>Arm Controls</h1>:
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
