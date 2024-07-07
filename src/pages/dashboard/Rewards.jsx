import MiniTopbar from '../../components/MiniTopbar';
import FilterTopbar from '../../components/FilterTopbar';
import BarChart from '../../components/Barchart'; // Ensure this path is correct
import DisplayCard from '../../components/DisplayCards'; // Ensure this path is correct

const Rewards = () => {
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

  const slowMovingData = {
    labels: [
      'Item A',
      'Item B',
      'Item C',
      'Item D',
      'Item E',
      'Item F',
      'Item G',
      'Item H',
      'Item I',
      'Item J',
    ],
    datasets: [
      {
        label: 'Number Sold',
        data: [1, 2, 1, 1, 0, 3, 1, 2, 1, 1],
        backgroundColor: '#602753',
      },
    ],
  };

  return (
    <div>
      <MiniTopbar />
      <FilterTopbar />
      <div className='flex flex-wrap mx-2'>
        <div className='md:w-1/2 p-2'>
          <DisplayCard>
            <BarChart
              title='Top 10 Best Performance Items'
              data={top10PerformanceData}
            />
          </DisplayCard>
        </div>
        <div className='md:w-1/2 p-2'>
          <DisplayCard>
            <BarChart title='Slow Moving 10 Items' data={slowMovingData} />
          </DisplayCard>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
