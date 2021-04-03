import React from 'react';
import { RoverCommands } from '../../rover-commands';

class StopStatus extends React.Component<{}, {}> {
    
    render() {
        if (RoverCommands.isEStopped()) {
            return (
                <div>
                    <h3>Status: <span style={{ color: "red" }}>E-stop engaged</span></h3>
                    <p>Press shift-space to disengage E-stop</p>
                </div>
            );
        } else {
            return (
                <div>
                    <h3>Status: <span style={{ color: "green" }}>operational</span></h3>
                    <p>Press shift-space to disengage E-stop</p>
                </div>
            );
        }
    }

}

export default StopStatus;
