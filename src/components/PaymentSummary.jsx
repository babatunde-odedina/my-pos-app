const PaymentSummary = ({ colors }) => {
  return (
    <div className='w-1/2  p-2 ml-5'>
      <div className='mb-4'>
        <h3 className='text-textColor font-bold mb-2'>
          Debit Card Payments Breakdown
        </h3>
        <div className='text-textColor'>
          <div className='flex justify-between'>
            <span>Zenith:</span> <span>N 50,000.00</span>
          </div>
          <div className='flex justify-between'>
            <span>Wema:</span> <span>N 130,000.00</span>
          </div>
          <div className='flex justify-between'>
            <span>UBA:</span> <span>N 100,000.00</span>
          </div>
          <div className='flex justify-between'>
            <span>Stanbic IBTC:</span> <span>N 110,000.00</span>
          </div>
        </div>
        <div className='flex justify-between text-textColor font-bold mt-2'>
          <span>Total Payments:</span> <span>N 390,000.00</span>
        </div>
      </div>
      <div className='mt-10'>
        <h3 className='text-textColor font-bold mb-2'>
          Chart Legend and Breakdown
        </h3>
        <div className='text-textColor'>
          {[
            {
              label: 'Debit Card Payments',
              amount: 'N 390,000.00',
              color: colors[0],
            },
            {
              label: 'Cash Payments',
              amount: 'N 390,000.00',
              color: colors[1],
            },
            {
              label: 'Bank Transfers',
              amount: 'N 390,000.00',
              color: colors[2],
            },
            {
              label: 'Wallet Payments',
              amount: 'N 1,390,000.00',
              color: colors[3],
            },
          ].map((item, index) => (
            <div key={index} className='flex items-center justify-between'>
              <div className='flex items-center'>
                <span
                  className='w-4 h-4 inline-block mr-2'
                  style={{ backgroundColor: item.color }}
                ></span>
                <span>{item.label}:</span>
              </div>
              <span>{item.amount}</span>
            </div>
          ))}
          <div className='flex text-textColor font-bold justify-between mt-2'>
            <span>Total Payments:</span> <span>N 1,560,000.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;
