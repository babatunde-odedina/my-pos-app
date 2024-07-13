import { useState } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const OrderHistory = () => {
  const [location, setLocation] = useState('');
  const [adminUser, setAdminUser] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const locations = ['Location 1', 'Location 2', 'Location 3']; // Example locations
  const adminUsers = ['Admin 1', 'Admin 2', 'Admin 3']; // Example admin users
  const orders = [
    // Example order data
    {
      orderNumber: '001',
      customerName: 'John Doe',
      qty: 3,
      rate: '$100',
      discount: '10%',
      paymentType: 'Credit Card',
      employeeName: 'Jane Smith',
      timeStamp: '2023-07-02 12:30',
    },
  ];

  const handleViewClick = (order) => {
    setSelectedOrder(order);
  };

  const handleCancelClick = () => {
    setSelectedOrder(null);
  };

  return (
    <div className='p-8 flex'>
      <div
        className={`transition-all duration-500 ${
          selectedOrder ? 'w-1/2' : 'w-full'
        }`}
      >
        <h1 className='text-3xl font-semibold mb-6'>Order History</h1>
        <div className='flex justify-between items-center mb-6'>
          <div className='mb-2 sm:mb-0 flex flex-wrap items-left bg-gray-100'>
            <NavLink
              to='/History/billables'
              className={({ isActive }) =>
                `px-3 py-1 rounded ${
                  isActive
                    ? 'text-customBlue bg-customBlue bg-opacity-10 mr-6 mb-2 sm:mb-0'
                    : 'text-gray-600 hover:text-customBlue hover:bg-customBlue hover:bg-opacity-10 mr-6 mb-2 sm:mb-0'
                }`
              }
            >
              Billables
            </NavLink>
            <NavLink
              to='/history/rewards'
              className={({ isActive }) =>
                `px-3 py-1 rounded ${
                  isActive
                    ? 'text-customBlue bg-customBlue bg-opacity-10 mr-6 mb-2 sm:mb-0'
                    : 'text-gray-600 hover:text-customBlue hover:bg-customBlue hover:bg-opacity-10 mr-6 mb-2 sm:mb-0'
                }`
              }
            >
              Rewards
            </NavLink>
          </div>
        </div>
        <div className='flex space-x-4 items-center justify-between mb-6'>
          <div className='flex items-center space-x-4'>
            <select
              className='p-2 border rounded'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value=''>All Locations</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            <select
              className='p-2 border rounded'
              value={adminUser}
              onChange={(e) => setAdminUser(e.target.value)}
            >
              <option value=''>All Admin Users</option>
              {adminUsers.map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
          </div>
          <input
            type='text'
            className='p-2 border rounded'
            placeholder='Search...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <table className='min-w-full bg-white'>
          <thead>
            <tr className='w-full border-b-2 border-gray-300 bg-gray-200'>
              <th className='px-4 py-2 text-left'>Order#</th>
              <th className='px-4 py-2 text-left'>Customer Name</th>
              <th className='px-4 py-2 text-left'>Qty</th>
              <th className='px-4 py-2 text-left'>Rate</th>
              {!selectedOrder && (
                <>
                  <th className='px-4 py-2 text-left'>Discount</th>
                  <th className='px-4 py-2 text-left'>Payment Type</th>
                  <th className='px-4 py-2 text-left'>Employee Name</th>
                  <th className='px-4 py-2 text-left'>Time Stamp</th>
                </>
              )}
              <th className='px-4 py-2 text-left'></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderNumber}>
                <td className='border px-4 py-2'>{order.orderNumber}</td>
                <td className='border px-4 py-2'>{order.customerName}</td>
                <td className='border px-4 py-2'>{order.qty}</td>
                <td className='border px-4 py-2'>{order.rate}</td>
                {!selectedOrder && (
                  <>
                    <td className='border px-4 py-2'>{order.discount}</td>
                    <td className='border px-4 py-2'>{order.paymentType}</td>
                    <td className='border px-4 py-2'>{order.employeeName}</td>
                    <td className='border px-4 py-2'>{order.timeStamp}</td>
                  </>
                )}
                <td className='border px-4 py-2'>
                  <button
                    className='bg-customBlue text-white p-2 rounded-lg'
                    onClick={() => handleViewClick(order)}
                  >
                    details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='mt-4 flex justify-between items-center'>
          <button className='bg-btnSecColor text-white p-2 rounded-lg'>
            Download Order History
          </button>
          <div className='flex space-x-2'>
            <button className='p-2 border rounded'>&lt;</button>
            <button className='p-2 border rounded'>&gt;</button>
          </div>
        </div>
      </div>

      {selectedOrder && (
        <div className='w-1/2 bg-white p-4 rounded-lg shadow-lg ml-4'>
          <div className='flex justify-between'>
            <h2 className='text-xl font-semibold'>
              Order #{selectedOrder.orderNumber}
            </h2>
            <button className='text-red-500' onClick={handleCancelClick}>
              <FaTimesCircle size={30} color={'grey'} />
            </button>
          </div>
          <hr className='my-4' />
          <div className='mb-4'>
            <h3 className='text-lg font-semibold'>Details</h3>
            <table className='w-full'>
              <thead>
                <tr className='w-full'>
                  <th className='px-4 py-2'>Customer</th>
                  <th className='px-4 py-2'>Payment</th>
                  <th className='px-4 py-2'>Discount</th>
                  <th className='px-4 py-2'>Staff Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='px-4 py-2'>{selectedOrder.customerName}</td>
                  <td className='px-4 py-2'>{selectedOrder.paymentType}</td>
                  <td className='px-4 py-2'>{selectedOrder.discount}</td>
                  <td className='px-4 py-2'>{selectedOrder.employeeName}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='mb-4'>
            <h3 className='text-lg font-semibold'>Order Info</h3>
            <table className='w-full'>
              <thead>
                <tr>
                  <th className='px-4 py-2'>Items</th>
                  <th className='px-4 py-2'>Details</th>
                  <th className='px-4 py-2'>Max Credit</th>
                  <th className='px-4 py-2'>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='px-4 py-2'>{selectedOrder.qty}</td>
                  <td className='px-4 py-2'></td>
                  <td className='px-4 py-2'>MC 2,300</td>
                  <td className='px-4 py-2'>{selectedOrder.rate}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='mb-4'>
            <div className='flex justify-between pr-20 pl-3'>
              <div className='text-lg font-semibold'>Total</div>
              <div className='flex space-x-20'>
                <div>MC 12,600</div>
                <div>N6,300</div>
              </div>
            </div>
          </div>
          <button className='bg-btnSecColor text-white p-2 rounded-lg mt-10'>
            Print Order
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
