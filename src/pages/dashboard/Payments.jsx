import MiniTopbar from '../../components/MiniTopbar';
import FilterTopbar from '../../components/FilterTopbar';
import PieChart from '../../components/Piechart'; // Ensure this path is correct
import PaymentSummary from '../../components/PaymentSummary'; // Ensure this path is correct

const Payments = () => {
  const paymentData = {
    labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5],
        backgroundColor: ['#53B7E8', '#f2d6a9', '#B0E0F8', '#FDBF58'],
        borderColor: ['#53B7E8', '#f2d6a9', '#B0E0F8', '#FDBF58'],
        borderWidth: 1,
      },
    ],
  };

  const colors = ['#53B7E8', '#f2d6a9', '#B0E0F8', '#FDBF58'];

  return (
    <div>
      <MiniTopbar />
      <FilterTopbar />
      <div className='flex flex-wrap mx-2'>
        <div className='w-full md:w-1/2'>
          <PieChart data={paymentData} />
        </div>
        <div className='w-full md:w-1/2 mt-10'>
          <PaymentSummary colors={colors} />
        </div>
        {/* Additional components or charts */}
      </div>
    </div>
  );
};

export default Payments;
