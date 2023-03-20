import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const dataPointValues = props.datapoints.map((datapoint) => datapoint.value);
  const TotalMaximum = Math.max(...dataPointValues);
  return (
    <div className="Chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={TotalMaximum}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
