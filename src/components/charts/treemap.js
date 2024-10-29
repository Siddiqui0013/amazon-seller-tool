import React from "react";
import Chart from "react-apexcharts";

const Treemap = ({ data }) => {
  const options = {
    chart: {
      type: 'treemap',
    },
    title: {
      text: 'Treemap Example',
    },
  };

  return (
    <div>
      <Chart options={options} series={[{ data: data }]} type="treemap" height={250} />
    </div>
  );
};

export default Treemap;
