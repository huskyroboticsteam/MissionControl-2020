import React from "react";
type CoordinatesProps = {
    X: number;
    Y: number;
    Z: number;
}
const coordinatesBarContainer = {
    height: 100,
    width: 100,
    float: 'left',
    borderStyle: 'solid',
    borderColor: "black",
    borderWidth: "thin",
    background: 'grey',
    margin: 40,
    padding: 10,
} as React.CSSProperties;
class CoordinatesComponent extends React.Component<CoordinatesProps>{
    render(){
        let tableStyle = 'tableStyle';
        return (
            <div style={coordinatesBarContainer}>
                <table>
                    <tr>
                        <td><b>X</b></td><td>{this.props.X}</td>
                    </tr>
                    <tr>
                        <td><b>Y</b></td><td>{this.props.Y}</td>
                    </tr>
                    <tr>
                        <td><b>Z</b></td><td>{this.props.Z}</td>
                    </tr>
                </table>
            </div>    
        );
    }
}

export default CoordinatesComponent;