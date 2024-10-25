// BarChartComponent.js
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const BarChartComponent = ({ 
  data, 
  dataKey = "uv", 
  width = 400, 
  height = 300, 
  barSize = 30, 
  color = "#8884d8" 
}) => {
  return (
    <BarChart width={width} height={height} data={data} barSize={barSize}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={dataKey} fill={color} />
    </BarChart>
  );
};

export default BarChartComponent;
