import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomScatterChart = ({
  data,
  width = "100%",
  height = 400,
  margin = { top: 20, right: 20, bottom: 20, left: 20 },
  xAxisKey = "x",
  xAxisName = "X-Axis",
  xAxisUnit = "",
  yAxisKey = "y",
  yAxisName = "Y-Axis",
  yAxisUnit = "",
  scatterName = "Scatter Data",
  scatterColor = "#8884d8",
}) => {
  return (
    <div style={{ width, height }}>
      <ResponsiveContainer>
        <ScatterChart margin={margin}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            dataKey={xAxisKey}
            name={xAxisName}
            unit={xAxisUnit}
          />
          <YAxis
            type="number"
            dataKey={yAxisKey}
            name={yAxisName}
            unit={yAxisUnit}
          />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name={scatterName} data={data} fill={scatterColor} />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomScatterChart;
