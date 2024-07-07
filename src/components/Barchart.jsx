import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = ({ title, data }) => {
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: () => '', // Remove the value display in the tooltip
        },
      },
      datalabels: {
        display: false, // Ensure datalabels are not displayed
      },
    },
  };
  return (
    <div className='mb-4'>
      <h2 className='text-lg italic mb-2'>{title}</h2>
      <div>
        <Bar data={data} options={options} />
      </div>{' '}
    </div>
  );
};

export default BarChart;
