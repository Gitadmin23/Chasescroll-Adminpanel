import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart: React.FC = () => {
  const data: ChartData<'doughnut'> = {
    labels: ['Active', 'Inactive'],
    datasets: [
      {
        label: 'Users',
        data: [70, 30],
        backgroundColor: ['#FDA21C', '#00B69B'],
        borderWidth: 0,
      }
    ]
  };

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false, // Allow height to stretch to div
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
        labels: {
          boxWidth: 12,
          font: { size: 10 }
        }
      }
    },
    cutout: '65%', // Optional: size of inner circle
  };

  return ( 
    <div >
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
