import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function App() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
      <PieChart width={200} height={250}>
        <Pie
          data={data}
          cx={100}
          cy={140}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      <div style={{ marginLeft: "20px", marginTop: "40px" }}>
        {data.map((entry, index) => (
          <div
            key={`legend-${index}`}
            style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: COLORS[index % COLORS.length],
                marginRight: "10px"
              }}
            ></div>
            <span>{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
