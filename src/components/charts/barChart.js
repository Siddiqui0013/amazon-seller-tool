import React from 'react';
import Chart from 'react-apexcharts';

const BarChartComponent = ({ data, width, height }) => {
  const series = data.map((bar) => ({
    name: bar.name,
    data: bar.data,
  }));

  const options = {
    chart: {
      type: 'bar',
      stacked: false,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar'],
    },
    colors: data.map((bar) => bar.color),
    plotOptions: {
      bar: {
        columnWidth: '30%',
      },
    },
  };

  return <Chart options={options} series={series} type="bar" width={width} height={height} />;
};

export default BarChartComponent;
