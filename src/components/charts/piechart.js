import React from "react";
import Chart from "react-apexcharts";

const PieChart = ({ data, labels, colors }) => {
  const options = {
    chart: {
      type: 'pie',
    },
    labels: labels,
    colors: colors,
  };

  return (
    <div>
      <Chart options={options} series={data} type="pie" height={250} />
    </div>
  );
};

export default PieChart;
