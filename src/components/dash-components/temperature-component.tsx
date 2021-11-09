import React, { useEffect, useRef } from "react";
import SvgGauge from "svg-gauge";
import "./temperature-component.css";
const defaultOptions = {
  animDuration: 1,
  showValue: true,
  initialValue: 0,
  max: 200,
  dialStartAngle: 90,
  dialEndAngle: 90,
  color: function(value) {
    if (value < 50) {
      return "#5ee432";
    } else if (value < 100) {
      return "#fffa50";
    } else if (value < 150) {
      return "#f7aa38";
    } else {
      return "#ef4655";
    }
  }
};

const Temperature = props => {
  const gaugeEl = useRef(null);
  const gaugeRef = useRef(null);
  useEffect(() => {
    if (!gaugeRef.current) {
      const options = { ...defaultOptions, ...props };
      gaugeRef.current = SvgGauge(gaugeEl.current, options);
      gaugeRef.current.setValue(options.initialValue);
    }
    gaugeRef.current.setValueAnimated(props.value, 1);
  }, [props]);

  return (
    <div ref={gaugeEl} className="gauge-container two">
      <div className="value-text">°F</div>
    </div>
  );
};

export default Temperature;
