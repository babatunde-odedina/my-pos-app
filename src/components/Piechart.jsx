import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = ({ data, title }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
      title: {
        display: true,
        text: title,
      },
      datalabels: {
        color: 'black',
        formatter: (value, context) => {
          const dataset = context.dataset;
          const total = dataset.data.reduce((sum, val) => sum + val, 0);
          const percentage = ((value / total) * 100).toFixed(0) + '%';
          return percentage;
        },
        anchor: 'center',
        align: 'start',
        offset: -10,
      },
    },
  };

  return (
    <div className='w-3/4 mx-auto p-2'>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
