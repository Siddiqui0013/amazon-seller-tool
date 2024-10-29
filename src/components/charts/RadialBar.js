import React from "react";
import Chart from "react-apexcharts";

const RadialBarChart = ({ value, colors }) => {
  const options = {
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
            color: undefined,
            offsetY: 5,
          },
          value: {
            fontSize: '16px',
            color: '#000',
          },
        },
      },
    },
    colors: colors,
    series: [value],
  };

  return (
    <div>
      <Chart options={options} series={options.series} type="radialBar" height={150} />
    </div>
  );
};

export default RadialBarChart;
