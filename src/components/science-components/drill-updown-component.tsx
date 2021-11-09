import React from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch, { SwitchClassKey, SwitchProps } from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}

interface Props extends SwitchProps {
  classes: Styles;
}

const AntSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: "flex"
    },
    switchBase: {
      padding: 2,
      color: theme.palette.common.white,
      "&$checked": {
        transform: "translateX(12px)",
        color: theme.palette.common.white,
        "& + $track": {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main
        }
      }
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: "none"
    },
    track: {
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.primary.main
    },
    checked: {}
  })
)(Switch);

export default function DrillUpDownToggle() {
  const [state, setState] = React.useState({
    checked: true
  });

  const handleChange = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div
      style={{
        border: "solid",
        borderWidth: "thin",
        background: "#eeeeee",
        width: "130px",
        textAlign: "center"
      }}
    >
      <FormControlLabel
        control={
          <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>▼</Grid>
              <Grid item>
                <AntSwitch
                  checked={state.checked}
                  onChange={handleChange("checked")}
                  value="checked"
                />
              </Grid>
              <Grid item>▲</Grid>
            </Grid>
          </Typography>
        }
        label={
          <div>
            <b>Drill Direction</b>
          </div>
        }
        labelPlacement="bottom"
      />
    </div>
  );
}
