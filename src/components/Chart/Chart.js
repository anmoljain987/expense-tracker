import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart({ dataPoints }) {
  const dataPointValues = dataPoints.map((el) => el.value);
  const totalMax = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {dataPoints.map((el) => {
        return (
          <ChartBar
            value={el.value}
            maxValue={totalMax}
            label={el.label}
            key={el.label}
          />
        );
      })}
    </div>
  );
}

export default Chart;
