import React from "react";
import Chart from "react-apexcharts";

const GaugeChart = ({ value }) => {
  const options = {
    chart: {
      type: "radialBar",
      offsetY: -20, // Shifts the chart to look like a half-circle
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          margin: 15,
          size: "70%",
        },
        track: {
          background: "#e7e7e7",
          strokeWidth: "100%",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 5,
            fontSize: "22px",
            fontWeight: 600,
            color: "#333",
          },
        },
      },
    },
    colors: ["#FF4560"],
    labels: ["Health"],
  };

  const series = [value]; 

  return <Chart options={options} series={series} type="radialBar" height={250} />;
};

export default GaugeChart;
