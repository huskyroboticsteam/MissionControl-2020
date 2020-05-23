import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
import DoneIcon from "@material-ui/icons/Done";

type VoltageProps = {
    Voltage: boolean;
}

function checkVoltage(props) {
    if (props.Voltage==true) {
        return (
            <div>
              <DoneIcon/>
            </div>
          );
    } 
    else {
        return (
            <div>
              <ErrorIcon/>
            </div>
          );
    }
}

class VoltageComponent extends React.Component<VoltageProps>{
    
    render(){
        return (
            checkVoltage(this.props)   
        );
    }
}
  
export default VoltageComponent;
  
