import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    type ChartData,
    type ChartOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);


    // Get gradient for the line
    const getGradient = (ctx: CanvasRenderingContext2D, chartArea: any) => {
        const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, 'rgba(75,192,192,0)');   // bottom transparent
        gradient.addColorStop(0.5, 'rgba(75,192,192,0.3)');
        gradient.addColorStop(1, 'rgba(75,192,192,1)');   // top solid
        return gradient;
    };

const AreaGraph: React.FC = () => {
    // Sample data with TypeScript types
    const data: ChartData<'line'> = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Sales 2023',
                data: [65, 59, 80, 81, 56, 55],
                fill: true,
                backgroundColor: (context) => {
                    const chart = context.chart;
                    const {ctx, chartArea} = chart;

                    if (!chartArea) return 'rgba(75,192,192,0.2)';
                    return getGradient(ctx, chartArea);
                },
                borderColor: (context) => {
                    const chart = context.chart;
                    const {ctx, chartArea} = chart;

                    if (!chartArea) return 'rgba(75,192,192,1)';
                    return getGradient(ctx, chartArea);
                },
                borderWidth: 0,
                tension: 0.1
            }
        ]
    };

    const options: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
                position: 'top' as const,
            },
            title: {
                display: false,
                text: 'Monthly Sales Data'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: { 
                  maxTicksLimit: 3, 
                  font: {
                    size: 10
                  }, 
                  callback: function(value: any) {
                    if (value >= 1000) return (value/1000) + 'k';
                    return value;
                  }
                }, 
                grid: { 
                  drawTicks: false,
                  display: false
                }
            },
            x: {
                ticks: { 
                    font: {
                        size: 10
                    },
                },
                grid: {
                    display: false
                }
            }
        },
        elements: { 
            line: { borderWidth: 0 } // Thin line
        }
    };

    return (
        <div style={{ 
            width: '100%', 
            height: '110px',
            position: 'relative'
          }} >
            <Line data={data} options={options}  />
        </div>
    )
};

export default AreaGraph;