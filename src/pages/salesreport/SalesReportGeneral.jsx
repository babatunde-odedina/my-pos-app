import MiniSalesTopbar from '../../components/MiniSalesTopbar';
import FilterSalesTopbar from '../../components/FilterSalesTopbar';
import ReportTable from '../../components/ReportTable';

const headers = [
  'Order#',
  'Customer Name',
  'Qty',
  'Rate',
  'Discount',
  'Payment Type',
  'Operator Name',
  'Time Stamp',
];

const dummyData = [
  {
    'Order#': '001',
    'Customer Name': 'John Doe',
    Qty: 2,
    Rate: '$50',
    Discount: '5%',
    'Payment Type': 'Credit Card',
    'Operator Name': 'Alice',
    'Time Stamp': '2024-07-01 12:34:56',
  },
  {
    'Order#': '002',
    'Customer Name': 'Jane Smith',
    Qty: 1,
    Rate: '$100',
    Discount: '10%',
    'Payment Type': 'Cash',
    'Operator Name': 'Bob',
    'Time Stamp': '2024-07-01 13:45:23',
  },
  {
    'Order#': '003',
    'Customer Name': 'Michael Brown',
    Qty: 3,
    Rate: '$75',
    Discount: '15%',
    'Payment Type': 'Debit Card',
    'Operator Name': 'Charlie',
    'Time Stamp': '2024-07-01 14:56:34',
  },
  {
    'Order#': '004',
    'Customer Name': 'Emily Johnson',
    Qty: 2,
    Rate: '$120',
    Discount: '20%',
    'Payment Type': 'Bank Transfer',
    'Operator Name': 'Dave',
    'Time Stamp': '2024-07-01 15:23:45',
  },
  {
    'Order#': '005',
    'Customer Name': 'William Davis',
    Qty: 1,
    Rate: '$60',
    Discount: '5%',
    'Payment Type': 'Wallet',
    'Operator Name': 'Eve',
    'Time Stamp': '2024-07-01 16:34:12',
  },
  {
    'Order#': '006',
    'Customer Name': 'Sophia Wilson',
    Qty: 4,
    Rate: '$45',
    Discount: '10%',
    'Payment Type': 'Credit Card',
    'Operator Name': 'Frank',
    'Time Stamp': '2024-07-01 17:45:56',
  },
  {
    'Order#': '007',
    'Customer Name': 'James Anderson',
    Qty: 2,
    Rate: '$80',
    Discount: '5%',
    'Payment Type': 'Cash',
    'Operator Name': 'Grace',
    'Time Stamp': '2024-07-01 18:56:34',
  },
  {
    'Order#': '008',
    'Customer Name': 'Olivia Martinez',
    Qty: 1,
    Rate: '$90',
    Discount: '15%',
    'Payment Type': 'Debit Card',
    'Operator Name': 'Hank',
    'Time Stamp': '2024-07-01 19:23:45',
  },
  {
    'Order#': '009',
    'Customer Name': 'Benjamin Taylor',
    Qty: 3,
    Rate: '$55',
    Discount: '20%',
    'Payment Type': 'Bank Transfer',
    'Operator Name': 'Ivy',
    'Time Stamp': '2024-07-01 20:34:12',
  },
  {
    'Order#': '010',
    'Customer Name': 'Emma Harris',
    Qty: 2,
    Rate: '$70',
    Discount: '5%',
    'Payment Type': 'Wallet',
    'Operator Name': 'Jack',
    'Time Stamp': '2024-07-01 21:45:56',
  },
];

const SalesReportGeneral = () => {
  return (
    <div>
      <MiniSalesTopbar />
      <FilterSalesTopbar />
      <div className='mt-4'>
        <ReportTable headers={headers} data={dummyData} />
      </div>
    </div>
  );
};

export default SalesReportGeneral;
