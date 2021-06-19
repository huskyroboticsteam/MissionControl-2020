import * as React from "react";
import { makeStyles } from "@material-ui/core";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    step1science: false,
    step1delivery: false,
    step1service: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { step1delivery, step1science, step1service } = state;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Science Mission</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={step1science} onChange={handleChange('step1science')} value="step1science" />}
            label="Task 1"
          />
        </FormGroup>
      </FormControl>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Delivery/Retrieval Mission</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={step1delivery} onChange={handleChange('step1delivery')} value="step1delivery" />}
            label="Task 1"
          />
        </FormGroup>
      </FormControl>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Service Mission</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={step1service} onChange={handleChange('step1service')} value="step1service" />}
            label="Task 1"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
