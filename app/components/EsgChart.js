'use client';

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EsgChart = ({ data }) => {
  // Prepare data for the chart, supporting dynamic metrics
  const chartData = {
    labels: ['Environmental', 'Social', 'Governance', 'Overall'],
    datasets: [
      {
        label: 'ESG Scores',
        data: [
          data['Environmental Pillar Score'] ?? 0,
          data['Social Pillar Score'] ?? 0,
          data['Governance Pillar Score'] ?? 0,
          data['Overall Score'] ?? 0,
        ],
        backgroundColor: ['#4CAF50', '#2196F3', '#FFC107', '#9C27B0'],
        borderColor: ['#388E3C', '#1976D2', '#FFA000', '#7B1FA2'],
        borderWidth: 2,
        hoverBackgroundColor: ['#66BB6A', '#42A5F5', '#FFCA28', '#AB47BC'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            label += context.raw.toFixed(2);
            return label;
          },
        },
      },
      title: {
        display: true,
        text: 'ESG Pillar and Overall Scores',
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + '%'; 
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default EsgChart;
