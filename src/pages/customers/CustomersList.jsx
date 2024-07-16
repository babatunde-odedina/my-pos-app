import { useState } from 'react';
import { FaTimes, FaTimesCircle } from 'react-icons/fa';
import Modal from 'react-modal';

const CustomersList = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const customers = [
    {
      Name: 'John Doe',
      Email: 'john.doe@example.com',
      Phone: '123-456-7890',
      Visits: 5,
      LastVisit: '2024-06-30',
    },
    {
      Name: 'Jane Smith',
      Email: 'jane.smith@example.com',
      Phone: '098-765-4321',
      Visits: 10,
      LastVisit: '2024-06-25',
    },
    {
      Name: 'Bob Johnson',
      Email: 'bob.johnson@example.com',
      Phone: '555-123-4567',
      Visits: 3,
      LastVisit: '2024-07-01',
    },
    {
      Name: 'Alice Brown',
      Email: 'alice.brown@example.com',
      Phone: '444-987-6543',
      Visits: 8,
      LastVisit: '2024-06-28',
    },
  ];

  const openRegisterModal = () => setIsRegisterModalOpen(true);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);

  const handleRegister = () => {
    // Handle the registration logic here
    console.log({ firstName, lastName, email, phone });
    closeRegisterModal();
  };

  const handleViewClick = (order) => {
    setSelectedCustomer(order);
  };

  const handleCancelClick = () => {
    setSelectedCustomer(null);
  };

  return (
    <div className='p-8 flex'>
      <Modal
        isOpen={isRegisterModalOpen}
        onRequestClose={closeRegisterModal}
        contentLabel='Customer Registration'
        className='flex justify-center items-center rounded-lg'
        overlayClassName='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30'
      >
        <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
          <div className='flex justify-between items-center mb-6'>
            <h2 className='text-2xl font-semibold mb-4'>
              Customer Registration
            </h2>
            <FaTimes
              className='cursor-pointer ml-20 mb-3'
              onClick={closeRegisterModal}
            />
          </div>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                First Name
              </label>
              <input
                type='text'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className='w-full p-2 border rounded mt-1'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Last Name
              </label>
              <input
                type='text'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className='w-full p-2 border rounded mt-1'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Email
              </label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full p-2 border rounded mt-1'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Phone Number <small className='text-gray-400'>(Optional)</small>
              </label>
              <input
                type='tel'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className='w-full p-2 border rounded mt-1'
              />
            </div>
            <button
              className='bg-customBlue text-white w-full py-2 rounded-lg mt-4'
              onClick={handleRegister}
            >
              Register
            </button>
          </div>
        </div>
      </Modal>
      <div
        className={`transition-all duration-500 ${
          selectedCustomer ? 'w-1/2' : 'w-full'
        }`}
      >
        <h1 className='text-3xl font-semibold mb-6'>All Customers</h1>
        <h1 className='text-xl font-semibold mb-6 text-customBlue'>
          {customers.length} Total Customers
        </h1>

        <table className='min-w-full bg-white'>
          <thead>
            <tr className='w-full border-b-2 border-gray-300 bg-gray-200'>
              <th className='px-4 py-2 text-left'>Customer Name</th>
              <th className='px-4 py-2 text-left'>Email</th>
              <th className='px-4 py-2 text-left'>Phone</th>
              <th className='px-4 py-2 text-left'>Visits</th>
              <th className='px-4 py-2 text-left'>Last Visit</th>
              <th className='px-4 py-2 text-left'></th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td className='border px-4 py-2'>{customer.Name}</td>
                <td className='border px-4 py-2'>{customer.Email}</td>
                <td className='border px-4 py-2'>{customer.Phone}</td>
                <td className='border px-4 py-2'>{customer.Visits}</td>
                <td className='border px-4 py-2'>{customer.LastVisit}</td>
                <td className='border px-4 py-2'>
                  <button
                    className='bg-customBlue text-white p-2 rounded-lg'
                    onClick={() => handleViewClick(customer)}
                  >
                    details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='mt-4 flex justify-between items-center'>
          <button
            className='bg-customBlue text-white p-2 rounded-lg'
            onClick={openRegisterModal}
          >
            Create Customer
          </button>
          <div className='flex space-x-2'>
            <button className='p-2 border rounded'>&lt;</button>
            <button className='p-2 border rounded'>&gt;</button>
          </div>
        </div>
      </div>

      {selectedCustomer && (
        <div className='w-1/2 bg-white p-4 rounded-lg shadow-lg ml-4'>
          <div className='flex justify-between'>
            <h2 className='text-xl font-semibold'>{selectedCustomer.Name}</h2>
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
                  <th className='px-4 py-2'>Customer Name</th>
                  <th className='px-4 py-2'>Email</th>
                  <th className='px-4 py-2'>Phone</th>
                  <th className='px-4 py-2'>Visits</th>
                  <th className='px-4 py-2'>Last Visit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='px-4 py-2'>{selectedCustomer.Name}</td>
                  <td className='px-4 py-2'>{selectedCustomer.Email}</td>
                  <td className='px-4 py-2'>{selectedCustomer.Phone}</td>
                  <td className='px-4 py-2'>{selectedCustomer.Visits}</td>
                  <td className='px-4 py-2'>{selectedCustomer.LastVisit}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomersList;
