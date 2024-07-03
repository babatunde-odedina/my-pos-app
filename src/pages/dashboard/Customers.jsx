import MiniTopbar from '../../components/MiniTopbar';
import FilterTopbar from '../../components/FilterTopbar';
import BarChart from '../../components/Barchart'; // Ensure this path is correct
import DisplayCard from '../../components/DisplayCards'; // Ensure this path is correct

const Customers = () => {
  const top10PerformanceData = {
    labels: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
      'Item 5',
      'Item 6',
      'Item 7',
      'Item 8',
      'Item 9',
      'Item 10',
    ],
    datasets: [
      {
        label: 'Number Sold',
        data: [12, 19, 3, 5, 2, 3, 7, 8, 15, 10],
        backgroundColor: '#235F9F',
      },
    ],
  };

  return (
    <div>
      <MiniTopbar />
      <FilterTopbar />
      <div className='px-4 mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        <DisplayCard title='New Customers' subtitle='62'>
          12.32% <small>than last week </small>{' '}
        </DisplayCard>
        <DisplayCard title='Total Customers' subtitle='420'>
          6.15% <small>than last week</small>{' '}
        </DisplayCard>
      </div>
      <div className='w-2/3 px-4 mt-2 h-20'>
        <DisplayCard>
          <BarChart
            title='Top 10 Customers (By transactions)'
            data={top10PerformanceData}
          />
        </DisplayCard>
      </div>
    </div>
  );
};

export default Customers;
