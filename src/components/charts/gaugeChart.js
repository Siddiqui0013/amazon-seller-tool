import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const RADIAN = Math.PI / 180;

const calculateNeedle = (maxValue, data, cx, cy, iR, oR, color) => {
  const total = data.reduce((acc, entry) => acc + entry.value, 0);
  const angle = 180 * (1 - maxValue / total); 
  
  const length = (iR + 2 * oR) / 3; 
  const sin = Math.sin(-RADIAN * angle);
  const cos = Math.cos(-RADIAN * angle);
  const r = 5;
  const x0 = cx;
  const y0 = cy;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle key="circle" cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path key="path" d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} fill={color} />
  ];
};

const GaugeChart = ({ data, width, height=200, innerRadius = 70, cx=200, cy= height / 1.5, needleColor = "#d0d000" }) => {
  // Find the maximum value in the data for the needle
  const maxValue = Math.max(...data.map(entry => entry.value));
  
  const outerRadius = Math.min(width, height) / 2 - 10;

  return (
    <ResponsiveContainer width={width} height={height}>
      <PieChart>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {/* Render the needle pointing to the max value */}
        {calculateNeedle(maxValue, data, cx, cy, innerRadius, outerRadius, needleColor)}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default GaugeChart;







// import React from "react";
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// const GaugeChart = ({ data }) => {
//   return (
//     <ResponsiveContainer width="100%" height="100%">
//       <PieChart>
//         <Pie
//           data={data}
//           dataKey="value"
//           cx="50%"
//           cy="50%"
//           innerRadius="50%"
//           outerRadius="80%"
//           fill="#8884d8"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={entry.color} />
//           ))}
//         </Pie>
//       </PieChart>
//     </ResponsiveContainer>
//   );
// };

// export default GaugeChart;
