import React from 'react';
import { RoverCommands } from '../../rover-commands';

class StopStatus extends React.Component<{}, {}> {
    render() {
        const status: string = RoverCommands.isEStopped() ? "E-stop engaged" : "Operational";
        return (
            <div>
                <h3>Status: {status}</h3>
                <p>Press space to toggle E-stop</p>
            </div>
        );
    }
}

export default StopStatus;
