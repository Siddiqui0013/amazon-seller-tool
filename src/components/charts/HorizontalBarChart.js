import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const HorizontalBarChart = ({
  data = [],
  lines = [],
  bars = [],
  width = 500,
  height = 400,
  margin = { top: 20, right: 20, bottom: 20, left: 20 },
}) => {
  return (
    <ComposedChart
      layout="vertical"
      width={width}
      height={height}
      data={data}
      margin={margin}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" scale="band" />
      <Tooltip />
      <Legend />
      
      {bars.map((bar, index) => (
        <Bar key={index} dataKey={bar.dataKey} fill={bar.fill} barSize={bar.barSize || 20} />
      ))}

      {lines.map((line, index) => (
        <Line key={index} dataKey={line.dataKey} stroke={line.stroke} />
      ))}
    </ComposedChart>
  );
};

export default HorizontalBarChart;
