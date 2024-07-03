import MiniSalesTopbar from '../../components/MiniSalesTopbar';
import FilterSalesTopbar from '../../components/FilterSalesTopbar';
import ReportTable from '../../components/ReportTable';

const headers = [
  'Date',
  'Payments',
  'Debit Cards',
  'Cash',
  'Bank Transfer',
  'MC Wallet',
  'Total',
];

const dummyData = [
  {
    Date: '2024-07-01',
    Payments: '₦250',
    'Debit Cards': '₦120',
    Cash: '₦80',
    'Bank Transfer': '₦200',
    'MC Wallet': '₦50',
    Total: '₦700',
  },
  {
    Date: '2024-07-02',
    Payments: '₦300',
    'Debit Cards': '₦150',
    Cash: '₦100',
    'Bank Transfer': '₦180',
    'MC Wallet': '₦60',
    Total: '₦790',
  },
  {
    Date: '2024-07-03',
    Payments: '₦180',
    'Debit Cards': '₦90',
    Cash: '₦70',
    'Bank Transfer': '₦220',
    'MC Wallet': '₦40',
    Total: '₦600',
  },
  {
    Date: '2024-07-04',
    Payments: '₦200',
    'Debit Cards': '₦110',
    Cash: '₦85',
    'Bank Transfer': '₦190',
    'MC Wallet': '₦55',
    Total: '₦640',
  },
  {
    Date: '2024-07-05',
    Payments: '₦280',
    'Debit Cards': '₦130',
    Cash: '₦95',
    'Bank Transfer': '₦210',
    'MC Wallet': '₦65',
    Total: '₦780',
  },
  {
    Date: '2024-07-06',
    Payments: '₦260',
    'Debit Cards': '₦140',
    Cash: '₦75',
    'Bank Transfer': '₦240',
    'MC Wallet': '₦45',
    Total: '₦760',
  },
  {
    Date: '2024-07-07',
    Payments: '₦320',
    'Debit Cards': '₦160',
    Cash: '₦110',
    'Bank Transfer': '₦170',
    'MC Wallet': '₦70',
    Total: '₦830',
  },
  {
    Date: '2024-07-08',
    Payments: '₦180',
    'Debit Cards': '₦100',
    Cash: '₦65',
    'Bank Transfer': '₦250',
    'MC Wallet': '₦30',
    Total: '₦625',
  },
  {
    Date: '2024-07-09',
    Payments: '₦300',
    'Debit Cards': '₦120',
    Cash: '₦80',
    'Bank Transfer': '₦200',
    'MC Wallet': '₦50',
    Total: '₦750',
  },
  {
    Date: '2024-07-10',
    Payments: '₦270',
    'Debit Cards': '₦110',
    Cash: '₦90',
    'Bank Transfer': '₦230',
    'MC Wallet': '₦60',
    Total: '₦760',
  },
];

const PaymentTypeReport = () => {
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

export default PaymentTypeReport;
