import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const HeatmapChart = ({ data }) => {
  const [options, setOptions] = useState({
    chart: {
      type: 'heatmap',
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        colorScale: {
          ranges: [
            { from: 120, to: 140, color: '#00A100', name: 'Low' },
            { from: 141, to: 160, color: '#128FD9', name: 'Moderate' },
            { from: 161, to: 200, color: '#FFB200', name: 'High' },
            { from: 201, to: 240, color: '#FF0000', name: 'Very High' },
          ],
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    },
    yaxis: {
      title: {
        text: 'Calendar Weeks',
      },
      categories: data.map((_, index) => `Week ${index + 1}`),
      reversed: true,
    },
    title: {
      text: 'Price Data Heatmap',
    },
  });

  return (
    <Chart options={options} series={data} type="heatmap" height={450} />
  );
};

export default HeatmapChart;