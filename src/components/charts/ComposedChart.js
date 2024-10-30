import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const CustomComposedChart = ({
  data,
  width = "100%",
  height = 300,
  margin = { top: 20, right: 20, bottom: 20, left: 20 },
  xDataKey = "name",
  lineKey = "uv",
  lineColor = "#ff7300",
  areaKey = "amt",
  areaColor = "#8884d8",
  barKey = "pv",
  barColor = "#413ea0",
  barSize = 20,
}) => {
  return (
    <div style={{ width, height }}>
      <ResponsiveContainer>
        <ComposedChart data={data} margin={margin}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey={xDataKey} scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey={areaKey}
            fill={areaColor}
            stroke={areaColor}
          />
          <Bar dataKey={barKey} barSize={barSize} fill={barColor} />
          <Line type="monotone" dataKey={lineKey} stroke={lineColor} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomComposedChart;
