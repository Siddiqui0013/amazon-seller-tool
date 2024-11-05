import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const GaugeChart = ({ data, width, height }) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius="50%"
          outerRadius="75%"
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
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
