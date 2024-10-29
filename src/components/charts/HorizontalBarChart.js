import React from "react";
import ReactApexChart from "react-apexcharts";

export default function HorizontalBarChart({ data, width, height }) {
  // Transforming the data to fit ApexCharts format
  const categories = data.map((item) => item.name);
  const seriesData = data.map((item) => item.pv); // Assuming 'pv' is the key for bar values

  const chartOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true, // Make it horizontal
        barHeight: "50%",
      },
    },
    dataLabels: {
      enabled: false, // Hide data labels for a cleaner look
    },
    xaxis: {
      categories, // Use the transformed categories
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}`, // Format tooltip values if needed
      },
    },
    colors: ["#413ea0"], // Custom color for the bars
  };

  const series = [{ name: "Value", data: seriesData }];

  return (
    <div className="w-full">
      <ReactApexChart
        options={chartOptions}
        series={series}
        type="bar"
        width={width}
        height={height}
      />
    </div>
  );
}
