import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineChartComponent = ({ data, width = 500, height = 300, lines }) => {
  return (
    <LineChart width={width} height={height} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
      <YAxis />
      {/* <Tooltip /> */}
      <Legend />
      {lines.map((line, index) => (
        <Line
          key={index}
          type="monotone"
          dataKey={line.dataKey}
          stroke={line.stroke}
          activeDot={line.activeDot}
        />
      ))}
    </LineChart>
  );
};

export default LineChartComponent;
