import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={14}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Legend = ({ data, colors }) => (
  <ul className="flex flex-col justify-center ml-4">
    {data.map((entry, index) => (
      <li key={entry.name} className="flex items-center mb-2">
        <span
          className="inline-block w-4 h-4 rounded-full mr-2"
          style={{ backgroundColor: colors[index % colors.length] }}
        />
        <span>{entry.name}</span>
      </li>
    ))}
  </ul>
);

const CustomPieChart = ({ data, width = 400, height = 300, colors }) => {
  return (
    <div className="flex items-center justify-center gap-4 w-full">
      <PieChart width={width} height={height}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={Math.min(width, height) / 2.5}
          labelLine={false}
          label={renderCustomizedLabel}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
      <Legend data={data} colors={colors} />
    </div>
  );
};

export default CustomPieChart;
