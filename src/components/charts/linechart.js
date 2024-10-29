import React from "react";
import Chart from "react-apexcharts";

const LineChart = ({ data, categories }) => {
  const options = {
    chart: {
      type: 'line',
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: categories,
    },
    colors: ['#0E4DA4'],
  };

  return (
    <div>
      <Chart options={options} series={data} type="line" height={350} />
    </div>
  );
};

export default LineChart;
