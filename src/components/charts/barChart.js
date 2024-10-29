// BarChartComponent.js
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const BarChartComponent = ({ 
  data, 
  dataKey = "uv", 
  width = 400, 
  height = 300, 
  barSize = 30, 
  color = "#8884d8",
  orientation = "vertical" // Add orientation prop to control bar direction
}) => {
  return (
    <BarChart 
      width={width} 
      height={height} 
      data={data} 
      barSize={barSize} 
      layout={orientation === "horizontal" ? "vertical" : "horizontal"}
    >
      <CartesianGrid strokeDasharray="3 3" />
      {/* Swap XAxis and YAxis based on orientation */}
      {orientation === "horizontal" ? (
        <>
          <YAxis type="category" dataKey="name" />
          <XAxis type="number" />
        </>
      ) : (
        <>
          <XAxis dataKey="name" />
          <YAxis />
        </>
      )}
      <Tooltip />
      <Legend />
      <Bar dataKey={dataKey} fill={color} />
    </BarChart>
  );
};

export default BarChartComponent;
