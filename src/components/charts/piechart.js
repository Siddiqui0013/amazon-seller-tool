  // src/components/CustomPieChart.js
  import React from "react";
  import { PieChart, Pie, Cell } from "recharts";

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const Legend = ({ data, colors }) => (
    <ul style={{ listStyleType: "none", paddingRight: 0, margin: 0 }}>
      {data.map((entry, index) => (
        <li key={entry.name} style={{ display: "flex", alignItems: "center", marginBottom: 28, marginTop: 20 }}>
          <span
            style={{
              display: "inline-block",
              width: 20,
              height: 20,
              backgroundColor: colors[index % colors.length],
              marginRight: 8,
            }}
          />
          <span>{entry.name}</span>
        </li>
      ))}
    </ul>
  );

  const CustomPieChart = ({ data, width, height, colors }) => {
    return (
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <PieChart width={width} height={height}>
          <Pie
            data={data}
            cx={width / 2.5}
            cy={height / 2}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
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
