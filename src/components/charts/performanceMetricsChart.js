import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const ProgressPieChart = ({
  data,
  width = 300,
  height = 400,
  innerRadius = 60,
  outerRadius = 80,
  colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"],
}) => {
  return (
    <PieChart width={width} height={height}>
      <Pie
        data={data}
        cx={width / 2}
        cy={height / 2}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default ProgressPieChart;
