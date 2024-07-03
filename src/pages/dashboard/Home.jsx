import MiniTopbar from '../../components/MiniTopbar';
import FilterTopbar from '../../components/FilterTopbar';
import DisplayCard from '../../components/DisplayCards';

const Home = () => {
  return (
    <div className=''>
      <MiniTopbar />
      <FilterTopbar />

      <div className='p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        <DisplayCard title='Revenue' subtitle='124,000.00'>
          12.32% <small>than last week </small>{' '}
        </DisplayCard>
        <DisplayCard title='Transactions Quantity' subtitle='500'>
          6.15% <small>than last week</small>{' '}
        </DisplayCard>
        <DisplayCard title='Rewards' subtitle='34'>
          4.5% <small>than last week</small>{' '}
        </DisplayCard>
        <DisplayCard title='Customers' subtitle='140'>
          12.32% <small>than last week </small>{' '}
        </DisplayCard>
        <DisplayCard title='Discounts' subtitle='46'>
          6.15% <small> Average percentage</small>{' '}
        </DisplayCard>
        <DisplayCard title='Average Spend' subtitle='N3,800.00'>
          Average basket value{' '}
        </DisplayCard>
      </div>
    </div>
  );
};

export default Home;
