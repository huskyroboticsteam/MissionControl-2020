import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ErrorIcon from "@material-ui/icons/Error";
import DoneIcon from "@material-ui/icons/Done";



type TelemetryProps = {
  voltages: number;
  current: number;
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

function checkCurrent(props) {
  if (prop.Current>=100) {
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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    
  },
});

function createData(motor, status, current, voltage) {
  return { motor, status, current, voltage};
}

// integrate nominal/sensor data into table
const rows = [
  createData('Front Left', <DoneIcon/>, 6.0, 24),
  createData('Front Right', <ErrorIcon/>, 9.0, 37),
  createData('Bottom Left', <DoneIcon/>, 24, 24),
  createData('Bottom Right', <DoneIcon/>, 3.7, 673),
  createData("Arm", <DoneIcon/>, 16.0, 49),
];
class TelemetryTableComponent extends React.Component<TelemetryProps>{
  render() { 
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Motor</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Current&nbsp;(A)</TableCell>
            <TableCell align="right">Voltage&nbsp;(V)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.motor}>
              <TableCell component="th" scope="row">
                {row.motor}
              </TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.current}</TableCell>
              <TableCell align="right">{row.voltage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
  }
}

export default TelemetryTableComponent;