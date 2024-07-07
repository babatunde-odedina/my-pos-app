import { NavLink } from 'react-router-dom';

const MiniTopbar = () => {
  return (
    <div className='px-3 mb-2 sm:mb-0 flex flex-wrap items-left bg-gray-100'>
      <NavLink
        to='/home/dashboard/general'
        className={({ isActive }) =>
          `px-3 py-1 rounded ${
            isActive
              ? 'text-customBlue bg-customBlue bg-opacity-10 mr-6 mb-2 sm:mb-0'
              : 'text-gray-600 hover:text-customBlue hover:bg-customBlue hover:bg-opacity-10 mr-6 mb-2 sm:mb-0'
          }`
        }
      >
        General
      </NavLink>
      <NavLink
        to='/home/dashboard/billables'
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
        to='/home/dashboard/rewards'
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
      <NavLink
        to='/home/dashboard/payments'
        className={({ isActive }) =>
          `px-3 py-1 rounded ${
            isActive
              ? 'text-customBlue bg-customBlue bg-opacity-10 mr-6 mb-2 sm:mb-0'
              : 'text-gray-600 hover:text-customBlue hover:bg-customBlue hover:bg-opacity-10 mr-6 mb-2 sm:mb-0'
          }`
        }
      >
        Payments
      </NavLink>
      <NavLink
        to='/home/dashboard/customers'
        className={({ isActive }) =>
          `px-3 py-1 rounded ${
            isActive
              ? 'text-customBlue bg-customBlue bg-opacity-10 mr-4 mb-2 sm:mb-0'
              : 'text-gray-600 hover:text-customBlue hover:bg-customBlue hover:bg-opacity-10 mr-4 mb-2 sm:mb-0'
          }`
        }
      >
        Customers
      </NavLink>
    </div>
  );
};

export default MiniTopbar;
