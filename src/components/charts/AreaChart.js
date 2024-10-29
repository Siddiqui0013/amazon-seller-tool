import React from "react";
import Chart from "react-apexcharts";

const AreaChart = ({ data }) => {
  const options = {
    chart: {
      type: 'area',
      height: 100,
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
      categories: ["Jan", "Feb", "Mar"],
    },
    colors: ['#0E4DA4'],
  };

  const series = [{
    name: 'Sales',
    data: data,
  }];

  return (
    <div>
      <Chart options={options} series={series} type="area" height={100} />
    </div>
  );
};

export default AreaChart;
