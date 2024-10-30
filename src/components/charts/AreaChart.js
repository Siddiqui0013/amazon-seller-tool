import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const CustomAreaChart = ({
  data,
  width = 500,
  height = 300,
  areas = [], // Array of areas with dataKey, strokeColor, and fillColor
}) => {
  return (
    <AreaChart
      width={width}
      height={height}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />

      {/* Dynamically render multiple areas */}
      {areas.map((area, index) => (
        <Area
          key={index}
          type="monotone"
          dataKey={area.dataKey}
          stroke={area.strokeColor}
          fill={area.fillColor}
          fillOpacity={area.fillOpacity || 0.3} // Default fill opacity
        />
      ))}
    </AreaChart>
  );
};

export default CustomAreaChart;
