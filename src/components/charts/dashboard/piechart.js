import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "A", value: 400 },
  { name: "B", value: 300 },
  { name: "C", value: 300 },
  { name: "D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
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

const Legend = () => (
  <ul style={{ listStyleType: "none", paddingLeft: 0, margin: 0 }}>
    {data.map((entry, index) => (
      <li key={entry.name} style={{ display: "flex", alignItems: "center", marginBottom: 28, marginTop:20 }}>
        <span
          style={{
            display: "inline-block",
            width: 20,
            height: 20,
            backgroundColor: COLORS[index % COLORS.length],
            marginRight: 8,
          }}
        />
        <span>{entry.name}</span>
      </li>
    ))}
  </ul>
);

export default function App() {
  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <PieChart width={500} height={230}>
        <Pie
          data={data}
          cx={200}
          cy={100}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <Legend />
    </div>
  );
}
