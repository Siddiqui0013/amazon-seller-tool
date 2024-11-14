import { Treemap, Tooltip, ResponsiveContainer } from "recharts";

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
            dominantBaseline="central"
            fontSize={10}
          >
            {name}
          </text>
        </>
      )}
    </g>
  );
};

const CustomTreemap = ({ data, height, colors }) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
    <Treemap
      height={height}
      data={data}
      dataKey="size"
      stroke="#fff"
      fill="#8884d8"
      content={<CustomizedContent colors={colors} />}
    >
      <Tooltip />
    </Treemap>
    </ResponsiveContainer>
  );
};

export default CustomTreemap;
