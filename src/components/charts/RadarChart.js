// RadarChartComponent.js
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const CustomLegend = ({ dataKeys, colors }) => {
  return (
    <div>
      {dataKeys.map((key, index) => (
        <div key={key} className="flex items-center mb-2">
          <div className="rounded-full mr-2" style={{ backgroundColor: colors[index], width: 12, height: 12 }} />
          <span>{key}</span>
        </div>
      ))}
    </div>
  );
};

const RadarChartComponent = ({ data, dataKeys, colors, title }) => {
  return (
    <div className="border p-4 bg-gray-50 rounded-lg">
      <h1 className="text-2xl my-2">{title}</h1>
      <div className="flex items-center">
        {/* Radar Chart on the left */}
        <ResponsiveContainer width="75%" height={300}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            {dataKeys.map((key, index) => (
              <Radar
                key={key}
                name={key}
                dataKey={key}
                stroke={colors[index]}
                fill={colors[index]}
                fillOpacity={0.6}
              />
            ))}
          </RadarChart>
        </ResponsiveContainer>
        
        {/* Custom Legend on the right */}
        <div className="ml-4 w-1/4">
          <CustomLegend dataKeys={dataKeys} colors={colors} />
        </div>
      </div>
    </div>
  );
};

export default RadarChartComponent;
