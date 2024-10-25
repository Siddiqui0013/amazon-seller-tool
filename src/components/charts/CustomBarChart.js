import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const CustomBarChart = ({
  data,
  width = 500,
  height = 300,
  barColors = ["#0E4DA4"],
  xAxisKey = "name",
  yAxisKey2 = "uv",
}) => {
  return (
    <BarChart
      width={width}
      height={height}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xAxisKey} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={yAxisKey2} fill={barColors[0]} />
    </BarChart>
  );
};

export default CustomBarChart;
