import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const CustomAreaChart = ({ data, width, height, areaKey, strokeColor, fillColor }) => {
  return (
    <AreaChart
      width={width}
      height={height}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey={areaKey} stroke={strokeColor} fill={fillColor} />
    </AreaChart>
  );
};

export default CustomAreaChart;
