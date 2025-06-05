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

// Register components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart: React.FC = () => {
  // Sample data
  const data: ChartData<'doughnut'> = {
    labels: ['Red', 'Yellow'],
    datasets: [
      {
        label: 'Votes',
        data: [300, 100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', 
          'rgba(255, 206, 86, 0.6)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)', 
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  // Chart options
  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
      }
    }
  };

  return (
    <div 
    style={{ 
        width: '100%', 
        height: '110px',
        position: 'relative'
      }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
