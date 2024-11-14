import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const BarChartComponent = ({ 
  data, 
  bars, 
  height = 300, 
  barSize = 30, 
  barRadius = [10, 10, 0, 0], 
  orientation = "vertical" 
}) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
    <BarChart 
      height={height} 
      data={data} 
      barSize={barSize} 
      layout={orientation === "horizontal" ? "vertical" : "horizontal"}
    >
      <CartesianGrid strokeDasharray="3 3" />
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
      {bars.map((bar, index) => (
        <Bar 
          key={index} 
          dataKey={bar.dataKey} 
          fill={bar.color} 
          radius={barRadius} // Apply rounding to bar edges
        />
      ))}
    </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
