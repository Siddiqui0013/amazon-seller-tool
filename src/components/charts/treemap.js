// src/components/CustomTreemap.js
import React from "react";
import { Treemap, Tooltip } from "recharts";

const CustomizedContent = (props) => {
  const { root, depth, x, y, width, height, index, colors, name } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: depth < 2 ? colors[Math.floor((index / root.children.length) * colors.length)] : "none",
          stroke: "#fff",
          strokeWidth: 2 / (depth + 1e-10),
          strokeOpacity: 1 / (depth + 1e-10),
        }}
      />
      {depth === 1 && (
        <>
          <text
            x={x + width / 2}
            y={y + height / 2 + 7}
            textAnchor="middle"
            fill="#fff"
            fontSize={14}
          >
            {name}
          </text>
          <text x={x + 4} y={y + 18} fill="#fff" fontSize={16} fillOpacity={0.9}>
            {index + 1}
          </text>
        </>
      )}
    </g>
  );
};

const CustomTreemap = ({ data, width, height, colors }) => {
  return (
    <Treemap
      width={width}
      height={height}
      data={data}
      dataKey="size"
      stroke="#fff"
      fill="#8884d8"
      content={<CustomizedContent colors={colors} />}
    >
      <Tooltip />
    </Treemap>
  );
};

export default CustomTreemap;
